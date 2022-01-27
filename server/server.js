const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// database connection 
const db = require('./database');
const app = express();
const PORT = 3000; 

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.json());

// to support URL-encoded bodies 
app.use(bodyParser.urlencoded({ extended: true })); 

// to parse cookies from the HTTP request
app.use(cookieParser());

// controllers 
const userController = require('./controllers/userController');


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
//   // res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.get('/api/standings',(req, res, next) => {
  db.query('SELECT * FROM gamelog ORDER BY score DESC LIMIT(10)', (err, data) => {
    if (err) return next({
      message: {
        err: 'An error occurred while getting standings from database', 
      }
    });
    else {
      res.status(200).json(data.rows)
    }
  })
})
 
// app.get('/register', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// })

app.post('/api/register',
  userController.createUser,
)

// app.get('/error', (req, res) => {
//   res.send('There was an error');
// })

// global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})


module.exports = app;