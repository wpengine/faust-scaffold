import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { POST_LIST_FRAGMENT } from "../fragments/PostListFragment";
import PostListItem from "../components/post-list-item";
import { useFaustQuery } from "@faustwp/core";

const ARCHIVE_QUERY = gql`
  ${POST_LIST_FRAGMENT}
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts {
          nodes {
            ...PostListFragment
          }
        }
      }
      ... on Tag {
        name
        posts {
          nodes {
            ...PostListFragment
          }
        }
      }
    }
  }
`;

export default function Component(props) {
  const contentQuery = useFaustQuery(ARCHIVE_QUERY) || {};
  const siteDataQuery = useFaustQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useFaustQuery(HEADER_MENU_QUERY);

  const siteData = siteDataQuery?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.primaryMenuItems?.nodes || {
    nodes: [],
  };
  const { title: siteTitle, description: siteDescription } = siteData;
  const { archiveType, name, posts } = contentQuery?.nodeByUri || {};

  // Helper function to format date as "Month Day, Year"
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

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

        <h3 className="text-2xl font-semibold mb-6">Recent Posts</h3>
        <div className="space-y-12">
          {posts && posts.nodes && posts.nodes.length > 0 ? (
            posts.nodes.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

Component.queries = [
  {
    query: ARCHIVE_QUERY,
    variables: ({}, ctx) => {
      return {
        uri: "/category/classic/", // @TODO Make this dynamic and add to getServerSideProps
        asPreview: ctx?.asPreview || false,
      };
    },
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
