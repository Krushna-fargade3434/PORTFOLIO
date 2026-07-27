const skills = [
{
    title: "Languages",
    items: ["Java", "JavaScript", "C++", "Python"],
  },
  {
    title: "Web Development",
    items: ["React", "Tailwind", "HTML", "CSS","Node.js", "Express","EJS"],
  },
  {
    title: "Databases",
    items: ["SQL","MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code","Terminal"],
  },
];

function Skills() {
  return (
    <section id="skills" style={{paddingTop:80, paddingBottom:80}}>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="section-title text-center mb-12">Technical Expertise</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card rounded-xl p-6 transition"
            >
                <h3 className="card-title font-semibold mb-4 accent">
                {skill.title}
              </h3>

                <ul className="space-y-2 muted">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;