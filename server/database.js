const { Pool, Client } = require('pg');

const PG_URI = 'postgres://iprdynqg:hLuKBDZKbgiH76fpcfXII14LvGCzrWXv@isilo.db.elephantsql.com/iprdynqg';
const pool = new Pool({ 
  connectionString: PG_URI,
});

module.exports = pool; 


// to insert 
// example INSERT INTO gamelog VALUES (nextval('game_id_sequence'),'nick',3, '2022-01-26T19:25:57.120Z')
// example INSERT INTO users VALUES (nextval('user_id_sequence'),username , date_created, 'date_updated')

/*
Sequences

*/