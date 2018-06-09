'use strict';

var express = require('express');
var router = express.Router();

// Get week-02 modules with fs being for testing.
// const fs = require('fs'); // Used for initial testing
// Require the request-promise-native package
const reqprom = require('request-promise-native');

/* GET home page. */
router.get('/', function(req, res, next) {

  // Get week-02 request to GitHub api
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

  reqprom(options)
    .then(function(response) {
      // TODO: Handle the returned JSON data and write it to a file called
      // `response.json` in your `week-two/` directory
      console.log('JSON =', response);

      // First test was to get file created
      /* fs.writeFile('response.json', JSON.stringify(response, null, 2), (err) => {
        if (err) {
          throw err;
        }
        console.log('File saved!');
      } ); */
      // res.render('index', JSON.stringify(response, null, 2)) // Tried the render: failed
      // res.json(JSON.stringify(response, null, 2))  // Testing sending the GitHub JSON back: success
      // res.json(response)  // Testing sending the GitHub JSON back: success
      // res.send(JSON.stringify(response, null, 2))  // Testing the send: sussess as body
      // res.redirect(options.uri); // Testing redirect to my GitHub API: success
      // res.render('json', {json: JSON.stringify(response, null, 2)});
      res.render('json', {json: response});
    }
    )
    .catch(function(err) {
      // The API failed and report error
      console.log(err);
    });

  // res.render('index', { title: 'Express' });
});

module.exports = router;
