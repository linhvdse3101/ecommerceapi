'use strict'
const {routes} = require("./custom-promotions");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::promotions.promotions", {
  routes
});