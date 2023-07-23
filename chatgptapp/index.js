// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

const port = 6000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
