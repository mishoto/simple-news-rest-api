
const mongoRepository = require("../repositories/newsMongoDB")
const Joi = require("joi")
const newsSchemaWithJoi = require("../validators/postNewsSchema")

/**
 * @example curl -XGET "http://localhost:3000/api/v1.0.0/news/:id"
 */
async function getById (ctx, next) {
    ctx.body = await mongoRepository.getNewsById(ctx.params.id);
    await next();
}

/**
 * @example curl -XGET "http://localhost:3000/api/v1.0.0/news"
 */
async function listAll (ctx, next) {
    ctx.body = await mongoRepository.getAllNews();
    await next();
}

/**
 * @example curl -XPOST "http://localhost:3000/api/v1.0.0/news" -d '{ctx.request.body}' -H 'Content-Type: application/json'
 */
async function createOne (ctx, next) {
    let body = await Joi.valid(ctx.request.body, newsSchemaWithJoi, {allowUnknown: true});
    ctx.body = await mongoRepository.createNews(body);
    ctx.status = 201;
    await next();
}

/**
 * @example curl -XPUT "http://localhost:3000/api/v1.0.0/news/3" -d '{ctx.request.body}' -H 'Content-Type: application/json'
 */
async function updateOne (ctx, next) {
    let body = await Joi.valid(ctx.request.body, newsSchemaWithJoi, {allowUnknown: true});
    ctx.body = await mongoRepository.updateNewsById(ctx.params.id, body);
    await next();
}

/**
 * @example curl -XDELETE "http://localhost:3000/api/v1.0.0/news/2"
 */
async function removeOne (ctx, next) {
    await mongoRepository.deleteNewsById(ctx.params.id);
    ctx.status = 204;
    await next();
}

module.exports = {getById, listAll, createOne, updateOne, removeOne};

