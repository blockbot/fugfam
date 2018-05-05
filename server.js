const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const port = 6969;

router.get('/', ctx => {
    ctx.response = {
        "body": "FUGNET v1.0.0"
    };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port);
