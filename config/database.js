var mongoose = require('mongoose');
var connectionString = 'mongodb://admin:admin@ds033828.mongolab.com:33828/articles'
//var connectionString = 'mongodb://admin:admin@ds041571.mongolab.com:41571/restify_demo';

exports = module.exports = {
	connect: function connect() {
		mongoose.connect(connectionString);
		return mongoose.connection;
	}
};



