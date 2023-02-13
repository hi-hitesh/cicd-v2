const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3005;

app.get('/status', (req, res) => {
  return res.send('Ok.!');
});

app.get('/', (req, res) => {
  return res.send(`Hello World! from', ${process.env.ENV}`);
});

app.get('/env', (req, res) => {
  res.send('env');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
