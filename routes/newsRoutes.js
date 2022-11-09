const Router = require("@koa/router"),
      KoaBody = require("koa-body"),
      {getNewsId, listAllNews, createNews, updateNews, removeNews} = require("../controllers/newsController");

const router = new Router({prefix: '/api/v1.0.0'});

router.get('/news', listAllNews)
router.get('/news/:id', getNewsId)
router.post('/news/', createNews)
router.put("/news/:id", updateNews)
router.delete('/news/:id', removeNews)

module.exports = {
    routes() {return router.routes()},
    allowedMethods(){return router.allowedMethods()}
}
