var app  = require('./config/server.js')

require('./app/routes/index.js')(app);

app.listen(8080, function (){
	
	console.log("Inova API");

});