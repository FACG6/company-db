const tape = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

tape('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return t.error(err);
      t.equal(res.text.includes("Jamalat Co."), true, "good")
      t.end();
    });
});
tape('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get("/public/html/add.html")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return t.error(err);
      t.equal(res.text.includes("Jamalat Co."), true, "good")
      t.end();
    });
});
tape('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get("/dsadasdasddas")
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return t.error(err);
      t.equal(res.text.includes("404"), true, "good")
      t.end();
    });
});