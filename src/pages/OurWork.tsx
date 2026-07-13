import * as React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function OurWork() {
  const location = useLocation();
  const { lang } = useLanguage();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-50 pb-20 px-5 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center">
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
          className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left"
        >
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] tracking-tight text-brand-green font-bold mb-2">
            {lang === 'en' ? 'Our Work' : '我們的工作'}
          </h1>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] text-brand-green font-medium mb-8">
            {lang === 'en' ? 'Our Response to a Global Urgency' : '我們如何回應這個全球迫切議題'}
          </h2>
          
          <div className="max-w-4xl space-y-6 text-brand-green/90 text-sm md:text-base leading-relaxed font-medium">
            {lang === 'en' ? (
              <>
                <p>
                  The under-treatment of <span className="font-bold">CAFRT</span> (Congenital Anomalies of the Female Reproductive Tract), including <span className="font-bold">MRKH syndrome</span>, is a complex global issue deeply rooted in medical, cultural, religious, and societal norms.
                </p>
                <p>
                  <span className="italic font-bold">She Unbinds</span> confronts this complexity by <span className="font-bold text-[#EA5514]">building a dual structure: advancing surgical innovation and driving sociocultural transformation.</span>
                </p>
                <p>
                  We integrate innovative medical care, psychological support, and sociocultural education to forge cross-border alliances and shape a more informed, inclusive understanding of these conditions.
                </p>
              </>
            ) : (
              <>
                <p>
                  先天性女性生殖道發育差異（<span className="font-bold">CAFRT</span>，Congenital Anomalies of the Female Reproductive Tract），包括 <span className="font-bold">MRKH 症候群</span>，長期未獲充分治療，這是一項複雜的全球性議題，深植於醫療、文化、宗教與社會結構之中。&nbsp;
                </p>
                <p>
                  <span className="font-bold">姝然新身 | She Unbinds</span> 以雙軌並行的架構，正面回應這份複雜性：<br />
                  <span className="font-bold text-[#EA5514]">一方面推動手術技術的創新，另一方面促進社會文化層面的轉化。</span>&nbsp;
                </p>
                <p>
                  我們整合前沿醫療照護、心理支持與社會文化教育，建立跨國合作網絡，並促進全球對這些身體差異更充分、包容且具尊重的理解。
                </p>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* Intro Images Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/5-OurWork/1.png" 
                alt="Luohu Hospital" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] md:text-xs text-brand-green/60 text-center font-medium">
              {lang === 'en' ? 'Luohu Hospital, Shenzhen, China' : '中國深圳羅湖醫院'}
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/5-OurWork/2.png" 
                alt="SYSU Department" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] md:text-xs text-brand-green/60 text-center font-medium">
              {lang === 'en' ? (
                <>The Department of Sociology and Social Work,<br />Sun Yat-sen University (SYSU), Guangzhou, China</>
              ) : (
                '中國廣州中山大學社會學與社會工作學系'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Fellowship Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-col md:flex-row md:items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'Advancing Across Borders' : '連結世界・共研共進'}
          </h2>
          <span className="text-[#EA5514] font-medium text-sm md:text-base">
            {lang === 'en' ? 'The Luohu Procedure Vaginoplasty Fellowship Program' : '羅湖術式陰道成形專科進修計畫'}
          </span>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-[#F2C984] to-[#D9ECB0] rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-medium text-[#1E4F33]">
              {lang === 'en' 
                ? 'Creating a Global Medical Network to Restore Dignity and Pleasure for Women with Congenital Vaginal Agenesis' 
                : '建立全球醫療網絡，協助先天性陰道缺如女性重建身體尊嚴與愉悅'}
            </p>
          </div>

          <div className="max-w-5xl mx-auto text-brand-green/90 text-sm md:text-base leading-relaxed">
            <p>
              {lang === 'en' ? (
                <>
                  After carefully reviewing both non-surgical and surgical treatments for Vaginal Agenesis and MRKH syndrome —— including the commonly recommended non-surgical vaginal dilation (VD) method —— <span className="italic font-bold">She Unbinds</span> promotes the <span className="font-bold">Luohu Procedure</span> as a safer, more holistic solution for eligible cases.
                </>
              ) : (
                <>
                  在審慎評估陰道缺如與 MRKH 症候群的各種非手術與手術治療方式後（包括臨床上常被建議的非手術，陰道擴張療法）<span className="font-bold">姝然新身 | She Unbinds</span> 對於符合適應條件的個案，推廣羅湖術式作為一種更安全且更具整體性的治療選擇。
                </>
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start pt-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/5-OurWork/3.png" 
                alt="Fellowship Program" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6 text-brand-green">
              <h3 className="text-2xl font-bold text-[#006934]">
                {lang === 'en' ? (
                  <>The <span className="italic">Luohu Procedure</span> Vaginoplasty</>
                ) : (
                  '羅湖術式腹腔鏡腹膜陰道成形術'
                )}
              </h3>
              <div className="space-y-4 text-xs md:text-sm leading-relaxed">
                {lang === 'en' ? (
                  <>
                    <p>
                      The <span className="italic font-bold">Luohu Procedure</span> Vaginoplasty was developed in the early 2000s by <span className="font-bold italic">Dr. LUO Guangnan</span> and his team at <span className="italic">Luohu Hospital</span> in Shenzhen, China.
                    </p>
                    <p>
                      It is a minimally invasive laparoscopic surgical procedure that uses the patient's own peritoneum —— a natural lubricated layer accessed via the douglas pouch —— to construct a neovagina within 30 - 60 minutes, and with only 20 - 30ml blood loss.
                    </p>
                    <p>
                      Following Dr. Luo's passing in 2023, the procedure continues under the leadership of his successor, <span className="font-bold italic">Dr. QIN Chenglu</span> and her team.
                    </p>
                    <p>
                      Since the first clinical case in November 2001, the Luohu team has successfully created neovaginas for <span className="font-bold text-[#EA5514]">over 4,000 patients</span> with congenital vaginal agenesis.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      羅湖式陰道重建術是由<span className="font-bold">羅光南醫師</span>及其團隊於2000年代初期，在中國深圳羅湖醫院研發的。
                    </p>
                    <p>
                      這是一種微創腹腔鏡手術，利用患者自身的腹膜（這層天然潤滑組織可經由道格拉斯窩取用）在30至60分鐘內重建新陰道，且術中失血量僅需20至30毫升。
                    </p>
                    <p>
                      自羅光南醫師於2023年辭世後，此項手術在繼任者<span className="font-bold">秦成璐醫師</span>及其團隊的領導下持續進行。
                    </p>
                    <p>
                      自2001年11月首例臨床病例以來，羅湖團隊已為<span className="font-bold text-[#EA5514]">超過4,000名</span>先天性陰道缺如患者成功重建了新陰道。
                    </p>
                  </>
                )}
              </div>
              <div className="pt-6 space-y-3">
                <Link to="/luohu-vaginoplasty" className="block text-[#EA5514] font-bold hover:underline">
                  {lang === 'en' ? (
                    <>Learn more <span className="text-brand-green font-normal">about this unique vaginoplasty procedure</span></>
                  ) : (
                    '進一步了解這項獨特的陰道重建手術'
                  )}
                </Link>
                <button className="block text-[#EA5514] font-bold hover:underline text-left">
                  {lang === 'en' ? (
                    <>Stay tuned <span className="text-brand-green font-normal">for the Fellowship Program - we are launching in Q4 2026</span></>
                  ) : (
                    '進一步了解進修計畫'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthropology Section */}
      <section id="beyond-operating-room" className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-col md:flex-row md:items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'Beyond the Operating Room' : '手術室之外'}
          </h2>
          <span className="text-[#EA5514] font-medium text-sm md:text-base">
            {lang === 'en' 
              ? 'Integrating Anthropological Insight and Social Work in Vaginal and Uterine Agenesis (MRKH syndrome)' 
              : '將人類學洞見與社會工作融入陰道及子宮發育不全（MRKH 症候群）的照護'}
          </span>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-[#F2C984] to-[#D9ECB0] rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-medium text-[#1E4F33]">
              {lang === 'en' 
                ? 'Bridging Surgery, Sociology, and Anthropology to Uncover Hidden Pain' 
                : '構建外科、社會學與人類學的橋樑，揭開隱藏的痛苦'}
            </p>
          </div>

          <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-5xl mx-auto">
            <p>
              {lang === 'en' ? (
                'She Unbinds, in collaboration with the Department of Sociology and Anthropology at Sun Yat-sen University in Guangzhou, is launching China\'s first interdisciplinary field study on women with vaginal agenesis —— including those with Mayer-Rokitansky-Küster-Hauser (MRKH) syndrome.'
              ) : (
                '姝然新身 | She Unbinds 與廣州中山大學社會學與人類學系合作，將啟動中國首項針對陰道發育不全女性（包括患有MRKH的女性）的跨學科田野調查。'
              )}
            </p>
            <p>
              {lang === 'en' ? (
                'Previous research on this condition has remained largely within the boundaries of surgical field. This pioneering project breaks through disciplinary silos, bringing together medical knowledge and social science perspectives to explore the lived experiences, cultural contexts, and social challenges of affected women.'
              ) : (
                '過往針對此病症的研究主要局限於外科領域。這項開創性計畫突破學科壁垒，融合醫學知識與社會科學視角，共同探討受影響女性的生活經驗、文化脈絡及社會挑戰。'
              )}
            </p>
            <p>
              {lang === 'en' ? (
                'Through in-depth interviews, participant observation, and life-story documentation, the research team aims to reveal how medical realities intersect with identity, stigma, and social participation.'
              ) : (
                '透過深度訪談、參與式觀察及生命故事記錄，研究團隊旨在揭示醫療現實如何與身份認同、污名化及社會參與相互交織。'
              )}
            </p>
            <p>
              {lang === 'en' ? (
                'The findings will help shape more holistic care models in response to a global urgency —— the silencing of women born with CAFRT (Congenital Anomalies of the Female Reproductive Tract), including MRKH syndrome —— by integrating clinical treatment with emotional, psychological, and community-based support.'
              ) : (
                '研究結果將有助於建立更全面的照護模式，以應對一項全球性迫切議題——即整合臨床治療與情感、心理及社區支持，為先天性女性生殖道發育差異（CAFRT），包括 MRKH 症候群，所影響的女性發聲。'
              )}
            </p>
            <p className="pt-4">
              {lang === 'en' ? (
                'If you are a scholar or professional in anthropology, sociology, behavioural science, or psychology and are interested in joining or supporting this work.'
              ) : (
                '若您是人類學、社會學、行為科學或心理學領域的學者或專業人士，並有興趣參與或支持這項研究'
              )}
            </p>
          </div>

          <div className="max-w-3xl mx-auto aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mt-12">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/5-OurWork/4.png" 
              alt="Interdisciplinary Study" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
