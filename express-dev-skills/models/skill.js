const skills = [
    {id: 125223, skill: 'Sleep Token', done: true},
    {id: 127904, skill: 'Bad Omens', done: false},
    {id: 139608, skill: 'Motionless in White', done: false}
  ];
 
 
  const getAll = () => {
    return skills;
  }

  const getOne = (id) => {
    return skills.find(skill => skill.id === parseInt(id));
  }
 
  module.exports = {
    getAll, getOne
  };
  