export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", level: "Strong" },
    { name: "Java", level: "Strong" },
    { name: "C++", level: "Working" },
    { name: "TypeScript", level: "Working" },
    { name: "Node.js", level: "Strong" }
  ];

  const fullStackSkills = [
    "React",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS"
  ];

  const aiCloudDevopsSkills = [
    "Google Generative AI",
    "Cloud Services",
    "CI/CD",
    "Netlify"
  ];

  const cybersecuritySkills = [
    "Vulnerability Analysis", 
    "Ethical Hacking",
    "Secure Authentication (JWT)",
    "OAuth 2.0"
  ];

  const tools = [
    "Visual Studio Code",
    "Android Studio",
    "Oracle VirtualBox"
  ];

  const softSkills = [
    "Leadership",
    "Coordination",
    "Public Speaking", 
    "Problem-Solving",
    "Teamwork"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary px-4">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-white/70 px-4">
            Practical technical toolkit for full-stack, AI, QA, and secure product development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Full-Stack */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-300 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              Full-Stack
            </h3>
            <div className="space-y-3">
              {fullStackSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* AI / Cloud / DevOps */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-400 flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
              AI / Cloud / DevOps
            </h3>
            <div className="space-y-3">
              {aiCloudDevopsSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cybersecurity */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-500 flex items-center">
              <div className="w-3 h-3 bg-gray-600 rounded-full mr-3"></div>
              Cybersecurity
            </h3>
            <div className="space-y-3">
              {cybersecuritySkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Tools */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-300 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              Tools
            </h3>
            <div className="space-y-3">
              {tools.map((tool) => (
                <div key={tool} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-white/80">{tool}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-400 flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
              Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Programming Languages */}
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {programmingSkills.map((skill) => (
              <div key={skill.name} className="glass-effect rounded-full px-4 py-2">
                <span className="text-white/85">{skill.name}</span>
                <span className="text-white/45 mx-2">•</span>
                <span className="text-white/60 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
