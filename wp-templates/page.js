import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/EntryHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { getNextStaticProps } from "@faustwp/core";

const PAGE_QUERY = gql`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
  }
`;

export default function SinglePage(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const databaseId = props.__SEED_NODE__.databaseId;
  const asPreview = props.__SEED_NODE__.asPreview;

  const {
    data,
    loading = true,
    error,
  } = useQuery(PAGE_QUERY, {
    variables: {
      databaseId: databaseId,
      asPreview: asPreview,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const siteDataQuery = useQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useQuery(HEADER_MENU_QUERY) || {};

  if (loading && !data)
    return (
      <div className="container-main flex justify-center py-20">Loading...</div>
    );

  if (error) return <p>Error! {error.message}</p>;

  if (!data?.page) {
    return <p>No pages have been published</p>;
  }


  const siteData = siteDataQuery?.data?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.data?.primaryMenuItems?.nodes || {
    nodes: [],
  };
  const { title: siteTitle, description: siteDescription } = siteData;
  const { title, content } = data?.page || {};

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


SinglePage.queries = [
  {
    query: PAGE_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
