// ===== Skills & Extras =====
// same as your previous JS for skills and extras
// populate skills
const skills = [
  {category:"Programming", items:[
    {name:"Python", icon:"fa-brands fa-python"},
    {name:"Java", icon:"fa-brands fa-java"},
    {name:"R", icon:"fa-solid fa-chart-line"},
    {name:"C", icon:"fa-solid fa-code"},
    {name:"C++", icon:"fa-solid fa-code"},
    {name:"JavaScript", icon:"fa-brands fa-js"},
    {name:"SQL", icon:"fa-solid fa-database"}
  ]},
  {category:"Databases", items:[
    {name:"MongoDB", icon:"fa-solid fa-database"},
    {name:"SQL Server", icon:"fa-solid fa-server"},
    {name:"MySQL Workbench", icon:"fa-solid fa-database"}
  ]},
  {category:"Frameworks/Backend", items:[
    {name:"FastAPI", icon:"fa-solid fa-network-wired"},
    {name:"MERN Stack", icon:"fa-brands fa-react"},
    {name:"React", icon:"fa-brands fa-react"}
  ]},
  {category:"AI/ML & DS", items:[
    {name:"Scikit-Learn", icon:"fa-solid fa-robot"},
    {name:"Pandas", icon:"fa-solid fa-table"},
    {name:"NumPy", icon:"fa-solid fa-table"},
    {name:"TensorFlow", icon:"fa-brands fa-python"},
    {name:"Keras", icon:"fa-solid fa-brain"},
    {name:"Matplotlib", icon:"fa-solid fa-chart-line"},
    {name:"LLM Integrations", icon:"fa-solid fa-robot"},
    {name:"Agentic AI", icon:"fa-solid fa-robot"}
  ]},
  {category:"Tools/Platforms", items:[
    {name:"Jupyter Notebook", icon:"fa-brands fa-python"},
    {name:"R Studio", icon:"fa-solid fa-chart-line"},
    {name:"PowerBI", icon:"fa-solid fa-chart-bar"},
    {name:"VS Code", icon:"fa-solid fa-code"},
    {name:"Eclipse", icon:"fa-solid fa-code"},
    {name:"Git", icon:"fa-brands fa-git"},
    {name:"MS Office", icon:"fa-solid fa-file"}
  ]}
];
const skillsContainer = document.querySelector(".skills-container");
skills.forEach(cat=>{
  const div = document.createElement("div");
  div.className="skill-category";
  div.innerHTML = `<h3>${cat.category}</h3>
    <div class="skill-cards">
      ${cat.items.map(i=>`<div class="skill-card"><i class="${i.icon}"></i> ${i.name}</div>`).join("")}
    </div>`;
  skillsContainer.appendChild(div);
});

// extras
const extras = {
  softskills:["Communication","Team Work and Collaboration","Adaptive Learner","Project Management"],
  achievements:["SLIIT Dean's List Nominee - Got selected into the Dean's List : Year 1 Semester 2 with a GPA of 3.78"],
  certifications:["Excel for Data Science Beginners - Great Learning Academy","Data Science Foundation - Great Learning Academy","AI/ML Engineer Stage 1 - SLIIT"]
};
function populateExtras(id, items){
  const container = document.getElementById(id);
  items.forEach(i=>{
    const div = document.createElement("div");
    div.className="extra-card";
    div.innerHTML = `<i class="fa-solid fa-check"></i> ${i}`;
    container.appendChild(div);
  });
}
populateExtras("softskills", extras.softskills);
populateExtras("achievements", extras.achievements);
populateExtras("certifications", extras.certifications);

// ===== Projects Data =====
const projects = [
  {
    title: "RideGuard",
    description: "Predictive ML model for driver ride cancellations.",
    link: "https://github.com/hirusha-03/RideGuard",
    screenshots: ["images/ride1.png"],
    tech: ["ML","Python","Pandas","Scikit-Learn","Dashboard"]
  },
  {
    title: "StudyAura",
    description: "Adaptive Exam Preparation AI system using multi-agent architecture. Quiz, Planner and Performance Agent working together to enhance learning experience. Used NLP techniques,LLM integrations and API keys.Developed the system with python along with FastAPI and Streamlit for frontend.",
    link: "https://github.com/LochanaLithira/Adaptive-Exam-Preparation-AI",
    screenshots: ["images/1.png","images/2.png","images/3.png","images/4.png"],
    tech: ["NLP","LLM","FastAPI","MongoDB","Streamlit"]
  },
  {
    title: "BakedTato",
    description: "Web-based food delivery system for baked potato business.Developed using MERN stack with features like user authentication, menu browsing, order placement, and admin order management.",
    link: "",
    screenshots: ["images/bake1.png"],
    tech: ["React","Node.js","Express.js","MongoDB"]
  },
  {
    title: "WorkHive",
    description: "Online employee management system for HR operations. Developed using Java and SQL with features like employee records, attendance tracking, and performance evaluations. This mainly followed the MVC architecture.",
    link: "",
    screenshots: ["images/staff.jpg"],
    tech: ["Java","MySQL","HTML","CSS","Servlets","MVC"]
  },
  {
    title: "Adcraft - Online Advertising Agency",
    description: "Platform for creating & sharing online advertisements. Developed using HTML, CSS, JS, PHP & MySQL. Features include user registration, ad creation, campaign management, and analytics dashboard.",
    link: "",
    screenshots: ["images/adv.png"],
    tech: ["HTML","CSS","JS","PHP"]
  }
];

// ===== Populate Projects as Square Cards with Tech Tags =====
const projectsContainer = document.querySelector(".projects-container");
projectsContainer.innerHTML = "";
projects.forEach(proj=>{
  const card = document.createElement("div");
  card.className = "project-card";

  let imagesHTML = "";
  if(proj.screenshots && proj.screenshots.length>0){
    imagesHTML = `<div class="project-images">
      <img src="${proj.screenshots[0]}" alt="${proj.title}" class="clickable-img">
    </div>`;
  }

  let techHTML = `<div class="tech-tags">${proj.tech.map(t=>`<div class="tech">${t}</div>`).join("")}</div>`;

  let linkHTML = proj.link ? `<div class="git-link"><a href="${proj.link}" target="_blank">GitHub Link</a></div>` : "";

  card.innerHTML = `<h3>${proj.title}</h3>
    ${imagesHTML}
    <p>${proj.description}</p>
    ${techHTML}
    ${linkHTML}`;

  projectsContainer.appendChild(card);
});

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxThumbs = document.getElementById("lightbox-thumbs");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".clickable-img").forEach((img)=>{
  img.addEventListener("click", ()=>{
    const parentCard = img.closest(".project-card");
    const projectIndex = Array.from(projectsContainer.children).indexOf(parentCard);
    const project = projects[projectIndex];
    openLightbox(project);
  });
});
function openLightbox(project){
  lightbox.style.display="block";
  lightboxImg.src = project.screenshots[0];
  captionText.textContent = project.title;
  lightboxThumbs.innerHTML="";
  project.screenshots.forEach(s=>{
    const thumb = document.createElement("img");
    thumb.src = s;
    thumb.addEventListener("click", ()=>{lightboxImg.src=s;});
    lightboxThumbs.appendChild(thumb);
  });
}
closeBtn.onclick = ()=>{lightbox.style.display="none";}
lightbox.onclick = (e)=>{if(e.target===lightbox) lightbox.style.display="none";}

// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});
