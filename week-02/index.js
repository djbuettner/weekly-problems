// TODO: Read the contents of `README.md` before hacking on this file
// Follow good programming practice with use strict
'use strict';
// Require the file system
const fs = require('fs');
// Require the request-promise-native package
const req = require('request-promise-native');

const options = {
  // TODO: Create an object literal to hit your account on the GitHub API,
  // and pass any other information the API requires (you should not have
  // to authenticate for this, however)
  uri: 'https://api.github.com/users/djbuettner',
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

req(options)
  .then(function(response) {
    // TODO: Handle the returned JSON data and write it to a file called
    // `response.json` in your `week-two/` directory
    console.log('JSON =', response);

    // fs.writeFile('response.json', JSON.stringify(response).replace(',','\\n'), (err) => {
    fs.writeFile('response.json', JSON.stringify(response, null, 2), err => {
      if (err) {
        throw err;
      }
      console.log('File saved!');
    } );
  }
  )
  .catch(function(err) {
    // The API failed and report error
    console.log(err);
  });
