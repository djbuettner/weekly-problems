'use strict';

const express = require('express');
const router = express.Router();

// Get week-02 modules with fs being for testing.
// const fs = require('fs'); // Used for initial testing
// Require the request-promise-native package, but renamed to reqprom
const reqprom = require('request-promise-native');

/* GET home page. */
router.get('/', function(req, res) {

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

      // Created the view 'json.pug' and sending request to render the GitHub API
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
