/* eslint-disable no-unused-vars */
const path = require('path');
const fs = require('fs');
const dbConnection = require('./db_connection');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log('Database is ready');
});
