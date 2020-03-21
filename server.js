const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const cloudinary = require('cloudinary').v2

// if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
//   console.warn('!! cloudinary config is undefined !!');
//   console.warn('export CLOUDINARY_URL or set dotenv file');
// }

// console.log('-- -- -- -- -- -- -- -- -- -- -- FUG NET -- -- -- -- -- -- -- -- -- -- -- --');

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, () => {
    console.log(`FUGNET online at http://localhost:${port}`);
  });
})
