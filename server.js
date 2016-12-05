require('babel-register');

var express = require('express');
var car = require ('./routes/cars');
var React = require('react');
var ReactDOM = require('react-dom/server');
var path = require('path');
var Router = require('react-router');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(path.join(__dirname, '/public')));

//GET all the cars in the database
app.get('/cars', car.findAll);

//GET car with a specific id
app.get('/cars/:id', car.findByItemNumber);

//ADD new car in the database
app.post('/cars', car.addCar);

//UPDATE a car in the database
app.put('/cars/:id', car.updateCar);

//DELETE a car in the database
app.delete('/cars/:id', car.deleteCar);

var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});