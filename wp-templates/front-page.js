import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";
import { SITE_DATA_QUERY } from "../queries/SiteSettingsQuery";
import { HEADER_MENU_QUERY } from "../queries/MenuQueries";
import { useFaustQuery } from "@faustwp/core";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const siteDataQuery = useFaustQuery(SITE_DATA_QUERY) || {};
  const headerMenuDataQuery = useFaustQuery(HEADER_MENU_QUERY);

  const siteData = siteDataQuery?.generalSettings || {};
  const menuItems = headerMenuDataQuery?.primaryMenuItems?.nodes || {
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

          <h1>Our Community 🩵</h1>
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
                href="https://github.com/wpengine/hwptoolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                HWP Toolkit
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
                href="https://github.com/wp-graphql/wp-graphql-acf"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP GraphQL ACF
              </Link>
            </li>
          </ul>

          <h1>Documentation 🔎</h1>
          <div className="note">
            <p>
              We are continuously adding new docs for{" "}
              <Link
                href="https://faustjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faustjs.org
              </Link>{" "}
              our new toolkit{" "}
              <Link
                href="https://github.com/wpengine/hwptoolkit/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/wpengine/hwptoolkit/tree/main/docs
              </Link>
            </p>
          </div>

          <h2>Tutorials</h2>

          <h3>Faust</h3>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/docs/tutorial/learn-faust/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Faust.js
              </Link>
            </li>
          </ul>

          <h3>Platform</h3>
          <ul>
            <li>
              <Link
                href="https://wpengine.com/builders/wp-engine-smart-search-for-headless-wordpress-with-next-js-and-mdx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engine Smart Search for Headless WordPress with Next.js and
                MDX
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/enhanced-runtime-logs-on-wp-engines-headless-platform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enhanced Runtime Logs on WP Engine's Headless Platform
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/wp-engines-node-js-edge-cache-purge-library-for-the-headless-wordpress-platform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WP Engine's Node.js Edge Cache Purge Library for our Headless
                Platform
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/how-to-customize-wpgraphql-cache-keys/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Customize WPGraphQL Cache Keys
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/on-demand-isr-support-for-next-js-faust-js-on-wp-engines-headless-platform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                On-Demand ISR Support for Next.js/Faust.js on WP Engine's
                Headless Platform
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/isr-support-for-next-js-faust-js-on-wp-engines-atlas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISR Support for Next.js/Faust.js on WP Engine's Atlas
              </Link>
            </li>
            <li>
              <Link
                href="https://wpengine.com/builders/sitemaps-in-headless-wordpress-with-wpgraphql-and-next-js-app-router/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemaps in headless WordPress with WPGraphQL and Next.js App
                Router
              </Link>
            </li>
          </ul>

          <h2>How to Guides</h2>

          <h3>Faust</h3>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/basic-setup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basic Setup
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/authentication/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Authentication
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/customize-the-toolbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customize the Toolbar
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/generate-types-with-graphql-codegen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Generate types with GraphQL Codegen
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/rendering-blocks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rendering Blocks
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/custom-blocks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customize Rendering Blocks
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/post-previews/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Post Previews
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/sitemaps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemaps
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/create-a-plugin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a plugin
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/use-wpgraphql-smart-cache/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Using WPGraphQL Smart Cache Network Caching
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/how-to/setup-cpt-in-faustjs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Set up Custom Post Types (CPTs) in Faust
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/how-to/nextjs-pages-router/enable-apq/index.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Setup Persisted Queries
              </Link>
            </li>
          </ul>

          <h3>WPGraphQL</h3>
          <ul>
            <li>
              <Link
                href="https://www.wpgraphql.com/docs/performance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Performance
              </Link>
            </li>
            <li>
              <Link
                href="https://www.wpgraphql.com/docs/debugging"
                target="_blank"
                rel="noopener noreferrer"
              >
                Debugging
              </Link>
            </li>
            <li>
              <Link
                href="https://www.wpgraphql.com/docs/security"
                target="_blank"
                rel="noopener noreferrer"
              >
                Security
              </Link>
            </li>
            <li>
              
              <Link
                href="https://www.wpgraphql.com/2020/03/26/forward-and-backward-pagination-with-wpgraphql"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pagination
              </Link>
            </li>
          </ul>

          <h2>References</h2>

          <h3>Faust</h3>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/faust-plugin-system-filters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faust Plugin System Filters
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/from-theme-json/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fromThemeJson
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/get-next-server-side-props/"
                target="_blank"
                rel="noopener noreferrer"
              >
                getNextServerSideProps
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/get-next-static-props/"
                target="_blank"
                rel="noopener noreferrer"
              >
                getNextStaticProps
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/get-site-map-props/"
                target="_blank"
                rel="noopener noreferrer"
              >
                getSiteMapProps
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/get-styles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                getStyles
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/use-auth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                useAuth
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/use-blocks-theme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                useBlocksTheme
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/use-login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                useLogin
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/use-logout/"
                target="_blank"
                rel="noopener noreferrer"
              >
                useLogout
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/with-faust/"
                target="_blank"
                rel="noopener noreferrer"
              >
                withFaust
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/wordpress-blocks-provider/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPressBlocksProvider
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/wordpress-blocks-viewer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPressBlocksViewer
              </Link>
            </li>
            <li>
              <Link
                href="https://faustjs.org/docs/reference/blockset/"
                target="_blank"
                rel="noopener noreferrer"
              >
                blockset
              </Link>
            </li>
          </ul>

          <h2>Explanation</h2>
          <ul>
            <li>
              <Link
                href="https://faustjs.org/docs/explanation/seed-query/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seed Query
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/get-vs-post.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET VS POST
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/graphql-endpoints.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL Endpoints
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/headless-authentication.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Headless Authentication
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/rendering-options.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rendering Options
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/routing.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Routing in Headless WordPress
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/sitemaps.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemaps
              </Link>
            </li>
          </ul>
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
