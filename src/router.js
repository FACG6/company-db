const {
  homeHandler,
  displayDataHandler,
  publicHandler,
  errorHandler,
  addPageHandler,
  handleAddEmployee,
} = require('./handlers.js');

const router = (req, res) => {
  const endPoint = req.url;

  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint === '/display') {
    displayDataHandler(req, res);
  } else if (endPoint.includes('/public/')) {
    publicHandler(req, res);
  } else if (endPoint === '/add-page') {
    addPageHandler(req, res);
  } else if (endPoint === '/add-employee') {
    handleAddEmployee(req, res);
  } else {
    errorHandler(res);
  }
};

module.exports = router;
