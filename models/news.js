const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: Number,
    source: String,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    content: String,
    publishedAt: Date,
})

const News = mongoose.model('news', newsSchema);

module.exports = News;
