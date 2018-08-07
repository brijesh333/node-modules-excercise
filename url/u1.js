const url = require('url');

const myURL = new URL('/foo', 'https://example.org/');

console.log(myURL.hash);