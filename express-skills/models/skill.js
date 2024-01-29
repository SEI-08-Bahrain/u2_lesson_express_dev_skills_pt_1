const skills = [
  { id: 10, skill: 'Javascript', experiance: 8 },
  { id: 20, skill: 'Python', experiance: 4 },
  { id: 30, skill: 'CSS', experiance: 7 }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  return skill
}

module.exports = {
  getAll,
  getOne
}
