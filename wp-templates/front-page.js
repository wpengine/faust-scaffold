import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import EntryHeader from "../components/EntryHeader";
import Footer from "../components/Footer";
import style from "../styles/front-page.module.css";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { useQuery } from "@apollo/client";
import { getNextStaticProps } from "@faustwp/core";

export default function FrontPage(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }


  const siteDataQuery = useQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useQuery(HEADER_MENU_QUERY) || {};

  const siteData = siteDataQuery?.data?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.data?.primaryMenuItems?.nodes || {
    nodes: [],
  };
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

        <section className={style.information}>
          <h1>Getting Started 🚀</h1>
          <p>
            To get started on WP Engine's Platform please follow the docs here{" "}
            <Link
              href="https://developers.wpengine.com/docs/atlas/getting-started/create-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.wpengine.com/docs/atlas/getting-started/create-app/
            </Link>
          </p>

          <h2>Our Community 🩵</h2>
          <p>
            At WP Engine, we have a strong community built around headless
            WordPress to support you with your journey.
          </p>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Headless Community Channel
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/headless-wordpress-836253505944813629?event=1371472220592930857"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fortnightly Headless Community Call
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/headless"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engine's Headless Platform developer community
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@WPEngineBuilders"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engine`s Builders YouTube Channel
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/headless-wordpress/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engine's Headless Platform
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.wpengine.com/docs/atlas/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engines Headless Platform Docs
              </Link>
            </li>
          </ul>

          <h2>Plugin Ecosystem 🪄</h2>
          <ul>
            <li>
              <Link
                href="https://faustjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faust.js
              </Link>
            </li>
            <li>
              <Link
                href="https://www.wpgraphql.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPGraphQL
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/wp-graphql-content-blocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPGraphQL Content Blocks
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wp-graphql/wpgraphql-ide"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPGraphQL IDE
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                HWP Toolkit
              </Link>
            </li>
          </ul>

          <h2>Documentation 🔎</h2>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faust.js Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.wpengine.com/docs/atlas/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Headless Platform Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://www.wpgraphql.com/docs/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPGraphQL Documentation
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: FrontPage,
    revalidate: 60,
  });
}

FrontPage.queries = [
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];
