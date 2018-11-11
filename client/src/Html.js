const Html = ({ body, title, preloadedState }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <link href="main.css" rel="stylesheet">
  </head>
  <body>
    <div id="app">${body}</div>
  </body>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="bundle.app.js"></script>
</html>
`;

export default Html;
