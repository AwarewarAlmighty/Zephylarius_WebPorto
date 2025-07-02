import { useEffect, useRef } from "react";

export default function SkillsSection() {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate skill bars when they come into view
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      skillBarsRef.current.forEach((bar) => {
        if (bar) {
          const width = bar.getAttribute('data-width') || '0%';
          window.gsap.fromTo(bar,
            { width: '0%' },
            {
              width: width,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    }
  }, []);

  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C++", level: 80 }
  ];

  const frameworks = [
    { name: "React", level: "Advanced" },
    { name: "PyQt6", level: "Expert" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Supabase", level: "Intermediate" },
    { name: "Google AI", level: "Advanced" }
  ];

  const cybersecuritySkills = [
    "Risk Assessment",
    "Vulnerability Analysis", 
    "Ethical Hacking",
    "Hardware Maintenance"
  ];

  const softSkills = [
    "Event Management",
    "Leadership",
    "Public Speaking", 
    "Problem Solving",
    "Teamwork"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500/20 text-green-300";
      case "Advanced": return "bg-blue-500/20 text-blue-300";
      case "Intermediate": return "bg-purple-500/20 text-purple-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70">
            Comprehensive technical and soft skills portfolio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Programming Languages */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-blue-300 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              Programming Languages
            </h3>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      ref={(el) => skillBarsRef.current[index] = el}
                      className="skill-bar h-2 rounded-full" 
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Tools */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-purple-300 flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              Frameworks & Tools
            </h3>
            <div className="space-y-3">
              {frameworks.map((framework) => (
                <div key={framework.name} className="flex items-center justify-between">
                  <span className="text-white/80">{framework.name}</span>
                  <div className={`px-2 py-1 rounded text-xs ${getLevelColor(framework.level)}`}>
                    {framework.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cybersecurity */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-red-300 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
              Cybersecurity
            </h3>
            <div className="space-y-3">
              {cybersecuritySkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-green-300">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {softSkills.map((skill) => (
              <div key={skill} className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                <span className="text-white/80">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
