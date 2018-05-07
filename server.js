import Koa from 'koa';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import Serve from 'koa-static';
import React from 'react';
import Html from './client/src/Html';
import App from './client/src/App';

const app = new Koa();
const router = new Router();

const port = 6969;

router.get('/', ctx => {
    const body = renderToString(<App />);
    const title = 'FUG NET v1.0';
    
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
