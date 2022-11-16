'use strict'
const {routes} = require("./custom-post");
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post.post", {
  routes
});