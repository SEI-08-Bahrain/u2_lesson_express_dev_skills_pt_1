// controllers/todos.js

const Skill = require('../models/skill');

const index = (req, res) => {
    const skills = Skill.getAll();
    const title = ""
    res.render('skills/index', {
      skills 
    });
  };

  const show = (req, res) => {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', {
        skill 
  });
  };

  module.exports = {
    index, show
  };