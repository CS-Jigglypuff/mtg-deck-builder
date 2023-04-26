const db = require('../db');

module.exports = {
  get10Cards: function (res, req, next) {
    console.log('test');
    db.query(`SELECT '*' FROM cards LIMIT 20`)
      .then((data) => json(data))
      .then((data) => {
        res.locals.cards = data;
        return next();
      });
  },
};
