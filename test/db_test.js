const tape = require('tape');
const runDbBuild=require('../src/database/db_build');
 const { getDepartmentData, getEmployeeData, getDemptEmplys }=require('../src/queries/getData.js');

 tape('testing tape', (t) => {
  t.equal(1, 1, 'pass');
  t.end();
});

tape('test get ',(t)=>{
  runDbBuild((error, res)=>{
    if (error) console.log(error);
    getDepartmentData((err, result)=>{
      if (err) t.error(err);
      t.equal(result.length>0,true,'test done');
      t.end();
    })
    
  })
})

