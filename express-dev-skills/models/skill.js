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
 
  module.exports = {
    getAll, getOne
  };
  