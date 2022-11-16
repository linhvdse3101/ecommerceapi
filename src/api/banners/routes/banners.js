'use strict'
const {routes} = require("./custom-banners")
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::banners.banners", {
  routes
});