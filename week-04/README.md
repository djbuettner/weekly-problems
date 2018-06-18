Hey, you’re in luck. This week’s Weekly Problem asks you only to work on an aspect of your Project
One, which asks you to “Use at least three min-width media queries to enhance mobile-first styles
for larger screens”.

If you’re new to media queries and mobile-first responsive design, have a look at this article:
<https://www.sitepoint.com/introduction-mobile-first-media-queries/>

And of course and as always, as you work, please post to Basecamp with your questions and problems.

Once you’ve completed the basic mobile-first responsive design for your Project One, you need to do
two things for this week’s Weekly Problem:

1. Place a copy of your stylesheet into the `week-04/` directory in your Weekly Problems repository.
2. In this README file below, explain in a paragraph or two how you went about executing your basic
   responsive design, and what additional remaining help or guidance you need (which you should
   also post to Basecamp).




A copy of my first project CSS file is in this week-04 folder named screen.css.

Addressing the Cascading Style Sheets (CSS) was the last requirement that I addressed in this project.
I had the working version of getting the usgs.gov API data, parsing & extracting the key data items, and
using the PUG specification to produce the first look HTML. Once I could use the browser localhost:3000 to
show me the description and table, I went to the responsive design mode (RDM) approach. This first step was
to find and use the Eric Meyer reset. I found one and created the file public/stylesheets/screen.css.
It was initally difficult to access the file because I started with the sytle/include lines and couldn't
see a change.  After getting the location right [in the head portion] and the PUG indentation correct, it was
working. However, through message with you, I went with "link(rel='stylesheet', href='stylesheets/screen.css')"
under the title, it worked real well and all style were gone. I now had from the route/index.js .render method
call into the views/tremor.pug preprocessor, a connection to CCS in the public/stylesheets/screen.css.

I used Firefox Developer Edition with Cntl-Shft-M giving me the phone size: I started with phone first at 
320 pixels. I first specified things that I could see change like the background color, color of h1 font,
font sizes for h1 and table/tr/td, and alignment of h1 and table columns. I used em for the font size. I next
research the various screen sizes that would define phone, tablet, and desktop. After seeing various code, I
picked 600px and over being a tablet, and over 1024px being a desktop. After the phone specificaton, I had
the "@media only screen and (min-width: 600px)" conditional and copied the phone specification to the tablet
specification. From here, I changed colors, font sizes, border colors. I could toggle between the two sizes and
see the changes. Finally, I copied the tablet specification after and change the size to 1024px. Like the
tablet, I did more changing of sizes and colors. I finally discovered a good way to test by taking the left side
of the window and moving it to make the top smaller and larger. I would see the changes in real time and that
was nice. My last hurdle was dealing with the table column different alignment of center and right. You
pointed me to the "tr td:last-child" control. It worked so the first column is centered and the second column
is right aligned.

My resourses thoughout the development was with various CSS documentation sites including http://devdocs.io/css/,
https://developer.mozilla.org/en-US/docs/Learn/CSS, https://www.w3schools.com/css/default.asp, and 
www.google.com for specific questions. I also read "The Cult of the Complex" and saw all the links to 
creating grids and using CSS with them. To be honest, I am still confused in this area in designing for each
media, specifying correctly in the PUG file, and then specifying in the CSS file. I do plan to incorporate
this functionality in the second project where I will add at least one more table or possible graphs [if I
figure out how to do that]. I'm okay with my progress in CSS for this project given that it is actually my
first time specifying CSS.
