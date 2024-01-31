const skills = [
  {
    id: 587345,
  
    skills: "React",
  },
  {
    id: 205403,
    
    skills: "Express.js",
  },
  {
    id: 145027,
   
    skills: "Python",
  },
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  let skill = skills.find((e) => {
    return e.id === parseInt(id)
  })
  return skill
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
 
  skills.push(skill)
  console.log(skills)
}

const deleteOne = (id) => {
  const idx = skills.findIndex((e) => {
    return e.id === parseInt(id)})
  skills.splice(idx, 1)
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
}
