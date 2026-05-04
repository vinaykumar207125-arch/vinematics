import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision & requirements" },
  { num: "02", title: "Concept", desc: "Creating moodboards & shot planning" },
  { num: "03", title: "Production", desc: "High-quality shoot execution" },
  { num: "04", title: "Post-Production", desc: "Cinematic editing & color grading" },
  { num: "05", title: "Delivery", desc: "Fast & premium output" },
];

const benefits = [
  { icon: <Shield className="w-5 h-5"/>, text: "Boost your brand image" },
  { icon: <Users className="w-5 h-5"/>, text: "Increase social media engagement" },
  { icon: <Zap className="w-5 h-5"/>, text: "Stand out from competitors" },
  { icon: <TrendingUp className="w-5 h-5"/>, text: "Create a strong visual identity" },
];

const reasons = [
  "Cinematic & premium quality visuals",
  "Strong storytelling approach",
  "Fast turnaround time",
  "Delhi-based, available pan India",
  "Professional gear & editing workflow"
];

export default function ProcessAndBenefits() {
  return (
    <section className="py-24 md:py-32 bg-black/20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Process */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="small-caps text-xs text-white/40">Our Process</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                How We <span className="italic">Work</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="font-serif italic text-2xl text-white/20 group-hover:text-white transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white mb-1 group-hover:-translate-y-1 transition-transform">{step.title}</h4>
                    <p className="text-sm font-light text-white/50">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Us & Benefits */}
          <div className="flex flex-col gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="small-caps text-xs text-white/40">Why Choose Us</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                Why <span className="italic">Vinematics?</span>
              </h2>
              
              <ul className="space-y-4 text-white/60 font-light text-sm">
                {reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-white/30" />
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="font-serif text-2xl font-light mb-4">Driving <span className="italic">Conversion</span></h3>
              <p className="text-sm font-light text-white/60 mb-6">
                High-quality visuals help businesses build trust, improve branding, and increase engagement across platforms.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-white/40 mt-0.5">{benefit.icon}</div>
                    <span className="text-sm font-light text-white/80">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
