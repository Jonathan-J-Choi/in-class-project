const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();
const dbName = "suckitgar";

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connecting to MongoDB via mongoose
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${dbName}`,
  {
    useNewUrlParser: true
  }
  // function() {
  //   mongoose.connection.db.dropDatabase();
  // }
);

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// Courses //
db.Course.create(
  { name: "Bio 101" },
  { name: "World History" },
  { name: "European History" },
  { name: "US History" },
  { name: "AP Physics" },
  { name: "Macro Economics" },
  { name: "Micro Economics" }
);

//Subjects //
db.Subject.create(
  { name: "Biology" },
  { name: "History" },
  { name: "Physics" },
  { name: "Economics" }
);

// Student //
db.Student.create(
  { name: "Gary" },
  { name: "Dan" },
  { name: "Erik" },
  { name: "Katie" },
  { name: "Aya" }
);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/api/subject", (req, res) => {
  db.Subject.find({})
    .then(dbCourse => {
      res.json(dbCourse);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/course/:subjectId", (req, res) => {
  db.Course.find({})
    .then(dbCourse => {
      res.json(dbCourse);
    })
    .catch(err => {
      res.json(err);
    });
});

//same as above but minus the :subjectId
app.get("/api/course", (req, res) => {
  db.Course.find({})
    .then(dbCourse => {
      res.json(dbCourse);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/students/:courseId", (req, res) => {
  db.Student.find({})
    .then(dbStudents => {
      res.json(dbStudents);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/course/:subjectId", (req, res) => {
  db.Course.create(req.body)
    .then(({ _id }) => {
      db.Subject.findOneAndUpdate({}, { $push: { course: _id } });
    })
    .then(dbSubject => {
      res.json(dbSubject);
    })
    .catch(err => res.json(err));
});

app.post("/student/:courseId", (req, res) => {
  db.Course.create(req.body)
    .then(({ _id }) => {
      db.Course.findOneAndUpdate({}, { $push: { course: _id } });
    })
    .then(dbCourse => {
      res.json(dbCourse);
    })
    .catch(err => res.json(err));
});

// app.post("/submit", ({ body }, res) => {
//   db.Book.create(body)
//     .then(({ _id }) =>
//       db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })
//     )
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
