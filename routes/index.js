exports = module.exports = {

	configure: function configureRoutes(server) {
		require('./article_routes').configure(server);
	}

};