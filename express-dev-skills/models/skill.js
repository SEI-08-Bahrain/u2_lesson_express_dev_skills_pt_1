const skills = [
  { id: 10, skillName: 'HTML', learned: true },
  { id: 20, skillName: 'CSS', learned: true },
  { id: 30, skillName: 'Javascript', learned: true },
  { id: 40, skillName: 'Python', learned: false }
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
module.exports = { getAll, getOne }
