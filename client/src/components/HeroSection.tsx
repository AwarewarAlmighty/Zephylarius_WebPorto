import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    // Add floating animation to background elements
    if (typeof window !== 'undefined' && window.gsap) {
      window.gsap.to('.animate-float', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }
  }, []);

  const handleScrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-rainbow">
            Zephylarius Sitanggang
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Cybersecurity Specialist & Event Management Expert
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            A solutions-oriented Informatics student with dual specialization in cybersecurity and end-to-end event management. 
            Building secure digital solutions while creating flawlessly orchestrated experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center justify-center px-8 py-4 btn-primary rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 btn-glass text-white rounded-full font-medium"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="glass-effect rounded-full px-6 py-3 hover:scale-110 transition-transform duration-300">
              <span className="text-sm font-medium">GPA: 3.87</span>
            </div>
            <div className="glass-effect rounded-full px-6 py-3 hover:scale-110 transition-transform duration-300">
              <span className="text-sm font-medium">President University</span>
            </div>
            <div className="glass-effect rounded-full px-6 py-3 hover:scale-110 transition-transform duration-300">
              <span className="text-sm font-medium">2023-Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
