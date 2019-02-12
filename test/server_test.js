const tape = require('tape');
const supertest = require('supertest');

tape('testing tape', (t) => {
  t.equal(1, 1, 'pass');
  t.end();
});
