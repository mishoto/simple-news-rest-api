const axios = require("axios");
const fs = require("fs");

const clientForNewsApi = axios.create({
    baseURL: `https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEWS_API_KEY}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

const apiRequest = clientForNewsApi({
    method: "GET",
    responseType: "stream"
}).then(function (response){
    response.data.pipe(fs.createWriteStream("D:\\0_NodeJS_Projects\\simple-news-rest-api\\repositories\\data.json"))
}).catch(error => {
    console.log(error);
})

module.exports = apiRequest;
