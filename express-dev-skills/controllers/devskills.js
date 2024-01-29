const Devskill = require('../models/devskill')
const { response } = require('../server')

const index = (req, res) => {
  const devskills = Devskill.getAll()
  res.render('devskills/index', {
    devskills
  })
}

const show = (req, res) => {
  const devskill = Devskill.getOne(req.params.id)
  res.render('devskills/show', {
    devskill
  })
}

module.exports = {
  index,
  show
}
