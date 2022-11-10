require("koa-body");
const Router = require("@koa/router"),
    {getById, listAll, createOne, updateOne, removeOne} = require("../controllers/newsController");

const router = new Router({prefix: '/api/v1.0.0'});

router.get('/news', listAll)
router.get('/news/:id', getById)
router.post('/news', createOne)
router.put("/news/:id", updateOne)
router.delete('/news/:id', removeOne)

module.exports = {
    routes() {return router.routes()},
    allowedMethods(){return router.allowedMethods()}
}
