module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(['API_TOKEN_SALT','ADMIN_JWT_SECRET','DATABASE_FILENAME','JWT_SECRET']),
  },
});
