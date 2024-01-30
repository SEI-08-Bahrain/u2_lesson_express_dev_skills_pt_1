const devSkills = [
  {
    id: 123456,
    unit: 'Unit 1',
    skills: ['HTML', 'CSS', 'Javascript'],
    learnt: true
  },
  {
    id: 234567,
    unit: 'Unit 2',
    skills: ['MongoDB', 'Mongoose', 'Express', 'EJS', 'Google OAuth'],
    learnt: false
  },
  {
    id: 345678,
    unit: 'Unit 3',
    skills: ['React', 'JWT User Auth'],
    learnt: false
  },
  {
    id: 456789,
    unit: 'Unit 4',
    skills: ['Python', 'Django', 'PostgreSQL'],
    learnt: false
  }
]
const getAll = () => {
  return devSkills
}
const getOne = (id) => {
  let devSkill = devSkills.find((devSkill) => {
    return devSkill.id === parseInt(id)
  })
  return devSkill
}

const create = (devSkill) => {
  let devSkillToAdd = {}
  devSkillToAdd.id = Date.now() % 1000000
  devSkillToAdd.unit = devSkill.unit
  devSkillToAdd.skills = []
  devSkillToAdd.skills.push(devSkill.skill1)
  devSkillToAdd.skills.push(devSkill.skill2)
  devSkillToAdd.skills.push(devSkill.skill3)
  devSkillToAdd.learnt = false
  devSkills.push(devSkillToAdd)
}

const deleteOne = (id) => {
  const index = devSkills.findIndex((devSkill) => devSkill.id === parseInt(id))
  devSkills.splice(index, 1)
}
const updateOne = (id, updatedDevSkillUnit) => {
  let devSkillToUpdate = devSkills.find(
    (devSkill) => devSkill.id === parseInt(id)
  )
  devSkillToUpdate.unit = updatedDevSkillUnit
}
module.exports = { getAll, getOne, create, deleteOne, updateOne }
