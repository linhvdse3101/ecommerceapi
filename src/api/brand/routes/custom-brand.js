module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/brands",
      "handler": "brand.find",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/brands/count",
      "handler": "brand.count",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/brands/:id",
      "handler": "brand.findOne",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "POST",
      "path": "/brands",
      "handler": "brand.create",
      "config": {
        "policies": [],
      }
    },
    {
      "method": "PUT",
      "path": "/brands/:id",
      "handler": "brand.update",
      "config": {
        "policies": [],
      }
    },
    {
      "method": "DELETE",
      "path": "/brands/:id",
      "handler": "brand.delete",
      "config": {
        "policies": [],
      }
    }
  ]
}
