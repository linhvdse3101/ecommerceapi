module.exports = ({ env }) => ({
  host: env('HOST', '76.76.21.123'),
  port: env.int('PORT', 443),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '828811e8aace1aa789067dffc85af376'),
    },
  },
});
