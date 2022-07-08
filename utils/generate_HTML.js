const manager = require('../lib/Manager');

function generateHTMLPage (data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${data.name}</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" href="./favicon.ico" type="image/x-icon">
      </head>
      <body>
        <main>
            <h1>${data.name}${data.id} ${data.email} ${data.officeNumber} ${data.role}</h1>  
        </main>
        <script src="index.js"></script>
      </body>
    </html>
`
}


module.exports = generateHTMLPage;