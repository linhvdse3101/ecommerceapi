module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/post-categories",
      "handler": "post-category.find",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/post-categories/count",
      "handler": "post-category.count",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "GET",
      "path": "/post-categories/:id",
      "handler": "post-category.findOne",
      "config": {
        "policies": [],
        auth: false,
      }
    },
    {
      "method": "POST",
      "path": "/post-categories",
      "handler": "post-category.create",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/post-categories/:id",
      "handler": "post-category.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "DELETE",
      "path": "/post-categories/:id",
      "handler": "post-category.delete",
      "config": {
        "policies": []
      }
    }
  ]
}
