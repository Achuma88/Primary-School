const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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


app.get("/", (req, res) => {
  res.send("Primary School API running");
});

app.get("/api/classes", (req, res) => {
  res.json(classes);
});

app.post("/api/contact", (req, res) => {
  res.json({ message: "Message received" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
