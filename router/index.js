var express = require('express')
var router = express.Router()

var contact = require('../controllers/contact')
var home = require('../controllers/home')


router.get('/', home.index)
router.post('/send', contact.index)

module.exports = router