const tape = require('tape');
const runDbBuild=require('../src/database/db_build');
 const { getDepartmentData, getEmployeeData, getDemptEmplys }=require('../src/queries/getData.js');



tape('test getDepartmentData ',(t)=>{
  runDbBuild((err, res) =>{    
    if (err) t.error(err, 'Error');
    const expected = [ { department_name: 'Managment', department_description: 'the adminstration dpt.' }, { department_name: 'Marketing', department_description: 'the delling promoting dpt.' }, { department_name: 'Accounting and Finance', department_description: 'the planning, organizing and finance management dept' }, { department_name:'Human resources management', department_description: 'Recruitment and training dpt.' } ]
    getDepartmentData((err, result)=>{
      if (err) t.error(err);
      t.deepEqual(result,expected,'test is getDepartmentData done');
      t.end();
    })

  })
});

tape('test getDemptEmplys ',(t)=>{
  runDbBuild((err, res) =>{    
    if (err) t.error(err, 'Error');
    let expected=[ { employee_name: 'ahmed', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' }, { employee_name: 'ahmedd', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' }, { employee_name: 'jaaa', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' } ];

    getDemptEmplys('Managment',(error, result)=>{
      
      if (error)
         t.error(error);

      t.deepEqual(result,expected,'test done');
      t.end();
    })

  })
});

tape.onFinish(()=>{
  process.exit(0);
});