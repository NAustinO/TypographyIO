const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// database connection 
const db = require('./database');
const app = express();
const PORT = 3000; 

// controllers 
const userController = require('./controllers/userController');

app.use(express.static(path.resolve(__dirname, '../client/build')));

// to support URL-encoded bodies 
app.use(bodyParser.urlencoded({ extended: true })); 

// to parse cookies from the HTTP request
app.use(cookieParser());


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

// login path
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

// app.get('/register', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

app.post('/register',
  userController.createUser,
)

// app.get('/error', (req, res) => {
//   res.send('There was an error');
// })

// global error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
app.use((req, res) => {
  res.status(404);
})

module.exports = app;