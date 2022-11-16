'use strict'
const {routes} = require("./custom-post-category");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post-category.post-category", {
  routes
});