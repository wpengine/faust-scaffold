const { withFaust } = require("@faustwp/core");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    domains: ["faustexample.wpengine.com"],
  },
  trailingSlash: true,
});
