import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essential Collection",
    target: "For portraits & small events",
    price: "Custom Quote",
    desc: "Perfect for intimate gatherings, personal branding, or creative portraits.",
    features: [
      "Up to 4 hours of coverage",
      "Professional editing & color grading",
      "High-resolution digital gallery",
      "1 Cinematic short reel",
      "Standard delivery time"
    ],
    highlight: false
  },
  {
    name: "Premium Cinematic",
    target: "For weddings & luxury events",
    price: "Custom Quote",
    desc: "Our signature storytelling package designed to capture every detail of your big day.",
    features: [
      "Full day coverage (up to 10 hours)",
      "Multi-camera cinematic setup",
      "Cinematic highlight film (5-7 mins)",
      "Full gallery of high-end edited images",
      "Aerial/Drone footage included",
      "Priority editing workflow"
    ],
    highlight: true
  },
  {
    name: "Brand & Commercial",
    target: "For businesses & products",
    price: "Custom Quote",
    desc: "Strategic visual content designed to elevate your brand across all digital platforms.",
    features: [
      "Strategic visual planning & moodboards",
      "High-end product/brand photography",
      "Commercial short-form videos (Reels/Ads)",
      "Commercial usage & broadcasting rights",
      "Dedicated creative director"
    ],
    highlight: false
  }
];

export default function ShootPlans() {
  return (
    <section id="plans" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span className="small-caps text-xs text-white/40">Investment</span>
            <span className="w-12 h-[1px] bg-white/20"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Shoot <span className="italic">Plans</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light">
            Tailored visual solutions for individuals, couples, and businesses. Choose the perfect tier for your cinematic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`p-8 md:p-10 border transition-all duration-500 relative ${
                plan.highlight 
                  ? 'border-white/30 bg-white/5 scale-100 md:scale-105 z-10' 
                  : 'border-white/10 bg-transparent hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black small-caps text-[10px] px-4 py-1.5 rounded-full font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-serif text-2xl text-white mb-2">{plan.name}</h3>
                <p className="small-caps text-[10px] text-white/40 mb-6">{plan.target}</p>
                <div className="text-3xl font-light text-white mb-4">{plan.price}</div>
                <p className="text-sm font-light text-white/60 min-h-[60px]">{plan.desc}</p>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm font-light text-white/70">
                    <Check className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`block w-full text-center py-4 text-xs small-caps transition-all ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border border-white/20 text-white hover:bg-white hover:text-black'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 font-light text-sm italic font-serif">
            Note: All plans are customizable. Contact us for detailed pricing and availability tailored to your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
