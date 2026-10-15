import { useState, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurCause from './pages/OurCause';
import LuohuVaginoplasty from './pages/LuohuVaginoplasty';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import ConnectWithUs from './pages/ConnectWithUs';
import ScrollToTop from './components/ScrollToTop';
import { useLanguage, LanguageContext } from './context/LanguageContext';

function FrozenLanguageProvider({ 
  langValue, 
  toggleLanguage, 
  setLanguage, 
  children 
}: { 
  langValue: 'en' | 'tc'; 
  toggleLanguage: () => void; 
  setLanguage: (lang: 'en' | 'tc') => void; 
  children: ReactNode; 
}) {
  const [frozenLang] = useState(langValue);
  return (
    <LanguageContext.Provider value={{ lang: frozenLang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function App() {
  const { lang, toggleLanguage, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-page relative">
      <ScrollToTop />
      {/* Background Image Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/0-Background/background-colour.png" 
          alt="Page Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FrozenLanguageProvider langValue={lang} toggleLanguage={toggleLanguage} setLanguage={setLanguage}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/our-cause" element={<OurCause />} />
                  <Route path="/luohu-vaginoplasty" element={<LuohuVaginoplasty />} />
                  <Route path="/our-work" element={<OurWork />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/connect-with-us" element={<ConnectWithUs />} />
                </Routes>
              </FrozenLanguageProvider>
            </motion.div>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 px-6 text-center text-xs text-brand-green/50">
          <p>© {new Date().getFullYear()} She Unbinds. All rights reserved.</p>
        </footer>
      </div>
      <Analytics />
    </div>
  );
}
