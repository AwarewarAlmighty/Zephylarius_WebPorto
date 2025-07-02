export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "NeuroCura AI",
      period: "October 2024 - November 2024",
      description: "AI assistant focused on neurological and cognitive health for both general and professional use.",
      technologies: ["Python", "PyQt6", "Google AI"],
      achievements: [
        "100% responsive UI during AI computations via worker threads",
        "60% modular codebase for enhanced reusability", 
        "25% reduction in user interaction friction",
        "40% faster development through strategic framework use"
      ],
      color: "blue",
      techColors: {
        "Python": "blue-500/20 text-blue-300",
        "PyQt6": "green-500/20 text-green-300", 
        "Google AI": "purple-500/20 text-purple-300"
      }
    },
    {
      id: 2,
      title: "Cinema Booking System",
      period: "June 2025 (24-hour Hackathon)",
      description: "Full-stack cinema booking web application developed within a 24-hour mini-hackathon, demonstrating rapid development skills.",
      technologies: ["React", "Supabase", "Tailwind CSS", "React Router"],
      achievements: [
        "10+ core features including user authentication",
        "Interactive seat selection and payment system",
        "Comprehensive admin panel with CRUD operations", 
        "Responsive design across all devices"
      ],
      color: "purple",
      techColors: {
        "React": "blue-500/20 text-blue-300",
        "Supabase": "green-500/20 text-green-300",
        "Tailwind CSS": "cyan-500/20 text-cyan-300",
        "React Router": "orange-500/20 text-orange-300"
      }
    }
  ];

  const getColorClass = (color: string) => {
    return color === 'blue' ? 'text-gray-300' : 'text-gray-400';
  };

  const getButtonClass = (color: string) => {
    return color === 'blue' ? 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30' : 'bg-gray-600/20 text-gray-400 hover:bg-gray-600/30';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary px-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-white/70 px-4">
            Innovative solutions in AI healthcare and web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500">
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-2 ${getColorClass(project.color)}`}>
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4">{project.period}</p>
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 rounded-full text-sm bg-${project.techColors[tech as keyof typeof project.techColors] || 'gray-500/20 text-gray-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-white">Key Achievements</h4>
                <div className="space-y-2 text-sm text-white/70">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 ${project.color === 'blue' ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mt-2`}></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {project.id === 1 ? (
                  <a 
                    href="https://github.com/AwarewarAlmighty/NeuroCura-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 text-center ${getButtonClass(project.color)}`}
                  >
                    View on GitHub
                  </a>
                ) : (
                  <>
                    <a 
                      href="https://github.com/AwarewarAlmighty/Cinema-Booking-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 text-center ${getButtonClass(project.color)}`}
                    >
                      View on GitHub
                    </a>
                    <a 
                      href="https://cinema-booking-system.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 btn-glass text-white rounded-lg text-center"
                    >
                      Live Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
