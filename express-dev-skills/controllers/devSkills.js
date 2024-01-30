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
const newDevSkill = (req, res) => {
  res.render('devSkills/new')
}
const create = (req, res) => {
  DevSkill.create(req.body)
  res.redirect('/devSkills')
}
const deleteDevSkill = (req, res) => {
  DevSkill.deleteOne(req.params.id)
  res.redirect('/devSkills')
}
const edit = (req, res) => {
  const devSkill = DevSkill.getOne(req.params.id)
  res.render('devSkills/edit', { devSkill })
}
const update = (req, res) => {
  let devSkillId = req.params.id
  let updatedDevSkillUnit = req.body.unit
  DevSkill.updateOne(devSkillId, updatedDevSkillUnit)
  res.redirect('/devSkills')
}
module.exports = {
  index,
  show,
  create,
  newDevSkill,
  deleteDevSkill,
  edit,
  update
}
