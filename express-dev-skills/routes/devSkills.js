var express = require('express')
var router = express.Router()
const devSkillsCtrl = require('../controllers/devSKills')
/* GET users listing. */
router.get('/', devSkillsCtrl.index)
router.get('/new', devSkillsCtrl.newDevSkill)
router.get('/:id/edit', devSkillsCtrl.edit)
router.get('/:id', devSkillsCtrl.show)
router.post('/', devSkillsCtrl.create)
router.delete('/:id', devSkillsCtrl.deleteDevSkill)
router.put('/:id', devSkillsCtrl.update)

module.exports = router
