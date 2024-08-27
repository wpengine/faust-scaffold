import { getSitemapProps } from '@faustwp/core';

export default function Sitemap() {}

export function getServerSideProps(ctx) {
  return getSitemapProps(ctx, {
    sitemapIndexPath: 'wp-sitemap.xml',
    frontendUrl: process.env.NEXT_PUBLIC_SITE_URL,
    sitemapPathsToIgnore: ['/wp-sitemap-users-*'],
  });
}
