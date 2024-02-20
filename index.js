const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
fs
app.get('/', (_, res) => {
  res.write('<h1>Hello world</h1>');
  setInterval(() => {res.write('<h1>Hello world2</h1>')}, 1000);
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

alert("hi")
