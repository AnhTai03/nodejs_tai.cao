const express = require('express');
const app = express();
const port = 3000;

// route
app.get('/', (req, res) => {
  res.send('hdaidadahid!');
});

app.get('/baohay', (req, res) => {
  res.send('Đây là trang tin tức!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
