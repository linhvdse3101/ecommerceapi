module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'cookie-manager': {
    enabled: true,
    config: {
      localization: true,
    },
  },
  graphql: {
    endpoint: '/graphql',
    tracing: true,
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 50,
  },
  'config-sync': {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: false,
      importOnBootstrap: false,
      customTypes: [],
      excludedTypes: [],
      excludedConfig: [
        "core-store.plugin_users-permissions_grant"
      ],
    },
  },
});
