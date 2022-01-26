// const sqlite3 = require('sqlite3').verbose();

// const DBSSOURCE = 'db.sqlite';

// const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//     throw new Error(err);
//   } else {
//     console.log('Successfully connected to database');
//   }
// })

// module.exports = db; 

const { Pool, Client } = require('pg');

const PG_URI = 'postgres://iprdynqg:hLuKBDZKbgiH76fpcfXII14LvGCzrWXv@isilo.db.elephantsql.com/iprdynqg';
const pool = new Pool({ 
  connectionString: PG_URI,
});

module.exports = pool; 
