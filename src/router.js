const {
  homeHandler,
  displayDataHandler,
  publicHandler,
  errorHandler,
  getDepartHandler,
  getEmployeeHandler,
  getDemptEmplysHandler
} = require('./handlers');

const router = (req, res) => {
  const endPoint = req.url;

  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint === '/display') {
    displayDataHandler(req, res);
  } else if (endPoint.includes('public')) {
    publicHandler(req, res);
  } else if(endPoint === '/getDepartments'){
    getDepartHandler(req,res);
  }
  else if(endPoint === '/getEmployees'){
    getEmployeeHandler(req,res);
  }
   else if(endPoint === '/getDeptEmplys'){
    getDemptEmplysHandler(req,res);
  }
   else {
    errorHandler(res);
  }
};

module.exports = router;
