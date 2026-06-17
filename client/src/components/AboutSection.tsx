export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary px-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Building practical software at the intersection of full-stack development, AI, QA, and security-aware product thinking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">Software & AI Focus</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Full-Stack Web Development with React, Node.js & MongoDB</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">AI-Assisted Educational Platforms & Learning Tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Structured QA Testing Across Core Product Flows</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-white/80">Security-Aware Authentication & Cloud Workflows</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">Collaboration & Support</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Remote Coding Workshop Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Debugging Guidance in Jupyter & Runbox Environments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Team Leadership & Event Coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-white/80">Clear Documentation of Bugs, Issues & Follow-Ups</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Education & Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Current Education</h4>
              <p className="text-white/80">Bachelor of Science of Computing Candidate</p>
              <p className="text-white/60">President University • GPA: 3.83 / 4.00</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-300 mb-2">Professional Development</h4>
              <p className="text-white/80">Full-Stack Development & Cloud Security Track</p>
              <p className="text-white/60 mb-2">Korea-ASEAN Digital Academy • Jun-Aug 2025</p>
              <p className="text-white/70 text-sm">
                Selected for full-stack, cloud security, DevOps, data security, and AI ethics training.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-400 mb-2">Languages</h4>
              <p className="text-white/80">Bahasa Indonesia (Native)</p>
              <p className="text-white/80">English (DET Score: 115)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
