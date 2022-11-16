'use strict'
const {routes} = require("./custom-store");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::store.store", {
  routes
});