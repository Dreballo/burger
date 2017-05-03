//Here we declare our dependencies

var express = require('express'); // express server
var bodyParser = require('body-parser');//Middleware
var methodOverride = require('method-override'); //For PUT method in HTML

var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//initialize middleware
app.use(bodyParser.urlencoded({extended: false}));

//Method override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//Express Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//API routes
var routes = require('./controllers/burgers_controller');
app.use('/', routes);

//Launch server
app.listen(PORT, function (){
    console.log(`Server listening on PORT: ${PORT}`);
});

