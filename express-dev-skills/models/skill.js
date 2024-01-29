const skills = [
  { id: 125223, skill: 'JavaScript', done: true },
  { id: 127904, skill: 'Express', done: false },
  { id: 139608, skill: 'MongoDB', done: false }
]

const getAll = () => {
  return skills
}

getOne = (id) => {
  return skills.find((skill) => skill.id === parseInt(id))
}

module.exports = {
  getAll,
  getOne
}
