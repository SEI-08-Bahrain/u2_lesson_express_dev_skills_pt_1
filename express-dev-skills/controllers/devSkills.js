const DevSkill = require('../models/devSkill')
const index = (req, res) => {
  const devSkills = DevSkill.getAll()
  res.render('devSkills/index', {
    devSkills
  })
}
const show = (req, res) => {
  const devSkill = DevSkill.getOne(req.params.id)
  res.render('devSkills/show', {
    devSkill
  })
}
module.exports = {
  index,
  show
}
