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
	if ('content' in document.createElement('template')) {
	    // console.log(document); // Analyze the document content
	    // console.log("Hello World");  // Did I get to this statement (i.e., browser compatible)
	    var t = document.querySelector('#member');
	    // console.log(t); // Analyze the tempate member content
	    var clone = document.importNode(t.content, true);
	    // console.log(t.content);
	    // console.log(clone);

	/*	Commenting the code out that was populating the template element.
		Turns out that I don't want to do that and only populate the blockquote element

	    var h2 = clone.querySelector('#name');
	    h2.textContent = profile_json.name != null ? profile_json.name : profile_json.login;
	    var img = clone.querySelector('#avatar_url');
	    img.textContent = profile_json.avatar_url;
	    var span = clone.querySelector('#public_repos');
	    span.textContent = profile_json.public_repos;

	    t.appendChild(clone);
	*/
	    // console.log(t);  // Used to checkout final template contains correct information

	    var bq = document.querySelector('#profile');
	    var clone2 = document.importNode(t.content, true);

	    var h2 = clone2.querySelector('#name');
	    h2.textContent = profile_json.name != null ? profile_json.name : profile_json.login;
	    var img = clone2.querySelector('#avatar_url');
	    img.src = profile_json.avatar_url;
	    var span = clone2.querySelector('#public_repos');
	    span.textContent = profile_json.public_repos;

	    bq.appendChild(clone2); 


	    // bq.appendChild(clone2); // While blockquote gets the HTML correctly and shows "Owner of repositiories", there is no other data??
	    // clone2.appendChild(clone);  // This has no effect on the HTML--blockquote not updated
	    // bq.textContent = clone2.textContent; // Only puts in "Owner of repositories 
	    // bq.textContent = t.textContent;  // This only puts the unformatted text in browser
	    // bq.appendChild(t);  // Funny result--this moves [not copies the template withing blockquoate
	    // bq.appendChild(clone);

	    // console.log(clone2);
	    console.log(t);
	    console.log(bq);
	}
      });
    // */
  }
});
