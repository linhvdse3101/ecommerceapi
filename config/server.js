module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['ADMIN_JWT_SECRET','API_TOKEN_SALT','AWS_ACCESS_KEY_ID', 'AWS_ACCESS_SECRET', 'AWS_BUCKET',
  'AWS_REGION','DATABASE_FILENAME', 'JWT_SECRET','HOST','PORT','SCALEWAY_ENDPOINT'
  ]),
  },
});
