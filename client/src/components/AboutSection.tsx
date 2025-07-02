export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary px-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Bridging the gap between cybersecurity and event management through innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">Cybersecurity Focus</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Vulnerability Analysis & Ethical Hacking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Risk Assessment & Security Protocols</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Python, Java & C++ Security Applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Computer Hardware Maintenance</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">Event Management</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">End-to-End Event Orchestration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Team Leadership & Coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Master Rundown Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Live Event Execution</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Education & Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Current Education</h4>
              <p className="text-white/80">Bachelor of Science in Computing</p>
              <p className="text-white/60">President University • GPA: 3.87</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-400 mb-2">Languages</h4>
              <p className="text-white/80">Bahasa Indonesia (Native)</p>
              <p className="text-white/80">English (DET Score: 115)</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-200 mb-2">Contact</h4>
              <p className="text-white/80">+62 81382728069</p>
              <p className="text-white/80">zephylarius.zl@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
