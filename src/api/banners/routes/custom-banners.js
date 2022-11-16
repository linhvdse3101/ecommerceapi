module.exports = {
    routes: [
            {
              "method": "GET",
              "path": "/banners",
              "handler": "banners.find",
              "config": {
                "policies": [],
                auth: false,

              }
            },
            {
              "method": "GET",
              "path": "/banners/count",
              "handler": "banners.count",
              "config": {
                "policies": [],
                auth: false,

              }
            },
            {
              "method": "GET",
              "path": "/banners/:id",
              "handler": "banners.findOne",
              "config": {
                "policies": [],
                auth: false,

              }
            },
            {
              "method": "POST",
              "path": "/banners",
              "handler": "banners.create",
              "config": {
                "policies": [],
                auth: false,

              }
            },
            {
              "method": "PUT",
              "path": "/banners/:id",
              "handler": "banners.update",
              "config": {
                "policies": [],
                auth: false,

              }
            },
            {
              "method": "DELETE",
              "path": "/banners/:id",
              "handler": "banners.delete",
              "config": {
                "policies": [],
                auth: false,

              }
            }
          ]
  };