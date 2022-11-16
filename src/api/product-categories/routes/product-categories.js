'use strict'
const {routes} = require("./custom-product-categories");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::product-categories.product-categories", {
  routes
});