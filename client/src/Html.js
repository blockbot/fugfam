import '../../assets/scss/app/app.scss';

const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="./main.css" rel="stylesheet">
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>


  
`;

export default Html;