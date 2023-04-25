const { Pool, Client } = require('pg');

const conString = process.env.ELEPHANTSQL_URL;

const pool = new Pool({ conString });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
