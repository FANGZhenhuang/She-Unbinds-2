import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const STUDIES_DATA = [
  {
    id: 'study-1',
    title: "A Rare Case of Mayer-Rokitansky-Kuster-Hauser Syndrome Presenting with Acute Psychosis",
    titleTc: "一例以急性精神病為首發症狀的梅耶-羅基坦斯基-庫斯特-豪澤綜合症罕見病例",
    category: "Psychiatry / Gynecology",
    categoryTc: "精神醫學／婦產科",
    date: "Apr 1, 2016",
    dateTc: "2016年4月1日",
    location: "India",
    locationTc: "印度",
    institution: "Department of Psychiatry, Silchar Medical College & Hospital, Silchar, India",
    institutionTc: "印度西爾查爾西爾查爾醫學院暨醫院精神醫學系",
    summary: "Psychosis may be an initial presentation of MRKH; suggests incorporating mental health evaluations into diagnosis.",
    summaryTc: "精神類疾病可能是MRKH綜合症的首發症狀；建議將心理健康評估納入",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/1.png",
    externalUrl: "https://www.researchgate.net/publication/301325029_A_Rare_Case_of_Mayer-Rokitansky-_Kuster-Hauser_Syndrome_Presenting_with_Acute_Psychosis"
  },
  {
    id: 'study-2',
    title: "Systematic Review of Psychological Outcomes in MRKH Syndrome",
    titleTc: "關於 MRKH 症候群心理結果的系統性文獻回顧",
    category: "Clinic Psychology / Gynecology",
    categoryTc: "臨床心理學／婦科",
    date: "Jan 21, 2020",
    dateTc: "2020 年 1 月 21 日",
    location: "Italy",
    locationTc: "義大利",
    institution: "Catholic University of the Sacred Heart",
    institutionTc: "聖心天主教大學",
    summary: "MRKH negatively impacts self-esteem, body image, and intimate relationships. Emphasizes the need for long-term psychological support.",
    summaryTc: "MRKH 症候群會對自尊、身體形象及親密關係造成負面影響。強調需要提供長期心理支持。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/2.png",
    externalUrl: "https://journals.sagepub.com/doi/abs/10.1177/1359105319901308"
  },
  {
    id: 'study-3',
    title: "A Study on Depressive Symptoms in Chinese MRKH Patients",
    titleTc: "中國 MRKH 患者憂鬱症狀之研究",
    category: "Psychiatry / Obstetrics & Gynecology",
    categoryTc: "精神醫學／婦產科",
    date: "May/24/2020",
    dateTc: "2020年5月24日",
    location: "China",
    locationTc: "中國",
    institution: "Beijing Union Medical College Hospital",
    institutionTc: "北京協和醫院",
    summary: "Chinese MRKH patients are prone to depression; negative femininity identity, high neuroticism, and sexual dysfunction are key risk factors. Early screening and psychological support are recommended.",
    summaryTc: "中國 MRKH 患者易患憂鬱症；負面的女性認同感、高神經質特質及性功能障礙是主要風險因素。建議進行早期篩檢並提供心理支持。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/3.png",
    externalUrl: "https://link.springer.com/article/10.1186/s13023-020-01405-9"
  },
  {
    id: 'study-4',
    title: "Relationship Between Illness Beliefs, Self-Identity, and Psychological Adjustment in MRKH",
    titleTc: "MRKH 患者中疾病信念、自我認同與心理適應之間的關係",
    category: "Health Psychology",
    categoryTc: "《健康心理學》",
    date: "Dec 2020",
    dateTc: "2020年12月",
    location: "UK",
    locationTc: "英國",
    institution: "University of Birmingham",
    institutionTc: "英國，伯明罕大學",
    summary: "Illness coherence and positive identity integration can ease psychological burden; engulfment is a key predictor of depression and low self-esteem.",
    summaryTc: "疾病一致性與正向自我認同整合可減輕心理負擔；被疾病吞噬感是抑鬱與低",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/4.png",
    externalUrl: "https://www.sciencedirect.com/science/article/abs/pii/S1083318820302825"
  },
  {
    id: 'study-5',
    title: "Psychosocial Outcomes After Vaginoplasty in MRKH Patients",
    titleTc: "MRKH 患者接受陰道成形術後的心理社會結果",
    category: "Obstetrics & Gynecology / Social Medicine",
    categoryTc: "婦產科／社會醫學",
    date: "Mar 2021",
    dateTc: "2021年3月",
    location: "Saudi Arabia",
    locationTc: "沙烏地阿拉伯",
    institution: "Umm Al-Qura University",
    institutionTc: "烏姆庫拉大學",
    summary: "Vaginoplasty improved sexual function, self-esteem, and marital satisfaction; WhatsApp peer support was positively influential.",
    summaryTc: "陰道成形術改善了性功能、自尊心及婚姻滿意度；WhatsApp 同儕支持發揮了積極影響。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/5.png",
    externalUrl: "https://journals.sagepub.com/doi/abs/10.1177/1359105319901308"
  },
  {
    id: 'study-6',
    title: "Qualitative Study on First Medical Encounter of African Women with MRKH",
    titleTc: "關於非洲女性首次就醫時面對 MRKH 症候群之質性研究",
    category: "Sociology / Medical Anthropology",
    categoryTc: "社會學／醫學人類學",
    date: "Dec 15, 2021",
    dateTc: "2021年12月15日",
    location: "France / Multiple African Nations",
    locationTc: "法國／多個非洲國家",
    institution: "Collaboration: Côte d'Ivoire, Senegal, Cameroon",
    institutionTc: "合作夥伴：象牙海岸、塞內加爾、喀麥隆",
    summary: "Cultural and religious factors shape African women's MRKH diagnosis experience; calls for improved medical communication and psychosocial support.",
    summaryTc: "文化與宗教因素形塑非洲女性的 MRKH 診斷經驗；呼籲改善醫療溝通與心理社會支持。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/Study/6.png",
    externalUrl: "https://www.ajol.info/index.php/pamj/article/view/259308"
  }
];

/**
 * INTERACTIVE MAP CONFIGURATION
 * You can modify the relative positions (x, y as percentages), 
 * image URLs, and sizes here.
 */
const MAP_POINTS = [
  {
    id: 'point-1',
    x: 19, // % from left
    y: 50, // % from top
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/1.png", // Replace with your trigger image URL
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/1-1.png",  // Replace with your detail image URL
    triggerWidth: '9%', // Width relative to map width
    detailWidth: '30%',  // Width relative to map width
    aspectRatio: '4/3',  // Aspect ratio (width/height)
  },
  {
    id: 'point-2',
    x: 31,
    y: 56,
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/2.png",
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/2-1.png",
    triggerWidth: '10%',
    detailWidth: '30%',
    aspectRatio: '4/3',
  },
  {
    id: 'point-3',
    x: 13,
    y: 67,
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/3.png",
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/3-1.png",
    triggerWidth: '10%',
    detailWidth: '30%',
    aspectRatio: '4/3',
  },
  {
    id: 'point-4',
    x: 37,
    y: 45,
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/4.png",
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/4-1.png",
    triggerWidth: '9%',
    detailWidth: '30%',
    aspectRatio: '4/3',
  },
  {
    id: 'point-5',
    x: 85,
    y: 70,
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/5.png",
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/5-1.png",
    triggerWidth: '18%',
    detailWidth: '30%',
    aspectRatio: '5/3',
  },
  {
    id: 'point-6',
    x: 28,
    y: 45,
    triggerUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/6.png",
    detailUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/6-1.png",
    triggerWidth: '8%',
    detailWidth: '30%',
    aspectRatio: '4/3',
  }
];

export default function OurCause() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const detailRef = React.useRef<HTMLDivElement>(null);
  const [selectedStudyId, setSelectedStudyId] = React.useState(STUDIES_DATA[0].id);
  const [isBannerHovered, setIsBannerHovered] = React.useState(false);
  const [activeMapPoint, setActiveMapPoint] = React.useState<string | null>(null);

  const activeStudy = STUDIES_DATA.find(s => s.id === selectedStudyId) || STUDIES_DATA[0];

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
            {lang === 'en' ? 'Our Course' : '我們關注的議題'}
          </h1>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] text-brand-green font-medium mb-8">
            {lang === 'en' ? 'Unseen Realities' : '無聲之身'}
          </h2>
          
          <p className="max-w-3xl text-brand-green/90 text-sm md:text-base leading-relaxed font-medium">
            {lang === 'en' ? (
              <>
                <span className="italic font-bold">She Unbinds</span> champions girls and women born with <span className="font-bold">CAFTR</span> (Congenital Anomalies of the Female Reproductive Tract) — including <span className="font-bold">MRKH syndrome</span> (vaginal and uterine agenesis) — on their journey to reclaim bodily autonomy, sexual dignity, and pleasure.
              </>
            ) : (
              <>
                姝然新身 | She Unbinds 致力於支持女性先天性生殖道發育差異（CAFRT) 和 MRKH 症候群（陰道與子宮先天性缺如或發育不全）--的女孩與女性，協助她們在重獲身體自主權、性尊嚴與愉悅的旅程中前行。
              </>
            )}
          </p>
        </motion.div>
      </section>

      {/* What is CAFRT Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'What is CAFRT?' : '什麼是 CAFRT?'}
          </h2>
          <span className="text-[#EA5514] font-medium text-sm md:text-base">
            {lang === 'en' ? 'Congenital Anomalies of the Female Reproductive Tract' : '女性先天性生殖道發育差異'}
          </span>
        </div>

        <div className="bg-gradient-to-r from-[#F2C984] to-[#D9ECB0] rounded-xl p-6 text-center max-w-2xl mx-auto">
          {lang === 'en' ? (
            <>
              <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">“Silence is not the absence of voice, but the presence of constraint.”</p>
              <p className="text-xs md:text-sm text-[#1E4F33]/80">Arundhati Roy | Writer and Public Intellectual, India, 1961–</p>
            </>
          ) : (
            <>
              <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">「沉默並非沒有聲音，而是受限之下的存在。」</p>
              <p className="text-xs md:text-sm text-[#1E4F33]/80">阿蘭達蒂·洛伊｜作家、公共知識分子，印度，1961–</p>
            </>
          )}
        </div>

        <div className="space-y-8">
          <p className="text-brand-green text-sm md:text-base">
            {lang === 'en' 
              ? 'In mammalian embryos, three key structures are involved in shaping the female reproductive tract.' 
              : '在哺乳動物的胚胎中，女性生殖道的形成主要涉及三個關鍵結構。'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <div className="aspect-square rounded-sm">
                <img 
                  src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisCAFRT/1.png" 
                  alt="Anatomy Illustration" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[9px] text-brand-green/60 italic leading-tight">
                {lang === 'en' 
                  ? 'Image from Henry Gray, Anatomy, Descriptive and Applied, 1913, p. 1416 (public domain).' 
                  : '圖像1：摘自 Henry Gray，《解剖學：描述與應用》，1913 年，第 1416 頁（公有領域）。'}
              </p>
            </div>

            <div className="space-y-6 text-brand-green">
              <p className="font-bold text-sm md:text-base">
                {lang === 'en' ? 'For human female:' : '對於人類女性：'}
              </p>
              {lang === 'en' ? (
                <ul className="space-y-6 text-xs md:text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><span className="italic font-bold underline decoration-[#EA5514] underline-offset-5">Müllerian ducts</span> (about weeks 6–12 of pregnancy) → grow into the fallopian tubes, uterus, cervix, and the upper part of vagina.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><span className="italic font-bold underline decoration-[#9ACB5C] underline-offset-5">Wolffian ducts</span> (present from about week 4, then fade by the end of the first trimester) → help guide early development of the Müllerian ducts but then disappear in females because there is no testosterone to maintain them.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><span className="italic font-bold underline decoration-[#DAE000] underline-offset-5">Urogenital sinus</span> (begins dividing around weeks 4–7) → forms the lower part of the vagina, the urethra, the bladder, and the external opening area (vestibule).</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-6 text-xs md:text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>米勒氏管（Müllerian ducts，妊娠約第6–12週出現）→ 發育成輸卵管、子宮、子宮頸以及陰道的上段。</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>沃爾夫管（Wolffian ducts，約在妊娠第4週出現，至第一孕期末逐漸退化）→ 在早期協助米勒氏管的發育，但由於女性缺乏維持其存在的睪固酮，因此最終會消失。</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>泌尿生殖竇（Urogenital sinus，約在妊娠第4–7週開始分隔）→ 形成陰道的下段、尿道、膀胱以及外陰的開口區域（前庭）。</span>
                  </li>
                </ul>
              )}
              <p className="text-xs md:text-sm pt-2">
                {lang === 'en' 
                  ? 'The critical window for female reproductive tract development is roughly weeks 4–12 of pregnancy.' 
                  : '女性生殖道的形成有一個至關重要的時期，主要發生在妊娠第4週至第12週。'}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-[21/9] rounded-sm">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisCAFRT/2.png" 
              alt="Embryological Development Illustration" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[9px] text-brand-green/60 italic max-w-4xl leading-tight">
            {lang === 'en' ? (
              <>
                European Society of Radiology. (n.d.). Embryological development of the female reproductive tract [Infographic]. Based on Robbins, J. B., et al. (2015). <a href="https://doi.org/10.1002/jmri.24771" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green transition-colors">Müllerian duct anomalies: Embryological development, classification, and MRI assessment. Journal of Magnetic Resonance Imaging, 41(1), 1–12.</a>
              </>
            ) : (
              <>
                圖像2：歐洲放射學會。（n.d.）。〈女性生殖道的胚胎學發育【資訊圖】〉。資料來源：Robbins, J. B., 等（2015）。〈Müllerian 管畸形：胚胎學發育、分類與 MRI 評估〉。《磁振影像學雜誌》（Journal of Magnetic Resonance Imaging），41(1)，1–12。<a href="https://doi.org/10.1002/jmri.24771" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-green transition-colors">https://doi.org/10.1002/jmri.24771</a>
              </>
            )}
          </p>
        </div>

        <div className="space-y-6 text-brand-green leading-relaxed text-sm md:text-base">
          {lang === 'en' ? (
            <>
              <p>If these steps are disrupted, it can lead to CAFRT (Congenital Anomalies of the Female Reproductive Tract).</p>
              <p className="text-xs md:text-sm text-brand-green/90">
                The exact reasons for such interruptions are not fully known: research suggests they arise from a mix of genetic, epigenetic, and environmental factors, but in most cases the cause cannot be clearly identified. One of the most common indicators of such structural differences is the absence of menstruation during puberty, or menstruation accompanied by severe pain.
              </p>
            </>
          ) : (
            <>
              <p>如果這些發育步驟在過程中受到干擾，可能導致女性生殖道先天性差異（ Congenital Anomalies of the Female Reproductive Tract, CAFRT ）的發生。</p>
              <p className="text-xs md:text-sm text-brand-green/90">
                造成此類異常的確切原因尚不完全清楚：研究指出，這可能是遺傳、表觀遺傳及環境因素共同作用所致，但在大多數情況下，具體成因仍無法明確釐清。 此類結構性差異最常見的徵兆之一，是青春期無月經，或月經來潮時伴隨劇烈疼痛。
              </p>
            </>
          )}
        </div>
      </section>

      {/* How We Understand Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'How We Understand This Unseen Reality' : '理解那未被看見的現實'}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-[#F2C984] to-[#D9ECB0] rounded-xl p-6 text-center max-w-2xl mx-auto">
          {lang === 'en' ? (
            <>
              <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">“The body is not a thing; it is a situation.”</p>
              <p className="text-xs md:text-sm text-[#1E4F33]/80">— Simone de Beauvoir, Philosopher, France, 1908–1986</p>
            </>
          ) : (
            <>
              <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">「身體不是一個物件，而是一種處境。」</p>
              <p className="text-xs md:text-sm text-[#1E4F33]/80">Simone de Beauvoir（西蒙娜·德·波伏娃）｜哲學家，法國，1908–1986</p>
            </>
          )}
        </div>

        <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-5xl mx-auto font-normal">
          {lang === 'en' ? (
            <>
              <p>Based on aggregated prevalence data for each subtype, CAFRT conditions are estimated to affect at least 21–28 million women worldwide. The true number is likely higher due to underdiagnosis, especially in low-resource settings.</p>
              <p>She Unbinds classifies CAFRT into seven levels based on their impact on sexual function and fertility — from mild to severe — to promote understanding, reduce silence, and connect women to appropriate care.</p>
              <p>We also focus on surgical solutions on conditions that may require creating vaginal canal— such as MRKH (vaginal/uterine agenesis) and transverse vaginal septum (level 4 – 6 stated below)</p>
              <p>Beyond supporting individuals, She Unbinds is committed to addressing the systematic neglect that leaves this community invisible in healthcare, education, and social discourse.</p>
            </>
          ) : (
            <>
              <p>根据各亚型的流行病学数据推估，全球至少有 2,100 至 2,800 万名妇女 受到先天性生殖道發育差異（CAFRT）的影响。由于诊断不足，特别是在医疗资源有限的地区，实际人数可能更高。</p>
              <p>姝然新身 | She Unbinds 根据 女性生殖道發育差異 （CAFRT） 对性功能与生育力的影响，将其分为七个等级——从轻微到严重——以促进理解、打破沉默，并帮助妇女获得合适的医疗照护。</p>
              <p>我们同时聚焦于需要进行阴道管道重建的病症外科解决方案——例如 MRKH 综合征（阴道/子宫发育不全或缺如） 以及 中高位陰道闭锁（对应下列第 4 至第 6 级）。</p>
              <p>姝然新身 | She Unbinds 致力于解决导致此群体在医疗、教育与社会论述中长期被忽视的系统性缺失和冷漠。</p>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-8 items-start">
          {/* Left Column: Levels 1-3 */}
          <div className="space-y-6">
            <LevelCard 
              level="1"
              title={
                <TooltipLink 
                  tooltipText={lang === 'en' ? `WHO, UN Women & OHCHR, Eliminating virginity testing: An interagency statement (2018):\n“There is no known examination that can prove whether a woman or girl has had sex. The hymen\n(also called the vaginal corona) varies in appearance and may be stretched for many reasons other\nthan sexual intercourse.”` : `世衛組織、聯合國婦女署和人權高專辦，《消除處女膜檢查：跨機構聲明》（2018年）：\n「沒有任何已知的檢查可以證明女性或女孩是否進行過性行為。處女膜（也稱為陰道冠）在\n外觀上各不相同，並且可能由於性交以外的許多原因而被拉伸。」`}
                  className="no-underline"
                >
                  {lang === 'en' ? 'Imperforate Hymen' : '陰道冠閉鎖（Imperforate Hymen）'}
                </TooltipLink>
              }
              color="#E4E67D"
              textColor="#1E4F33"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>
                    <TooltipLink 
                      href="https://www.rfsu.se/eng/about-the-vaginal-corona/"
                      tooltipText={`The term vaginal corona is used in accordance with the terminology recommended by the Swedish Association for Sexuality Education (RFSU), which replaced hymen to emphasize anatomical diversity and remove cultural misconceptions about “virginity.” RFSU (Riksförbundet för Sexuell Upplysning). (2009). The Vaginal Corona: Myths Surrounding Virginity. Stockholm: RFSU. Retrieved from https://www.rfsu.se/eng/about-the-vaginal-corona/`}
                    >
                      The Vaginal Corona
                    </TooltipLink> (hymenal membrane) completely blocks menstrual flow.
                  </li>
                  <li>Symptoms: Cyclical abdominal pain, no visible menstruation.</li>
                  <li>Sexual impact: Intercourse may be difficult or painful before treatment.</li>
                  <li>Fertility: Fully preserved after minor surgical correction.</li>
                  <li>Global incidence: <TooltipLink 
                      href="https://doi.org/10.1097/grf.0000000000000542"
                      tooltipText={`Debiec, Katherine E., and Anne-Marie E. Amies Oelschlager. “Uterovaginal Anomalies: A Guide for the Generalist ObstetricianGynecologist.” Clinical Obstetrics & Gynecology, vol. 63, no. 3, 22 May 2020, pp. 512–527, https://doi.org/10.1097/grf.0000000000000542.`}
                    >~1/1,000 to 1/2,000 (0.05–0.1%)</TooltipLink>.</li>
                  <li>Estimated affected women worldwide: <TooltipLink 
                      href="https://my.clevelandclinic.org/health/diseases/16270-cloacal-malformations"
                      tooltipText={`“Cloacal Malformations: Treatment, Tests & Recovery.” Cleveland Clinic, my.clevelandclinic.org/health/diseases/16270-cloacal-malformations`}
                    >~2.1–4.3 million</TooltipLink>.</li>
                  <li><TooltipLink 
                      href="https://doi.org/10.3390/jcm8010056"
                      tooltipText={`Lee, Keum Hwa, et al. “Imperforate Hymen: A Comprehensive Systematic Review.” Journal of Clinical Medicine, vol. 8, no. 1, 7 Jan. 2019, www.ncbi.nlm.nih.gov/pmc/articles/PMC6352236/, https://doi.org/10.3390/jcm8010056`}
                    >"one of the most common"</TooltipLink> obstructive reproductive tract anomalies.</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>
                    <TooltipLink 
                      href="https://www.rfsu.se/eng/about-the-vaginal-corona/"
                      tooltipText={`「陰道冠」一詞是根據瑞典性教育協會（RFSU）推薦的術語使用的，該協會用其取代了處女膜，以強調解剖學的多樣性，並消除關於「處女」的文化誤解。RFSU (Riksförbundet för Sexuell Upplysning). (2009). The Vaginal Corona: Myths Surrounding Virginity. Stockholm: RFSU. Retrieved from https://www.rfsu.se/eng/about-the-vaginal-corona/`}
                    >
                      陰道冠
                    </TooltipLink>（Vagina corona；舊稱處女膜，hymenal membrane）完全封閉，導致經血無法排出。
                  </li>
                  <li>症狀：週期性下腹疼痛，無可見月經出血。</li>
                  <li>對性行為的影響：在接受治療前，性行為可能困難或引發疼痛。</li>
                  <li>生育能力：經由小型手術矯正後，生育能力可完全保留。</li>
                  <li>全球發生率：約為 1/1,000 至 1/2,000（0.05%–0.1%）。</li>
                  <li>全球受影響女性人數估計：約 210 萬至 430 萬人。</li>
                  <li>為「最常見的」阻塞性生殖道先天異常之一。</li>
                </ul>
              )}
            </LevelCard>

            <LevelCard 
              level="2"
              title={lang === 'en' ? "Low Transverse Vaginal Atresia (Type I)" : "低位陰道閉鎖（第一型）"}
              color="#E4E67D"
              textColor="#1E4F33"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>Partial atresia of the lower vaginal canal, with incomplete canalization.</li>
                  <li>Symptoms: Obstructed or reduced menstrual flow, discomfort during intercourse.</li>
                  <li>Sexual impact: Painful or difficult penetrative intercourse until surgically corrected.</li>
                  <li>Fertility: Usually unaffected.</li>
                  <li>Global incidence: <TooltipLink 
                      href="https://obgynkey.com/abnormal-development-of-the-female-genital-tract/"
                      tooltipText={`UFO Themes. “Abnormal Development of the Female Genital Tract.” Obgyn Key, 9 Apr. 2017, obgynkey.com/abnormal-development-of-the-female-genital-tract/.`}
                    >~1/30,000 to 1/80,000</TooltipLink>.</li>
                  <li>Estimated affected women worldwide: ~5,000–40,000.</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>在陰道下段形成一層薄的組織隔膜。</li>
                  <li>症狀：月經流出受阻，性行為時感到不適。</li>
                  <li>對性行為的影響：在經手術矯正前，性交可能疼痛。</li>
                  <li>生育能力：通常不受影響。</li>
                  <li>全球發生率：約為 1/30,000 至 1/80,000。</li>
                  <li>全球受影響女性人數估計：約 5,000 至 40,000 人。</li>
                </ul>
              )}
            </LevelCard>

            <LevelCard 
              level="3"
              title={lang === 'en' ? "Uterine Cavity Anomalies" : "子宮腔異常"}
              subtitle={lang === 'en' ? "(e.g., Septate Uterus, Robert's Uterus, Functional Abnormalities)" : "（例如：子宮中隔、羅伯特氏子宮、功能性異常）"}
              color="#E4E67D"
              textColor="#1E4F33"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>Structural or functional irregularities inside the uterus.</li>
                  <li>Symptoms: Often asymptomatic; may cause pain or menstrual irregularities.</li>
                  <li>Sexual impact: Typically normal sex life; some cases may have discomfort.</li>
                  <li>Fertility: Increased risk of miscarriage, preterm birth, or ectopic pregnancy.</li>
                  <li>Global incidence: ~<TooltipLink 
                      href="https://doi.org/10.3390/jcm8010056"
                      tooltipText={`Lee, Keum Hwa, et al. “Imperforate Hymen: A Comprehensive Systematic Review.” Journal of Clinical Medicine, vol. 8, no. 1, 7 Jan. 2019, www.ncbi.nlm.nih.gov/pmc/articles/PMC6352236/, https://doi.org/10.3390/jcm8010056`}
                    >1/200</TooltipLink> (rare subtypes ~1/76,000–100,000).</li>
                  <li>Estimated affected women worldwide: ~<TooltipLink 
                      href="https://obgynkey.com/abnormal-development-of-the-female-genital-tract/?utm_medium=email&utm_source=transaction&client=bot&client=bot&client=bot#:~:text=The%20prevalence%20of%20uterine%20anomalies"
                      tooltipText={`https://obgynkey.com/abnormal-development-of-the-female-genital-tract/?utm_medium=email&utm_source=transaction&client=bot&client=bot&client=bot#:~:text=The%20prevalence%20of%20uterine%20anomalies`}
                    >21.5 million</TooltipLink> (for septate uterus; rare subtypes much fewer).</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                  <li>子宮內部的結構或功能出現異常。</li>
                  <li>症狀：多數情況下無明顯症狀；可能出現疼痛或月經不規則。</li>
                  <li>對性行為的影響：通常性生活正常；部分個案可能感到不適。</li>
                  <li>生育能力：流產、早產或子宮外孕的風險增加。</li>
                  <li>全球發生率：約為 1/200（罕見亞型約為 1/76,000 至 1/100,000）。</li>
                  <li>全球受影響女性人數估計：約 2,150 萬人（以子宮中隔為主；罕見亞型人數遠少）。</li>
                </ul>
              )}
            </LevelCard>
          </div>

          {/* Right Column: Levels 4-7 */}
          <div className="space-y-6">
            <LevelCard 
              level="4"
              title={lang === 'en' ? "Mid/Upper Transverse Vaginal Atresia (Type II)" : "中/上段陰道閉鎖（第二型）"}
              color="#F28C5E"
              textColor="white"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>Complete atresia of the mid or upper vaginal canal. A solid congenital tissue segment completely blocks the vaginal canal in the mid or upper portion.</li>
                  <li>Symptoms: Menstrual blood retention (hematocolpos), cyclic pelvic pain, primary amenorrhea in some cases.</li>
                  <li>Sexual impact: Penetrative intercourse impossible without surgical reconstruction.</li>
                  <li>Fertility: Possible if uterus is normal and menstrual flow restored.</li>
                  <li>Global incidence: ~1/10,000.</li>
                  <li>Estimated affected women worldwide: ~0.43 million.</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>在陰道中段或上段形成一層實質性的組織隔膜，阻塞陰道通道。</li>
                  <li>症狀：經血滯留（陰道積血），骨盆疼痛。</li>
                  <li>對性行為的影響：未經手術前，無法進行性行為。</li>
                  <li>生育能力：若子宮結構正常且月經通道恢復，仍有生育可能。</li>
                  <li>全球發生率：約為 1/10,000。</li>
                  <li>全球受影響女性人數估計：約 43 萬人。</li>
                </ul>
              )}
              <p className="text-[10px] md:text-xs italic mt-4 text-brand-green/70">
                {lang === 'en' ? 'She Unbinds supports access to safe surgical solutions for these cases.' : 'She Unbinds | 姝然新身 致力於協助此類個案獲得安全且可及的手術治療。'}
              </p>
            </LevelCard>

            <LevelCard 
              level="5"
              title={lang === 'en' ? "Complete Vaginal Agenesis + Cervical Agenesis" : "高位陰道閉鎖合併子宮頸缺如"}
              color="#F28C5E"
              textColor="white"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>Complete absence of the vaginal canal, often accompanied by absence or non-functionality of the cervix.</li>
                  <li>Symptoms: Primary amenorrhea, inability to have penetrative intercourse.</li>
                  <li>Sexual impact: Requires surgical creation of a neovagina.</li>
                  <li>Fertility: Severely compromised; most cases have abnormal or absent uterus.</li>
                  <li>
                    Global incidence:{' '}
                    <TooltipLink 
                      href="https://doi.org/10.18203/2320-1770.ijrcog20163462"
                      tooltipText={`Selvaraj Lakshmy, and Nity Rose. “Congenital Absence of Uterine Cervix.” International Journal of Reproduction Contraception Obstetrics and Gynecology, 1 Jan. 2016, pp. 3634–3636, https://doi.org/10.18203/2320-1770.ijrcog20163462`}
                    >
                      ~1/50,000
                    </TooltipLink>.
                  </li>
                  <li>
                    Estimated affected women worldwide: ~86,000 ({' '}
                    <TooltipLink 
                      href="https://doi.org/10.1016/j.fertnstert.2020.02.006"
                      tooltipText={`Mikos, Themistoklis, et al. “Current Knowledge about the Management of Congenital Cervical Malformations: A Literature Review.” Fertility and Sterility, vol. 113, no. 4, Apr. 2020, pp. 723–732, https://doi.org/10.1016/j.fertnstert.2020.02.006`}
                    >
                      Only a few hundred cases
                    </TooltipLink>{' '}
                    have been reported in medical literature over decades).
                  </li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>無陰道，但有子宫产生经血，且多數情況下缺乏具功能性的子宮頸。</li>
                  <li>症狀：原發性閉經，無法進行插入式性行為。</li>
                  <li>對性行為的影響：需透過手術建立新陰道（人工陰道）方可進行性行為。</li>
                  <li>生育能力：嚴重受損；多數個案伴隨子宮異常。</li>
                  <li>
                    全球發生率：{' '}
                    <TooltipLink 
                      href="https://doi.org/10.18203/2320-1770.ijrcog20163462"
                      tooltipText={`Selvaraj Lakshmy, and Nity Rose. “Congenital Absence of Uterine Cervix.” International Journal of Reproduction Contraception Obstetrics and Gynecology, 1 Jan. 2016, pp. 3634–3636, https://doi.org/10.18203/2320-1770.ijrcog20163462`}
                    >
                      約為 1/50,000
                    </TooltipLink>。
                  </li>
                  <li>
                    全球受影響女性人數估計：{' '}
                    <TooltipLink 
                      href="https://doi.org/10.1016/j.fertnstert.2020.02.006"
                      tooltipText={`Mikos, Themistoklis, et al. “Current Knowledge about the Management of Congenital Cervical Malformations: A Literature Review.” Fertility and Sterility, vol. 113, no. 4, Apr. 2020, pp. 723–732, https://doi.org/10.1016/j.fertnstert.2020.02.006`}
                    >
                      約 86,000 人（數十年來醫學文獻中僅報告數百例）
                    </TooltipLink>。
                  </li>
                </ul>
              )}
              <div className="text-[10px] md:text-xs italic mt-4 text-brand-green/70">
                {lang === 'en' ? (
                  'She Unbinds supports access to safe surgical solutions for these cases.'
                ) : (
                  <span>
                    此為 She Unbinds | 姝然新身 醫療支持網絡的重點關注領域，
                    <span 
                      onClick={() => navigate('/luohu-vaginoplasty')}
                      className="underline cursor-pointer hover:text-[#EA5514] font-bold"
                    >
                      點此了解我們所設立的「羅湖術式」醫師培訓計畫。
                    </span>
                  </span>
                )}
              </div>
            </LevelCard>

            <LevelCard 
              level="6"
              title={lang === 'en' ? "MRKH Syndrome (Mayer–Rokitansky–Küster–Hauser Syndrome)" : "MRKH 症候群（Mayer–Rokitansky–Küster–Hauser Syndrome）"}
              subtitle={
                lang === 'en' ? (
                  <span>
                    –{' '}
                    <span 
                      onClick={() => document.getElementById('what-is-mrkh')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="underline cursor-pointer hover:text-brand-green transition-colors font-bold"
                    >
                      more details
                    </span>
                  </span>
                ) : (
                  <span>
                    —{' '}
                    <span 
                      onClick={() => document.getElementById('what-is-mrkh')?.scrollIntoView({ behavior: 'smooth' })} 
                      className="underline cursor-pointer hover:text-brand-green transition-colors font-bold"
                    >
                      更多資訊
                    </span>
                  </span>
                )
              }
              color="#F28C5E"
              textColor="white"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>Complete absence of the vaginal canal, often accompanied by absence or non-functionality of the cervix.</li>
                  <li>Symptoms: Primary amenorrhea, inability to have penetrative intercourse.</li>
                  <li>Sexual impact: Requires surgical creation of a neovagina.</li>
                  <li>Fertility: Severely compromised; most cases have abnormal or absent uterus.</li>
                  <li>
                    Global incidence:{' '}
                    <TooltipLink 
                      href="https://doi.org/10.1186/1750-1172-2-4"
                      tooltipText={`Guerrier, Daniel, et al. “Mayer-Rokitansky-Küster-Hauser Syndrome.” Orphanet Journal of Rare Diseases, vol. 2, no. 1, 2007, p. 4, https://doi.org/10.1186/1750-1172-2-4.`}
                    >
                      ~1/50,000
                    </TooltipLink>.
                  </li>
                  <li>
                    Estimated affected women worldwide:{' '}
                    <TooltipLink 
                      href="https://my.clevelandclinic.org/health/diseases/16270-cloacal-malformations"
                      tooltipText={`Based on 1 in 50,000 prevalence and ~3.9 billion female population.`}
                    >
                      ~86,000
                    </TooltipLink> (Only a few hundred cases have been reported in medical literature over decades).
                  </li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>症狀：陰道缺如或發育不全；子宮缺如或僅為殘跡；外生殖器與卵巢功能正常。</li>
                  <li>對性行為的影響：未經手術重建前，無法進行納入式性行為。</li>
                  <li>生育能力：無法自然受孕；可透過代理孕母或子宮移植進行家庭建立。</li>
                  <li>全球發生率：約為 1/4,000 至 1/5,000。</li>
                  <li>全球受影響女性人數估計：約 86 萬至 108 萬人。</li>
                </ul>
              )}
              <div className="text-[10px] md:text-xs italic mt-4 text-brand-green/70">
                {lang === 'en' ? (
                  'She Unbinds supports access to safe surgical solutions for these cases.'
                ) : (
                  <span>
                    此為 She Unbinds | 姝然新身 醫療支持網絡的重點關注領域，
                    <span 
                      onClick={() => navigate('/luohu-vaginoplasty')}
                      className="underline cursor-pointer hover:text-[#EA5514] font-bold"
                    >
                      點此了解我們所設立的「羅湖術式」醫師培訓計畫。
                    </span>
                  </span>
                )}
              </div>
            </LevelCard>

            <div 
              className="bg-[#F28C5E] rounded-full px-6 py-2 text-center cursor-pointer hover:bg-[#F28C5E]/90 transition-colors relative group"
              onMouseEnter={() => setIsBannerHovered(true)}
              onMouseLeave={() => setIsBannerHovered(false)}
              onClick={() => navigate('/luohu-vaginoplasty')}
            >
              <p className="text-[10px] md:text-xs font-bold text-white">
                {lang === 'en' 
                  ? 'She Unbinds supports access to safe surgical solutions for level 4, 5 and 6 cases.' 
                  : 'She Unbinds | 姝然新身爲4、5和6級病例提供支持和安全的手術解決方案。'}
              </p>
              
              <AnimatePresence>
                {isBannerHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64 p-3 rounded-lg shadow-xl text-[10px] md:text-xs pointer-events-none"
                    style={{ backgroundColor: '#C5E790' }}
                  >
                    <div style={{ color: '#1E4F33' }} className="font-medium leading-tight">
                      {lang === 'en' ? 'Click here to find out about Luohu Vaginoplasty.' : '點擊此處了解羅湖術式（Luohu Vaginoplasty）的詳細資訊。'}
                    </div>
                    {/* Tooltip Arrow */}
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                      style={{ borderTopColor: '#C5E790' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <LevelCard 
              level="7"
              title={lang === 'en' ? "Cloacal Malformation (Persistent Cloaca; UrogenitalSinus Spectrum)" : "第 7 級——泄殖腔畸形（持續性泄殖腔；尿生殖竇譜系畸形）"}
              color="#C94C33"
              textColor="white"
            >
              {lang === 'en' ? (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>Symptoms: A single perineal opening with a shared channel for urinary, genital and intestinal tracts; may present prenatally or at birth with pelvic/abdominal mass from hydrocolpos/hydrometrocolpos, urinary tract dilation (hydronephrosis), and anorectal malformation. In adolescence/adulthood, possible dyspareunia or menstrual outflow issues if reconstruction is incomplete.</li>
                  <li>Sexual impact: Variable. Many patients require vaginal reconstruction; with expert care, good sexual function is achievable, supported by pelvicfloor therapy and psychosexual counseling.</li>
                  <li>Fertility: Individualized. Pregnancy is possible after reconstruction but often highrisk and should be managed in tertiary centers (urogynecology + maternalfetal medicine). Assisted reproduction may be considered depending on anatomy.</li>
                  <li>Global incidence: ~1/20,000–1/50,000 female births.</li>
                  <li>Estimated affected women worldwide: ~80,000–200,000 (orderofmagnitude estimate; varies with diagnostic definitions and survival).</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-brand-green">
                  <li>症狀：會陰部僅有單一開口，泌尿道、生殖道與腸道共用同一通道；可於產前或出生時表現為因陰道／子宮陰道積液（hydrocolpos／hydrometrocolpos）造成的骨盆或腹部腫塊、泌尿道擴張（腎積水）及肛直腸畸形。於青少年或成人期，若重建未完全，可能出現性交疼痛或月經流出受阻。</li>
                  <li>對性行為的影響：差異較大。多數個案需進行陰道重建；在專業照護下，配合骨盆底治療與性心理諮商，可達成良好性功能。</li>
                  <li>生育能力：需個別化評估。重建後仍有懷孕可能，但多屬高風險，應於第三級醫療中心（泌尿婦科＋母胎醫學）管理；是否採用輔助生殖取決於解剖結構。</li>
                  <li>全球發生率：約為每 20,000–50,000 名女性新生兒 1 例。</li>
                  <li>全球受影響女性人數估計：約 8 萬至 20 萬人（量級估計；隨診斷定義與存活率而異）。</li>
                </ul>
              )}
            </LevelCard>
          </div>
        </div>
      </section>

      {/* Global Stigmatization Section */}
      <section className="py-20 px-6 bg-brand-beige/10">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
              {lang === 'en' ? 'Global Stigmatization on CAFRT Including MRKH Syndrome' : '全球大眾對 CAFRT（包括 MRKH 症候群）的社會污名與偏見'}
            </h2>
            <span className="text-[#EA5514] font-medium text-sm md:text-base">
              {lang === 'en' ? '(CRAFT: Congenital Anomalies of the Female Reproductive Tract)' : '（CAFRT：女性先天性生殖道發育差異）'}
            </span>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-[#F2C984] to-[#D9ECB0] rounded-xl p-6 text-center max-w-4xl mx-auto mb-12">
            {lang === 'en' ? (
              <>
                <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">"When an experience can only be named by others, that in itself is a form of violence."</p>
                <p className="text-xs md:text-sm text-[#1E4F33]/80">— Gayatri Chakravorty Spivak, Postcolonial Theorist and Literary Critic, India / United States, 1942–</p>
              </>
            ) : (
              <>
                <p className="text-base md:text-lg font-medium text-[#1E4F33] mb-1">「當一種經歷隻能由他人來命名時，這本身就是一種暴力。」</p>
                <p className="text-xs md:text-sm text-[#1E4F33]/80">—— 佳亞特里·查克拉沃蒂·斯皮瓦克（Gayatri Chakravorty Spivak），後殖民理論家、文學評論家，印度/美國，1942年—</p>
              </>
            )}
          </div>

          {/* Body Text */}
          <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-5xl mx-auto font-normal mb-16">
            {lang === 'en' ? (
              <>
                <p>In many cultures, the vagina and uterus are constructed as more than an organ.</p>
                <p>It carries layers of social meanings — as a symbol of chastity, a measure of a woman's worth, and even a bearer of family honor.</p>
                <p>Because of this, any atypical symptom related to the reproductive system is often cloaked in silence, stigma, and shame.</p>
                <p>Above stated congenital differences are not merely medical conditions — they are deeply tied to issues of bodily autonomy and gendered stigma.</p>
                <p>Across cultures and history, women born with atypical reproductive anatomy — such as absent or underdeveloped vagina or uterus— are often subjected to deep stigma. These conditions are not simply seen as medical, but as moral or spiritual failings.</p>
                <p>These profound medical, cultural, and psychological barriers that prevent them from fully embracing healthy femininity and living authentically as themselves.</p>
              </>
            ) : (
              <>
                <p>在許多文化中，陰道和子宮被賦予了超越器官本身的意義。</p>
                <p>它們承載著多重社會含義——貞潔的象徵、衡量女性價值的標準，甚至是家族榮譽的載體。</p>
                <p>正因如此，任何與生殖系統相關的非典型症狀，往往被籠罩在沈默、污名與恥辱之中。</p>
                <p>上述先天性發育差異不僅僅是醫學問題，它們與身體自主權和性別污名緊密相連。</p>
                <p>縱觀不同文化與歷史，天生具有非典型生殖解剖結構的女性（如先天性無陰道或無子宮）往往承受著深重的污名。這些情況不僅被視為醫學上的差異，甚至被貼上道德或精神缺陷的標籤。</p>
                <p>這些深重的醫學、文化和心理障礙，阻礙了她們充分接納健康的女性氣質，並真誠地活出自我。</p>
              </>
            )}
          </div>

          {/* Interactive Image Map */}
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-2xl shadow-2xl bg-black/5">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/GlobalStigmatizationonCAFRT/map.png" 
              alt="Global Stigma Map" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
              onClick={() => setActiveMapPoint(null)}
            />

            {/* Interactive Points */}
            {/* Interactive Points (Triggers Only) */}
            {MAP_POINTS.map((point) => (
              <div 
                key={point.id}
                className={`absolute ${activeMapPoint === point.id ? 'z-40' : 'z-20'}`}
                style={{ 
                  left: `${point.x}%`, 
                  top: `${point.y}%`,
                  width: point.triggerWidth,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMapPoint(activeMapPoint === point.id ? null : point.id);
                  }}
                  className="w-full transition-transform hover:scale-110 active:scale-95 drop-shadow-lg"
                >
                  <img 
                    src={point.triggerUrl} 
                    alt={`Point ${point.id}`} 
                    className="w-full h-auto object-contain"
                    style={{ aspectRatio: point.aspectRatio }}
                    referrerPolicy="no-referrer"
                  />
                </button>
              </div>
            ))}

            {/* Single Detail Overlay (Positioned relative to Map Container) */}
            <AnimatePresence>
              {activeMapPoint && (() => {
                const point = MAP_POINTS.find(p => p.id === activeMapPoint);
                if (!point) return null;

                const triggerWidthNum = parseFloat(point.triggerWidth);
                
                // Base styles
                const detailStyle: any = { 
                  width: typeof window !== 'undefined' && window.innerWidth < 768 ? '70%' : point.detailWidth,
                  top: `${point.y}%`,
                  position: 'absolute'
                };

                // Smart Positioning based on map location
                if (point.x > 70) {
                  // Right side (like point-5): Float to the LEFT of the trigger with a large gap
                  detailStyle.right = `${100 - point.x + triggerWidthNum/2 + 1}%`;
                  detailStyle.transform = 'translateY(-50%)';
                } else if (point.x < 30) {
                  // Left side: Float to the RIGHT of the trigger with a large gap
                  detailStyle.left = `${point.x + triggerWidthNum/2 + 1}%`;
                  detailStyle.transform = 'translateY(-50%)';
                } else {
                  // Center: Float ABOVE the trigger
                  detailStyle.left = `${point.x}%`;
                  detailStyle.transform = 'translate(-50%, calc(-100% - 40px))';
                }

                return (
                  <motion.div
                    key={`detail-${point.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-50 pointer-events-none"
                    style={detailStyle}
                  >
                    <div className="shadow-2xl rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
                      <img 
                        src={point.detailUrl} 
                        alt={`Detail ${point.id}`} 
                        className="w-full h-auto block"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* What is MRKH? Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'What is MRKH?' : '什麼是MRKH？'}
          </h2>
        </div>

        <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-5xl">
          {lang === 'en' ? (
            <>
              <p><TooltipLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1832178/" tooltipText="https://pmc.ncbi.nlm.nih.gov/articles/PMC1832178/">A congenital disorder</TooltipLink> affecting the development of the female reproductive system. These women often face isolation and self-denial due to delayed diagnosis, being misunderstood by society as "incomplete women." They urgently require professional medical interventions and long-term psychological support.</p>
              <p>The global incidence rate is <TooltipLink href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/01/mullerian-agenesis-diagnosis-management-and-treatment" tooltipText="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/01/mullerian-agenesis-diagnosis-management-and-treatment">approximately 1 in every 4,500 to 5,000</TooltipLink> female newborns. Particularly in the Global South, many patients remain undiagnosed due to shame, misdiagnosis, or lack of medical resources. In remote areas, they may never receive proper gynecological examinations throughout their lives. The lack of societal awareness about amenorrhea (absence of menstruation) contributes to low healthcare-seeking rates.</p>
              <p><TooltipLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7439721/" tooltipText="https://pmc.ncbi.nlm.nih.gov/articles/PMC7439721/">Type 1 MRKH (Typical)</TooltipLink>: stated as above — 70%</p>
              <p><TooltipLink href="https://doi.org/10.1186/s13023-020-01491-9" tooltipText="Herlin, Morten Krogh, et al. “Mayer-Rokitansky-Küster-Hauser (MRKH) Syndrome: A Comprehensive Update.” Orphanet Journal of Rare Diseases, vol. 15, no. 1, 20 Aug. 2020, https://doi.org/10.1186/s13023-020-01491-9.">Type 2 MRKH (Atypical)</TooltipLink>: Similar vaginal absence or shortening, with additional developmental anomalies in other organs (commonly kidneys or spine) — 30%</p>
            </>
          ) : (
            <>
              <p><TooltipLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1832178/" tooltipText="https://pmc.ncbi.nlm.nih.gov/articles/PMC1832178/">MRKH是一種影響女性生殖系統發育的先天性身體差異</TooltipLink>。這些女性常常因診斷延遲而面臨孤立和自我否定，被社會誤解為「不完整的女性」。她們迫切需要專業的醫療介入和長期的心理支持。</p>
              <p>全球發生率<TooltipLink href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/01/mullerian-agenesis-diagnosis-management-and-treatment" tooltipText="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/01/mullerian-agenesis-diagnosis-management-and-treatment">約為每4,500至5,000名女嬰中就有1例</TooltipLink>。 尤其是在全球南方地區，許多女性因羞恥感、誤診或醫療資源匱乏而未能被診斷出來。在偏遠地區，他們可能一生都無法接受正規的婦科檢查。社會對閉經（月經停止）缺乏認知，導致就醫率低。</p>
              <p><TooltipLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7439721/" tooltipText="https://pmc.ncbi.nlm.nih.gov/articles/PMC7439721/">第 1 型 MRKH（典型）</TooltipLink>：如上所述 – 70%</p>
              <p><TooltipLink href="https://doi.org/10.1186/s13023-020-01491-9" tooltipText="Herlin, Morten Krogh, et al. “Mayer-Rokitansky-Küster-Hauser (MRKH) Syndrome: A Comprehensive Update.” Orphanet Journal of Rare Diseases, vol. 15, no. 1, 20 Aug. 2020, https://doi.org/10.1186/s13023-020-01491-9.">第 2 型 MRKH（非典型）</TooltipLink>：同樣呈現陰道缺如或短縮，並伴有其他器官（常見為腎臟或脊椎）的發育異常 – 30%</p>
            </>
          )}
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
          <img 
            src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisMRKH/1.png" 
            alt="MRKH Anatomy Comparison" 
            className="w-full h-auto rounded-3xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Why is MRKH Syndrome Not Detected During Prenatal Screening? Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514] leading-tight max-w-3xl">
            {lang === 'en' 
              ? 'Why is MRKH Syndrome Not Detected During Prenatal Screening?' 
              : '為什麼 MRKH 症候群在產前篩檢中無法被檢測出來？'}
          </h2>
          <p className="text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-4xl">
            {lang === 'en' 
              ? 'MRKH Syndrome is a congenital condition characterized by developmental abnormalities of the female internal reproductive organs (uterus and vagina), but these abnormalities are often difficult to detect during the fetal period for the following reasons:' 
              : 'MRKH 是一種先天性身體差異，其特徵為女性內生殖器官（子宮與陰道）的缺如或發育異常；然而，這些異常在胎兒期往往難以被檢測到，原因如下：'}
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-white/5">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisMRKH/2.png" 
              alt="Prenatal Screening" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-[#DAE000]/26 rounded-3xl p-8 space-y-6">
            {lang === 'en' ? (
              <ul className="space-y-6 text-xs md:text-sm text-brand-green leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>The uterus in a female fetus is naturally very small, and even if developmental abnormalities exist, ultrasound imaging struggles to definitively identify the absence or underdevelopment of the uterus.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>MRKH patients have a normal female karyotype (46,XX) with no genetic abnormalities, so routine tests like Down syndrome screening or amniocentesis cannot detect the condition.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>Unless there are obvious associated urinary or skeletal abnormalities (e.g., absent kidney or spina bifida), it is challenging to suspect MRKH prenatally.</p>
                </li>
              </ul>
            ) : (
              <ul className="space-y-6 text-xs md:text-sm text-brand-green leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>女性胎兒的子宮天生就非常小，即使有發育異常，超音波影像也難以明確判斷子宮缺失或發育不全的情況。</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>MRKH症候群患者俱有正常的女性核型（46,XX），無遺傳異常，因此常規檢測如唐氏症篩檢或羊膜穿刺術無法發現該病症。</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#EA5514] font-bold">•</span>
                  <p>除非有明顯的泌尿系統或骨骼畸形（如腎缺如或脊柱裂），否則產前診斷MRKH症候群具有挑戰性。</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* MRKH Syndrome Diagnosis and Confirmation Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
          {lang === 'en' ? 'MRKH Syndrome Diagnosis and Confirmation' : 'MRKH症候群的診斷與確診'}
        </h2>
        <div className="space-y-4 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-4xl">
          {lang === 'en' ? (
            <>
              <p>Diagnosis is typically made during adolescence due to the absence of menstruation, confirmed through gynecological examination, ultrasound, or magnetic resonance imaging (MRI).</p>
              <p>In some cases, chromosomal testing may be required to rule out other conditions.</p>
            </>
          ) : (
            <>
              <p>此病症通常在青春期因月經缺失而被診斷，並透過婦科檢查、超音波檢查或磁振造影（MRI）確診。</p>
              <p>某些情況下可能需要進行染色體檢測以排除其他疾病。</p>
            </>
          )}
        </div>
      </section>

      {/* The Undertreatment of MRKH Globally Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
          {lang === 'en' ? 'The Undertreatment of MRKH Globally' : 'MRKH 症候群在全球醫療體系中的邊緣化處境'}
        </h2>
        
        <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-start">
          <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed">
            {lang === 'en' ? (
              <p>MRKH syndrome is a congenital condition, characterized by the absence or underdevelopment of the uterus and vaginal canal, and has been present throughout human history. It poses significant challenges medically and socially. Globally, many women with MRKH experience undertreatment due to various factors:</p>
            ) : (
              <p>MRKH 症候群屬於一種在人類歷史中長期存在的先天性身體狀況。其特徵為子宮和陰道缺如或發育不全，在醫學和社會層麵均帶來重大挑戰。在全球範圍內，許多MRKH女性因多種因素而未能獲得充分治療：</p>
            )}
            <div className="bg-[#DAE000]/26 rounded-3xl p-8 space-y-6">
              {lang === 'en' ? (
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>Lack of Awareness and Diagnosis: Many women remain undiagnosed or misdiagnosed due to limited access to specialized healthcare, especially in low-resource settings.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>Cultural Stigma: In numerous cultures, including China and India, the social stigma attached to infertility and atypical reproductive anatomy deters women from seeking care.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>Limited Access to Effective Treatment: Surgical and non-surgical treatments, such as vaginoplasty or vaginal dilators, require specialized expertise often unavailable or inaccessible.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>Cost and Healthcare Inequities: Treatment can be expensive, and healthcare infrastructure disparities further limit the availability of appropriate interventions.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>Psychosocial Barriers: The stigma can contribute to social isolation and mental health issues, reducing treatment adherence and follow-up care.</p>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>認知不足與診斷缺失：由於難以獲得專業醫療服務，尤其在資源匱乏地區，許多女性仍未被確診或被誤診。</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>文化污名：在包括中國和印度在內的眾多文化中，不孕症和非典型生殖解剖結構所附帶的社會污名阻礙了女性尋求治療。</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>有效治療受限：手術與非手術治療（如陰道成形術或陰道擴張器）均需專業技術支持，而這類資源往往難以取得或無法取得。</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>費用與醫療保健不平等：治療費用可能高昂，而醫療基礎設施的差異進一步限制了適當的幹預措施可近性。</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#EA5514] font-bold">•</span>
                    <p>心理社會障礙：污名化可能導致社會隔離和心理健康問題，進而降低治療順從性和追蹤照護的完成率。</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl mt-0">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisMRKH/3.png" 
              alt="Global Undertreatment Map" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>


      {/* MRKH Prevalence and Diagnosis in China and India Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
          {lang === 'en' ? 'MRKH Prevalence and Diagnosis in China and India' : '中國與印度的MRKH發生率及診斷現狀'}
        </h2>
        
        <div className="bg-[#DAE000]/26 rounded-3xl p-8 md:p-12">
          <ul className="space-y-6 text-xs md:text-sm text-brand-green leading-relaxed">
            <li className="flex gap-4">
              <span className="text-[#EA5514] font-bold">•</span>
              <p>
                {lang === 'en' 
                  ? 'In both countries, it is estimated that over 150,000 women are living with MRKH or related congenital conditions involving vaginal agenesis or atresia, sharing similar embodied experiences.' 
                  : '兩國分別約有超過15萬名女性有MRKH，先天性陰道閉鎖的類似狀況的身體經驗。'}
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#EA5514] font-bold">•</span>
              <p>
                {lang === 'en' 
                  ? 'In China, about 10-20% of these women (roughly 14,000 to 30,000) are diagnosed.' 
                  : '在中國，約的此類女性（約14,000至30,000人）被確診。'}
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#EA5514] font-bold">•</span>
              <p>
                {lang === 'en' 
                  ? 'Of those diagnosed, 50% to more than 50% (7,000 - 15,000) have undergone treatment.' 
                  : '在確診病例中，50%至超過50%（7,000–15,000人）接受了治療。'}
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#EA5514] font-bold">•</span>
              <p>
                {lang === 'en' 
                  ? 'In India, only about 3-5% (4,200 - 7,500) receive diagnosis.' 
                  : '在印度，僅約3-5%（4,200-7,500人）獲得診斷。'}
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-[#EA5514] font-bold">•</span>
              <p>
                {lang === 'en' 
                  ? 'Of the diagnosed women in India, around 30% (1,400 - 3,000) have undergone treatment.' 
                  : '印度確診女性中，約有30%（1,400-3,000人）接受過治療。'}
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-12">
          <p className="text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-4xl">
            {lang === 'en' 
              ? 'The numbers are plausible estimates based on population size and reported percentages in academic literature, though regional variation exists.' 
              : '這些數字是基於人口規模和學術文獻中報告的百分比得出的合理估計，儘管存在區域差異。'}
          </p>
          
          <div className="aspect-[16/10] w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/3-OurCourse/WhatisMRKH/4.png" 
              alt="Community Impact" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Connect With Us Invitation */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex justify-center">
        <div className="bg-[#DAE000]/50 rounded-full px-12 py-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#EA5514] mb-1 uppercase tracking-wide">
            {lang === 'en' ? 'WE WARMLY INVITE YOU TO CONNECT WITH US !' : '我們誠摯邀請您與我們聯繫！'}
          </h2>
          <a 
            href="mailto:voice@she-unbinds.org" 
            className="text-[#EA5514] font-medium text-sm md:text-lg hover:underline flex items-center justify-center gap-2"
          >
            📮E-mail <span className="text-brand-green">→</span> voice@she-unbinds.org
          </a>
        </div>
      </section>

      {/* Studies Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-3 text-brand-green font-bold text-sm md:text-base">
          <div className="w-6 h-6 rounded-full bg-[#9ACB5C] flex items-center justify-center text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <h3>
            {lang === 'en' 
              ? 'Existing psychological and sociological studies on MRKH syndrome in various countries' 
              : '各國針對 MRKH 症候群所進行的現有心理學與社會學研究'}
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {STUDIES_DATA.map((study) => (
              <button 
                key={study.id}
                onClick={() => {
                  setSelectedStudyId(study.id);
                  detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`relative group/card flex-none w-48 md:w-64 aspect-[3/4] bg-white rounded-xl shadow-md overflow-hidden snap-start transition-all hover:scale-[1.02] ${selectedStudyId === study.id ? 'ring-4 ring-[#EA5514]' : ''}`}
              >
                <img 
                  src={study.imageUrl} 
                  alt={lang === 'en' ? study.title : (study.titleTc || study.title)} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/70 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[10px] md:text-xs font-bold leading-tight text-left">
                    {lang === 'en' ? study.title : (study.titleTc || study.title)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed max-w-5xl font-medium">
          {lang === 'en' ? (
            <>
              <p>
                <span className="font-bold">MRKH (Mayer-Rokitansky-Küster-Hauser) syndrome</span>, a congenital condition characterized by vaginal and uterine agenesis in individuals with typical female karyotypes, often results in significant psychological and social challenges.
              </p>
              <p>
                Beyond its physical manifestations, <span className="font-bold">MRKH</span> affects female identity formation, mental health, sexual function, and social relationships. Recent studies have begun to address the psychosocial dimensions of this syndrome across different cultural and medical contexts.
              </p>
              <p>
                The following chapter presents a selection of international researches examining psychological symptoms, treatment outcomes, identity processes, and their influence of cultural and social support systems in individuals with <span className="font-bold">MRKH</span>. Together, these studies highlight the need for integrated psychological care, early screening, and culturally sensitive support to improve patient well-being.
              </p>
            </>
          ) : (
            <>
              <p>
                MRKH（Mayer-Rokitansky-Küster-Hauser）症候群是一種影響女性生殖系統發育的先天性身體差異，這些女性雖具有典型的女性染色體型，卻伴有陰道及子宮發育不全，常導致嚴重的心理與社會挑戰。
              </p>
              <p>
                除了生理表現外，MRKH 還會影響女性身份的形成、心理健康、性功能以及人際關係。近期研究已開始探討此症候群在不同文化與醫療背景下所呈現的心理社會面向。
              </p>
              <p>
                本章節精選了多項國際研究，探討MRKH女性所呈現的心理症狀、治療成效、身分認同過程，以及文化與社會支持系統對其的影響。這些研究共同凸顯了提供整合性心理照護、早期篩檢及具文化敏感度的支持，對於提升患者福祉之必要性。
              </p>
            </>
          )}
        </div>

        {/* Detailed List - Now Single Item View */}
        <div ref={detailRef} className="pt-12 scroll-mt-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStudy.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-12 items-center md:grid-cols-[1.5fr_1fr]"
            >
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#EA5514] leading-tight">
                  {lang === 'en' ? activeStudy.title : (activeStudy.titleTc || activeStudy.title)}
                </h3>
                <div className="space-y-1 text-[10px] md:text-xs text-brand-green/70 font-bold">
                  <p>{lang === 'en' ? activeStudy.category : (activeStudy.categoryTc || activeStudy.category)}</p>
                  <p>
                    {lang === 'en' ? activeStudy.date : (activeStudy.dateTc || activeStudy.date)}, {lang === 'en' ? activeStudy.location : (activeStudy.locationTc || activeStudy.location)},
                  </p>
                  <p>{lang === 'en' ? activeStudy.institution : (activeStudy.institutionTc || activeStudy.institution)}</p>
                </div>
                <p className="text-xs md:text-sm text-brand-green leading-relaxed font-medium">
                  {lang === 'en' ? activeStudy.summary : (activeStudy.summaryTc || activeStudy.summary)}
                </p>
                <a 
                  href={activeStudy.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] md:text-xs text-brand-green underline underline-offset-4 hover:text-[#EA5514] transition-colors"
                >
                  {lang === 'en' ? 'Read the full study' : '閱讀完整論文'}
                </a>
              </div>
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={activeStudy.imageUrl} 
                  alt={lang === 'en' ? activeStudy.title : (activeStudy.titleTc || activeStudy.title)} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function TooltipLink({ 
  href, 
  children, 
  tooltipText,
  className = ""
}: { 
  href?: string; 
  children: React.ReactNode; 
  tooltipText?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => tooltipText && setIsHovered(true)}
        onMouseLeave={() => tooltipText && setIsHovered(false)}
        className={`underline decoration-brand-green/30 underline-offset-4 cursor-pointer hover:text-brand-green transition-colors ${className}`}
        onClick={(e) => {
          if (href) {
            e.stopPropagation();
            window.open(href.startsWith('http') ? href : `https://${href}`, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {children}
      </span>
      
      <AnimatePresence>
        {isHovered && tooltipText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64 md:w-80 p-3 rounded-lg shadow-xl text-[10px] md:text-xs pointer-events-none"
            style={{ backgroundColor: '#C5E790' }}
          >
            <div style={{ color: '#1E4F33' }} className="font-medium leading-tight whitespace-pre-wrap break-words">
              {tooltipText}
            </div>
            {/* Tooltip Arrow */}
            <div 
              className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
              style={{ borderTopColor: '#C5E790' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

function LevelCard({ 
  level, 
  title, 
  subtitle, 
  color, 
  textColor, 
  children 
}: { 
  level: string; 
  title: React.ReactNode; 
  subtitle?: string; 
  color: string; 
  textColor: string; 
  children: React.ReactNode;
}) {
  const [isRevealed, setIsRevealed] = React.useState(false);

  // Level 1-3 use 50% opacity of #E4E67D for content background
  const contentBgColor = color === '#E4E67D' ? '#E4E67D80' : `${color}33`;

  return (
    <div className="flex flex-col">
      <button 
        onClick={() => setIsRevealed(!isRevealed)}
        className="text-left transition-transform active:scale-[0.98]"
      >
        <div 
          style={{ backgroundColor: color }}
          className={`${isRevealed ? 'rounded-t-2xl' : 'rounded-2xl'} p-4 md:p-6 transition-all duration-300`}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span 
                style={{ color: textColor }}
                className="text-sm md:text-base font-bold uppercase tracking-wider mb-1"
              >
                Level {level}
              </span>
              <h3 
                style={{ color: textColor }}
                className="text-lg md:text-xl font-bold leading-tight"
              >
                {title}
              </h3>
              {subtitle && (
                <p 
                  style={{ color: textColor }}
                  className="text-[10px] md:text-xs mt-1 opacity-80"
                >
                  {subtitle}
                </p>
              )}
            </div>
            <motion.div
              animate={{ rotate: isRevealed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: textColor }}
              className="flex-shrink-0 ml-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isRevealed ? 'auto' : 0, opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={isRevealed ? "overflow-visible" : "overflow-hidden"}
          >
            <div 
              style={{ backgroundColor: contentBgColor }}
              className="rounded-b-2xl p-6 md:p-8 text-brand-green"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
