var articleController = require('../controllers/article');
var article_routes = {};


var configure = function configure(server) {

	server.get('/articles', articleController.getArticles);
	server.post('/articles', articleController.createArticle);
	server.del('/articles', articleController.removeAllArticles);
	server.get('/articles/:id', articleController.getArticleById);
	server.put('/articles/:id', articleController.updateArticleById);
	server.del('/articles/:id', articleController.removeArticleById);
};

article_routes.configure = configure;

exports = module.exports = article_routes;