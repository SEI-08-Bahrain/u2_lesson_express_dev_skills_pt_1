const skills = [
  {
    id: 1,
    name: "John Developer",
    skills: {
      programmingLanguages: ["Python", "JavaScript", "Java"],
      webDevelopment: {
        frontend: ["React", "Angular", "Vue"],
        backend: ["Node.js", "Django", "Spring Boot"],
      },
      database: ["MongoDB", "MySQL", "Redis"],
      cloudServices: ["AWS", "Azure", "Google Cloud"],
      devOps: ["Docker", "Kubernetes", "Jenkins"],
      versionControl: ["Git", "GitHub", "Bitbucket"],
      testing: ["Jest", "Selenium", "JUnit"],
      mobileDevelopment: ["React Native", "Swift", "Kotlin"],
      security: ["OAuth", "SSL/TLS", "OWASP Top 10"],
      agileMethodologies: ["Scrum", "Kanban", "Agile"],
    },
  },
  {
    id: 2,
    name: "Jane Coder",
    skills: {
      tools: ["VS Code", "IntelliJ IDEA", "Sublime Text"],
      frameworks: ["Express.js", "Flask", "Spring MVC"],
      designPatterns: ["MVC", "Singleton", "Observer"],
      buildTools: ["Webpack", "Gradle", "Maven"],
      containerization: ["Docker", "Podman"],
      continuousIntegration: ["Jenkins", "Travis CI", "CircleCI"],
      monitoring: ["Prometheus", "Grafana", "ELK Stack"],
      collaboration: ["Slack", "Microsoft Teams", "Jira"],
    },
  },
  {
    id: 3,
    name: "Alex Developer",
    skills: {
      softSkills: ["Communication", "Problem Solving", "Team Collaboration"],
      projectManagement: ["Agile", "Scrum", "Kanban"],
      gitWorkflow: ["Feature Branching", "Pull Requests", "Code Reviews"],
      documentation: ["API Documentation", "Code Comments", "Readme Files"],
      learning: ["Self-Taught", "Online Courses", "Workshops"],
    },
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
