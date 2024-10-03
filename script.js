const projects = [
  {
      title: "Todo App",
      description: "A simple todo app built with MERN stack.",
      url: "https://vibhsingh.github.io/my-portfolio/"
  },
  {
      title: "Cricket Stadium Rating",
      description: "A site where users can rate cricket stadiums.",
      url: "https://vibhsingh.github.io/my-portfolio/"
  },
  {
      title: "Portfolio Site",
      description: "My personal portfolio site to showcase my projects.",
      url: "https://vibhsingh.github.io/my-portfolio/"
  }
];

const projectSection = document.getElementById('projects');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">View Project</a>
  `;

  projectSection.appendChild(projectCard);
});
