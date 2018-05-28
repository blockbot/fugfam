const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="main.css" rel="stylesheet">
    </head>
    <body>
      ${body}
    </body>
  </html>



`;

export default Html;