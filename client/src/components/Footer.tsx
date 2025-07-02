import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Zephylarius Sitanggang</h3>
          <p className="text-white/70 mb-6">
            Cybersecurity Specialist • Event Management Expert • Full-Stack Developer
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:zephylarius.zl@gmail.com" 
              className="glass-effect rounded-full p-3 hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zephylarius-sitanggang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect rounded-full p-3 hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="tel:+6281382728069" 
              className="glass-effect rounded-full p-3 hover:scale-110 transition-transform duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/50 text-sm">
            © 2025 Zephylarius Sitanggang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
