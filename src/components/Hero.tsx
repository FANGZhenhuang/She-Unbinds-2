import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-50 pb-40 px-5 overflow-hidden min-h-[70vh] flex flex-col items-center justify-center text-center">
      {/* Background PNG Placeholder */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/0-Background/background-ribbon.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full mx-auto px-4 text-left"
      >
        <h1 className="text-[clamp(1.75rem,5vw,4rem)] leading-[1.15] tracking-tight text-brand-green font-medium">
          {lang === 'en' ? (
            <>
              Reclaim Her Rights to <br />
              Bodily Autonomy, Sexual Dignity and Pleasure.
            </>
          ) : (
            <>
              每一位她， <br />
              都有追求身體自主、性尊嚴與性愉悅的 <br />
              自由與力量。
            </>
          )}
        </h1>
      </motion.div>
    </section>
  );
}
