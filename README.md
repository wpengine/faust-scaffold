# ![Faust.js Logo](./.github/assets/faustjs-logo.svg) Faust.js Starter Kit

This repository contains a starter kit to get you up and running quickly on [WP Engine's Headless Platform](https://wpengine.com/headless-wordpress/) with a WordPress site skeleton for more advanced developers.

# Getting Started 🚀

To get started on WP Engine's Platform please follow the docs here [https://developers.wpengine.com/docs/atlas/getting-started/create-app/](https://developers.wpengine.com/docs/atlas/getting-started/create-app/)


# Project Structure

```
faust-scaffold/
├── components/
├── fragments/
├── pages/
├── queries/
├── styles/
├── wp-templates/
│   ├── archive.js # For your category/archive templates
│   ├── front-page.js # Front page
│   ├── index.js # Mapping for available templates
│   ├── page.js # Single page
│   └── single.js # Single post or singular
├── DEVELOPMENT.md
├── faust.config.js
├── next.config.js
├── package.json
├── possibleTypes.json
└── README.md
└── screenshots
```

## Available Commands

| Command         | Script                                 | Description                       |
|-----------------|----------------------------------------|-----------------------------------|
| `dev`           | `faust dev`                            | Start the development server      |
| `build`         | `faust build`                          | Build the project for production  |
| `generate`      | `faust generatePossibleTypes`          | Generate GraphQL possible types   |
| `start`         | `faust start`                          | Start the production server       |
| `format`        | `prettier . --write`                   | Format code with Prettier         |
| `test:format`   | `prettier . --check`                   | Check code formatting             |

## Screenshots


<details>
    <summary>View Screenshots</summary>

![Front Page](screenshots/front-page.png)

![Category Page](screenshots/category-page.png)

![Single Page](screenshots/single-page.png)

![Single Post](screenshots/single-post.png)

</details>


# Our Community 🩵

At WP Engine, we have a strong community built around headless WordPress to support you with your journey.

- [Discord Headless Community Channel](https://faustjs.org/discord)
- [Fortnightly Headless Community Call](https://discord.gg/headless-wordpress-836253505944813629?event=1371472220592930857)
- [WP Engine's Headless Platform developer community](https://wpengine.com/builders/headless)
- [WP Engine`s Builders YouTube Channel](https://www.youtube.com/@WPEngineBuilders)
- [WP Engine's Headless Platform](https://wpengine.com/headless-wordpress/)
- [WP Engines Headless Platform Docs](https://developers.wpengine.com/docs/atlas/overview/)

## Plugin Ecosystem 🪄

- [Faust.js](https://faustjs.org)
- [HWP Toolkit](https://github.com/wpengine/hwptoolkit)
- [WPGraphQL](https://www.wpgraphql.com)
- [WPGraphQL Content Blocks](https://github.com/wpengine/wp-graphql-content-blocks)
- [WPGraphQL IDE](https://github.com/wp-graphql/wpgraphql-ide)
- [WP GraphQL ACF](https://github.com/wp-graphql/wp-graphql-acf)

# Documentation 🔎

> [!NOTE]
> We are continuously adding new docs for [Faustjs.org](https://faustjs.org/docs) our new toolkit [https://github.com/wpengine/hwptoolkit/tree/main/docs](https://github.com/wpengine/hwptoolkit/tree/main/docs)

## Tutorials

### Faust

- [Learn Faust.js](https://faustjs.org/docs/tutorial/learn-faust/)

### Platform

- [WP Engine Smart Search for Headless WordPress with Next.js and MDX](https://wpengine.com/builders/wp-engine-smart-search-for-headless-wordpress-with-next-js-and-mdx/)
- [Enhanced Runtime Logs on WP Engine’s Headless Platform](https://wpengine.com/builders/enhanced-runtime-logs-on-wp-engines-headless-platform/)
- [WP Engine’s Node.js Edge Cache Purge Library for our Headless Platform](https://wpengine.com/builders/wp-engines-node-js-edge-cache-purge-library-for-the-headless-wordpress-platform/)
- [How to Customize WPGraphQL Cache Keys](https://wpengine.com/builders/how-to-customize-wpgraphql-cache-keys/)
- [On-Demand ISR Support for Next.js/Faust.js on WP Engine’s Headless Platform](https://wpengine.com/builders/on-demand-isr-support-for-next-js-faust-js-on-wp-engines-headless-platform/)
- [ISR Support for Next.js/Faust.js on WP Engine’s Atlas](https://wpengine.com/builders/isr-support-for-next-js-faust-js-on-wp-engines-atlas/)
- [Sitemaps in headless WordPress with WPGraphQL and Next.js App Router](https://wpengine.com/builders/sitemaps-in-headless-wordpress-with-wpgraphql-and-next-js-app-router/)

## How to Guides

### Faust

- [Basic Setup](https://faustjs.org/docs/how-to/basic-setup/)
- [Authentication](https://faustjs.org/docs/how-to/authentication/)
- [Customize the Toolbar](https://faustjs.org/docs/how-to/customize-the-toolbar/)
- [Generate types with GraphQL Codegen](https://faustjs.org/docs/how-to/generate-types-with-graphql-codegen/)
- [Rendering Blocks](https://faustjs.org/docs/how-to/rendering-blocks/)
- [Customize Rendering Blocks](https://faustjs.org/docs/how-to/custom-blocks/)
- [Post Previews](https://faustjs.org/docs/how-to/post-previews/)
- [Sitemaps](https://faustjs.org/docs/how-to/sitemaps/)
- [Create a plugin](https://faustjs.org/docs/how-to/create-a-plugin/)
- [Using WPGraphQL Smart Cache Network Caching](https://faustjs.org/docs/how-to/use-wpgraphql-smart-cache/)
- [Set up Custom Post Types (CPTs) in Faust](https://faustjs.org/docs/how-to/setup-cpt-in-faustjs/)
- [Setup Persisted Queries](https://github.com/wpengine/hwptoolkit/blob/main/docs/how-to/nextjs-pages-router/enable-apq/index.md)

### WPGraphQL

- [Performance](https://www.wpgraphql.com/docs/performance)
- [Debugging](https://www.wpgraphql.com/docs/debugging)
- [Security](https://www.wpgraphql.com/docs/security)
- [Pagination](https://www.wpgraphql.com/2020/03/26/forward-and-backward-pagination-with-wpgraphql)

## References

### Faust

- [Faust Plugin System Filters](https://faustjs.org/docs/reference/faust-plugin-system-filters/)
- [fromThemeJson](https://faustjs.org/docs/reference/from-theme-json/)
- [getNextServerSideProps](https://faustjs.org/docs/reference/get-next-server-side-props/)
- [getNextStaticProps](https://faustjs.org/docs/reference/get-next-static-props/)
- [getSiteMapProps](https://faustjs.org/docs/reference/get-site-map-props/)
- [getStyles](https://faustjs.org/docs/reference/get-styles/)
- [useAuth](https://faustjs.org/docs/reference/use-auth/)
- [useBlocksTheme](https://faustjs.org/docs/reference/use-blocks-theme/)
- [useLogin](https://faustjs.org/docs/reference/use-login/)
- [useLogout](https://faustjs.org/docs/reference/use-logout/)
- [withFaust](https://faustjs.org/docs/reference/with-faust/)
- [WordPressBlocksProvider](https://faustjs.org/docs/reference/wordpress-blocks-provider/)
- [WordPressBlocksViewer](https://faustjs.org/docs/reference/wordpress-blocks-viewer/)
- [blockset](https://faustjs.org/docs/reference/blockset/)

## Explanation

- [Seed Query](https://faustjs.org/docs/explanation/seed-query/)
- [GET VS POST](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/get-vs-post.md)
- [GraphQL Endpoints](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/graphql-endpoints.md)
- [Headless Authentication](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/headless-authentication.md)
- [Rendering Options](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/rendering-options.md)
- [Routing in Headless WordPress](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/routing.md)
- [Sitemaps](https://github.com/wpengine/hwptoolkit/blob/main/docs/explanation/sitemaps.md)

# Contributions

# Contributor License Agreement

All external contributors to WP Engine products must have a signed Contributor License Agreement (CLA) in place before the contribution may be accepted into any WP Engine codebase.

1. [Submit your name and email](https://wpeng.in/cla/)
2. 📝 Sign the CLA emailed to you
3. 📥 Receive copy of signed CLA

❤️ Thank you for helping us fulfill our legal obligations in order to continue empowering builders through headless WordPress.
