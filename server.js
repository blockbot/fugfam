
import "@babel/polyfill";
import Koa from 'koa';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import serve from 'koa-static';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Html from './client/src/Html';
import App from './client/src/App';
import rootReducer from './client/src/reducers';
import AWS from 'aws-sdk';

const app = new Koa();
const router = new Router();

const port = 6969;

router.get('/', ctx => {
	const store = createStore(rootReducer);
	const preloadedState = store.getState();

	const body = renderToString(
		<Provider store={store}>
			<App activeApp='${preloadedState.apps.activeApp}' />
		</Provider>
	);
	const title = 'FUG NET v1.0';

	ctx.body = Html({
		body,
		title,
		preloadedState
	});
});

router.get('/images', async (ctx) => {
	const region = "sfo2";
  const spacesEndpoint = `${region}.digitaloceanspaces.com`;
	const awsCreds = {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			endpoint: spacesEndpoint,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	};

	const s3 = new AWS.S3(awsCreds);
	const params = {
	// make this bucket name dynamic
			Bucket: 'fug-images-paintings',
	};
	const images = {data: []};

	await s3.listObjectsV2(params).promise().then((data) => {
		data.Contents.forEach((content) => {
			images.data.push(content);
		});
	}).catch((err) => {
		console.log("err: ", err);
	});

	ctx.body = images;
});

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(serve('./dist'))
	.use(serve('./assets/images'));

app.listen(port);

console.log('listening on port: ' + port);
