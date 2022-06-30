const express = require("express");
const sqlite = require("sqlite3");
const path = require("path");

const PORT = process.env.PORT || 9000;
const app = express();
const dbPath = path.resolve(__dirname, "./db/app.db");
const db = new sqlite.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS SUBMISSIONS (
      ID int NOT NULL PRIMARY KEY,
      Name varchar(255) NOT NULL,
      Dob DATE,
      Age int,
      Happiness int,
      Energy int,
      Hopefulness int,
      HoursSlept int
    );
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
