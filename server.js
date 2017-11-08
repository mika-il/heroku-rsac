var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var expressValidator  = require('express-validator')

var contact = require('./router/index')

var app = express()
var port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(expressValidator() )

app.use('/contact', contact)

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
  


app.listen(port, function() {
    console.log('stating server...')
})