module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'","'unsafe-inline'","'unsafe-eval'", 'https:'],
          'img-src': [
            " * 'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            'data:',
            'blob:',
            // 'localhost:1337',
            'ldjvit-aws-s3-images.s3.us-east-1.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            // 'localhost:1337',
            'ldjvit-aws-s3-images.s3.us-east-1.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
