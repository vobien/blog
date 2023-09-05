const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars').engine;
const path = require('path');
var methodOverride = require('method-override');

const sortMiddleware = require('./app/middleware/sortMiddleware');

const routes = require('./routes');

// connect to MongoDB
const db = require('./config/db');
db.connect();

const app = express();
const port = 3000;

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// Use middleware to catch request body
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// use custom middleware
app.use(sortMiddleware);

// Load static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: require('./app/middleware/handlebars'),
    })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Load routes
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
