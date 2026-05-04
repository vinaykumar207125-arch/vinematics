import { motion } from 'motion/react';
import { useState } from 'react';
import { useSite } from '../context/SiteContext';

const categories = ["All", "Weddings", "Brand Shoots", "Cafes & Restaurants", "Fashion", "Products"];

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState("All");
  const { portfolioItems } = useSite();

  const filteredWorks = portfolioItems.filter(w => activeCat === "All" || w.cat === activeCat);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-white/20"></span>
              <span className="small-caps text-xs text-white/40">Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Our <span className="italic">Work</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 md:gap-4 max-w-xl justify-end"
          >
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCat(cat)}
                className={`small-caps text-[10px] md:text-xs px-4 py-2 rounded-full border transition-all ${
                  activeCat === cat 
                    ? "border-white text-black bg-white" 
                    : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredWorks.map((work, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={work.title + idx}
              className="group relative aspect-[4/5] overflow-hidden bg-white/5"
            >
              <img 
                src={work.img instanceof Blob ? URL.createObjectURL(work.img) : work.img} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="small-caps text-xs text-white/60 mb-2">{work.cat}</span>
                <h3 className="font-serif text-2xl text-white">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
