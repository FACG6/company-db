const tape = require('tape');
const runDbBuild=require('../test/db_test.js')
tape('testing tape', (t) => {
  t.equal(1, 1, 'pass');
  t.end();
});
