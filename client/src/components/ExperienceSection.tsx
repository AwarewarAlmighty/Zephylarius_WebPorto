export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Developer Intern",
      organization: "Elice via PT. Inti Artistika Solusitama",
      project: "AI-Powered Educational Platforms",
      period: "October 2025 - May 2026",
      highlights: [
        "Refined frontend flows for AI-powered educational platform features",
        "Ran structured QA across project generation, slide generation, library functions, and content workflows",
        "Tested desktop and mobile responsiveness for clearer learning experiences",
        "Reviewed AI-generated outputs for correctness, consistency, and educational usefulness"
      ],
      color: "blue",
      align: "right"
    },
    {
      id: 2,
      title: "Virtual Teaching Assistant",
      organization: "Elice",
      project: "Remote Coding Workshops",
      period: "November 2025 - December 2025",
      highlights: [
        "Supported learners during remote coding workshops using Jupyter and Runbox environments",
        "Helped participants debug issues and understand coding concepts during hands-on sessions",
        "Monitored technical blockers and guided learners through workshop flow"
      ],
      color: "purple",
      align: "left"
    },
    {
      id: 3,
      title: "Leadership & Event Organizer",
      organization: "President University Catholic Society",
      project: "Student Welcoming, Christmas, Easter & KomSel Activities",
      period: "November 2023 - October 2024",
      highlights: [
        "Coordinated logistics, timelines, and team communication for campus events",
        "Developed master rundowns and supported live on-site execution",
        "Prepared weekly content themes, titles, and speaker coordination for KomSel activities"
      ],
      color: "yellow",
      align: "right"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-gray-300 bg-gray-400",
      purple: "text-gray-400 bg-gray-500",
      green: "text-gray-500 bg-gray-600",
      yellow: "text-gray-200 bg-gray-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary px-4">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-white/70 px-4">
            Work experience, teaching support, and student leadership
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gray-400 to-gray-600 hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center justify-between w-full md:justify-center ${
                exp.align === 'left' ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content Card */}
                <div className={`glass-card rounded-xl p-6 w-full md:w-5/12 ${
                  exp.align === 'right' ? 'ml-auto md:ml-0' : ''
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-semibold ${getColorClasses(exp.color).split(' ')[0]}`}>
                      {exp.title}
                    </h3>
                    <span className="text-sm text-white/60 md:hidden">{exp.period}</span>
                  </div>
                  <p className="text-white/80 mb-2">{exp.organization}</p>
                  <p className="text-white/60 mb-4">{exp.project}</p>
                  <div className="space-y-2 text-sm text-white/70">
                    {exp.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 ${exp.color === 'blue' ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${getColorClasses(exp.color).split(' ')[1]} rounded-full border-4 border-slate-900 hidden md:block`}></div>
                
                {/* Period */}
                <div className={`hidden md:block w-5/12 ${
                  exp.align === 'left' ? 'text-left pl-8' : 'text-right pr-8'
                }`}>
                  <span className="text-white/60">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
