const tape = require('tape');
const runDbBuild=require('../test/db_test.js');

//  const postData=requir('/');
 tape('testing tape', (t) => {
  t.equal(1, 1, 'pass');
  t.end();
});

tape('test get ',(t)=>{
  runDbBuild((error,res)=>{
    if (error)console.log(error);
    
  })
})