export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Cinema Booking System",
      role: "Full-Stack Developer",
      period: "June 2025",
      problem: "Cinema booking workflows need clear browsing, seat selection, payment simulation, and admin control in one system.",
      built: "Built a full-stack booking app with movie browsing, showtime selection, interactive seats, simulated payment, authentication, and a role-based admin dashboard.",
      outcome: "Delivered a complete user and admin flow with reporting support for managing movies, halls, schedules, and bookings.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Tailwind CSS", "Recharts", "Vite"],
      achievements: [
        "Implemented email/password authentication and Google OAuth 2.0",
        "Built admin tools for managing movies, halls, schedules, and reports",
        "Created booking flows for showtimes, seat selection, and payment simulation",
        "Used Recharts for data-driven reporting"
      ],
      color: "blue",
      techColors: {
        "React": "blue-500/20 text-blue-300",
        "Node.js": "green-500/20 text-green-300",
        "Express.js": "gray-500/20 text-gray-300",
        "MongoDB": "emerald-500/20 text-emerald-300",
        "JWT": "purple-500/20 text-purple-300",
        "Bcrypt": "yellow-500/20 text-yellow-300",
        "Tailwind CSS": "cyan-500/20 text-cyan-300",
        "Recharts": "pink-500/20 text-pink-300",
        "Vite": "violet-500/20 text-violet-300"
      }
    },
    {
      id: 2,
      title: "NeuroCura AI",
      role: "Programmer",
      period: "October 2024 - November 2024",
      problem: "Users need an approachable way to ask educational questions about neurological and cognitive health topics.",
      built: "Built a PyQt6-based AI assistant prototype with Google Generative AI integration, modular message handling, and editable chat interactions.",
      outcome: "Improved interface responsiveness by moving API calls into a worker thread and separating AI, message, and UI logic.",
      technologies: ["Python", "PyQt6", "Google Generative AI"],
      achievements: [
        "Integrated Google Generative AI for health education support",
        "Improved responsiveness by handling API calls through a worker thread",
        "Structured the app into modular AI, message, and UI classes",
        "Added message editing to improve user control"
      ],
      color: "purple",
      techColors: {
        "Python": "blue-500/20 text-blue-300",
        "PyQt6": "green-500/20 text-green-300", 
        "Google Generative AI": "purple-500/20 text-purple-300"
      }
    },
      {
      id: 3,
      title: "SenseHarvest",
      role: "Capstone Lead",
      period: "June 2025 - August 2025",
      problem: "Small farmers need simple visibility into warehouse conditions and practical decision support.",
      built: "Led a capstone web platform for IoT-based temperature and humidity monitoring with a Gemini API-powered chatbot.",
      outcome: "Created a farmer-focused monitoring concept that combines environmental data visibility with AI-assisted recommendations.",
      technologies: ["React", "Express.js", "MongoDB", "Gemini API", "IoT Monitoring"],
      achievements: [
        "Led the capstone project during the Full-Stack Development & Cloud Security Track",
        "Built around IoT-based temperature and humidity monitoring",
        "Added a Gemini API-powered chatbot for farmer decision support",
        "Collaborated with a team of 5"
      ],
      color: "green",
      techColors: {
        "React": "blue-500/20 text-blue-300",
        "Express.js": "gray-500/20 text-gray-300",
        "MongoDB": "green-500/20 text-green-300",
        "Gemini API": "purple-500/20 text-purple-300",
        "IoT Monitoring": "orange-500/20 text-orange-300",
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
            Full-stack applications, AI prototypes, and farmer-focused product work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500">
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-2 ${getColorClass(project.color)}`}>
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4">{project.role} • {project.period}</p>
                <div className="space-y-3 text-white/80 leading-relaxed">
                  <p><span className="font-medium text-white">Problem:</span> {project.problem}</p>
                  <p><span className="font-medium text-white">What I Built:</span> {project.built}</p>
                  <p><span className="font-medium text-white">Outcome:</span> {project.outcome}</p>
                </div>
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
                {project.id === 2 && (
                  <a 
                    href="https://github.com/AwarewarAlmighty/NeuroCura-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 text-center ${getButtonClass(project.color)}`}
                  >
                    View on GitHub
                  </a>
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
