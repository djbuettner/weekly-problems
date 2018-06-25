For the final Weekly Problem, you’re going to consider APIs from the producer side—rather than the
consumer side we’ve focused on the last several weeks.

For this project, I want you to imagine an API that provides data about all courses coming up for
the next semester at IIT.

Come up with at least three API endpoints that return data. Think about the data that would be most
useful to include in such an API. For each endpoint, document the endpoint (e.g., `GET /courses`)
and include a JSON example of the data that someone can expect to be returned.

You can describe your API right in this README file. Follow the guidance at <http://jsonapi.org>
and consider the pretty dead-simple documentation of our old example friend, the GitHub API, in this
case, the endpoints for GitHub Issues: <https://developer.github.com/v3/issues/>

As always, post to Basecamp as you’re working on this problem.

____________________________________________________________________________

When looking at this problem from the producer side, I looked at the IIT portal and considered what
generally would be requested from the client side.  I concluded that there were two major users of 
students and instuctors. Students looking for courses that they want and then registering for them.
Instructors would want a list students in there course. This is simplistic, but when I tried going
into more detail, I think I lost focus (i.e., the forest from the trees problem).

With two primary users, I then went into my database way of thinking and came up with four objects
[not relational tables] that would be need. I named them "students", "instructors", "courses" and 
"classes". The classes were the course offering that a student could register and an instructor 
would teach. To tie all these together, I created another object/table call registration that would 
be associated with the student and a class; this also created the association to the instructor. I
made an ERD diagram to help me conceptualize it.  I have included it in the GitHub repo with the name
"Week-05_Problem_ERD_for_jsonapi.JPG".

Next, I defined the "type" and "id" for each one and I treat this as kind of the primary keys. They
are as follows:
  1) Students -> type: student, id: CWID [number]
  2) Instuctors -> type: instructor, id: emailprefix [that is taking the @iit.edu from there email]
  3) Courses -> type: course, id: Area + Number [this is the general area like "IT-D" and the 825 number]
  4) Classes -> type: class, id: CRN [this identifies the actual class or course section for the term.]

I then proceeded to try to identify the "data attributes", "data relationships", and "included" parts.
It wasn't clear if I would have any "meta" section.

I'll begin with a very simple case where a student is retrieveing the system profile information.

    GET /student/CWID HTTP/1.1
    Content-Type: application/vnd.api+json

    {
      "data": {
        "type": "student",
        "id": "CWID#",
        "attributes": {
          "fname": "David",
          "lname": "Buettner",
          "Email": "dbuettner@hawk.iit.edu",
          "Phone": "XXX.XXX.XXXX"
        }
      }
    }

Next, the student is searching for courses and the associated classes/offerings. My understanding
of the difference between the "relationshpis" and the "included" parts of the ja

    GET /course/id HTTP/1.1
    Content-Type: application/vnd.api+json

    {
      "data" {
        "type": "course",
        "id": "IT-D 825"
        "attributes": {
          "Area": "IT-D",
          "CourseNum": "825",
          "Title": "Data APIs",
          "Description": "..."
        },
        "relationships": [{
          "sessions": {
            "links" {
              "self": "/course/IT-D%20825",
              "classes": "/classes/CourseID/IT-D%20825"
            }
            "data": {
              "type": "class",
              "id": "34194"
            }
          }
        }]
        "included": [{
          "type": "class",
          "id": "34194",
          "Term", "Summer 2018",
          "Status", "Registered",
          "AssignedInstructor": "kstolley",
          "GradeMode": "Pass/Fail",
          "Credits": 4.900,
          "Level": "Continuing Education",
          "Campus": "Internet"
          "DateStart": "May 21, 2018",
          "DateEnd": "June 30, 2018"
        }, {
          // if another class/session was offer, put it in here with the unique CRN
        }
        ]
      }

My third one will be for an instructor who wants to get the student list in one of the
classes being offered.

      GET /instuctor/id HTTP/1.1
      Content-Type: application/vnd.api+json

      {
        "meta" {
          "studentsregistered": #
        }
        "data" {
          "type": "instructor",
          "id": "kstolley",
          links: {
            "self": "/instructors/kstolley"
          }
          relationships {
            classes: {
              links: {
                "self": "/classes/AssignedInstructor/kstolley",
                "class": "/classes/34194",
                "courses": "/course/IT-D%20825"
              }
            }
          }
        }
        "included": [ {
          "type": "students"
          "id": "CWID#",
          "fname": "David",
          "lname": "Buettner",
          "Email": "dbuettner@hawk.iit.edu",
          "Phone": "XXX.XXX.XXXX"
          }, {
          // Next student ...
          }
        } ]
      }

As I mentioned in one of my messages, I now understand why jsonapi is needed and what problem
it is solving between client developers and server-side developers. In telecommunications, there
are many standard protocols to enable the autonomous communication between machines. This is
one for web services supporting RESTful APIs.

While I think I understand the JSON format, I do see I need some experience to understand the 
requests, how they would be fullfilled on the server side, and how to make design decision on
whether to provide data in the "included" portion or provide the references in the "relationships".

Some other related information that I picked up was JSON API supports all database CRUD operations
with GET method for retrieving data, POST method for creating or inserting data, PATCH method
for updating data, and DELETE method for deleting data.  Only the GET method can involve
multiple data/resources.
