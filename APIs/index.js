const nearbySearch = require('./near-by-search');

module.exports = function (app, db) {
    nearbySearch(app, db);
    // Other route groups could go here, in the future
};