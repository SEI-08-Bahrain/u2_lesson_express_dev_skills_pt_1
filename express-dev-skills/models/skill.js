const skills = [
  { lang: "javascript", framework: "react", database: "sql" },
  { lang: "php", framework: "laravel", database: "sql" }
]

const getAll = () => {
  return skills;
}

const getOne = (lang) => {
  return skills.find(skill => skill.lang === lang);
}

const create = (value) => {
  skills.push({lang: value.lang, framework: "unknown", database: "sql"});
  console.log(value);
}

const deleteOne = (lang) => {
  const idx = skills.findIndex(value => value.lang === lang);
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
}