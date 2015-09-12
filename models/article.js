var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now()
	},
	name: String
});

exports = module.exports = mongoose.model('Article', articleSchema);