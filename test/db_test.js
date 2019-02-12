const tape = require('tape')

tape('testing tape', t => {
    t.equal(1, 1, 'pass');
    t.end();
})