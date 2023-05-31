const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const userInfo = os.userInfo();
  const uptime = Math.floor(os.uptime() / 60); 
  const currentDir = process.cwd(); 
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>Node.js HTTP Server</title>
      </head>
      <body>
        <h1>Інформація про систему</h1>
        <p>Ім'я користувача: ${userInfo.username}</p>
        <p>Тип операційної системи: ${os.type()}</p>
        <p>Час роботи системи (в хвилинах): ${uptime}</p>
        <p>Поточна робоча директорія: ${currentDir}</p>
        <p>Назва файлу сервера: ${serverFilename}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Сервер запущений на http://localhost:5000/');
});