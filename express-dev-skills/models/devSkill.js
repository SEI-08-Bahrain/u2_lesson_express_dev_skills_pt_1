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

module.exports = { getAll, getOne }
