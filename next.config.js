module.exports = {
    reactStrictMode: true,
    optimizeFonts: false,
    images: {
      loader: "default",
      domains: ["localhost"],
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
  };