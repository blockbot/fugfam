const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const port = 6969;

router.get('/', ctx => {
    ctx.body = "farts";
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port);
