const db = require('../db');

module.exports = {
  get10Cards: async function (req, res, next) {
    db.query(`SELECT * FROM "cards" LIMIT 20`, [], (err, result) => {
      if (err) {
        return next(err);
      }
      const { rows } = result;
      res.locals.cards = rows;
      next();
    });
  },
};
