const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let DATABASE_URL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.HEROKU_POSTGRESQL_SILVER_URL;
}
if (!DATABASE_URL) throw new Error ('there is no url');

const params = url.parse(DATABASE_URL);
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
