'use strict'
const {routes} = require("./custom-collection");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::collection.collection", {
  routes
});