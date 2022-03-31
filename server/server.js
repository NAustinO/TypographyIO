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

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.get('/api/standings',(req, res, next) => {
  console.log('in api/standings')
  return next()
  db.query(`SELECT * FROM gamelog ORDER BY score DESC LIMIT(10)`, (err, data) => {
    if (err) { 
      console.log('error in db.query select * from gamelog ')
      return next({ message: {
        err: 'An error occurred while getting standings from database', 
      }})
    }
    else {
      console.log('getting rows');
      res.status(200).json(data.rows)
    }
  })
})
 

app.post('/api/register',
  userController.createUser,
)

app.post('/api/record/result', (req, res, next) => {
  console.log(' in api/record/result post serverside')
  const playerName = req.body.playerName; 
  const score = req.body.score; 
  const query = `
    INSERT INTO gamelog (id, username, score, datetime)
    VALUES (nextval('game_id_sequence'), $1, $2, $3)
  `;
  const params = [playerName, score, new Date()];
  db.query(query, params, (err, data) => {
    if (err) { 
      console.log(err);
      return next({ message: {err: err}});
    }
    console.log(data);
    return res.send('successfully put test into gamelog');
  })
})


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