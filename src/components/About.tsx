import { motion } from 'motion/react';
import aboutImage from '../assets/images/regenerated_image_1777852202528.png';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative">
            <motion.div 
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-t-full rounded-b-full overflow-hidden"
            >
              <img 
                src={aboutImage} 
                alt="Cinematographer in action"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center p-6 backdrop-blur-md hidden md:flex z-10 bg-black/20">
                <p className="text-center font-serif italic text-white/70 text-sm">
                  “Available for collaborations, brand shoots, and creative projects.”
                </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-white/20"></span>
              <span className="small-caps text-xs text-white/40">About Us</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              About <span className="italic">Vinematics</span>
            </h2>

            <div className="space-y-6 text-white/70 font-light text-base leading-relaxed">
              <p>
                Vinematics is a premium photography & cinematography brand based in Delhi, specializing in cinematic storytelling and high-end visual content.
              </p>
              <p>
                We work with brands, businesses, and individuals to create visuals that don't just look good — they perform. From luxury weddings to brand campaigns, our goal is to transform every frame into a powerful story.
              </p>
              <p>
                With a deep understanding of lighting, composition, and storytelling, we deliver content that builds trust, enhances brand identity, and drives engagement.
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
