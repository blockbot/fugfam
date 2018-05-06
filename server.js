const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const serve = require('koa-static');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Html = require(__dirname + '/client/src/Html');

const port = 6969;

router.get('/', ctx => {
    const body = "balls";
    const title = 'Server side Rendering with Styled Components';
    
    ctx.body = Html({
        body,
        title
    });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port);

console.log('listening on port: ' + port);
