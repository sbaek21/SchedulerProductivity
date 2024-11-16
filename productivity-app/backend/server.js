// const express = require('express');
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express()
// app.use(cors())
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb"
// });

// app.get('/', (re, res) => {
//     return res.json("from backend side");
// });

// app.get('/tasks', (req, res) => {
//     db.query('SELECT * FROM tasks', (err, results) => {
//         if (err) {
//           return res.status(500).send(err);
//         }
//         res.json(results);
//     });
// });

// // app.post('/tasks', (req, res) => {
// //     const { title, description, dueDate, dueTime, status } = req.body;
// //     const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
// //     db.query(sql, [title, description, dueDate, dueTime, status], (err, result) => {
// //       if (err) {
// //         return res.status(500).send(err);
// //       }
// //       res.status(201).json({ id: result.insertId });
// //     });
// //   });

// app.post('/tasks', (req, res) => {
//     const { title, description, dueDate, dueTime, status } = req.body;

//     // Replace empty strings with null for dueDate and dueTime
//     const processedDueDate = dueDate || null;
//     const processedDueTime = dueTime || null;

//     const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
//     db.query(sql, [title, description, processedDueDate, processedDueTime, status], (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         res.status(201).json({ id: result.insertId });
//     });
// });


// // app.put('/tasks/:id', (req, res) => {
// //     const { id } = req.params;
// //     const { title, description, dueDate, dueTime, status } = req.body;
// //     const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
// //     db.query(sql, [title, description, dueDate, dueTime, status, id], (err, result) => {
// //         if (err) {
// //             return res.status(500).send(err);
// //         }
// //         // Optionally fetch the updated task from the database and return it
// //         db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
// //             if (err) {
// //                 return res.status(500).send(err);
// //             }
// //             res.json(results[0]); // Return the updated task
// //         });
// //     });
// // });
// app.put('/tasks/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, description, dueDate, dueTime, status } = req.body;

//     // Replace empty strings with null for dueDate and dueTime
//     const processedDueDate = dueDate || null;
//     const processedDueTime = dueTime || null;

//     const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
//     db.query(sql, [title, description, processedDueDate, processedDueTime, status, id], (err, result) => {
//         if (err) {
//             return res.status(500).send(err);
//         }

//         // Optionally fetch the updated task from the database and return it
//         db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
//             if (err) {
//                 return res.status(500).send(err);
//             }
//             res.json(results[0]); // Return the updated task
//         });
//     });
// });


// app.delete('/tasks/:id', (req, res) => {
// const { id } = req.params;
// db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
//     if (err) {
//     return res.status(500).send(err);
//     }
//     res.sendStatus(200);
// });
// });




// app.listen(8081, () => {
//     console.log("listening");
// })

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios'); // For HTTP requests
const bodyParser = require('body-parser'); // For parsing JSON request bodies
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Middleware to handle Cross-Origin policies
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    next();
});

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

// Google OAuth 2.0 Client Information
require('dotenv').config();
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:5173/oauth2callback';

// OAuth Endpoint to Exchange Authorization Code for Access Token
app.post('/getAccessToken', async (req, res) => {
    const { code } = req.body;

    try {
        console.log('Received authorization code:', code);

        const response = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token, refresh_token, expires_in } = response.data;

        console.log('Access Token Response:', response.data);

        // Send tokens to the frontend
        res.json({ access_token, refresh_token, expires_in });
    } catch (error) {
        console.error('Error exchanging code for access token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to exchange code for access token' });
    }
});

// Task Management Endpoints
app.get('/', (req, res) => {
    res.json("Backend server is running");
});

app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/tasks', (req, res) => {
    const { title, description, dueDate, dueTime, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({ error: 'Title and status are required' });
    }

    const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [title, description, dueDate || null, dueTime || null, status], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId });
    });
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, dueTime, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({ error: 'Title and status are required' });
    }

    const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
    db.query(sql, [title, description, dueDate || null, dueTime || null, status, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results[0]);
        });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.sendStatus(200);
    });
});

// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
