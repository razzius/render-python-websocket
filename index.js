const express = require('express');
const { createServer } = require('node:http');
const { readFileSync } = require('fs')

const app = express();
const server = createServer(app);

app.get('/', (_, res) => {
  const indexData = readFileSync('index.html')
  res.send(indexData.toString());
//   setInterval(() => {res.write('<h1>Hello world2</h1>')}, 1000);
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
