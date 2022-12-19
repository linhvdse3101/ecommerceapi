module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          // endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {
            use_filename: true,
            unique_filename: false,
          },
          uploadStream: {},
          delete: {},
        },
      },
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/prj_JL0kXnZ5wVJNDRS7e0GheviU0sAx",
        apiToken: "4lWiEcWXVhNuGeblTLBju79O",
        appFilter: "ecommerceapi",
        teamFilter: "ecommerceapi",
        roles: ["super-admin", "user", "guest"],
      },
    },
    'import-export-entries': {
      enabled: true,
    },
  });