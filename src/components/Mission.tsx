import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Mission() {
  const [isHovered, setIsHovered] = useState(false);
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
      {/* Main Mission Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-card p-6 md:p-12 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/OurMission/background-1.png" 
            alt="Mission Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl text-brand-green">
            {lang === 'en' ? 'Our Mission' : '我們的使命'}
          </h2>
          {lang === 'en' ? (
            <div className="space-y-4 text-brand-green/90 leading-relaxed max-w-4xl text-sm md:text-base">
              <p>
                <span className="italic font-semibold">She Unbinds</span> is a non-profit organization, addresses the unseen realities — the systemic neglect faced by girls and women born with <span className="font-bold">CAFTR</span> (Congenital Anomalies of the Female Reproductive Tract), including <span className="font-bold">MRKH syndrome</span> (vaginal and uterine agenesis) that is impacting nearly one million women globally.
              </p>
              <p>
                Guided by this mission, we integrate medical innovation with social support to accompany girls and women through the (re)construction and holistic healing of their intimate bodies — nurturing wholeness, agency, and fulfillment.
              </p>
              <div className="text-brand-green/90 leading-relaxed">
                By breaking the medical, social, and cultural silences surrounding these conditions, we strive to ensure equitable access to care and to uphold{' '}
                <span className="relative inline-block">
                  <a 
                    href="https://www.ippf.org/resource/sexual-rights-ippf-declaration"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="underline decoration-brand-green/30 underline-offset-4 cursor-pointer hover:text-brand-green transition-colors"
                  >
                    bodily autonomy, sexual dignity, and pleasure
                  </a>
                  
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64 md:w-80 p-3 rounded-lg shadow-xl text-xs pointer-events-none"
                        style={{ backgroundColor: '#C5E790' }}
                      >
                        <p style={{ color: '#1E4F33' }} className="font-medium leading-tight">
                          “Sexual Rights: An IPPF Declaration.” IPPF, 25 May 2011, www.ippf.org/resource/sexual-rights-ippf-declaration.
                        </p>
                        {/* Tooltip Arrow */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                          style={{ borderTopColor: '#C5E790' }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>{' '}
                as fundamental human rights.
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-brand-green/90 leading-relaxed max-w-4xl text-sm md:text-base">
              <p>
                <span className="italic font-semibold">姝然新身| She Unbinds</span> 回應女性與生俱來的創傷，致力於打破長久以來籠罩在女性私密身體上的羞恥、禁忌與忽視——讓這些真實的經歷不再被遮蔽，也不再缺乏支持。
              </p>
              <p>
                秉持這一使命，我們整合醫療與社會支持體系，幫助那些因先天缺陷或文化偏見而被剝奪身體自主權、性尊嚴與愉悅的少女與婦女，實現陰道的（重新）建構與身心的療癒。
              </p>
              <div className="text-brand-green/90 leading-relaxed">
                我們致力於整合醫療與社會關懷資源，協助女性重建私密器官，回應因先天異常或文化污名所造成的{' '}
                <span className="relative inline-block">
                  <a 
                    href="https://www.ippf.org/resource/sexual-rights-ippf-declaration"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="underline decoration-brand-green/30 underline-offset-4 cursor-pointer hover:text-brand-green transition-colors"
                  >
                    性尊嚴與性愉悅
                  </a>
                  
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64 md:w-80 p-3 rounded-lg shadow-xl text-xs pointer-events-none"
                        style={{ backgroundColor: '#C5E790' }}
                      >
                        <p style={{ color: '#1E4F33' }} className="font-medium leading-tight">
                          “Sexual Rights: An IPPF Declaration.” IPPF, 25 May 2011, www.ippf.org/resource/sexual-rights-ippf-declaration.
                        </p>
                        {/* Tooltip Arrow */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                          style={{ borderTopColor: '#C5E790' }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>{' '}
                缺失。
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/OurMission/background-2.png" 
              alt="Autonomy Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl text-brand-green">
              {lang === 'en' ? 'Bodily Autonomy' : '身體自主權'}
            </h3>
            {lang === 'en' ? (
              <div className="space-y-4 text-sm leading-relaxed">
                <p>We believe every individual has the sovereign right to make decisions about their own body— free from misinformation, shame, stigma, or control.</p>
                <p>This includes the right to accurate information, to consent or refuse, and to shape one's own bodily future.</p>
                <p>At <span className="italic font-bold">She Unbinds</span>, we center this principle in everything we do—whether working with medical institutions that provide treatments, social organizations that defend women's rights, or communities who have experienced <span className="font-bold">medical neglect or cultural silencing</span>.</p>
              </div>
            ) : (
              <div className="space-y-4 text-sm leading-relaxed text-brand-green/95">
                <p>我們相信，每個人都擁有對自己的身體做出決定的主權，不受錯誤訊息、羞恥、污名或控制的影響。</p>
                <p>這包括獲得準確資訊的權利、同意 or 拒絕的權利，以及塑造自己身體未來的權利。</p>
                <p>在 <span className="italic font-bold">姝然新身| She Unbinds</span> ，無論是與提供治療的醫療機構合作，還是與維護婦女權利的社會組織合作，抑或是與經歷過醫療忽視或文化沉默的社區合作，我們所做的一切都以這一原則為中心。我們倡導建立一個女孩和婦女不因此被稱為病態或被限制，而是被尊重、傾聽和支持的世界。</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/2-Homepage/OurMission/background-3.png" 
              alt="Dignity Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl text-[#5D1C00]">
              {lang === 'en' ? 'Sexual Dignity and Pleasure' : '性尊嚴與性快感'}
            </h3>
            {lang === 'en' ? (
              <div className="space-y-4 text-sm leading-relaxed text-[#5D1C00]">
                <p>In 2008, the International Planned Parenthood Federation (<span className="underline">IPPF</span>) made history by declaring sexual pleasure a human right — a shift that broke through the narrow framing of sexuality in the context of reproduction, safety or protection from <span className="font-bold">violence</span>.</p>
                <p><span className="italic font-bold">She Unbinds</span> carries that torch forward by upholding <span className="font-bold">sexual dignity and pleasure</span> not as an indulgence, but as <span className="font-bold">essential expressions of personhood</span>.</p>
              </div>
            ) : (
              <div className="space-y-4 text-sm leading-relaxed text-[#5D1C00]">
                <p>2008 年，國際計劃生育聯合會（<span className="underline">IPPF</span>）宣布性快感是一項人權，從而創造了歷史--這一轉變突破了將性問題狹隘地定義為生殖、安全或免受暴力侵害的範疇。姝然新身希望能將此火炬傳承下去。</p>
                <p><span className="italic font-bold">姝然新身</span>將維護性尊嚴和性快感，不將其視為一種放縱，而是將其視為人格的基本表現。我們致力於消除污名化、重拾快樂，並為那些因先天條件、羞恥感或系統性忽視而無法獲得愉悅性體驗的人創造性尊嚴得以茁壯成長的包容性空間。</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
