const {News} = require("../models/news");

const getNewsById = async(id)=>{
    return await News.findById(id);
}

const getAllNews = async() => {
    return await News.getAll();
}

const createNews = async(news) => {
    return News.create(news);
}

const updateNewsById = async(id, body) => {
    return await News.updateOne(id, body);
}

const deleteNewsById = async(id)=>{
    return News.deleteOne(id);
}

module.exports = {
    getNewsById,
    getAllNews,
    createNews,
    updateNewsById,
    deleteNewsById
}

