import Koa from 'koa';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import serve from 'koa-static';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Html from './client/src/Html';
import App from './client/src/App';
import rootReducer from './client/src/reducers'

const app = new Koa();
const router = new Router();

const port = 6969;

router.get('/', ctx => {
	const store = createStore(rootReducer);
	const preloadedState = store.getState()

	const body = renderToString(
		<Provider store={store}>
			<App activeApp='${preloadedState.activeApp}' />
		</Provider>
	);
	const title = 'FUG NET v1.0';

	ctx.body = Html({
		body,
		title,
		preloadedState
	});
});

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(serve('./dist'))
	.use(serve('./assets/images'));

app.listen(port);

console.log('listening on port: ' + port);
