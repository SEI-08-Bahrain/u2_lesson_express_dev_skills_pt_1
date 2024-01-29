const devskills = [
  { id: 121234, devskill: 'Learn Java-script', done: true },
  { id: 123123, devskill: 'Learn css & HTML', done: true },
  { id: 135709, devskill: 'Learn Express', done: false }
]

const getAll = () => {
  return devskills
}

const getOne = (id) => {
  let devskill = devskills.find((devskill) => {
    //find todo where id is equal to the id parameter
    return devskill.id === parseInt(id)
  })
  return devskill
}

module.exports = {
  getAll,
  getOne
}
