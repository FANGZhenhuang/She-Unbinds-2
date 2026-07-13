import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { lang, setLanguage } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#language-selector-btn') && !target.closest('#language-dropdown-menu')) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const navItems = [
    { 
      name: lang === 'en' ? "● Our Course - Unseen Realities" : "● 我們的歷程 - 無聲之身", 
      path: "/our-cause" 
    },
    { 
      name: lang === 'en' ? "● Luohu Vaginoplasty" : "● 羅湖術式陰道成形術", 
      path: "/luohu-vaginoplasty" 
    },
    { 
      name: lang === 'en' ? "● Our Work" : "● 我們的工作", 
      path: "/our-work" 
    },
    { 
      name: lang === 'en' ? "● About Us" : "● 關於我們", 
      path: "/about-us" 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Only trigger expansion on mobile/tablet (less than lg breakpoint)
      if (window.innerWidth < 1024) {
        setIsExpanded(true);
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          setIsExpanded(false);
        }, 1800); // Shrink back after 1.8 seconds of no scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.nav 
      animate={{ 
        height: isExpanded ? 'auto' : '48px',
        backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'
      }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-2 flex flex-col justify-center backdrop-blur-sm ${showLangDropdown ? 'overflow-visible' : 'overflow-hidden'}`}
    >
      <div className="flex items-center justify-between w-full h-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/1-NavBar/logo.png" 
              alt="She Unbinds Logo" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-[11px] font-medium text-brand-green hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/connect-with-us" className="px-3 py-1 border border-brand-green rounded-full text-[10px] font-medium text-brand-green hover:bg-brand-green hover:text-white transition-all">
            {lang === 'en' ? 'Contact Us' : '聯繫我們'}
          </Link>
          <div className="relative">
            <button 
              id="language-selector-btn"
              onClick={() => setShowLangDropdown(!showLangDropdown)} 
              className="p-1 text-brand-green hover:opacity-70 transition-opacity flex items-center gap-1 focus:outline-none"
              title={lang === 'en' ? 'Switch Language' : '切換語言'}
            >
              <Globe size={16} />
              <span className="text-[10px] font-semibold tracking-wider">{lang === 'en' ? 'EN' : '繁'}</span>
              <span className="text-[8px] opacity-70">▼</span>
            </button>
            
            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  id="language-dropdown-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-1 py-1 w-20 bg-white/30 backdrop-blur-md border border-brand-green/20 rounded-lg shadow-lg z-50 flex flex-col overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setShowLangDropdown(false);
                    }}
                    className={`px-3 py-1.5 text-left text-[11px] font-medium hover:bg-brand-green/10 transition-colors ${lang === 'en' ? 'text-brand-green bg-brand-green/5' : 'text-brand-green/70'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('tc');
                      setShowLangDropdown(false);
                    }}
                    className={`px-3 py-1.5 text-left text-[11px] font-medium hover:bg-brand-green/10 transition-colors border-t border-brand-green/5 ${lang === 'tc' ? 'text-brand-green bg-brand-green/5' : 'text-brand-green/70'}`}
                  >
                    繁體中文
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Nav Items (Visible when expanded) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-brand-green/10 mt-2"
          >
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-[10px] font-medium text-brand-green hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
