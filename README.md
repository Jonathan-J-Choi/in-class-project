1. Create a node app that will serve a web page (server.js)
2. You'll be using express, mongo, and mongoose, so load all accordingly
3. You're managing subject and course data for a university. Your app needs to show all subjects in a drop down. When a subject is selected, all courses for that subject are displayed.
4. There should be the ability to add a course to the selected subject. When the course is added, DO NOT reload the page. Instead, dynamically update the list of courses with the one just added, making sure to attach the new course _id from the JSON payload.
5. When a course is selected, all students who have registered for the course are shown. There should be the ability to add a student to the selected course. When the student is added, DO NOT reload the page. Instead, dynamically update the list of students with the one just added, making sure to attach the new student _id from the JSON payload.
6. You'll create three models:
   Subjects:
     Fields:  name  (and _id)
              courses (dynamic)
              You can hard-code via Robo3T a set of subjects, but trying seeing if you can do this programmatically when the app boots. There is a mongoose seeder package you can use, but it's also relatively easy to do it yourself w/ some research.
   Courses:
     Fields:  name (and _id)
              students (dynamic)
   Students:  name (and _id)
7. Routes
  GET /home
  Loads the home page
  GET /api/subjects
  Returns a JSON payload of all subjects 
  GET /api/courses/:subjectId
  Returns a JSON payload of all courses for the specified subject 
  GET /api/students/:courseId
  Returns a JSON payload of all students for the specified course
  POST /course/:subjectId
  Creates a new course associated with the specified subjectId. Returns
  a JSON payload of the new course data.
  POST /student/:courseId 
  Creates a new student associated with the specified courseId. Returns
  a JSON payload of the new student data.