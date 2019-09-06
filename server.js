require('dotenv').config()
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var ParseServerConfig = require('./parse-config/parse-server')
/**
 * server
 */
var parseAPI=new ParseServer(ParseServerConfig);
app.use('/api', parseAPI)

const port = process.env.PORT;

app.listen(port,() => {
  console.log('Wazza Shopping is at your service on port',port)
})