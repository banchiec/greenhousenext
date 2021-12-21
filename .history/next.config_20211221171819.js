
module.exports = {
  env: {
    mongodburl: "mongodb://localhost:27017/casaverde",
    GOOGLE_ID: "699746944968-s4absetg9hnatg5m9g14q0kv9qrabj2m.apps.googleusercontent.com",
    GOOGLE_SECRET: "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"

  },
  adapter: TypeORMLegacyAdapter({
    synchronize: false,
  }),
  reactStrictMode: true,
}
