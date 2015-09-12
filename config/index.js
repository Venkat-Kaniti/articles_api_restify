var config = {};
var database = require('./database');

config.connectDB = database.connect;
exports = module.exports = config;