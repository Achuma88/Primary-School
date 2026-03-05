const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- CLASSES ---------------- */

const classes = [
  {
    id: 1,
    name: "Grade R",
    phase: "Foundation Phase",
    teachers: ["Ms. Khumalo", "Ms. Maseko", "Mrs. Ndlovu", "Ms. Botha"]
  },
  {
    id: 2,
    name: "Grade 1",
    phase: "Foundation Phase",
    teachers: ["Ms. Dlamini", "Ms. Zulu", "Mrs. Jacobs", "Ms. Nkuna"]
  },
  {
    id: 3,
    name: "Grade 2",
    phase: "Foundation Phase",
    teachers: ["Mr. Nkosi", "Ms. Molefe", "Mrs. Sithole", "Ms. Pillay"]
  },
  {
    id: 4,
    name: "Grade 3",
    phase: "Foundation Phase",
    teachers: ["Mrs. Smith", "Ms. Dube", "Mr. Mthembu", "Ms. Adams"]
  },
  {
    id: 5,
    name: "Grade 4",
    phase: "Intermediate Phase",
    teachers: ["Mr. Patel", "Ms. Daniels", "Mrs. Brown", "Mr. Van Wyk"]
  },
  {
    id: 6,
    name: "Grade 5",
    phase: "Intermediate Phase",
    teachers: ["Ms. Jacobs", "Mr. Mokoena", "Mrs. Joseph", "Ms. Mhlongo"]
  },
  {
    id: 7,
    name: "Grade 6",
    phase: "Intermediate Phase",
    teachers: ["Mr. Naidoo", "Ms. Cele", "Mrs. Botha", "Mr. Dlamini"]
  },
  {
    id: 8,
    name: "Grade 7",
    phase: "Senior Phase",
    teachers: ["Mrs. Naidoo", "Mr. Petersen", "Ms. Nene", "Mr. Sithole"]
  }
];

/* ---------------- NEWS ---------------- */

let news = [
  {
    id: 1,
    title: "Sports Day",
    message: "Our annual sports day will take place on 15 March.",
    date: "5 March 2026"
  },
  {
    id: 2,
    title: "Term 2 Applications",
    message: "Applications for Term 2 are now open.",
    date: "1 March 2026"
  }
];

/* ---------------- ROUTES ---------------- */

app.get("/", (req, res) => {
  res.send("Primary School API running");
});

/* CLASSES */
app.get("/api/classes", (req, res) => {
  res.json(classes);
});

/* CONTACT */
app.post("/api/contact", (req, res) => {
  res.json({ message: "Message received" });
});

/* GET ALL NEWS */
app.get("/api/news", (req, res) => {
  res.json(news);
});

/* ADD NEWS */
app.post("/api/news", (req, res) => {

  if (!req.body.title || !req.body.message) {
    return res.status(400).json({ message: "Title and message required" });
  }

  const newPost = {
    id: news.length + 1,
    title: req.body.title,
    message: req.body.message,
    date: new Date().toLocaleDateString()
  };

  news.push(newPost);

  res.json({
    message: "Announcement added",
    post: newPost
  });

});

/* ---------------- SERVER ---------------- */

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});