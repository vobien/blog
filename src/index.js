const express = require('express')
const morgan = require('morgan')
const engine = require('express-handlebars').engine;
const path = require('path');

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


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {

  console.log(req.body);

  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})