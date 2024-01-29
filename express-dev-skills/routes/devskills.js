var express = require('express')
var router = express.Router()
const devskillsCtrl = require('../controllers/devskills')

// All actual paths start with "/devskills"

router.get('/', devskillsCtrl.index)

// Get /todos/:id

router.get('/:id', devskillsCtrl.show)

module.exports = router
