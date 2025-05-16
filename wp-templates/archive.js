import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { POST_LIST_FRAGMENT } from "../fragments/PostListFragment";
import PostListItem from "../components/post-list-item";
import { useFaustQuery, getNextStaticProps } from "@faustwp/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/archive.module.css";

// Change to how many posts you want to load at once
const BATCH_SIZE = 5;

const ARCHIVE_QUERY = gql`
  ${POST_LIST_FRAGMENT}
  query GetArchive($uri: String!, $first: Int!, $after: String) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ...PostListFragment
          }
        }
      }
      ... on Tag {
        name
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ...PostListFragment
          }
        }
      }
    }
  }
`;

export default function ArchivePage(props) {
  const router = useRouter();
  const [currentUri, setCurrentUri] = useState("");

  useEffect(() => {
    if (router.asPath) {
      const path = router.asPath.split("?")[0];
      setCurrentUri(path);
    }
  }, [router.asPath]);

  const {
    data,
    loading = true,
    error,
    fetchMore,
  } = useQuery(ARCHIVE_QUERY, {
    variables: { first: BATCH_SIZE, after: null, uri: currentUri },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const siteDataQuery = useFaustQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useFaustQuery(HEADER_MENU_QUERY);

  if (loading && !data)
    return (
      <div className="container-main flex justify-center py-20">Loading...</div>
    );

  if (error) return <p>Error! {error.message}</p>;

  if (!data?.nodeByUri?.posts?.nodes.length) {
    return <p>No posts have been published</p>;
  }

  const siteData = siteDataQuery?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.primaryMenuItems?.nodes || {
    nodes: [],
  };
  const { title: siteTitle, description: siteDescription } = siteData;
  const { archiveType, name, posts } = data?.nodeByUri || {};

  const loadMorePosts = async () => {
    await fetchMore({
      variables: {
        first: BATCH_SIZE,
        after: posts.pageInfo.endCursor,
        uri: currentUri, // Use the dynamic URI
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        return {
          nodeByUri: {
            ...fetchMoreResult.nodeByUri,
            posts: {
              ...fetchMoreResult.nodeByUri.posts,
              nodes: [
                ...prevResult.nodeByUri.posts.nodes,
                ...fetchMoreResult.nodeByUri.posts.nodes,
              ],
            },
          },
        };
      },
    });
  };

  return (
    <>
      <Head>
        <title>{`${archiveType}: ${name} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container mx-auto px-4">
        <EntryHeader title={`Archive for ${archiveType}: ${name}`} />

        <div className="space-y-12">
          {posts && posts.nodes && posts.nodes.length > 0 ? (
            posts.nodes.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))
          ) : (
            <p>No posts found.</p>
          )}
          {posts.pageInfo.hasNextPage && (
            <div className={styles.loadMoreButtonContainer}>
              <LoadMoreButton onClick={loadMorePosts} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: ArchivePage,
    revalidate: 60,
  });
}

const LoadMoreButton = ({ onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <button
      type="button"
      className={styles.loadMoreButton}
      onClick={handleLoadMore}
      disabled={loading}
    >
      {loading ? <>Loading...</> : <>Load more</>}
    </button>
  );
};

ArchivePage.queries = [
  {
    query: ARCHIVE_QUERY,
    variables: ({ uri }) => ({
      uri,
      first: BATCH_SIZE,
      after: null,
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
