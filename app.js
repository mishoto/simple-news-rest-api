const koa = require('koa');
const app = new koa();
const router = require("@koa/router")();
const session = require("koa-session");
const koaBody = require('koa-body');

app.use(router.routes());
app.use(session(app));
app.use(koaBody());

module.exports = app;
