const { createServer } = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

/**
 * create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display This is the list of our students
 * followed by the same content as the file 3-
 * read_file_async.js (with and without the database)
 * - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
const port = 1245;

function homepage(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

function students(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    homepage(req, res);
  } else if (req.url === '/students') {
    students(req, res);
  }
})
  .listen(port);

module.exports = app;
