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
  const insertSubmissionQuery = `INSERT INTO SUBMISSIONS VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const personalAvgsQuery = `SELECT AVG(Happiness), AVG(Energy), AVG(Hopefulness), AVG(HoursSlept) FROM SUBMISSIONS WHERE Name='${name}';`;
  const globalAvgsQuery = `SELECT AVG(Happiness), AVG(Energy), AVG(Hopefulness), AVG(HoursSlept) FROM SUBMISSIONS WHERE Age='${age}';`;
  const sql = db.prepare(insertSubmissionQuery);
  const response = {
    submission: req.body,
    averages: {
      personal: null,
      global: null,
    },
  };

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

  db.all(personalAvgsQuery, (err, rows) => {
    response.averages.personal = rows[0];
    db.all(globalAvgsQuery, (err, rows) => {
      response.averages.global = rows[0];
      res.send(response);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
