'use strict'
const {routes} = require("./custom-brand");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::brand.brand", {
  routes
});