var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var articleController = {};

var getArticles = function getArticles(req, res, next) {

	Article.find({}, function (err, data) {
		if (err) {
			return res.json({
				err: err
			});
		} else if(!data){
			return res.json({});
		}
		return res.json(data);
	});
};

var getArticleById = function getArticleById(req, res, next) {
	Article.findOne({ _id: req.params.id }, function (err, data) {
		if (err) {
			return res.json({ err: err.errmsg });
		} else if(!data){
			return res.json({});
		}
		return res.send(data);
	});
};

var createArticle = function saveArticle(req, res, next) {

	Article.create(req.params.article, function (err, data) {
		if (err) {
			return res.json({
				err: err.errmsg
			});
		} else if(!data){
			return res.json({});
		}
		return res.json(data);
	});

}

var updateArticleById = function updateArticle(req, res, next) {

	Article.findByIdAndUpdate(req.params.id, { $set: req.params.article }, { 'new': true }, function (err, data) {
		if (err) {
			return res.json({ err: err.errmsg });
		} else if(!data){
			return res.json({});
		}
		return res.json(data);
	});
};

var removeArticleById = function removeArticleById(req, res, next) {

	Article.findByIdAndRemove(req.params.id, function (err, data) {
		if (err) {
			return res.json({ err: err.errmsg });
		} else if(!data){
			return res.json({});
		}
		return res.json(data);
	});
};

var removeAllArticles = function removeAllArticles(req, res, next) {

	Article.remove({}, function (err, data) {
		if (err) {
			return res.json({
				err: err.errmsg
			});
		} else if(!data){
			return res.json({});
		}
		return res.json(data);
	});

}



articleController.getArticles = getArticles;
articleController.getArticleById = getArticleById;
articleController.updateArticleById = updateArticleById;
articleController.removeArticleById = removeArticleById;
articleController.createArticle = createArticle;
articleController.removeAllArticles = removeAllArticles;


exports = module.exports = articleController;