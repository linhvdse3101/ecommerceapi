module.exports = ({ env }) => ({
  host: env("HOST", "ecommerceapi-kz2w"),
  port: env.int("PORT", 10000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "828811e8aace1aa789067dffc85af376"),
    },
  },
});
