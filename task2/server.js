const http = require('http');
const { getGreeting } = require('./personalmodule');

const server = http.createServer((req, res) => {
  const username = 'John'; 

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');
  res.write('<img src="https://cdn.discordapp.com/attachments/1095427519953522698/1110679362585497610/image2.png" alt="Привітання">');
  res.write('<h1>Привітання</h1>');
  res.write(`<p>${getGreeting(username)}</p>`);
  res.write('</body></html>');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер працює на порті ${port}`);
});