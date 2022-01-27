const db = require('../database');
const bcrypt = require('bcrypt');

const SALTROUNDS = 12; 


const userController = {};


userController.checkAuthStatus = (req, res, next) => {
  
}

// TODO check if user is logged in already
userController.createUser = (req, res, next) => {

  if (!req.body.username || !req.body.password) {
    console.log('no username or password found')
    // return res.redirect('/register');
    return next('No username or password found')
  } else {
    const date = new Date();
    bcrypt.hash(req.body.password, SALTROUNDS, (err, hash) => {
      if (err) {
        return next({ 
          message: {err: 'Password failed to hash in createUser'}
        })
      }
      const query = `
        INSERT INTO users (id, username, date_created, last_updated, password) 
        VALUES (nextval(\'userid_sequence\'), $1, $2, $3, $4) 
        RETURNING id`;
      const params = [req.body.username, date, date, hash];
      db.query(query, params, (err, data) => {
        if (err) {
          return next({message: {err: err}})
        } 
        console.log(data);
        // id is in data.rows[0].id
      })
      return res.redirect('/');
    })
  }
}

module.exports = userController;