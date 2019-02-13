const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let dbURL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  dbURL = process.env.HEROKU_POSTGRESQL_SILVER_URL;
}
if (!dbURL) throw new Error ('there is no url');

const params = url.parse(dbURL);
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
