module.exports = {
    reactStrictMode: true,
    optimizeFonts: false,
    images: {
      loader: "default",
      domains: ["localhost", 
      'test-deploy-digital-ocean-hhbor.ondigitalocean.app', 
      'strapi-space-test.sfo3.digitaloceanspaces.com'],
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
  };