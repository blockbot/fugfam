const Html = ({ body, title }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <link href="main.css" rel="stylesheet">
  </head>
  <body>
    <div id="app">${body}</div>
  </body>
  <script src="bundle.app.js"></script>
</html>
`;

export default Html;