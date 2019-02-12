const {
  homeHandler,
  displayDataHandler,
  publicHandler,
  errorHandler,
} = require('./handlers');

const router = (req, res) => {
  const endPoint = req.url;

  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint === '/display') {
    displayDataHandler(req, res);
  } else if (endPoint.includes('public')) {
    publicHandler(req, res);
  } else {
    errorHandler(res);
  }
};

module.exports = router;
