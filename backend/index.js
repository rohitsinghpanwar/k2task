import express from 'express';
import  json  from 'body-parser';
import cors from 'cors';
import { createConnection } from 'mysql2';

const app = express();
const port = 3001;

app.use(cors());
app.use(json());

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '246472', // Replace with your actual MySQL password
  database: 'mydatabase'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected');
});

app.post('/api/signup', (req, res) => {
  const { name, email, phone, password } = req.body;
  const sql = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Server error: ' + err.message);
      return;
    }
    res.status(200).send('User registered successfully');
  });
});

app.post('/api/login', (req, res) => {
  const { name, password } = req.body;
  const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
  db.query(sql, [name, password], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Server error: ' + err.message);
      return;
    }
    if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});
app.post('/api/forgotpassword',(req,res)=>{
  const {email,password}=req.body;
  const sqlcheck='SELECT * FROM users WHERE email = ?';
  db.query(sqlcheck,[email],(err,results)=>{
    if(err){
      console.log("Error Checking email",err);
      res.status(500).send('Server error' + err.message);
      return;
    }
    if(results.length >0){
      const sqlUpdate="UPDATE users SET password= ? WHERE email = ?";
      db.query(sqlUpdate,[password,email],(err,result)=>{
        if(err){
          console.log("error updating password",err);
          res.status(500).send('Server error',err.message);
          return;
        }
        res.status(200).send('Password reset successfully')
      });
    }
    else{
      res.status(404).send('Email not found Please Signup ')
    }
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
