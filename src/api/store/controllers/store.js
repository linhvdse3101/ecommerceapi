'use strict';

/**
 * A set of functions called "actions" for `category`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::store.store", {
    count(ctx) {
        var {query} = ctx.request;
        console.log("query count", query);
        return strapi.query('api::store.store').count({where: query})
    }
});

