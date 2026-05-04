import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function Hero() {
  const { heroBg } = useSite();
  const bgUrl = heroBg instanceof Blob ? URL.createObjectURL(heroBg) : heroBg;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgUrl} 
          alt="Cinematic Camera Setup" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="small-caps text-xs md:text-sm text-white/60 mb-6 block">Premium Photography & Cinematography</span>
          <h1 className="font-serif title-text text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl mx-auto font-light">
            Cinematic Visuals <br />
            <span className="italic text-white/90">That Elevate Your Brand</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/70 max-w-2xl text-sm md:text-base font-light leading-relaxed mb-12"
        >
          We don't just capture moments — we craft powerful visual stories that build brands, create impact, and leave a lasting impression.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full small-caps text-xs font-semibold hover:scale-105 transition-transform">
            Book a Shoot
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full small-caps text-xs hover:bg-white/5 transition-colors group">
            View Portfolio <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="small-caps text-[10px] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
