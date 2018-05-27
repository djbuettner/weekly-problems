/*

This first Weekly Problem drops you right into HTML & JavaScript.

The `index.html` file, which you do not need to edit, contains an unordered list of usernames
linked to GitHub profiles for everyone in the class. It also uses a tag you might not have seen
before: `<template>`, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

You'll use native JavaScript to listen for a click event on any one of those links, prevent the
default link-following behavior, and hit the GitHub API to return JSON data for the profile whose
link a user clicked. You'll then display the data as set forth in the `<template>` tag at the bottom
of the HTML file, and append it to the `<blockquote>` element.

For example, Stolley's main GitHub profile is a JSON object at this API endpoint:
https://api.github.com/users/karlstolley

I've sketched out some starter portions of the code below. Be sure to work on this yourself, and
discuss your work--and the places that you get stuck--on Basecamp as you're working on the
problem. Note: to keep this as backward-compatibile as possible, I'm using `var` and no fancy
ES6 stuff.

Finally, be sure to run `http-server` so you're serving this at `localhost:8080`--if you choose
File > Open, you will not be able to run requests with Fetch. Be sure also that you have your
JavaScript console open so you can benefit from calls to `console.log()` and other diagnostics.

*/

// Grab the members element
var members = document.getElementById('members');
// Diagnostic variable to hold the event target in the global scope, oustide the event-handler
// function:
var target;

// Listen for a click event on #members, rather than adding a click handler to each and every
// <a> element. This is called event bubbling:
members.addEventListener('click', function(e) {
  // Placeholder variables assigned in the `if` block below; life would be better with `let`
  var username, request_url;
  // Grab the content template from the HTML;
  // see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
  var template = document.getElementById('member');
  // Also grab a reference to the `<blockquote>` element where the data will go:
  var profile = document.getElementById('profile');

  // Diagnostic: this will let you play with the event.target object in the console and see what
  // properties and methods it responds to.
  target = e.target;

  // We're only interested in clicks on `<a>` elements:
  if (e.target.nodeName.toLowerCase() == 'a') {
    // Don't let the web browser follow the link
    e.preventDefault();
    // Diagnostic: log the clicked `<a>` element's `href` value
    console.log(e.target.href, 'clicked');
    // console.log("Hello World");

    // TODO: Somehow isolate the last chunk of the GitHub profile URL, which contains the username
    // https://github.com/<username>. The full URL is a string at `e.target.href`:
    // username = '';

    // From the URL, remove all characters up to the last '/'.  This gets the username.
    username = e.target.href.replace(/.*\//,"");

    // Diagnostic: log the username value
    console.log('Username value:', username);

    // Append that chunk onto the GitHub API URL, `https://api.github.com/users/<username>`:
    request_url = 'https://api.github.com/users/' + username;

    // Diagnostic: log the request URL value
    console.log('Request URL value:', request_url);

    // TODO: Use the Fetch() API to retrieve the data from the GitHub API
    // Docs:
    //   - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    //   - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    // This block commented with stars so you can get things above working first:

    // /*
    fetch(request_url)
      .then(function(data) {
        // Parse the returned data as JSON:
        return data.json();
      })
      .then(function(profile_json) {
        // Diagnostic; output the login value
        console.log('Login', profile_json.login);
	// console.log(profile_json);

        // TODO: Insert the parts of the JSON data we want in the `template` HTML and
        // append it to the profile `<blockquote id="profile">`
        // TODO: Display the username (`login`) in case a team member has not set a profile name

	// Using the console log to check the three elements in the template and to see that the
	// inline conditional on the name works.
	console.log(profile_json.name != null ? profile_json.name : profile_json.login , profile_json.avatar_url, profile_json.public_repos);

	// Taking the example from the Mozilla template documentation 
	// at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
	// Checking to see that browser supports template elements by looking at content attribute.
	if ('content' in document.createElement('template')) {

	    // Get the template via the id name of member
	    var t = document.querySelector('#member');

	    // Get the blockquote via the id name of profile
	    var bq = document.querySelector('#profile');

	    // With help from Prof. Stolley, remove all prior nodes in blockquote
	    if ( profile.hasChildNodes() ) {
		while (profile.firstChild) {
		    profile.removeChild(profile.firstChild);
		}
	    }

	    // Using the Mozilla template documentation, create a clone from template content
	    var clone = document.importNode(t.content, true);

	    // Within clone, find the first part that has the name
	    var h2 = clone.querySelector('#name');
	    // Set the content to the person's name and if it doesn't exist, to the login
	    h2.textContent = profile_json.name != null ? profile_json.name : profile_json.login;
	    // Set the img to the picture URL in avatar_url
	    // I did struggle with this one because I first used img.textContent instead of img.src
	    // It was a good learning experience that took a bunch of time.
	    var img = clone.querySelector('#avatar_url');
	    img.src = profile_json.avatar_url;
	    // The last part of the template has the number of public repositories
	    // that are in the span element.  Using same approach others.
	    var span = clone.querySelector('#public_repos');
	    span.textContent = profile_json.public_repos;

	    // The final step is to append the clone none to the blockquote profile.  
	    bq.appendChild(clone); 

	    // Several console.log statements that are useful to check the browser in console and inspector
	    // console.log(clone);
	    console.log(t);
	    console.log(bq);
	}
      });
    // */
  }
});
