import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Instagram, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vinematics completely transformed our brand visuals. Highly professional and cinematic work.",
    author: "Brand Client"
  },
  {
    quote: "Best photographer in Delhi for premium shoots. Highly recommended.",
    author: "Wedding Couple"
  }
];

export default function TestimonialsAndContact() {
  return (
    <section id="contact" className="bg-transparent pt-24 md:pt-32">
      
      {/* Testimonials */}
      <div className="container mx-auto max-w-7xl px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="small-caps text-xs text-white/40 block mb-4">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light">
            What Clients <span className="italic">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="px-8 py-12 border border-white/10 relative"
            >
              <Quote className="absolute top-8 left-8 w-8 h-8 text-white/10" />
              <p className="font-serif text-xl md:text-2xl font-light text-white/80 leading-relaxed relative z-10 mb-8 mt-6">
                "{t.quote}"
              </p>
              <span className="small-caps text-xs text-white/40">{t.author}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact & Footer */}
      <div className="border-t border-white/10 bg-black/40 py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-8 max-w-4xl leading-tight">
              Let's Create Something <span className="italic">Cinematic</span>
            </h2>
            <a href="mailto:vinematics01@gmail.com" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full small-caps text-sm font-semibold hover:scale-105 transition-transform">
              Book Your Shoot Today
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl border-t border-white/10 pt-16">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-5 h-5 text-white/40" />
              <span className="text-white/80 font-light">Delhi, India</span>
              <span className="small-caps text-[10px] text-white/40">Location</span>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-5 h-5 text-white/40" />
              <a href="mailto:vinematics01@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">vinematics01@gmail.com</a>
              <span className="small-caps text-[10px] text-white/40">Email</span>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <Phone className="w-5 h-5 text-white/40" />
              <a href="tel:+917351318800" className="text-white/80 font-light hover:text-white transition-colors">+91 7351318800</a>
              <span className="small-caps text-[10px] text-white/40">Phone</span>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <Instagram className="w-5 h-5 text-white/40" />
              <a href="https://instagram.com/vinematics.in" target="_blank" rel="noreferrer" className="text-white/80 font-light hover:text-white transition-colors">@vinematics.in</a>
              <span className="small-caps text-[10px] text-white/40">Social</span>
            </div>
          </div>

        </div>

        <div className="mt-24 text-center border-t border-white/5 pt-8">
          <p className="text-white/30 small-caps text-[10px]">
             © {new Date().getFullYear()} Vinematics. All rights reserved.
          </p>
        </div>
      </div>
      
    </section>
  );
}
