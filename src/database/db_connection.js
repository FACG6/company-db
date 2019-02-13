const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();
let DB_URL =process.env.DB_URL;
if(process.env.NODE_ENV ==='test'){
DB_URL=DB_URL_TEST;
}
const params = url.parse(process.env.DB_URL);
const [userName, password] = params.auth.split(':');
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.MAX_DB_CONNECTION || 2,
  user: userName,
  password,
  ssl: process.env.hostname !== 'localhost',
};
module.exports = new Pool(options);
