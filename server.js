const http = require('http'),
fs = require('fs'),
url = require('url');

http.createServer((request, response) => {
  let addr = request.url,
  q = url.parse(addr, true),
  filePath = '';

  if (q.pathname.includes('document')) {
    filePath = (__dirname + '/document.html');
  } else {
    filePath = 'index.html';
  }

  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.');
    }
  })
}).listen(8080)
console.log('My test server is finally running on Port 8080.');