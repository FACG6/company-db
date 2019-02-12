const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');

const params = url.parse(process.env.DB_URL);
const [userName, password] = params.auth.split(':');
const options = {
  host: params.host,
  port: params.port,
  database: params.pathname.split('/')[0],
  max: process.env.MAX_DB_CONNECTION || 2,
  user: userName,
  password,
  ssl: process.env.hostname !== 'localhost',
};
module.exports = new Pool(options);
