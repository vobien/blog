const express = require('express')
const morgan = require('morgan')
const engine = require('express-handlebars').engine;
const path = require('path');

const routes = require('./routes');

const app = express()
const port = 3000

// Use middleware to catch request body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Load static files
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Load routes
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})