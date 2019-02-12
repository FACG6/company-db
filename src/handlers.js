const { readFile } = require('fs');
const path = require('path');


const serverError = (err, response) => {
  response.writeHead(500, 'Content-Type:text/html');
  response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
};

const homeHandler = (req, res) => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  });
};

const displayDataHandler = (req, res) => {

};

const publicHandler = (req, res) => {
  const filepath = path.join(__dirname, '..', req.url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    const [, extension] = req.url.split('.');
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',
    };
    res.writeHead(200, { 'content-type': extensionType[extension] });
    res.end(file);
  });
};

const errorHandler = (response) => {
  response.writeHead(404, { 'content-type': 'text/html' });
  response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
  homeHandler,
  displayDataHandler,
  publicHandler,
  errorHandler,
};
