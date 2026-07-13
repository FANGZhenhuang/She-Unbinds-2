import * as React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ConnectWithUs() {
  const { lang } = useLanguage();

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-50 pb-10 px-5 overflow-hidden min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/0-Background/background-ribbon.png" 
            alt="Background Pattern" 
            className="w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full mx-auto px-4 text-left"
        >
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] tracking-tight text-brand-green font-bold mb-12">
            {lang === 'en' ? 'Connect with us' : '與我們聯繫'}
          </h1>
          
          <div className="max-w-4xl space-y-8 text-brand-green font-medium">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">
                {lang === 'en' ? 'Whether you are:' : '無論您是：'}
              </h2>
              <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                {lang === 'en' ? (
                  <>
                    <li>
                      <span className="text-[#EA5514] font-bold">A practicing gynaecologist</span> interested in advancing surgical expertise through our Luohu Vaginoplasty Fellowship Program,
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">A scholar or professional</span> in anthropology, sociology, behavioural science, or psychology seeking to contribute to our study on Vaginal & Uterine Agenesis (MRKH syndrome).
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">An organization</span> working in children's sexual health education or advocating for women's rights, ready to integrate CAFRT and MRKH awareness into your curriculum, or...
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">Anyone</span> with the expertise, resources, or networks to help us drive this mission forward in innovative ways.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <span className="text-[#EA5514] font-bold">執業婦科醫生</span>，對於透過我們的羅湖陰道成形術專科培訓計畫提升外科專業技術感興趣，
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">人類學、社會學、行為科學或心理學領域的學者或專業人士</span>希望參與我們的陰道發育不全跨學科田野研究，
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">致力於兒童性教育或婦女權益倡導的組織</span>，願意將 CAFRT 認知融入您的課程， 或者
                    </li>
                    <li>
                      <span className="text-[#EA5514] font-bold">任何</span>具備專業知識、資源或網絡，能以創新方式推動我們使命的人——
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="w-full flex justify-center pt-8">
              <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
                  {lang === 'en' ? 'WE WELCOME YOUR COLLABORATION!' : '我們都誠摯歡迎您的合作！'}
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Collaborate & Follow Sections */}
      <section className="py-6 px-6 max-w-6xl mx-auto space-y-8">
        {/* Collaborate */}
        <div className="bg-[#DAE000]/30 p-8 md:p-12 rounded-2xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514] uppercase">
            {lang === 'en' ? 'COLLABORATE' : '合作'}
          </h2>
          <div className="space-y-4 text-brand-green text-sm md:text-base leading-relaxed">
            <p>
              {lang === 'en' ? (
                <>
                  We invite you to join hands with She Unbinds in reclaiming the Right to Bodily Autonomy, Sexual Dignity, and Pleasure for women and girls born with <span className="font-bold italic">CAFRT</span> (Congenital Anomalies of the Female Reproductive Tract), including <span className="font-bold italic">MRKH syndrome</span>.
                </>
              ) : (
                <>
                  我們誠摯邀請您與 <span className="font-bold">姝然新身｜She Unbinds</span> 攜手同行，共同為先天性女性生殖道發育差異（CAFRT，如 MRKH 綜合症）群體重建身體自主權、性尊嚴與愉悅權。
                </>
              )}
            </p>
            <p className="pt-4">
              {lang === 'en' ? 'Begin the conversation:' : '展開對話：'}<br />
              <a href="mailto:voice@she-unbinds.org" className="underline font-bold text-[#EA5514] hover:opacity-80 transition-opacity">
                voice@she-unbinds.org
              </a>
            </p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="bg-[#DAE000]/50 p-8 md:p-12 rounded-2xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514] uppercase">
            {lang === 'en' ? (
              <>
                FOLLOW US <a href="https://www.linkedin.com/company/sheunbinds/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">She Unbinds | LinkedIn</a>
              </>
            ) : (
              <>
                关注我们 <a href="https://www.linkedin.com/company/sheunbinds/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity font-bold">姝然新身 | She Unbinds | LinkedIn</a>
              </>
            )}
          </h2>
          <p className="text-brand-green font-medium">
            {lang === 'en' ? 'Stay connected. Witness the movement.' : '持續關注，見證這場改變。'}
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <p className="text-brand-green font-bold text-base md:text-lg leading-relaxed">
          {lang === 'en' ? (
            <>
              Together, we can expand access to safe, holistic care, dismantle<br className="hidden md:block" />
              harmful stigma, and create a future where every girl and woman can<br className="hidden md:block" />
              live with confidence, dignity, and joy.
            </>
          ) : (
            <>
              讓我們攜手拓展安全且身心兼顧的照護支持，破除有害的污名，共同開創一個讓每一位女孩與女性都能自信、尊嚴且喜悅生活的未來。
            </>
          )}
        </p>
      </section>

      {/* Program Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Fellowship Program */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-sm">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/7-ConnectwithUs/1.png" 
                alt="Fellowship Program" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-green">
                {lang === 'en' ? 'Luohu Procedure Vaginoplasty Fellowship Program' : '羅湖術式腹腔鏡腹膜陰道成形術研修計劃'}
              </h3>
              <p className="text-xs md:text-sm text-brand-green/80 leading-relaxed">
                {lang === 'en' ? (
                  <>
                    We invite gynecologists and reconstructive surgeons to join the Luohu Procedure Vaginoplasty Fellowship Program —— a hands-on surgical training program focusing on the Luohu Procedure, supervised by Dr. Qin Chenglu's team in Luohu Hospital in Shenzhen, China.
                  </>
                ) : (
                  <>
                    誠邀婦科醫師與重建外科醫師加入羅湖術式腹腔鏡腹膜陰道成形術研修計劃——此實務手術培訓課程專注於羅湖手術技術，由中國深圳羅湖醫院秦成路醫師團隊督導。
                  </>
                )}
              </p>
              <button className="text-[#EA5514] font-bold hover:underline text-sm text-left">
                {lang === 'en' 
                  ? 'Stay tuned for the Fellowship Program - we are launching in Q4 2026' 
                  : '點擊此處瞭解研修計劃'}
              </button>
            </div>
          </div>

          {/* Social Work Program */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-sm">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/7-ConnectwithUs/2.png" 
                alt="Social Work Program" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-green">
                {lang === 'en' ? 'Social Work Program for Vaginal & Uterine Agenesis' : '陰道與子宮先天發育差異社會工作支持計畫'}
              </h3>
              <p className="text-xs md:text-sm text-brand-green/80 leading-relaxed">
                {lang === 'en' ? (
                  <>
                    However, healing doesn't end with a physically functioning neovagina —— we must cultivate a society that embraces bodily diversity, destigmatizes congenital conditions, and supports holistic recovery including psychological, and social alike.
                  </>
                ) : (
                  <>
                    然而，療癒的過程不僅止於重建功能健全的陰道——我們必須營造一個擁抱身體多樣性、消除先天性疾病污名、並支持身心靈全面康復的社會環境。
                  </>
                )}
              </p>
              <Link 
                to="/our-work#beyond-operating-room" 
                className="text-[#EA5514] font-bold hover:underline text-sm inline-block"
              >
                {lang === 'en' 
                  ? 'Click here to know more about the Social Work Program' 
                  : '點擊此處了解更多關於社會工作計劃的資訊'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="mt-20 relative py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2C984] via-[#D9ECB0] to-[#F2C984] opacity-90" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green">
              {lang === 'en' ? 'Every contribution matters' : '每一份貢獻都至關重要'}
            </h2>
          </div>
          
          <button className="mt-8 bg-[#006934] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#004d26] transition-colors">
            {lang === 'en' ? 'DONATE HERE (Coming Soon)' : '立即捐助（即將推出）'}
          </button>
        </div>
      </section>
    </div>
  );
}
