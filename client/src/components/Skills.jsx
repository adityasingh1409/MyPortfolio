import React from 'react';

const Skills = () => {
  const skillset = [
    {
      category: "Languages",
      items: [
        { name: "C++", color: "#00599C" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "C", color: "#A8B9CC" },
        { name: "PHP", color: "#777BB4" },
        { name: "Java", color: "#007396" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "HTML & CSS", color: "#E34F26" },
        { name: "NodeJS", color: "#339933" },
        { name: "React", color: "#61DAFB" },
        { name: "Express.js", color: "#cfcfcf" },
        { name: "Java SpringBoot", color: "#6DB33F" },
        { name: "Laravel", color: "#FF2D20" },
        { name: "Redux", color: "#764ABC" },
        { name: "Tailwind CSS", color: "#38B2AC" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "MongoDB", color: "#47A248" },
        { name: "Mongoose", color: "#880000" },
        { name: "MySQL", color: "#4479A1" },
        { name: "REST API", color: "#0088CC" },
        { name: "Linux", color: "#FCC624" }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "Jenkins", color: "#D33833" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="header-subtitle">TECHNICAL ARSENAL</span>
        <div className="divider"></div>
      </div>

      <div style={{ zIndex: 10, width: '100%' }}>
        {skillset.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: '4rem' }}>
            <h3 className="oxanium-text" style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center' }}>
              {group.category}
            </h3>
            <div className="skills-container" style={{ marginTop: '0' }}>
              {group.items.map((tech, i) => (
                <div 
                  key={i} 
                  className="skill-bubble" 
                  style={{ 
                    '--glow-color': tech.color,
                    border: `1px solid ${tech.color}40`
                  }}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
