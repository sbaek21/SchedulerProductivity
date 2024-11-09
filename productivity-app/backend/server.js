const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

app.get('/', (re, res) => {
    return res.json("from backend side");
});

app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.post('/tasks', (req, res) => {
    const { title, description, dueDate, dueTime, status } = req.body;
    const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [title, description, dueDate, dueTime, status], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).json({ id: result.insertId });
    });
  });

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, dueTime, status } = req.body;
    const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
    db.query(sql, [title, description, dueDate, dueTime, status, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        // Optionally fetch the updated task from the database and return it
        db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
            console.log("check")
            if (err) {
                return res.status(500).send(err);
            }
            res.json(results[0]); // Return the updated task
        });
    });
});

app.delete('/tasks/:id', (req, res) => {
const { id } = req.params;
db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) {
    return res.status(500).send(err);
    }
    res.sendStatus(200);
});
});




app.listen(8081, () => {
    console.log("listening");
})