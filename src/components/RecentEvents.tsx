import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 1,
    image: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/RecentEvents/slide-1.png",
    title: "Recent Events",
    path: "/luohu-vaginoplasty"
  },
  {
    id: 2,
    image: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/RecentEvents/slide-2.png",
    title: "Recent Events",
    path: "/our-work"
  },
  {
    id: 3,
    image: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/RecentEvents/slide-3.png",
    title: "Recent Events",
    path: "/our-cause"
  }
];

export default function RecentEvents() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = useCallback(() => setIndex((prev) => (prev + 1) % events.length), []);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + events.length) % events.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 relative h-[400px] md:h-[500px]">


          {events.map((event, i) => {
            let position = i - index;
            if (position < -1) position += events.length;
            if (position > 1) position -= events.length;

            const isActive = position === 0;
            
            return (
              <motion.div
                key={event.id}
                initial={false}
                animate={{
                  x: position * (window.innerWidth < 768 ? 280 : 400),
                  scale: isActive ? 1.1 : 0.75,
                  opacity: isActive ? 1 : 0.3,
                  zIndex: isActive ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-[85%] md:w-[65%] aspect-[16/9] glass-card overflow-hidden cursor-pointer"
                onClick={() => {
                  if (isActive) {
                    navigate(event.path);
                  } else {
                    setIndex(i);
                  }
                }}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>

        <button 
          onClick={prev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/40 backdrop-blur-md text-brand-green hover:bg-white/60 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/40 backdrop-blur-md text-brand-green hover:bg-white/60 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        <div className="mt-8 flex justify-center gap-2">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-brand-green w-6' : 'bg-brand-green/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
