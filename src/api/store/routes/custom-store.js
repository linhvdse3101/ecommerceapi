module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/stores",
      "handler": "store.find",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/stores/count",
      "handler": "store.count",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/stores/:id",
      "handler": "store.findOne",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "POST",
      "path": "/stores",
      "handler": "store.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/stores/:id",
      "handler": "store.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/stores/:id",
      "handler": "store.delete",
      "config": {
        "policies": []
      }
    }
  ]
}