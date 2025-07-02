export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Person In Charge, Event Organizer",
      organization: "President University",
      project: "'Proud To Be Catholic' (PTBC) New Student Welcoming Event",
      period: "February 2024 - September 2024",
      description: "Led event from concept to completion, developed master rundown and directed live on-site execution, managing program flow and coordinating team for seamless delivery.",
      color: "blue",
      align: "right"
    },
    {
      id: 2,
      title: "Member, Event Organizer",
      organization: "President University",
      project: "Annual Easter Celebration",
      period: "January 2024 - May 2024",
      description: "Part of 5-person committee planning and executing annual Easter celebration. Designed event rundown and directed on-site execution through live timeline management.",
      color: "purple",
      align: "left"
    },
    {
      id: 3,
      title: "Member, Event Organizer",
      organization: "President University",
      project: "Campus Christmas Celebration",
      period: "November 2023 - January 2024",
      description: "Part of 6-person committee directing key logistics for campus Christmas celebration. Constructed master event rundown and managed on-site coordination.",
      color: "green",
      align: "right"
    },
    {
      id: 4,
      title: "Member of KomSel",
      organization: "PuCatSo (President University Catholic Society)",
      project: "Content Management & Speaker Coordination",
      period: "October 2023 - October 2024",
      description: "Responsible for managing content for KomSel including themes, Saint of the week selections, titles and speaker coordination according to raised themes.",
      color: "yellow",
      align: "left"
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
            Leadership roles in event management and community engagement
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
                  <p className="text-white/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
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
