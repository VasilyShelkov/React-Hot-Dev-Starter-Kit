const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server running at http://localhost: ${port}`);
});
