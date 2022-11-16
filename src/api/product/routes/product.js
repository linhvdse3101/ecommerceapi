'use strict'
const {routes} = require("./custom-product");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::product.product", {
  routes
});