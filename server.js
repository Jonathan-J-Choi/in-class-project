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
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`, {
  useNewUrlParser: true
});

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
// db.Library.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

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

app.get("/course", (req, res) => {
  db.Course.find({})
    .then(dbCourse => {
      res.json(dbCourse);
    })
    .catch(err => {
      res.json(err);
    });
});

// app.get("/library", (req, res) => {
//   db.Library.find({})
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
