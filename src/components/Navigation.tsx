import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <Camera className="w-5 h-5 text-white" />
        <span className="font-serif font-medium text-xl tracking-wide text-white">Vinematics</span>
      </div>
      
      <div className="hidden md:flex gap-8 small-caps text-xs text-white/80">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#plans" className="hover:text-white transition-colors">Plans</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <a 
        href="#contact"
        className="hidden md:inline-flex items-center justify-center border border-white/20 rounded-full px-5 py-2.5 small-caps text-xs text-white hover:bg-white hover:text-black transition-all"
      >
        Book Shoot
      </a>
    </motion.nav>
  );
}
