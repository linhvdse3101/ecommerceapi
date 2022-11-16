module.exports = ({ env }) => ({
  auth: {
    secret: env('STRAPI_ADMIN_CLIENT_PREVIEW_SECRET', '37cb4377c425a87b76e93e0435073b73'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KDUVlMFUyDvfN2JnQ/n4wg=='),
    // ARNFCb9zrC9ZHm5hZzCigWivD40icS4s
  },
});
