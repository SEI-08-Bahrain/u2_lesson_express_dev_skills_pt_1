const Skill = require('../models/skills')

const index = (req, res) => {
  const skills = Skill.getAll()
  const title = 'Skills'
  res.render('skills/index', { skills, title })
}

const show = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/show', { skill })
}

const create = (req, res) => {
  Skill.create(req.body)
  res.redirect('/skills')
}

const remove = (req, res) => {
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render('skills/edit', { skill })
}

const update = (req, res) => {
  const skillId = req.params.id
  const updatedSkill = req.body.skill
  Skill.updateOne(skillId, updatedSkill)
  res.redirect('/skills')
}

const newSkill = (req, res) => {
  const title = 'Add Skill' // Define the title variable
  res.render('skills/new', { title }) // Pass the title variable to the view
}

module.exports = {
  index,
  show,
  create,
  remove,
  edit,
  update,
  new: newSkill
}
