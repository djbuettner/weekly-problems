For this week’s weekly problem, you’re going to hit the GitHub API again --  but from the server
side using Node.js. Your task is to access your own GitHub profile via the API, and write the raw
JSON response to a file called `response.json` here in your `week-02/` directory.

First you’ll need to get things set up with Node.js and `npm`:

You’ll need to create a `package.json` file in the `week-02/` directory by running `npm init`. Walk
through the prompts and enter the necessary information, as best you can considering this is a
weekly problem rather than a full-on app. In certain cases, `npm` will suggest defaults in
parentheses, like `(1.0.0)` for the initial version. Make a commit after your `package.json` file
has been your created.

Once you have your `package.json` file, you’ll need to install a couple of dependences:
`[request](https://github.com/request/request)`and
`[request-promise-native](https://github.com/request/request-promise-native)`. Still in the
`week-02/` directory, run

    $ npm install request request-promise-native

Be sure to commit the changes to `package.json` and `package-lock.json`.

You’ll need to work in the `index.js` file. There is some skeletal code there for you to work with,
but you’ll need to work out the details. Again, discuss the problem on Basecamp as you’re working.

Hint: test that the GitHub API request is completing successfully before trying to write the raw
response to a file.

Some things to consult:

* The documentation for `request-promise`: https://www.npmjs.com/package/request-promise (as
  [the repo for `request-promise-native`](https://github.com/request/request-promise-native) notes,
  its API is the same as the `request-promise-native` module we’re using)
* The “Wrangling the File System” chapter in *Node.js 8: The Right Way*
