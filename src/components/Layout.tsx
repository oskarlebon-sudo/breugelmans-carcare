import { motion, AnimatePresence } from "motion/react";
import { LucideIcon, Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Diensten", href: "#diensten" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Over Ons", href: "#over-ons" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-baseline gap-2 hover:opacity-80 transition-opacity">
            <span className="font-serif text-xl tracking-tight">BREUGELMANS</span>
            <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-light">Carcare</span>
          </a>
        </div>
        
        {/* Center: Desktop Nav */}
        <div className="hidden md:flex justify-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-[10px]">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Button & Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <a href="#contact" className="text-[9px] uppercase tracking-[0.2em] py-2 px-5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 hidden sm:block">
            Boek nu
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="nav-link text-xs py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="premium-button-gold text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Boek nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Section = ({ id, children, className = "" }: { id?: string, children: ReactNode, className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    {children}
  </section>
);

export const ServiceCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: LucideIcon }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-panel p-6 md:p-8 flex flex-col gap-4"
  >
    <Icon className="w-8 h-8 text-gold opacity-80" />
    <h3 className="text-2xl">{title}</h3>
    <p className="text-sm opacity-60 leading-relaxed">{description}</p>
  </motion.div>
);

export const Footer = () => (
  <footer className="border-t border-white/10 py-12 px-6 md:px-12 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      <div>
        <div className="flex flex-col mb-6">
          <span className="font-serif text-xl tracking-tighter">BREUGELMANS</span>
          <span className="small-caps -mt-1 text-[8px]">Carcare</span>
        </div>
        <p className="text-xs opacity-40 leading-relaxed max-w-xs">
          Premium mobile detailing service gespecialiseerd in waardebehoud en esthetische perfectie van uw voertuig.
        </p>
      </div>
      <div>
        <h4 className="small-caps mb-6 opacity-100">Navigatie</h4>
        <ul className="flex flex-col gap-3 text-xs opacity-60">
          <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
          <li><a href="#diensten" className="hover:text-gold transition-colors">Diensten</a></li>
          <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
          <li><a href="#fleet" className="hover:text-gold transition-colors">Fleet Services</a></li>
          <li><a href="#over-ons" className="hover:text-gold transition-colors">Over Ons</a></li>
        </ul>
      </div>
      <div>
        <h4 className="small-caps mb-6 opacity-100">Contact</h4>
        <ul className="flex flex-col gap-3 text-xs opacity-60">
          <li>België - Mobile Service</li>
          <li>Rhune Breugelmans</li>
          <li>info@breugelmanscarcare.be</li>
        </ul>
      </div>
    </div>
    <div className="flex justify-between items-center pt-12 border-t border-white/5">
      <span className="text-[10px] opacity-30">© 2026 Breugelmans Carcare. Alle rechten voorbehouden.</span>
      <span className="text-[10px] opacity-30">Design by Elite Copy</span>
    </div>
  </footer>
);
