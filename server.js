var express = require('express');
var app = express()
require('dotenv').config()

const port = process.env.PORT;

app.listen(port,() => {
  console.log('Wazza Shopping is at your service on port',port)
})