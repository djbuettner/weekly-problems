This week’s problem build’s directly on last week’s, in that you’ll again be hitting the GitHub API
to request your profile information. But instead of writing the response to the disk, you will
handle requests for a URL, parse the response’s JSON, and return it as a web page, using the
Express.js framework.

To get started, you should install the `express-generator` package, which will allow you to quickly
scaffold a basic Express.js web application:

    $ npm install express-generator -g

That will give you a command called `express`. Inside the `week-03/` directory, you can generate
your basic Express.js app, here in a subdirectory called `github`:

    $ express --pug ./github && cd ./github

Immediately after generating that command, be sure to commit your work to Git--so that you can make
a clear distinction between code that you've written, and code created by Express.js.

Take some time to explore the layout of the Express.js app. Examine the contents of the files.
Install the dependencies (and commit), and run the `npm start` command and load up the skeletal app
in your browser at `http://localhost:3000/`.

Then, take to Basecamp to discuss and figure out where you can rewrite or reuse some of your
code from last week's problem to parse some of your profile data, insert it into one of the `.pug`
templates, and return it as a response in the web browser.

Useful documentation:

* `express-generator` docs: https://www.npmjs.com/package/express-generator
* Express.js: https://expressjs.com (follow nav for guides, getting started stuff)
* Express.js API Reference: https://expressjs.com/en/4x/api.html
