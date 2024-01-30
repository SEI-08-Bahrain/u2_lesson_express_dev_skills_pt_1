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

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skills.push(skill)
}

const removeSkill = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

const update = (id, Skill, experiance) => {
  let skillToUpdate = getOne(id)
  skillToUpdate.skill = Skill
  skillToUpdate.experiance = experiance
}

module.exports = {
  getAll,
  getOne,
  create,
  removeSkill,
  update
}
