const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(cors());

const PORT = 3001;

//configure mysql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "react_crud_mysql",
});

//connect to mysql

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to mysql!");
});

//parse json requests
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const { name, email, address } = req.body;
  const sql = "INSERT INTO user (name,email,address) VALUES (?, ? ,?)";

  db.query(sql, [name, email, address], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("New user added to the database!");
    // res
    //   .status(2001)
    //   .send(`User ${name} ${email} ${address} created successfully!`);
    res.status(201).json(`user ${name} ${address} ${email} created!`);
  });
});

//get all users

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM user";

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//get single user

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  db.query("SELECT * FROM user WHERE id = ?", [userId], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("ERROR retrieving user");
    } else if (results.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(results[0]);
    }
  });
});

//update a user by id
app.put("/users/:id", (req, res) => {
  const { name, email, address } = req.body;
  const id = req.params.id;
  const sql = "UPDATE user SET name = ?, email = ?, address = ? WHERE id = ?";
  db.query(sql, [name, email, address, id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`User ${id} updated successfully!`);
    res.send(`User ${id} updated successfully!`);
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM user WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    console.log(`User ${id} deleted successfully!`);
    res.send(`User ${id} deleted successfully!`);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
