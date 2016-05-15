const path = require('path');
const express = require('express');

module.exports = (app, port) => {
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use('/bootstrap', express.static(
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')
  ));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
  });

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Server running at http://localhost: ${port}`);
  });
};
