const skills = [
  { id: 125223, skill: 'JavaScript', done: true },
  { id: 127904, skill: 'Express', done: false },
  { id: 139608, skill: 'MongoDB', done: false }
]

exports.getAll = () => {
  return skills
}

exports.getOne = (id) => {
  return skills.find((skill) => skill.id === parseInt(id))
}

exports.create = (skill) => {
  skill.id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
}

exports.deleteOne = (id) => {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id))
  skills.splice(idx, 1)
}

exports.updateOne = (id, updatedSkill) => {
  const skillToUpdate = skills.find((skill) => skill.id === parseInt(id))
  skillToUpdate.skill = updatedSkill
}
