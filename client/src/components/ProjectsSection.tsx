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
      period: "June 2025",
      description: "A full-stack web application for a cinema booking system that allows users to browse movies, select showtimes, book seats, and make payments. It also features a comprehensive admin panel for managing movies, halls, showtimes, and viewing reports.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "AWS EC2", "Express.js"],
      achievements: [
        "Full-Stack Application Development",
        "Comprehensive User Experience",
        "Advanced Admin Pane", 
        "Data-Driven Reporting"
      ],
      color: "purple",
      techColors: {
        "React": "blue-500/20 text-blue-300",
        "Tailwind CSS": "cyan-500/20 text-cyan-300",
        "MongoDB": "green-500/20 text-green-300",
        "AWS EC2": "orange-500/20 text-orange-300",
        "Express.js": "gray-500/20 text-gray-300"
      }
    },
      {
      id: 3,
      title: "SenseHarvest",
      period: "In Progress",
      description: "A capstone project for small farmers to monitor warehouse conditions like temperature, gas level, and humidity. I am working with 4 other people in my team.",
      technologies: ["React", "Express.js", "MongoDB"],
      achievements: [
        "Real-time monitoring of warehouse environment.",
        "Data visualization for farmers.",
        "Collaborative project with a team of 5."
      ],
      color: "green",
      techColors: {
        "React": "blue-500/20 text-blue-300",
        "Express.js": "gray-500/20 text-gray-300",
        "MongoDB": "green-500/20 text-green-300",
      }
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-gray-300';
      case 'purple':
        return 'text-gray-400';
      case 'green':
        return 'text-gray-200';
      default:
        return 'text-gray-300';
    }
  };

  const getButtonClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30';
      case 'purple':
        return 'bg-gray-600/20 text-gray-400 hover:bg-gray-600/30';
      case 'green':
        return 'bg-gray-400/20 text-gray-200 hover:bg-gray-400/30';
      default:
        return 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30';
    }
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
                {project.id === 1 && (
                  <a 
                    href="https://github.com/AwarewarAlmighty/NeuroCura-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 text-center ${getButtonClass(project.color)}`}
                  >
                    View on GitHub
                  </a>
                )}
                {project.id === 2 && (
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
                {project.id === 3 && (
                  <a 
                    href="https://github.com/namdosikh/SenseHarvest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 text-center ${getButtonClass(project.color)}`}
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}