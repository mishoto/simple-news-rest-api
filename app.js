const Koa = require('koa');
const Router = require("@koa/router")();
const session = require("koa-session");
const json = require("koa-json");

const app = new Koa();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(session(app));
app.use(json());

// app.use(koaBody);

module.exports = app;
