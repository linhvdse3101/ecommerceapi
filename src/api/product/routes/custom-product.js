module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/products",
      "handler": "product.find",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/products/count",
      "handler": "product.count",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/products/:id",
      "handler": "product.findOne",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "POST",
      "path": "/products",
      "handler": "product.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/products/:id",
      "handler": "product.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/products/:id",
      "handler": "product.delete",
      "config": {
        "policies": []
      }
    }
  ]
}
