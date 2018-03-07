const express = require('express');
const exphbs  = require('express-handlebars');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();

const port = 5000;

//Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

//Index Route

app.get('/', (req, res) => {
  res.render('index');
});

//app.post('/admin', (req, res) => {});
// ID Route
app.get('/id', (req, res) => {
  res.send('ID');
});
//About Route
app.get('/about' ,(req, res) => {
  res.render('about');
});
//Admin Route
app.get('/admin', (req, res) =>{

  res.render('admin');

});


app.listen(port, () =>{
  console.log(`Server started on port: ${port}`);
});
