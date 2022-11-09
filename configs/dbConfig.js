require('dotenv').config({debug: true})

const mongooseModule = require("mongoose");
const mongoose = new mongooseModule.Mongoose();
const dbConnection = mongoose.connection;
const host = process.env.DB_HOST;

mongoose.connect(host, {
    autoIndex: false,
    keepAlive: true,
    socketTimeoutMS: 45000,

}).catch(err => console.log(err.reason))

dbConnection.on('error', () => console.log('Error, DB Not Connected!'))
dbConnection.on('connected', () => console.log('Success, Connected to MongoDB'))
dbConnection.on('disconnected', () => console.log('Close, Disconnected to MongoDB'))
dbConnection.on('open', () => console.log('Open, Connection to MongoDB established'))

// const News = require("../models/news");

module.exports = mongoose;
