const projects = [
  {
    title: "WanderLust",
    description:
      " Developed a full-stack rental marketplace allowing users to explore, search and manage property listings with cloud-based image uploads. " +
      "Implemented secure authentication, authorization, and session management using Passport.js with MongoDB",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Cloudinary",
      "Bootstrap",
    ],
    live: "#",
    github: "https://github.com/Krushna-fargade3434/airBNB.git",
  },
    {
    title: "MiniGPT",
    description:
      "Built AI chat assistant supporting persistent conversation threads with real-time OpenAI responses. " +
      "Developed a responsive React frontend with Markdown rendering and syntax highlighting.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    live: "https://mini-gptx.vercel.app",
    github: "https://github.com/Krushna-fargade3434/MiniGPT",
  },
  {
    title: "PayTrax",
    description:
      "Built a full-stack web application for tracking expenses and income with real-time analytics. " +
      "Implemented secure authentication using Supabase with Row-Level Security (RLS). " +
      "Developed interactive dashboards with financial data visualization.",
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    live: "https://paytrax.vercel.app",
    github: "https://github.com/Krushna-fargade3434/PAYTRAX.git",
  },
  {
    title: "Weather App – React Weather Dashboard",
    description:
      "Developed a responsive weather dashboard that provides real-time weather information using the OpenWeatherMap API. " +
      "Built a clean, interactive UI with React.js and Material-UI, city search, error handling, and smooth animations.",
    tech: [
      "React.js",
      "Material-UI",
      "JavaScript (ES6+)",
      "OpenWeatherMap API",
      "HTML5",
      "CSS3",
      "Vite",
    ],
    live: "#",
    github: "https://github.com/Krushna-fargade3434/weatherDost",
  },
  {
    title: "Scriblet – Secure Notes Management Web Application",
    description:
      "Built a secure notes management app with authentication for creating, editing, organizing, pinning, and favoriting personal notes. " +
      "Developed a responsive React UI with customizable note backgrounds, search, dark/light mode, animations, and PWA support.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vite",
      "PWA",
    ],
    live: "https://scriblet.vercel.app/",
    github: "https://github.com/Krushna-fargade3434/SCRIBLET",
  },
];

function Projects() {
  return (
    <section id="projects" style={{paddingTop:80, paddingBottom:80}}>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="section-title text-center mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card rounded-2xl p-10 transition"
            >
                <h3 className="text-xl font-semibold accent">
                {project.title}
              </h3>

                <p className="muted mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-transparent px-2 py-1 rounded-md muted border border-transparent" 
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-link accent"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-link accent"
                >
                  GitHub →
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;