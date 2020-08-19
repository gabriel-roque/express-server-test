const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.json('server is running!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
