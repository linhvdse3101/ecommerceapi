module.exports = ({ env }) => ({
  host: env("HOST", "100.20.92.101"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "828811e8aace1aa789067dffc85af376"),
    },
  },
});
