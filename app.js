const Koa = require('koa');
const session = require("koa-session");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static")

const {routes, allowedMethods} = require("./routes/newsRoutes")

const app = new Koa();
const dbConfig = require("./configs/dbConfig")

app.use(routes());
app.use(allowedMethods());
app.use(session(app));
app.use(bodyParser());
app.use(json());
app.use(serve("./public"))
app.use(dbConfig.Mongoose);

module.exports = app;

