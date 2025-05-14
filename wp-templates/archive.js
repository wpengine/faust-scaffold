import { gql, useQuery } from "@apollo/client";
import { SITE_DATA_QUERY } from "../fragments/generalSettings";
import { HEADER_MENU_QUERY } from "../fragments/MenuQueries";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";

const ARCHIVE_QUERY = gql`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
      ... on Tag {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
    }
  }
`;

export default function Component(props) {

  if (props.loading) {
    return <>Loading...</>;
  }

  const contentQuery  = useQuery(ARCHIVE_QUERY, {
    variables: {
      uri: props?.__SEED_NODE__?.uri || '/',
    },
  }) || {};
  const siteDataQuery = useQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useQuery(HEADER_MENU_QUERY);

  if (contentQuery.loading || siteDataQuery.loading || headerMenuDataQuery.loading) {
    return <div>Loading...</div>;
  }

  if (contentQuery.error || siteDataQuery.error || headerMenuDataQuery.error) {
    return <div>Error...</div>;
  }

  const siteData = siteDataQuery?.data?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.data?.primaryMenuItems?.nodes || {
    nodes: [],
  };
  const { title: siteTitle, description: siteDescription } = siteData;
  const { archiveType, name, posts } = contentQuery?.data?.nodeByUri || {};

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

      <main className="container">
        <EntryHeader title={`Archive for ${archiveType}: ${name}`} />

        <h3>Recent Posts</h3>
        <ul>
          {posts.nodes.map((post) => (
            <Link key={post.id} href={post.uri}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

Component.queries = [
  {
    query: ARCHIVE_QUERY,
    variables: ({ seedQuery }, ctx) => ({
      uri: "classic"
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
