'use strict';

/**
 * A set of functions called "actions" for `category`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::collection.collection", {
    count(ctx) {
        var {query} = ctx.request;
        console.log("query count", query);
        return strapi.query('api::collection.collection').count({where: query})
    }
});

