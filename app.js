var PORT = process.env.PORT || 3000;

var config = require('./config');
var models = require('./models').registerModels();
var restify = require("restify");
var routes = require("./routes");

var db = config.connectDB();

db.on('error', function (err) {
	console.log(err);
});
db.once('open', function () {
	console.log('db connection opened');
});

var server = restify.createServer({
	name: 'SampleServer'
});

server.use(restify.bodyParser());

server.get('/', function (req, res, next) {
	res.send({
		status: true
	});
});

routes.configure(server);

server.listen(PORT, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log('Restify server started at ' + PORT);
});