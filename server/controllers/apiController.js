module.exports = {
  getAllCards: async function (res, req, next) {
    try {
      fetch('GET');
    } catch {
      (e) => next({ log: 'there was an error in the getAllCards middleware' });
    }
  },
};
