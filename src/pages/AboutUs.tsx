import * as React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const { lang } = useLanguage();

  const contentTeam = [
    { name: "Angela Yan", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/AngelaYan.png" },
    { name: "Ivy Xie", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/IvyXie.png" },
    { name: "Echo Ni", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/EchoNi.png" },
    { name: "Johor Zhuang", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/JohorZhuang.png" },
    { name: "Nydia Zhao", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/NydiaZhao.png" }
  ];

  const visualTeam = [
    { name: "Lili Fang", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/LiliFang.png" },
    { name: "Manhang Huang", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/ManhangHuang.png" },
    { name: "Cate Xie", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/CateXie.png" },
    { name: "Zhenhuang Fang", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/ZhenhuangFang.png" },
    { name: "Jingwen Mao", img: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/JingwenMao.png" }
  ];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative pt-50 pb-20 px-5 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center">
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
          className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left"
        >
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] tracking-tight text-brand-green font-bold mb-12">
            {lang === 'en' ? 'About Us' : '關於我們'}
          </h1>
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 space-y-6 text-brand-green/90 text-sm md:text-base leading-relaxed font-medium">
              {lang === 'en' ? (
                <>
                  <p>
                    <span className="italic font-bold">She Unbinds</span> is registered in Hong Kong —— a strategic gateway between Shenzhen, the heart of our medical & psycho-social network, and the wider world beyond.
                  </p>
                  <p>
                    Although rooted in Hong Kong and Shenzhen, our work carries a global perspective.
                  </p>
                  <p>
                    From this vantage point, we connect China's medical innovation —— shaped by three decades of advancement in vaginoplasty —— to global dialogue on holistic care for women born with <span className="font-bold">CAFRT</span> (Congenital Anomalies of the Female Reproductive Tract), focusing on <span className="font-bold">MRKH syndrome</span> (vaginal and uterine agenesis).
                  </p>
                  <p>
                    We collaborate with gynecologists, researchers, and advocates worldwide to expand access to medical care, raise awareness, and champion a world where every woman can live with autonomy, dignity, and the freedom to enjoy sexual well-being without shame or limitation.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className="font-bold">She Unbinds｜姝然新身 亞洲慈善基金</span>註冊於香港，憑藉其獨特的地理與制度優勢，成為連結深圳——我們醫療與心理社會支持網絡核心——與全球的重要戰略樞紐。
                  </p>
                  <p>
                    雖然立足於香港與深圳，我們的工作視野始終面向全球。
                  </p>
                  <p>
                    在此基礎上，我們將中國在陰道成形術領域累積逾三十年的醫療創新經驗，帶入全球關於先天性女性生殖道發育異常之整體照護對話，重點關注 <span className="font-bold">MRKH 症候群</span>（陰道與子宮缺如）。
                  </p>
                  <p>
                    我們與全球各地的婦產科醫師、研究人員及倡議者緊密合作，致力於擴大專業醫療照護的可及性、提升公眾認知，並共同倡議一個讓每一位女性都能以自主、尊嚴，且無羞愧與限制地享有性健康的世界。
                  </p>
                </>
              )}
            </div>
            <div className="md:col-span-4 aspect-square overflow-hidden">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/1.png" 
                alt="About Us Intro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Board of Advisors Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-16">
        <div className="flex justify-center">
          <div className="bg-[#DAE000]/50 rounded-full px-16 py-3 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
              {lang === 'en' ? 'Board of Advisors' : '顧問委員會'}
            </h2>
          </div>
        </div>

        {/* Dr. QIN Chenglu */}
        <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
          <div className="space-y-6 text-brand-green">
            <h3 className="text-2xl font-bold text-[#006934]">
              {lang === 'en' ? 'Dr. Prof. QIN Chenglu' : '秦成路 教授、醫師'}
            </h3>
            <div className="space-y-4 text-xs md:text-sm leading-relaxed">
              {lang === 'en' ? (
                <>
                  <p>
                    Dr. Qin Chenglu is Vice President of <span className="italic">Shenzhen Maternity & Child Healthcare Hospital</span> and Director of the <span className="italic">Third Department of Obstetrics and Gynecology at Luohu People's Hospital</span>.
                  </p>
                  <p>
                    She is the recognized successor and leading authority of the <span className="italic">Luohu Procedure Vaginoplasty</span>, carrying forward the surgical legacy established by the late Dr. LUO Guangnan. Following Professor Luo's passing, Dr. Qin assumed leadership of the Luohu surgical team and continues to advance and refine this pioneering technique.
                  </p>
                  <p>
                    A preeminent expert in obstetrics and gynecology, Dr. Qin earned her doctorate from Sun Yat-sen University in China and completed advanced clinical and research training at <span className="italic">Klinikum Kempten in Germany, Tufts Medical Center in Boston, and the University of Missouri School of Medicine</span>. Her clinical expertise encompasses minimally invasive gynecologic surgery, reproductive health, maternal care, infertility, congenital reproductive tract anomalies, and pelvic floor disorders.
                  </p>
                  <p>
                    Dr. Qin is widely published in leading Chinese and international academic journals and is a co-author of influential surgical atlases in gynecology. Her research focuses particularly on postoperative outcomes, tissue vitality, and microecological reconstruction following vaginoplasty. Most notably, in September 2024, she co-authored a landmark study in <span className="italic">Nature Communications</span> examining the assembly and stability of neovaginal microbiota in MRKH patients after laparoscopic peritoneal vaginoplasty —— representing a significant advancement in understanding long-term surgical and physiological outcomes.
                  </p>
                  <p>
                    Further details of her peer-reviewed publications and ongoing research may be accessed <Link to="/luohu-vaginoplasty#publications" className="underline hover:text-[#EA5514] transition-colors">here</Link>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    秦成路醫師現任深圳市婦幼保健院副院長，並兼任羅湖區人民醫院婦產科第三科主任。
                  </p>
                  <p>
                    她是「羅湖式陰道成形術」公認的傳人及權威專家，承襲了已故羅廣南醫師建立的外科手術傳統。羅光楠教授逝世後，秦成璐醫師接掌羅湖手術團隊，持續推進並精進這項開創性技術。
                  </p>
                  <p>
                    作為婦產科領域的傑出專家，秦醫師於中國中山大學取得博士學位，並在德國肯普滕醫院、波士頓塔夫茨醫學中心以及密蘇里大學醫學院完成進階臨床與研究培訓。她的臨床專長涵蓋微創婦科手術、生殖健康、產科護理、不孕症、先天性生殖道畸形及骨盆底功能障礙。
                  </p>
                  <p>
                    秦醫師在中國及國際頂尖學術期刊上發表了眾多論文，並是多部具影響力的婦科手術圖譜的共同作者。她的研究特別聚焦於陰道成形術後的術後結果、組織活力及微生態重建。最值得注意的是，2024年9月，她共同發表了一篇刊載於《自然通訊》（Nature Communications）的里程碑式研究，探討經腹腔鏡腹膜陰道成形術後，MRKH患者新陰道微生物群的組裝與穩定性——這項研究代表了對長期手術及生理結果理解上的重大進展。
                  </p>
                  <p>
                    有關其經同行評審的出版物及進行中研究的更多詳情，可<Link to="/luohu-vaginoplasty#publications" className="underline hover:text-[#EA5514] transition-colors">點此</Link>查閱。
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="w-full max-w-[300px] aspect-[3/4] overflow-hidden md:ml-auto">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/DrProfQIN.png" 
              alt="Dr. Prof. QIN Chenglu" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Dr. Prof. PEI Yuxin */}
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start pt-12">
          <div className="w-full max-w-[300px] aspect-[3/4] overflow-hidden order-2 md:order-1">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/DrProfPEI.png" 
              alt="Dr. Prof. PEI Yuxin" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 text-brand-green order-1 md:order-2">
            <h3 className="text-2xl font-bold text-[#006934]">
              {lang === 'en' ? 'Dr. Prof. PEI Yuxin' : '裴谕新 教授'}
            </h3>
            <div className="space-y-4 text-xs md:text-sm leading-relaxed">
              {lang === 'en' ? (
                <>
                  <p>
                    Prof. Pei Yuxin is Professor of Sociology at <span className="italic">Sun Yat-sen University</span>, Guangzhou, China, and an internationally recognized scholar in gender, sexuality, and reproductive health. She has held visiting scholar and guest lecturer positions across Japan, Europe, and the United States, including serving as a Fulbright Scholar at the <span className="italic">University of Southern California</span>.
                  </p>
                  <p>
                    She is widely regarded as a leading voice in advancing gender equality and reproductive rights, with a strong commitment to public scholarship, advocacy, and education that bridges rigorous research with real-world impact on women's health and social well-being.
                  </p>
                  <p>
                    Her publications include <span className="italic">Sexually Intimate Relationships of Women in Guangzhou, China: Unheard Voices (2023)</span>, along with numerous influential articles and book chapters in leading international journals addressing women's sexuality and social transformation in contemporary China.
                  </p>
                  <p>
                    With support from <span className="italic font-bold">She Unbinds</span>, Prof. Pei leads an interdisciplinary sociological and anthropological research team that works in close collaboration with <span className="italic">Dr. Qin Chenglu</span> and her clinical team, integrating medical practice with social research. Together, their work aims to document lived experiences, postoperative quality of life, and the broader social implications of <span className="font-bold">MRKH</span> and related conditions —— building a holistic, evidence-based framework that connects surgical innovation, patient narratives, and social care.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    裴谕新教授為中山大學社會學系教授，並曾多次赴日、美及歐洲擔任訪問學者及客座講師，其中包括作為 Fulbright 學者赴美南加州大學研究。其專業領域為性別、性與生殖健康，研究重點包括女性身體自主、家庭與婚姻，以及如 MRKH 綜合症等生殖異常的社會面向。
                  </p>
                  <p>
                    她被廣泛視為推動性別平等與生殖權利的領軍人物，致力於公共學術研究、倡議及教育工作，將嚴謹的研究與對女性健康及社會福祉的實際影響相結合。
                  </p>
                  <p>
                    她的代表性著作包括《Sexually intimate relationships of women in Guangzhou, China: Unheard voices (2023)》《中國廣州女性的親密性關係：未被聽見的聲音》（2023年），並在國際頂尖期刊發表了多篇具影響力的論文及專書章節，探討當代中國女性的性與社會轉型議題。
                  </p>
                  <p>
                    在姝然新身｜She Unbinds 的支持下，裴教授領導一支跨學科的社會學與人類學研究團隊，與秦成璐博士及其臨床團隊緊密合作，將醫療實踐與社會研究相結合。他們共同致力於記錄 MRKH 症候群及相關疾病的實際生活經驗、術後生活品質，以及更廣泛的社會影響——建立一個將外科創新、患者敘事與社會照護相連結的整體性、循證框架以及多篇發表於國際頂尖期刊的學術文章與專書，探討中國當代社會中的女性性經驗與社會變遷。作為推動性別平等與生殖權利的重要聲音，她亦積極參與倡議與公共教育，致力於將學術研究與女性健康、社會福祉的實際需求連結起來。
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-16">
        <div className="flex justify-center">
          <div className="bg-[#DAE000]/50 rounded-full px-16 py-3 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
              {lang === 'en' ? 'Executive Team' : '執行團隊'}
            </h2>
          </div>
        </div>

        <div className="space-y-20">
          {/* Verona and Content Team */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3 space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
                <img 
                  src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/VeronaZeng.png" 
                  alt="Verona Zeng" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h4 className="text-brand-green font-bold text-lg">Verona Zeng</h4>
                <p className="text-[#EA5514] text-xs font-medium">
                  {lang === 'en' ? 'Founding Director' : '創始董事'}
                </p>
              </div>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h5 className="text-[#EA5514] font-bold text-xl md:text-2xl text-center lg:text-left">
                {lang === 'en' ? 'Content Team' : '內容團隊'}
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {contentTeam.map((member) => (
                  <div key={member.name} className="space-y-3">
                    <div className="aspect-square overflow-hidden rounded-xl shadow-sm">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-brand-green text-[10px] md:text-xs font-medium text-center">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tanya and Visual Team */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3 space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
                <img 
                  src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/6-AboutUs/TanyaTang.png" 
                  alt="Tanya Tang" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <h4 className="text-brand-green font-bold text-lg">Tanya Tang</h4>
                <p className="text-[#EA5514] text-xs font-medium leading-tight">
                  {lang === 'en' ? (
                    <>Co-founder<br />Director China</>
                  ) : (
                    <>共同創辦人<br />中國區總監</>
                  )}
                </p>
              </div>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h5 className="text-[#EA5514] font-bold text-xl md:text-2xl text-center lg:text-left">
                {lang === 'en' ? 'Visual Team' : '視覺團隊'}
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {visualTeam.map((member) => (
                  <div key={member.name} className="space-y-3">
                    <div className="aspect-square overflow-hidden rounded-xl shadow-sm">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-brand-green text-[10px] md:text-xs font-medium text-center">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
