const skills = [
  {
    id: 1,
    name: "John Developer",
    skills: 'React',
  },
  {
    id: 2,
    name: "Jane Coder",
    skills: 'Express.js',
  },
  {
    id: 3,
    name: "Alex Developer",
    skills: 'Python',
  },
]

const getOne = (id) => {
  let skill = skills.find((e) =>{
    return e.id === parseInt(id)
  })
  return skill
}


const getAll = () => {
  return skills
}

module.exports = {
  getAll,getOne
}
