import { motion } from 'motion/react';
import { Video, Briefcase, Camera, Mic2, Smartphone, Aperture } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-6 h-6 stroke-1" />,
    title: "Wedding Cinematography",
    desc: "Timeless, emotional, and cinematic wedding films that capture every detail beautifully."
  },
  {
    icon: <Briefcase className="w-6 h-6 stroke-1" />,
    title: "Brand & Commercial",
    desc: "Strategic visual content designed to elevate your brand presence across digital platforms."
  },
  {
    icon: <Camera className="w-6 h-6 stroke-1" />,
    title: "Product Photography",
    desc: "High-end, detail-focused product visuals for e-commerce and advertising."
  },
  {
    icon: <Mic2 className="w-6 h-6 stroke-1" />,
    title: "Event Coverage",
    desc: "Professional coverage for corporate events, shows, and special occasions."
  },
  {
    icon: <Smartphone className="w-6 h-6 stroke-1" />,
    title: "Reels & Social Media",
    desc: "Scroll-stopping Instagram reels and short-form videos tailored for engagement."
  },
  {
    icon: <Aperture className="w-6 h-6 stroke-1" />,
    title: "Portrait & Fashion",
    desc: "Creative and premium portraits with a cinematic touch."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-white/20"></span>
              <span className="small-caps text-xs text-white/40">Services</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              What We <span className="italic">Create</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-r border-white/10 p-10 md:p-12 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="mb-8 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl mb-4 text-white/90 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
