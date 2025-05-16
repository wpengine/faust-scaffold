import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { useFaustQuery } from "@faustwp/core";

const POST_QUERY = gql`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const contentQuery = useFaustQuery(POST_QUERY);
  const siteDataQuery = useFaustQuery(SITE_DATA_QUERY);
  const headerMenuDataQuery = useFaustQuery(HEADER_MENU_QUERY);

  const menuItems = headerMenuDataQuery?.primaryMenuItems?.nodes || { nodes: [] };
  const { title: siteTitle, description: siteDescription } = siteDataQuery;
  const { title, content, date, author } = contentQuery?.post || {};

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={title} date={date} author={author?.node?.name} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
}


Component.queries = [
  {
    query: POST_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
  {
    query: SITE_DATA_QUERY
  },
  {
    query: HEADER_MENU_QUERY
  }
];
