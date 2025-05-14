import { gql, useQuery } from "@apollo/client";
import { SITE_DATA_QUERY } from "../fragments/generalSettings";
import { HEADER_MENU_QUERY } from "../fragments/MenuQueries";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const siteDataQuery = useQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useQuery(HEADER_MENU_QUERY);

  if (siteDataQuery.loading || headerMenuDataQuery.loading) {
    return <div>Loading...</div>;
  }

  if (siteDataQuery.error || headerMenuDataQuery.error) {
    return <div>Error...</div>;
  }

  const siteData = siteDataQuery?.data?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.data?.primaryMenuItems?.nodes || { nodes: [] };
  const { title: siteTitle, description: siteDescription } = siteData;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Welcome to the Faust Scaffold Blueprint" />

        <section className={style.cardGrid}>
          <Link
            href="https://faustjs.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Documentation →</h3>
            <p>
              Learn more about Faust.js through tutorials, guides and reference
              in our documentation.
            </p>
          </Link>

          <Link
            href="https://my.wpengine.com/atlas#/create/blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Blueprints →</h3>
            <p>Explore production ready Faust.js starter kits.</p>
          </Link>

          <Link
            href="https://wpengine.com/headless-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Deploy →</h3>
            <p>
              Deploy your Faust.js app to Headless Platform along with your
              WordPress instance.
            </p>
          </Link>

          <Link
            href="https://github.com/wpengine/faustjs"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Contribute →</h3>
            <p>Visit us on GitHub to explore how you can contribute!</p>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

Component.queries = [
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
