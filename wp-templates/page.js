import { gql, useQuery } from "@apollo/client";
import { SITE_DATA_QUERY } from "../fragments/generalSettings";
import { HEADER_MENU_QUERY } from "../fragments/MenuQueries";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";

const PAGE_QUERY = gql`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
  }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const contentQuery = useQuery(PAGE_QUERY, {
    variables: {
      databaseId: props?.__SEED_NODE__?.databaseId || 0,
      asPreview: props?.__SEED_NODE__?.asPreview || false,
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
  const menuItems = headerMenuDataQuery?.data?.primaryMenuItems?.nodes || { nodes: [] };
  const { title: siteTitle, description: siteDescription } = siteData;
  const { title, content } = contentQuery?.data?.page || {};

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
        <EntryHeader title={title} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
}

Component.queries = [
  {
    query: PAGE_QUERY,
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
