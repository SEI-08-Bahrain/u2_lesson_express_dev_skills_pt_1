const skills = [
  { lang: "javascript", framework: "react", database: "sql" },
  { lang: "php", framework: "laravel", databse: "sql" }
]

const getAll = () => {
  return skills;
}

const getOne = (lang) => {
  return skills.find(skill => skill.lang === lang);
}

module.exports = {
  getAll,
  getOne
}