const express = require('express');
const session = require('express-session');
const mysql = require('mysql')
const cors = require('cors')
const app = express()


// CORS AND SESSION SETUP


app.use(cors({
    origin: 'http://localhost:5173',  // Frontend URL (adjust if necessary)
    credentials: true,  // Allow credentials (cookies) to be sent
  })
);
app.use(express.json());

app.use(session({
    secret: 'your_secret_key',  // Use a secret key for session encryption
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,  // Set to true in production with HTTPS
      httpOnly: true,  // Ensure cookies are only sent via HTTP(S), not accessible via JavaScript
      sameSite: 'None',  // This is needed for cross-origin requests with credentials
    }
  }));



//DATA BASE CONNENCTION



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});


// TASKS MANAGEMENT SERVER CALLS



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

// app.post('/tasks', (req, res) => {
//     const { title, description, dueDate, dueTime, status } = req.body;
//     const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
//     db.query(sql, [title, description, dueDate, dueTime, status], (err, result) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.status(201).json({ id: result.insertId });
//     });
//   });

app.post('/tasks', (req, res) => {
    const { title, description, dueDate, dueTime, status } = req.body;

    // Replace empty strings with null for dueDate and dueTime
    const processedDueDate = dueDate || null;
    const processedDueTime = dueTime || null;

    const sql = 'INSERT INTO tasks (title, description, dueDate, dueTime, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [title, description, processedDueDate, processedDueTime, status], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: result.insertId });
    });
});


// app.put('/tasks/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, description, dueDate, dueTime, status } = req.body;
//     const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
//     db.query(sql, [title, description, dueDate, dueTime, status, id], (err, result) => {
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
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, dueTime, status } = req.body;

    // Replace empty strings with null for dueDate and dueTime
    const processedDueDate = dueDate || null;
    const processedDueTime = dueTime || null;

    const sql = 'UPDATE tasks SET title = ?, description = ?, dueDate = ?, dueTime = ?, status = ? WHERE id = ?';
    db.query(sql, [title, description, processedDueDate, processedDueTime, status, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Optionally fetch the updated task from the database and return it
        db.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
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



//LOGIN BACKEND WORK


const bcrypt = require('bcryptjs');  // Ensure bcrypt is imported

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);  // Use await here
    // passwordMatch = (password == user.password);

    if (passwordMatch) {
      req.session.user = username;
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Incorrect password.' });
    }
  });
});


//SIGNUP BACKEND WORK

app.post('/api/signup' , async (req, res) => {
  const { username, password, passwordRepeat, email} = req.body;
  if ( !username || !password || !passwordRepeat || !email ) {
    return res.status(400).json({error: 'All fields are required!'});
  }
  if (password != passwordRepeat) {
    return res.status(400).json({error: 'Your password does not match!'});
  }
  if (!email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )){
    return res.status(400).json({error: 'Your email is not valid.'});
  }
  // Add more authentication validation here later. (ex password length, characters, etc)

  cryptedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, cryptedPassword, email], async(err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    req.session.user = username;
    return res.json({message: 'Sign Up successful'})
  })
});



//GOOGLE AUTHENTICATION SETUP

// Google OAuth 2.0 Setup
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-client-id.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your-client-secret';
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:5173/oauth2callback';

// OAuth Token Exchange
app.post('/getAccessToken', async (req, res) => {
    const { code } = req.body;

    try {
        const response = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token, refresh_token, expires_in } = response.data;
        res.json({ access_token, refresh_token, expires_in });
    } catch (error) {
        console.error('OAuth Token Exchange Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to exchange code for access token' });
    }
});


//CHECKING BACKEND WORKING

app.listen(8081, () => {
    console.log("listening at 8081");
})