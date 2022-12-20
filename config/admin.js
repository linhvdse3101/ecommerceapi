module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','API_TOKEN_SALT','APP_KEYS','AWS_ACCESS_KEY_ID','AWS_ACCESS_SECRET','AWS_BUCKET','AWS_REGION',
    'DATABASE_FILENAME','JWT_SECRET', 'NODE_ENV', 'SCALEWAY_ENDPOINT', 'SSH-RSA'),
  },
  apiToken: {
    salt:env('JWT_SECRET'),
  },
});
