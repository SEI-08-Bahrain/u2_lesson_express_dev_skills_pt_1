var express = require('express')
var router = express.Router()
const devSkillsCtrl = require('../controllers/devSKills')
/* GET users listing. */
router.get('/', devSkillsCtrl.index)
router.get('/:id', devSkillsCtrl.show)
module.exports = router
