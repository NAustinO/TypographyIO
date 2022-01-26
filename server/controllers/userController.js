const db = require('../database');
const bcrypt = require('bcrypt');

const saltRounds = 12; 




const userController = {};


userController.checkAuthStatus = (req, res, next) => {
  
}

// TODO 
userController.createUser = (req, res, next) => {
  if (!req.body.username || req.body.password) {
    return next('No username or password found')
  } else {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING users.id';
      const params = [req.body.username, hash];
      db.query(query, params, (err, res) => {
        if (err) {
          console.log('There was an error in userController.createUser');
          res.status(400).send();
        } else return next();
      })
      
      
    })
  }
}

module.exports = userController;