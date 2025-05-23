const http = require('http');
const fs = require('fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const fileHTML = fs.readFileSync(path.join(__dirname, 'tut41_rowsAndGapsInGrids.html'));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fileHTML);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});