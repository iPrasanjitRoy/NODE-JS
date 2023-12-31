const { URL } = require('url');

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/Path/SubPath/YourPage';
myURL.search = '?Search=Article50';
myURL.hash = '#Hash';

console.log(myURL);
console.log(myURL.href);
