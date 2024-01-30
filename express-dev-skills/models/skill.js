const skills = [
    {id: 125223, skill: 'Teamwork', done: true},
    {id: 127904, skill: 'Communication Skills', done: false},
    {id: 139608, skill: 'Networking Skills', done: false}
  ];
 
 
  const getAll = () => {
    return skills;
  }

  const getOne = (id) => {
    return skills.find(skill => skill.id === parseInt(id));
  }

  const create = (skill) => {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
};

const deleteOne = (id) => {  
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
};

const updateOne = (id, updatedSkill) => {
  const skillToUpdate = skills.find(skill => skill.id === parseInt(id));
  skillToUpdate.skill = updatedSkill; 
  return skillToUpdate;
}
 
  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    updateOne
  };
  