const Joi = require("joi");

const postNewsSchema = Joi.object({
    id: Joi.number().required(),
    source: Joi.string().required(),
    author: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    urlToImage: Joi.string().required(),
    content: Joi.string().required(),
    publishedAt: Joi.date().iso().required()
})

module.exports = postNewsSchema;

