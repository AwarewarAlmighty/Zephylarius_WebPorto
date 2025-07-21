import { useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "@/assets/profile.jpg";

// Get the backend URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || "";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      window.gsap.to(".animate-float", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }
  }, []);

  const handleScrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Picture Column */}
            <div className="flex-shrink-0">
              <img
                src={profilePic}
                alt="Zephylarius Sitanggang"
                className="w-48 md:w-56 rounded-3xl border-4 border-white/20 shadow-lg"
              />
            </div>

            {/* Text Content Column */}
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-rainbow">
                Zephylarius Sitanggang
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6">
                Cybersecurity Specialist & Event Management Expert
              </p>
              <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto md:mx-0">
                A solutions-oriented Informatics student building secure
                digital solutions while creating flawlessly orchestrated
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={handleScrollToProjects}
                  className="group relative inline-flex items-center justify-center px-6 py-3 btn-primary rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleScrollToContact}
                  className="inline-flex items-center justify-center px-6 py-3 btn-glass text-white rounded-full font-medium"
                >
                  Get In Touch
                </button>
                {/* Updated Download CV Button */}
                <a
                  href={`${API_URL}/download/cv`}
                  className="group relative inline-flex items-center justify-center px-6 py-3 btn-glass text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Download CV
                  <Download className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <div className="glass-effect rounded-full px-5 py-2 hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-medium">GPA: 3.87</span>
                </div>
                <div className="glass-effect rounded-full px-5 py-2 hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-medium">
                    President University
                  </span>
                </div>
                <div className="glass-effect rounded-full px-5 py-2 hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-medium">2023-Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}