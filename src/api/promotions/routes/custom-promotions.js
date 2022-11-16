module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/promotions",
      "handler": "promotions.find",
      "config": {
        "policies": [],
        auth: false,
      },
        
    },
    {
      "method": "GET",
      "path": "/promotions/count",
      "handler": "promotions.count",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/promotions/:id",
      "handler": "promotions.findOne",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "POST",
      "path": "/promotions",
      "handler": "promotions.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/promotions/:id",
      "handler": "promotions.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/promotions/:id",
      "handler": "promotions.delete",
      "config": {
        "policies": []
      }
    }
  ]
}
