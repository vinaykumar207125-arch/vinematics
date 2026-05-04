import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings2, X, Plus, Trash2, Image as ImageIcon, Upload } from 'lucide-react';
import { useSite, PortfolioItem } from '../context/SiteContext';

const AVAILABLE_CATEGORIES = ["Weddings", "Brand Shoots", "Cafes & Restaurants", "Fashion", "Products"];

const GRADIENT_PRESETS = [
  { name: 'Cinematic Dark', value: '#050505' },
  { name: 'Midnight Purple', value: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' },
  { name: 'Deep Crimson', value: 'linear-gradient(135deg, #1f0101, #380b0b, #120000)' },
  { name: 'Abyss Blue', value: 'linear-gradient(to bottom right, #000428, #004e92)' },
  { name: 'Emerald Shadow', value: 'linear-gradient(to right, #000000, #0f2027, #203a43, #2c5364)' },
];

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'bg' | 'portfolio'>('bg');
  const { globalBgColor, setGlobalBgColor, heroBg, setHeroBg, portfolioItems, addPortfolioItem, removePortfolioItem } = useSite();
  
  const heroFileInputRef = useRef<HTMLInputElement>(null);
  const portfolioFileInputRef = useRef<HTMLInputElement>(null);

  const [newTitle, setNewTitle] = useState('');
  const [newCat, setNewCat] = useState(AVAILABLE_CATEGORIES[0]);
  const [newFile, setNewFile] = useState<File | null>(null);

  const handleHeroBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setHeroBg(file);
  };

  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNewFile(file);
  };

  const handleAddPortfolio = () => {
    if (!newFile || !newTitle) return;
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      img: newFile,
      cat: newCat,
      title: newTitle
    };
    addPortfolioItem(newItem);
    setNewFile(null);
    setNewTitle('');
    if (portfolioFileInputRef.current) portfolioFileInputRef.current.value = '';
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
        title="Admin Settings"
      >
        <Settings2 className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#111] border-l border-white/10 shadow-2xl z-[60] flex flex-col items-stretch overflow-hidden text-white"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-serif text-2xl font-light">Site settings</h2>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('bg')}
                className={`flex-1 py-4 small-caps text-xs transition-colors ${activeTab === 'bg' ? 'text-white border-b-2 border-white' : 'text-white/40 hover:text-white/80'}`}
              >
                Backgrounds
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`flex-1 py-4 small-caps text-xs transition-colors ${activeTab === 'portfolio' ? 'text-white border-b-2 border-white' : 'text-white/40 hover:text-white/80'}`}
              >
                Portfolio Images
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              
              {activeTab === 'bg' && (
                <div className="space-y-10">
                  
                  {/* Hero Background */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm text-white/80">Hero Background</h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed">Choose an image for the main landing area of your site.</p>
                    
                    <div 
                      className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/5 hover:border-white/40 transition-colors cursor-pointer group"
                      onClick={() => heroFileInputRef.current?.click()}
                    >
                      <input 
                        type="file" 
                        accept="image/*" 
                        ref={heroFileInputRef} 
                        onChange={handleHeroBgUpload} 
                        className="hidden" 
                      />
                      <ImageIcon className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-colors" />
                      <span className="small-caps text-xs text-white/50 group-hover:text-white/80">Upload Hero Image</span>
                    </div>

                    {heroBg && (
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                         <img 
                           src={heroBg instanceof Blob ? URL.createObjectURL(heroBg) : heroBg} 
                           alt="Current Hero Background" 
                           className="w-full h-full object-cover" 
                         />
                      </div>
                    )}
                  </div>

                  <div className="w-full h-[1px] bg-white/10" />

                  {/* Site Background Color */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm text-white/80">Site Background Theme</h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed">Choose a gradient or solid background for the overall website.</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {GRADIENT_PRESETS.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => setGlobalBgColor(preset.value)}
                          className={`text-xs small-caps p-3 rounded border text-left flex flex-col gap-2 transition-all ${
                            globalBgColor === preset.value 
                              ? 'border-white text-white' 
                              : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                          }`}
                        >
                          <div 
                            className="w-full h-8 rounded" 
                            style={{ background: preset.value }}
                          />
                          {preset.name}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <input 
                        type="color" 
                        value={globalBgColor.startsWith('#') && globalBgColor.length === 7 ? globalBgColor : '#050505'} 
                        onChange={(e) => setGlobalBgColor(e.target.value)} 
                        className="w-12 h-12 rounded bg-transparent cursor-pointer border-0 p-0"
                      />
                      <input 
                        type="text" 
                        value={globalBgColor}
                        onChange={(e) => setGlobalBgColor(e.target.value)}
                        placeholder="hex, rgb, or gradient"
                        className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-white/50"
                      />
                    </div>
                  </div>

                </div>
              )}

              {activeTab === 'portfolio' && (
                <div className="space-y-8">
                  
                  {/* Upload new item */}
                  <div className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <h3 className="font-medium text-sm text-white/80 mb-2">Upload New Work</h3>
                    
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={portfolioFileInputRef} 
                      onChange={handlePortfolioUpload} 
                      className="hidden" 
                    />
                    
                    <div className="flex gap-4 items-center">
                      <button 
                        onClick={() => portfolioFileInputRef.current?.click()}
                        className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 border border-white/20 border-dashed rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {newFile ? (
                           <img src={URL.createObjectURL(newFile)} className="w-full h-full object-cover" />
                        ) : (
                          <Upload className="w-5 h-5 text-white/50" />
                        )}
                      </button>

                      <div className="flex-1 space-y-3">
                        <input 
                          type="text" 
                          placeholder="Project Title" 
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-white/30"
                        />
                        <select 
                          value={newCat} 
                          onChange={(e) => setNewCat(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 appearance-none"
                        >
                          {AVAILABLE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>
                    </div>

                    <button 
                      onClick={handleAddPortfolio}
                      disabled={!newFile || !newTitle}
                      className="w-full mt-4 flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" /> Add to Portfolio
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-white/10" />

                  {/* Existing Items */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm text-white/80">Manage Existing Works</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {portfolioItems.map(item => (
                        <div key={item.id} className="relative aspect-square group rounded-lg overflow-hidden border border-white/10">
                          <img 
                            src={item.img instanceof Blob ? URL.createObjectURL(item.img) : item.img} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                            <span className="text-[10px] text-white/60 mb-1">{item.cat}</span>
                            <span className="text-xs font-medium text-white line-clamp-2">{item.title}</span>
                          </div>
                          <button 
                            onClick={() => removePortfolioItem(item.id)}
                            className="absolute top-2 right-2 bg-red-500/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backpack backdrop */}
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)}
             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
           />
        )}
      </AnimatePresence>
    </>
  );
}
