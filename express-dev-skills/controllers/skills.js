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

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
};

const editSkill = (req, res) => {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
      skill
  });
};

const update = (req, res) => {
  const skillId = req.params.id;
  const updatedSkill = req.body.skill;
  Skill.updateOne(skillId, updatedSkill);
  res.redirect('/skills');
};


  module.exports = {
    index, 
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: editSkill,
    update
  };