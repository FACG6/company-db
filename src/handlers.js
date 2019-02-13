const { readFile } = require('fs');
const path = require('path');
const { getDepartmentData, getEmployeeData, getDemptEmplys } = require('./queries/getData');
const queryString = require('querystring');
const { postData } = require('./queries/postData');


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
const handleAddEmployee = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    convertedData = queryString.parse(allData);
    postData(data, (error, response) => {
      if (error) {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('<h1>Server/Database Error</h1>');
      } else {
        res.writeHead(302, { location: '/' });
        res.end(response);
      }
    });
  });
};
const publicHandler = (req, res) => {
  const filepath = path.join(__dirname, '..', req.url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    const extension = path.extname(req.url).split('.')[1];
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
const getDepartHandler = (req, res) => {
  getDepartmentData((error, response) => {
    if (error) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end('<h1>Server/Database Error</h1>');
    } else {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(response));
    }
  });
};
const getEmployeeHandler = (req, res) => {
  getEmployeeData((error, response) => {
    if (error) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end('<h1>Server/Database Error</h1>');
    } else {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(response));
    }
  });
};
const getDemptEmplysHandler = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    convertedData = queryString.parse(allData);
  });
  getDemptEmplys(convertedData.INPUTNAME, (error, response) => {
    if (error) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.end('<h1>Server/Database Error</h1>');
    }
  });
};


module.exports = {
  homeHandler,
  publicHandler,
  errorHandler,
  getEmployeeHandler,
  getDepartHandler,
  getDemptEmplysHandler,
  handleAddEmployee,
};
