var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')


var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var indexRouter = require('./routes/index');

mongoose.connect("mongodb://localhost:27017/local")
mongoose.connection.once("open", () => {
    console.log("conneted to database");
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);



app.listen(3000);
