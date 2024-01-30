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

  const newSkill = (req, res) => {
    res.render('skills/new');
};

const create = (req, res) => {
  console.log(req.body);
  Skill.create(req.body); 
  res.redirect('/skills');
};


  module.exports = {
    index, 
    show,
    new: newSkill,
    create
  };