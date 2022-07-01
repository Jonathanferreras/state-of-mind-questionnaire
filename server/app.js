const express = require("express");
const sqlite = require("sqlite3");
const path = require("path");
const bodyParser = require("body-parser");
const { calcAge } = require("./utils");

const PORT = process.env.PORT || 9000;
const app = express();
const dbPath = path.resolve(__dirname, "./db/app.db");
const db = new sqlite.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS SUBMISSIONS (
      ID INTEGER PRIMARY KEY,
      Name varchar(255) NOT NULL,
      SubmissionDate DATE,
      Dob DATE,
      Age int,
      Happiness int,
      Energy int,
      Hopefulness int,
      HoursSlept int
    );
  `);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/questionnaire", (req, res) => {
  const { name, submissionDate, dob, happiness, energy, hope, hoursOfSleep } =
    req.body;
  const age = calcAge(dob);
  const sql = db.prepare(`
    INSERT INTO SUBMISSIONS VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sql.run(
    name,
    submissionDate,
    dob,
    age,
    happiness,
    energy,
    hope,
    hoursOfSleep
  );

  sql.finalize();

  db.all("SELECT * FROM SUBMISSIONS", function (err, rows) {
    rows.forEach(function (row) {
      console.log(row);
    });
  });

  res.send({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
