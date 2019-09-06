const serverURL=`${process.env.DEV_ENV}:${process.env.PORT}/api`
console.log('[i] - Server is on ' + serverURL)

/**
|--------------------------------------------------
| PARSE CONFIG--
|--------------------------------------------------
*/
const parseServerOption = {
  cloud: './cloud/main.js',
  serverURL: serverURL,
  appId: process.env.APPID,
  masterKey: process.env.MASTER_KEY,
  javascriptKey: process.env.JS_KEY,
  restAPIKey: process.RESTAPI_KEY,
  clientKey: process.CLIENT_KEY
}
/**
|--------------------------------------------------
| PARSE CONFIG--
|--------------------------------------------------
*/
module.exports = parseServerOption