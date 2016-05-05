'use strict';

const express = require('express'),
          app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})