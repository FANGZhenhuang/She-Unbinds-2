import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const getDevelopmentStages = (lang: 'en' | 'zh') => [
  {
    id: 'luohu-i',
    title: lang === 'en' 
      ? 'Luohu I (developed in 1998): Prototype Technique' 
      : '羅湖一式（1998 年研發）：原型術式，以銳性腹膜分離方式建立新生陰道',
    subtitle: lang === 'en' 
      ? 'Neovaginal creation using sharp peritoneal dissection; an early exploratory technique no longer in routine clinical use.' 
      : '用於技術探索階段，已不再作為常規臨床術式使用',
    content: lang === 'en' ? (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>Luohu I was the earliest stage of the Luohu Procedure. It used laparoscopic, push-rod assisted sharp peritoneal dissection to separate the space between the bladder and rectum, creating a neovagina of approximately 9 cm.</p>
        <p>It is no longer in clinical use; however, it remains an essential milestone in understanding the iterative evolution toward safer, with standard procedure Luohu II which follows.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Developed:</strong> Late 1990s; first clinical case in November 2001</li>
          <li><strong>Technique:</strong> Sharp dissection of the peritoneum under laparoscopic guidance</li>
          <li><strong>Limitation:</strong> Higher risk of rectal wall injury due to sharp dissection</li>
        </ul>
      </div>
    ) : (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>羅湖一式 為羅湖術式發展初期的最早階段。該術式採用腹腔鏡輔助下之推桿式銳性腹膜分離技術，在膀胱與直腸之間建立操作間隙，形成人工新生陰道，長度約為 9 公分。</p>
        <p>目前羅湖一式已不再應用於臨床；然而，作為理解羅湖術式逐步演進的重要里程碑，其在技術發展史上仍具關鍵意義，並為後續更安全、流程更標準化的 羅湖二式 奠定了基礎。</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>研發時間：</strong> 1998 年研發，首例臨床手術於 2001 年 11 月完成</li>
          <li><strong>手術技術：</strong> 腹腔鏡引導下進行腹膜之銳性分離</li>
          <li><strong>技術限制：</strong> 由於採用銳性分離，直腸壁受損風險相對較高</li>
        </ul>
      </div>
    )
  },
  {
    id: 'luohu-ii',
    title: lang === 'en' 
      ? 'Luohu II (developed between 2003-2006, still in use): Fluid-Assisted Blunt Dissection Technique' 
      : '羅湖二式（2003–2006 年間研發，現仍臨床應用）：液體輔助鈍性分離技術',
    subtitle: lang === 'en' 
      ? 'Reducing organ injury through controlled hydrodissection' 
      : '透過可控的水分離方式降低臟器損傷風險',
    content: lang === 'en' ? (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>Luohu II marked a major advancement in the Luohu procedure by introducing fluid-assisted blunt dissection to replace sharp peritoneal separation. By injecting saline to create a protective "fluid cushion," the peritoneum is gently displaced downward in a controlled manner, significantly reducing the risk of bladder and rectal injury and improving postoperative recovery.</p>
        <p>The introduction of a patented 35-degree push-rod instrument further standardized the technique, making it safer and more reproducible. Compared with Luohu I, this approach resulted in shorter operation times, less intraoperative bleeding, and faster epithelial healing, leading to its wider clinical adoption.</p>
        <div className="space-y-2">
          <p className="font-bold text-brand-green">Key improvements include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Hydrodissection ("water-cushion" technique):</strong> A fluid mixture (saline combined with oxytocin and epinephrine) is injected to create a protective buffer that elevates and thins the peritoneum, enabling safer and more controlled separation from surrounding organs.</li>
            <li><strong>Stepwise dilation with moulds:</strong> Progressive moulds (2.5-3.5 cm) are used to expand the vaginal tunnel, reducing blind manipulation.</li>
            <li><strong>Enhanced visualization:</strong> Tunnel creation is performed entirely under laparoscopic guidance with suction-irrigation assistance, allowing clearer identification of pelvic anatomy.</li>
          </ul>
        </div>
        <p><strong>Clinical impact:</strong> These refinements made Luohu II safer, more controlled, and more reliable, with a substantially lower risk of rectal injury compared to Luohu I. To date, Luohu II remains the most widely used procedure for the majority of MRKH cases, with over 4,000 clinically successful cases reported.</p>
      </div>
    ) : (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>羅湖二式 為羅湖術式的重要技術突破，其關鍵在於引入液體輔助鈍性分離技術，以取代早期的銳性腹膜分離。透過注入生理食鹽水形成具保護作用的「液體墊層」，使腹膜在可控狀態下被溫和向下推移，大幅降低膀胱與直腸受損的風險，並明顯改善術後恢復情況。</p>
        <p>此外，專利設計的 35 度推桿器械 的導入，進一步促進了手術流程的標準化，使該術式更安全且具高度可重複性。相較於羅湖一式，羅湖二式在手術時間、術中出血量及上皮癒合速度等方面均有顯著改善，因此迅速獲得更廣泛的臨床採用。</p>
        <div className="space-y-2">
          <p className="font-bold text-brand-green">主要技術改進包括：</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>水墊分離技術「水墊法」：</strong>透過注入由生理食鹽水結合縮宮素與腎上腺素所組成的液體混合物，於腹膜下方形成具保護作用的液體墊層，使腹膜抬升並變薄，從而促進其與周圍臟器之間更安全、可控的分離。</li>
            <li><strong>模具分階擴張：</strong>使用直徑約 2.5–3.5 公分的漸進式模具逐步擴張陰道通道，降低盲目操作的風險。</li>
            <li><strong>影像清晰化與全程可視操作：</strong>新生陰道通道的建立全程在腹腔鏡直視下進行，並輔以吸引與灌洗系統，使骨盆解剖結構得以更清楚辨識。</li>
          </ul>
        </div>
        <p><strong>臨床影響：</strong>上述改良使羅湖二式在安全性、可控性與穩定性方面皆大幅提升，直腸損傷風險顯著低於羅湖一式。迄今為止，羅湖二式仍為多數 MRKH 病例中最廣泛採用的手術方式，累計已有 4,000 例以上 的臨床成功案例報告。</p>
      </div>
    )
  },
  {
    id: 'luohu-iii',
    title: lang === 'en' 
      ? 'Luohu III (developed in 2015): Reconstructive approach for cervical + vaginal atresia' 
      : '羅湖三式 (2015年研發)：針對子宮頸閉鎖合併陰道閉鎖的重建術式',
    subtitle: lang === 'en' 
      ? 'Designed for complex cases with vaginal atresia plus cervical atresia or rudimentary uterus.' 
      : '羅湖三式係為陰道閉鎖合併子宮頸閉鎖，或伴有殘存子宮的複雜病例所設計之重建術式。',
    content: lang === 'en' ? (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>Combines peritoneal vaginoplasty with resection of the obstructed cervix and uterus-neovagina anastomosis in selected patients, allowing menstrual flow and preserving fertility potential.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Introduction:</strong> Reported in early 2010s, first case reports ~2015.</li>
          <li><strong>Technique:</strong> Cervical resection + Luohu II vaginoplasty + uterus-neovagina anastomosis (when functional uterus present).</li>
          <li><strong>Note:</strong> Given the rarity of cases, it has been mostly limited to case series; requires advanced laparoscopic expertise.</li>
        </ul>
      </div>
    ) : (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>該術式結合腹膜陰道成形術，並於特定患者中進行阻塞性子宮頸與子宮切除，同時建立子宮—新陰道吻合通道，以實現經血引流，並在可行條件下保留生育潛能。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>引介時間：</strong>於 2010 年代初期提出，首批病例報告約於 2015 年發表</li>
          <li><strong>技術要點：</strong>子宮頸切除＋羅湖二式陰道成形術＋子宮—新陰道吻合（限於存在功能性子宮之患者）</li>
          <li><strong>臨床應用：</strong>因病例極為罕見，目前多限於個案或小型病例系列，且需具備高度腹腔鏡手術專業能力</li>
        </ul>
      </div>
    )
  },
  {
    id: 'luohu-iv',
    title: lang === 'en' 
      ? 'Luohu IV (developed in 2015): Laparoscopic approach for high vaginal atresia' 
      : '羅湖四式 (2015年研發)：針對高位陰道閉鎖的腹腔鏡重建術式',
    subtitle: lang === 'en' 
      ? 'Developed for type I high or mid-level vaginal atresia, where blind perineal dissection risks injury to urethra or rectum.' 
      : '羅湖四式係為第一型高位或中段陰道閉鎖所設計之術式，適用於經會陰盲目分離可能增加尿道或直腸損傷風險之病例。',
    content: lang === 'en' ? (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>Luohu IV combines laparoscopic identification of the upper vaginal segment with peritoneal vaginoplasty, ensuring accurate opening and safe reconstruction.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Introduction:</strong> Reported in early 2010s from Shenzhen Luohu Hospital, applied mainly to mid/high vaginal atresia.</li>
          <li><strong>Technique:</strong> Laparoscopic guidance to locate the upper vagina via Douglas pouch → incision of the atretic segment → peritoneal vaginoplasty using Luohu II method.</li>
          <li><strong>Note:</strong> Given the rarity of cases, it has been mostly limited to case series; requires advanced laparoscopic expertise.</li>
        </ul>
      </div>
    ) : (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>該術式結合腹腔鏡下精確定位上段陰道與腹膜陰道成形術，以確保開口位置準確並提升重建安全性。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>引介時間：</strong>2010 年代初期由深圳羅湖醫院報告，主要應用於中、高位陰道閉鎖病例</li>
          <li><strong>技術要點：</strong>經腹腔鏡由道格拉斯腔定位上段陰道 → 切開閉鎖段 → 採用羅湖二式進行腹膜陰道成形</li>
          <li><strong>臨床應用：</strong>因病例罕見，目前多限於個案或小型病例系列，且需具備高度腹腔鏡手術專業能力</li>
        </ul>
      </div>
    )
  },
  {
    id: 'luohu-v',
    title: lang === 'en' 
      ? 'Luohu V (developed in 2016): Uterine-preserving fusion in MRKH with functional rudimentary uteri' 
      : '羅湖五式 (2016年研發)適用於合併具功能性殘存子宮之 MRKH 子宮保留融合術',
    subtitle: lang === 'en' 
      ? 'Designed for rare MRKH patients with bilateral functional rudimentary uteri, where standard treatment would normally remove them.' 
      : '羅湖五式係為極為罕見、同時具有雙側功能性殘存子宮的 MRKH 患者所設計之創新術式。',
    content: lang === 'en' ? (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>Luohu V introduces uterine-preserving fusion surgery, combining peritoneal vaginoplasty with unification of rudimentary uteri to create a functional cavity, maintaining menstrual and reproductive potential.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Introduction:</strong> First reported in the early 2020s; initial case in a 14-year-old patient with MRKH and two 2-3 cm rudimentary uteri.</li>
          <li><strong>Technique:</strong> Preservation of both rudimentary uteri → laparoscopic fusion of uterine remnants → combined with peritoneal vaginoplasty to establish menstrual outflow.</li>
          <li><strong>Note:</strong> Given the rarity of cases, it has been mostly limited to case series; requires advanced laparoscopic expertise.</li>
        </ul>
      </div>
    ) : (
      <div className="space-y-4 text-xs md:text-sm text-brand-green/80 leading-relaxed">
        <p>在傳統治療多傾向切除殘存子宮的情況下，羅湖五式引入子宮保留融合手術，結合腹膜陰道成形術，將雙側殘存子宮加以融合，建立具功能性的子宮腔體，以維持月經引流，並在理論上保留生殖潛能。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>引介時間：</strong>首例為一名 14 歲 MRKH 患者，合併兩側各約 2–3 公分之殘存子宮</li>
          <li><strong>技術要點：</strong>保留雙側殘存子宮 → 腹腔鏡下進行子宮殘段融合 → 合併腹膜陰道成形術以建立經血引流通道</li>
          <li><strong>臨床應用：</strong>因病例極為罕見，目前多限於個案或小型病例系列，且需具備高度腹腔鏡手術專業能力</li>
        </ul>
      </div>
    )
  }
];

const getTimelineData = (lang: 'en' | 'zh') => [
  {
    year: '1998 - 2001',
    title: lang === 'en' 
      ? 'First Luohu I Procedure (Shenzhen Luohu Hospital)' 
      : '羅湖一式發明，首次完成（深圳羅湖醫院）',
    content: lang === 'en' ? (
      'Innovation: First application of laparoscopic peritoneal vaginoplasty for MRKH case'
    ) : (
      '技術創新：首次將腹腔鏡腹膜陰道成形術應用於 MRKH ，奠定以自體腹膜進行陰道重建的核心技術理念。'
    )
  },
  {
    year: '2003 - 2006',
    title: lang === 'en' 
      ? 'Introduction of Luohu II Procedure' 
      : '羅湖二式',
    content: lang === 'en' ? (
      'Improvements: Water-cushion separation + Stepwise mold expansion to reduce risk of rectal injury'
    ) : (
      '技術改良： 引入水墊分離技術與分階段模具擴張，有效降低直腸損傷風險，進一步提升手術安全性。'
    )
  },
  {
    year: '2010s',
    title: lang === 'en' 
      ? 'Luohu III, IV, and V Procedures Developed for Selected Complex Cases' 
      : '針對特定複雜病例研發羅湖三式、四式及五式術式',
    content: lang === 'en' ? (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Luohu III Procedure:</strong> For MRKH + Unilateral Functional Rudimentary Uterus → Cervical Resection + Luohu II Procedure + Uterus-Neovaginal Anastomosis, Establishing Menstrual Function While Preserving Fertility Potential</li>
        <li><strong>Luohu IV Procedure:</strong> For Type I mid/high vaginal atresia → Laparoscopic localization of atretic segment + incision + Luohu II reconstruction, avoiding rectal/urethral injury, reducing reclosure risk, restoring menstrual flow</li>
        <li><strong>Luohu V Procedure:</strong> For MRKH syndrome + dual functional rudimentary uterus → Innovative preservation and fusion of dual rudimentary uteri + Luohu II procedure, achieving breakthrough fertility preservation</li>
      </ul>
    ) : (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>羅湖三式術式：</strong>適用於 MRKH 症候群合併單側具功能性始基子宮 → 進行宮頸切除術＋羅湖二式術式＋子宮—再造陰道吻合術，建立經血排出功能並保留生育潛能。</li>
        <li><strong>羅湖四式術式：</strong>適用於第一型中高位陰道閉鎖 → 透過腹腔鏡精準定位閉鎖段＋切開術＋羅湖二式重建術，有效避免直腸與尿道損傷、降低術後再閉鎖風險，並恢復正常月經流出。</li>
        <li><strong>羅湖五式術式：</strong>適用於 MRKH 症候群合併雙側具功能性始基子宮 → 創新實施雙始基子宮保留與融合術＋羅湖二式術式，實現生育力保護的突破性進展。</li>
      </ul>
    )
  },
  {
    year: '2016',
    title: lang === 'en' 
      ? 'European Journal of Medical Research: Comparative Study of Luohu I and II' 
      : '《European Journal of Medical Research》發表羅湖一式與二式術式之比較研究',
    content: lang === 'en' ? (
      <ul className="list-disc pl-5 space-y-1">
        <li>Reduced operative time: Type II offers simplified procedures and more intuitive steps</li>
        <li>Decreased blood loss: Water-cushion dissection provides clearer tissue layers, preventing blind dissection and small vessel injury</li>
        <li>Enhanced safety: Primarily reflected in significantly reduced rectal injury</li>
        <li>Type I blindly pushes the peritoneum with a retractor, potentially pushing the rectal wall downward and causing rectal perforation</li>
        <li>Type II creates a water cushion by injecting saline + Pituitrin (oxytocin) + Epinephrine (adrenaline) into the bladder-rectum space, forming a buffer layer that elevates the peritoneum and separates it from the rectal wall. This allows surgeons to clearly distinguish between the rectum and peritoneum, significantly reducing the incidence of rectal injury.</li>
      </ul>
    ) : (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>手術時間縮短：</strong>羅湖二式術式流程更為簡化、操作步驟更直觀，有助於縮短整體手術時間。</li>
        <li><strong>出血量減少：</strong>水墊分離技術可清楚顯示組織層次，避免盲目分離，降低微小血管損傷，從而減少術中出血。</li>
        <li><strong>安全性顯著提升：</strong>主要體現在直腸損傷發生率顯著降低。</li>
        <li><strong>羅湖一式術式風險機制：</strong>羅湖一式術式以牽開器「盲推」腹膜，過程中可能將直腸壁向下推擠，增加直腸穿孔風險。</li>
        <li><strong>羅湖一式術式改良機制：</strong>羅湖二式術式透過向膀胱－直腸間隙注射生理食鹽水＋垂體後葉素（Pituitrin／催產素）＋腎上腺素（Epinephrine），形成水墊緩衝層，使腹膜向上抬升並與直腸壁分離。此舉可使手術醫師清楚辨識直腸與腹膜界面，從而顯著降低直腸損傷發生率。</li>
      </ul>
    )
  },
  {
    year: '2017',
    title: lang === 'en' 
      ? 'International Recognition and Awards' 
      : '閃耀國際舞台',
    content: lang === 'en' ? (
      <div className="space-y-8">
        <div className="space-y-4 text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
          <p className="font-bold">Dr. LUO Guangnan Receives the COGI International Congress Award (Vienna) and the SLS Award for Medical Education (San Francisco)</p>
          <p>At the 25th World Congress on Controversies in Obstetrics, Gynecology & Infertility, Dr. Luo was honored for his outstanding clinical achievement in completing over 1,000 MRKH vaginoplasty procedures.</p>
          <p>At the Society of Laparoendoscopic Surgeons Annual Meeting (MIS Week 2017) held in San Francisco, he was further recognized for his exceptional contributions to education and the advancement of minimally invasive gynecologic surgery.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/3.png" 
              alt="COGI Award" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            In 2017, Vienna, at the 25th World Congress on Controversies in Obstetrics, Gynecology & Infertility (COGI), the Congress Award was presented to Prof. Guangnan Luo and his team.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/4.png" 
              alt="SLS Award" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            2017, San Francisco — Prof. Guangnan Luo received the Med Society of Laparoendoscopic Surgical cal Education Development Award from Prof. Paul Alan Wetter, President of the Society of Laparoendoscopic Surgeons (SLS).
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/5.png" 
              alt="Vienna General Hospital" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            In 2017, Vienna, Professor Dr. Guangnan Luo and the Head of the Department of Obstetrics and Gynecology at Vienna General Hospital took a commemorative photo in front of the portrait of Professor Rokitansky (the “R” in MRKH).
          </p>
        </div>
      </div>
    ) : (
      <div className="space-y-8">
        <div className="space-y-4 text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
          <p className="font-bold">羅光楠醫師榮獲兩項國際殊榮：COGI 國際大會獎項（維內納）及 SLS 醫學教育貢獻獎（舊金山）</p>
          <p>於第 25 屆世界婦產科與不孕症前沿大會（World Congress on Controversies in Obstetrics, Gynecology & Infertility）中，以完成逾 1,000 例 MRKH 陰道成形手術之卓越臨床成果獲獎。</p>
          <p>於美國舊金山舉行之腹腔鏡外科醫師學會年會（The Society of Laparoendoscopic Surgeons Annual Meeting，MIS Week 2017），表彰其在微創婦科手術教育與推廣領域之卓越貢獻。</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/3.png" 
              alt="COGI Award" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            2017年於維也納舉行之第 25 屆世界婦產科與不孕症爭議大會（COGI）上，大會獎項頒發予羅光楠教授及其團隊。
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/4.png" 
              alt="SLS Award" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            2017 年於美國舊金山，羅光楠教授獲腹腔鏡外科醫師學會（SLS）醫學教育發展獎，由該學會主席 Paul Alan Wetter 教授親自頒授。
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/5.png" 
              alt="Vienna General Hospital" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed">
            2017 年於維也納，羅光楠教授與維也納綜合醫院婦產科主任於 Rokitansky 教授（MRKH 中「R」之命名來源）肖像前合影留念
          </p>
        </div>
      </div>
    )
  },
  {
    year: '2018',
    title: lang === 'en' 
      ? 'China and International Journals Published Multiple Research Papers' 
      : '中外期刊發表多篇研究論文',
    content: lang === 'en' ? (
      <ul className="list-disc pl-5 space-y-1">
        <li>Chinese Journal of Practical Obstetrics and Gynecology: Luo Hu Type II Surgical Technique</li>
        <li>Chinese Journal of Microecology: Early Postoperative Microecological Analysis of Artificial Vagina</li>
        <li>Journal of Microecology in Gynecology and Obstetrics: Anatomical and Functional Outcomes Confirming the Efficacy of Type II Surgery</li>
      </ul>
    ) : (
      <ul className="list-disc pl-5 space-y-1">
        <li>《中國實用婦產科與產科雜誌》：羅湖二式手術技術</li>
        <li>《中國微生態學雜誌》：人工陰道術後早期微生態分析</li>
        <li>《婦產科微生態學雜誌》：解剖與功能結果分析，證實羅湖二式手術之臨床有效性</li>
      </ul>
    )
  },
  {
    year: '2019',
    title: lang === 'en' 
      ? 'Scientific Reports: Artificial Vaginal Microecology Research (PubMed indexed)' 
      : '《Scientific Reports》發表人工陰道微生態研究',
    content: lang === 'en' ? (
      <div className="space-y-2">
        <p>Title: Analysis of the artificial vaginal microecology in patients after laparoscopic peritoneal vaginoplasty.</p>
        <p>Enrolled 54 patients to analyze postoperative vaginal microbial intensity, diversity, pH, etc.</p>
        <p>Findings revealed widespread dysbiosis in the postoperative vaginal microecology, but the artificial vagina's microecological conditions gradually normalized over time.</p>
      </div>
    ) : (
      <div className="space-y-2">
        <p><strong>論文題目：</strong>《腹腔鏡腹膜陰道成形術後患者人工陰道微生態之分析》</p>
        <p><strong>研究設計：</strong>納入54名患者，系統性分析術後陰道微生態指標，包括菌群豐度、多樣性及 pH 值等。</p>
        <p><strong>研究結果：</strong>研究顯示，術後早期人工陰道微生態普遍存在菌相失衡；然而，隨時間推移，人工陰道之微生態環境逐步趨於穩定與正常化。</p>
      </div>
    )
  },
  {
    year: '2024',
    title: lang === 'en' 
      ? 'New Wave of International Research' 
      : '新一波國際研究成果',
    content: lang === 'en' ? (
      <ul className="list-disc pl-5 space-y-1">
        <li>China retrospective analysis of 221 cases confirms safety and efficacy of Type II</li>
        <li>Nature Communications (September): Landmark study</li>
        <li>"Insights into the assembly of the neovaginal microbiota in MRKH syndrome patients"</li>
        <li>Using longitudinal samples and deep metagenomic sequencing, reveals how the neovaginal microbiome evolves from a "blank ecological niche" into a structure resembling that of a normal vagina</li>
      </ul>
    ) : (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>中國回顧性研究（221 例）：</strong>針對 221 例病例的回顧性分析，進一步證實羅湖二式術式之安全性與臨床有效性。</li>
        <li><strong>《Nature Communications》（9 月）｜里程碑式研究：</strong></li>
        <li>論文題目：《MRKH 症候群患者新生陰道微生態組裝機制之洞見》</li>
        <li><strong>研究重點：</strong>研究透過縱向樣本收集與深度宏基因體定序分析，揭示新生陰道微生物群如何從一個「空白的生態位」，逐步演化為結構與正常陰道相近的微生態系統。</li>
      </ul>
    )
  },
  {
    year: '2025',
    title: lang === 'en' 
      ? 'Technology Dissemination and International Exchange' 
      : '技術推廣與國際交流',
    content: lang === 'en' ? (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Domestic China: Dr. Qin Chenglu's team has completed 23 free Luohu procedure training sessions, promoting the technique among gynecological clinicians</li>
          <li>International Stage: Dr. Qin participated in the 2nd Asia-Oceania Society of Pediatric and Adolescent Gynecology (AOSPAG) Congress (Kuala Lumpur, Malaysia)</li>
          <li>Participated in consultations for complex congenital genital tract anomalies at:</li>
          <li>Malaysia Women and Children's Hospital</li>
          <li>Presented the Luohu Vaginoplasty technique at the conference</li>
          <li>Fostered exchange and collaboration between Chinese and Malaysian medical teams expanding new perspectives and innovations in gynecology</li>
        </ul>
        <div className="w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/6.png" 
            alt="International Exchange" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    ) : (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>中國國內：</strong>秦成路醫師團隊已完成 23 場羅湖術式公益培訓，持續向婦產科臨床醫師免费推廣該技術，促進術式規範化與臨床普及。</li>
          <li><strong>國際舞台：</strong>秦成路醫師參與第二屆亞太地區小兒與青少年婦科學會大會 （Asia-Oceania Society of Pediatric and Adolescent Gynecology, AOSPAG；馬來西亞吉隆坡）</li>
          <li>於馬來西亞國民大學女性與兒童醫院（Universiti Kebangsaan Malaysia Women and Children’s Hospital）參與複雜型先天性生殖道異常病例會診</li>
          <li>於大會上發表羅湖陰道成形術相關技術與臨床經驗</li>
          <li>促進中馬醫療團隊之交流與合作，拓展婦科領域之新視角與臨床創新</li>
        </ul>
        <div className="w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/6.png" 
            alt="International Exchange" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    )
  },
  {
    year: '2026',
    title: lang === 'en' ? 'To Be' : '進行中',
    content: ''
  }
];

const getPublicationsData = (lang: 'en' | 'zh') => [
  {
    id: 'pub-1',
    title: lang === 'en'
      ? "The clinical application of laparoscope-assisted peritoneal vaginoplasty for the treatment of congenital absence of vagina"
      : "腹腔鏡輔助腹膜陰道成形術用於治療先天性陰道缺失的臨床應用",
    journal: lang === 'en'
      ? "International Journal of Gynecology Obstetrics"
      : "國際婦產科期刊",
    date: lang === 'en' ? "Mar 2 2016" : "2016年3月2日",
    summary: lang === 'en'
      ? "Reviewing Luohu I and II cases from 2001 to 2014, Type II procedures demonstrated shorter operative times, less blood loss, and lower rates of rectal injury. Laparoscope-assisted peritoneal vaginoplasty demonstrated good safety and effectiveness in the treatment of patients with congenital vaginal atresia."
      : "回顧2001至2014年間羅湖醫院I型與II型病例，II型手術顯示操作時間較短、出血量較少，且直腸損傷發生率較低。腹腔鏡輔助腹膜陰道成形術在治療先天性陰道閉鎖患者時，展現出良好的安全性和有效性。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/1.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/1.pdf"
  },
  {
    id: 'pub-2',
    title: lang === 'en'
      ? "Analysis of the artificial vaginal microecology in patients after laparoscopic peritoneal vaginoplasty"
      : "腹腔鏡腹膜陰道成形術後患者人工陰道微生態分析",
    journal: lang === 'en' ? "Nature - Scientific Reports" : "《自然》-《科學報告》",
    date: lang === 'en' ? "June 11 2019" : "2019年6月11日",
    summary: lang === 'en'
      ? "A large-scale international study has conducted the first systematic analysis of the microbiome composition of artificial vaginas and its clinical significance."
      : "一項大型國際研究首次對人工陰道的微生物群組成及其臨床意義進行了系統性分析。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/2.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/2.pdf"
  },
  {
    id: 'pub-3',
    title: lang === 'en'
      ? "Laparoscopic-assisted vaginoplasty in complex congenital urogenital anomaly: A case report"
      : "腹腔鏡輔助陰道成形術應用於複雜先天泌尿生殖畸形之案例報告",
    journal: lang === 'en'
      ? "Journal of Clinical Images and Medical Case Reports"
      : "臨床影像與醫學病例報告期刊",
    date: lang === 'en' ? "Jun 4, 2024" : "2024年6月4日",
    summary: lang === 'en'
      ? "We present a case report of a 15-year-old girl diagnosed with congenital vaginal atresia with ureteral bud and urethral anomaly. This case describes surgical selection and its long-term management."
      : "本文報告一例15歲少女確診先天性陰道閉鎖合併輸尿管芽及尿道畸形之病例。本案例詳述手術選擇及其長期管理",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/3.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/3.pdf"
  },
  {
    id: 'pub-4',
    title: lang === 'en'
      ? "The Post Operative Care in Treatment of Congenital Cervicovaginal Agenesis and its Surgical Description - A Case Series"
      : "先天性頸陰道發育不全之術後護理及其手術描述——病例系列研究",
    journal: lang === 'en'
      ? "American Journal of Surgery Case Reports"
      : "美國外科期刊病例報告",
    date: lang === 'en' ? "Jul 2024" : "2024年7月",
    summary: lang === 'en'
      ? "Our center has been practicing laparoscopic-assisted angioplasty, tracheotomy and international anatomists over the years to treat patients with cervicovaginal agenesis or cervical agenesis in order to preserve their reproductive capability."
      : "本中心多年來持續實踐腹腔鏡輔助血管成形術、氣管切開術及國際解剖學技術，以治療患有子宮頸陰道發育不全或子宮頸發育不全的患者，藉此保存其生殖能力。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/4.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/4.pdf"
  },
  {
    id: 'pub-5',
    title: lang === 'en'
      ? "Insights into the assembly of the neovaginal microbiota in Mayer-Rokitansky-Küster-Hauser (MRKH) syndrome patients"
      : "梅耶-羅基坦斯基-庫斯特-豪瑟（MRKH）症候群患者人工陰道菌群組成的洞察研究",
    journal: lang === 'en' ? "nature communications" : "自然通訊",
    date: lang === 'en' ? "Sept 6, 2024" : "2024年9月6日",
    summary: lang === 'en'
      ? "We conducted a longitudinal study on MRKH patients following laparoscopic peritoneal vaginoplasty. Our findings reveal that the early microbial assemblage exhibited stochastic characteristics, accompanied with a notable bloom of Enterococcus faecalis and genital Mycoplasmas."
      : "我們針對接受腹腔鏡腹膜陰道成形術的MRKH症候群患者進行縱向研究。研究發現早期微生物群落呈現隨機特性，伴隨糞腸球菌與生殖道支原體顯著增殖現象。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/5.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/5.pdf"
  },
  {
    id: 'pub-6',
    title: lang === 'en'
      ? "Comparison between 3D-Enhanced Conventional Pelvic Ultrasound and Magnetic Resonance Imaging in the Evaluation of Obstructive Müllerian Anomalies and Its Concordance with Surgical Diagnosis"
      : "三維增強常規盆腔超聲與磁共振成像在評估阻塞性穆勒氏管畸形中的比較及其與手術診斷的一致性",
    journal: lang === 'en' ? "J Pediatr Adolesc Gynecol." : "《小兒與青少年婦科雜誌》",
    date: lang === 'en' ? "April, 2025" : "2025年4月",
    summary: lang === 'en'
      ? "This study aimed to assess the practical application of conventional 2D pelvic ultrasound in conjunction with 3D ultrasound for evaluating obstructive Müllerian abnormalities."
      : "本研究旨在評估傳統二維骨盆超音波結合三維超音波技術，用於評估阻塞性穆勒氏管異常的臨床應用價值。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/6.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/6.pdf"
  },
  {
    id: 'pub-7',
    title: lang === 'en'
      ? "Laparoscopic Peritoneal Vaginoplasty in Patients with Congenital Vaginal Agenesis Complicated by Pelvic Abnormalities"
      : "合併骨盆異常之先天性陰道發育不全患者的腹腔鏡腹膜陰道成形術",
    journal: lang === 'en' ? "Chinese Journal of Clinicians" : "《中國臨床醫師雜誌》",
    date: lang === 'en' ? "Jun 13, 2011" : "2011年6月13日",
    summary: lang === 'en'
      ? "This study shows that laparoscopic peritoneal vaginoplasty can be safely combined with treatment of pelvic abnormalities in patients with congenital vaginal agenesis, with good surgical outcomes and no added complications."
      : "本研究顯示，對於先天性陰道缺如患者，腹腔鏡下腹膜陰道成形術可安全地與骨盆畸形治療合併進行，手術成效良好且未增加併發症。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/7.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/7.pdf"
  },
  {
    id: 'pub-8',
    title: lang === 'en'
      ? "Laparoscopic Peritoneal Vaginoplasty for Secondary Vaginal Reconstruction: A Case Report"
      : "腹腔鏡下腹膜陰道成形術用於繼發性陰道重建：一例病例報告",
    journal: lang === 'en' ? "Chinese Journal of Clinicians" : "《中國臨床醫師雜誌》",
    date: lang === 'en' ? "Aug 1, 2012" : "2012年8月1日",
    summary: lang === 'en'
      ? "This case report shows that laparoscopic peritoneal vaginoplasty can be successfully used for secondary vaginal reconstruction after failed skin-flap vaginoplasty, with good anatomical and functional outcomes."
      : "本病例報告顯示，當皮膚瓣陰道成形術失敗後，可成功採用腹腔鏡腹膜陰道成形術進行二次陰道重建，並能獲得良好的解剖學與功能性結果。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/8.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/8.pdf"
  },
  {
    id: 'pub-9',
    title: lang === 'en'
      ? "Clinical Management of Rectal Injuries Caused by Laparoscopic Peritoneal Vaginoplasty: An Analysis of 16 Cases"
      : "腹腔鏡腹膜陰道成形術所致直腸損傷之臨床處理：16例病例分析",
    journal: lang === 'en' ? "China Journal of Endoscopy" : "《中國內視鏡雜誌》",
    date: lang === 'en' ? "Aug 28, 2012" : "2012年8月28日",
    summary: lang === 'en'
      ? "This retrospective study shows that most rectal injuries during laparoscopic peritoneal vaginoplasty can be successfully managed with primary repair, avoiding colostomy and preserving good surgical outcomes."
      : "這項回溯性研究顯示，在腹腔鏡下腹膜陰道成形術過程中發生的直腸損傷，多數可透過原發性修補成功處理，既能避免造口術，又能維持良好的手術結果。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/9.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/9.pdf"
  },
  {
    id: 'pub-10',
    title: lang === 'en'
      ? "Surgical Management of Congenital Cervical Atresia"
      : "腹腔鏡腹膜陰道成形術後陰道微生態分析",
    journal: lang === 'en' ? "Chinese Journal of Microecology" : "《中國微生態學雜誌》",
    date: lang === 'en' ? "Mar 20, 2015" : "2015年3月20日",
    summary: lang === 'en'
      ? "This study shows that although artificial vaginas created by laparoscopic peritoneal vaginoplasty have normal structure and function, vaginal microecology is often imbalanced early after surgery and gradually improves over time."
      : "本研究顯示，儘管透過腹腔鏡腹膜陰道成形術所建立的人工陰道具有正常的結構與功能，但術後初期陰道微生態常處於失衡狀態，並會隨時間逐漸改善。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/10.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/10.pdf"
  },
  {
    id: 'pub-11',
    title: lang === 'en'
      ? "Analysis of Vaginal Microecology After Laparoscopic Peritoneal Vaginoplasty"
      : "腹膜陰道成形術（羅湖 II 型）術後早期新陰道微生態分析",
    journal: lang === 'en' ? "Chinese Journal of Microecology" : "《中國微生態學雜誌》",
    date: lang === 'en' ? "May 28, 2015" : "2015年5月28日",
    summary: lang === 'en'
      ? "This study found that although microbial colonization begins soon after Luohu type II peritoneal vaginoplasty, all patients showed significant vaginal microecological imbalance in the early postoperative period."
      : "本研究發現，儘管在羅湖II型腹膜陰道成形術後不久即開始出現微生物定植，但所有患者在術後早期均呈現顯著的陰道微生態失衡。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/11.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/11.pdf"
  },
  {
    id: 'pub-12',
    title: lang === 'en'
      ? "Analysis of Neovaginal Microecology in the Early Postoperative Period After Peritoneal Vaginoplasty (Luohu Type II)"
      : "合併子宮頸閉鎖的先天性陰道閉鎖之羅湖三型手術：一例病例報告",
    journal: lang === 'en' ? "Chinese Journal of Minimally Invasive Surgery" : "《中國微創外科雜誌》",
    date: lang === 'en' ? "Oct 18, 2015" : "2015年10月18日",
    summary: lang === 'en'
      ? "This case report describes successful treatment of congenital vaginal and cervical atresia using the Luohu type III operation, resulting in restored menstruation and short-term symptom relief while preserving reproductive anatomy."
      : "本病例報告描述了一例採用羅湖三型手術成功治療先天性陰道及子宮頸閉鎖的案例，在保留生殖解剖結構的同時，使患者恢復月經並獲得短期症狀緩解。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/12.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/12.pdf"
  },
  {
    id: 'pub-13',
    title: lang === 'en'
      ? "Luohu Type III Operation for Congenital Vaginal Atresia Combined with Cervical Atresia: A Case Report"
      : "合併子宮頸閉鎖的先天性陰道閉鎖之羅湖三型手術：一例病例報告",
    journal: lang === 'en' ? "Chinese Journal of Practical Gynecology and Obstetrics" : "《中國微創外科雜誌》",
    date: lang === 'en' ? "Dec 10, 2017" : "2015年10月18日",
    summary: lang === 'en'
      ? "This review compares surgical and non-surgical vaginoplasty techniques, highlighting that each method has distinct benefits and limitations, and emphasizes individualized, minimally invasive approaches particularly laparoscopic peritoneal vaginoplasty for optimal outcomes."
      : "本病例報告描述了一例採用羅湖三型手術成功治療先天性陰道及子宮頸閉鎖的案例，在保留生殖解剖結構的同時，使患者恢復月經並獲得短期症狀緩解。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/13.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/13.pdf"
  },
  {
    id: 'pub-14',
    title: lang === 'en'
      ? "Advantages and Disadvantages of Different Vaginolplasty Procedures"
      : "不同陰道整形手術的優缺點",
    journal: lang === 'en' ? "Chinese Journal of Practical Gynecology and Obstetrics" : "《中國實用婦產科雜誌》",
    date: lang === 'en' ? "Dec 20, 2017" : "2017年12月10日",
    summary: lang === 'en'
      ? "This paper summarizes indications, key surgical steps, and complication management for the Luohu II laparoscopic peritoneal vaginoplasty, showing it to be a safe, minimally invasive, and effective technique for treating congenital vaginal agenesis, especially MRKH syndrome."
      : "本綜述比較了手術與非手術陰道成形術的技術，指出每種方法各有其獨特的優點與局限性，並強調應採取個性化、微創的治療方式——尤其是腹腔鏡腹膜陰道成形術——以獲得最佳療效。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/14.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/14.pdf"
  },
  {
    id: 'pub-15',
    title: lang === 'en'
      ? "Surgical Techniques of Laparoscopic Peritoneal Vaginoplasty (Luohu II Procedure)"
      : "腹腔鏡下腹膜陰道成形術（羅湖二式手術）的手術技巧",
    journal: lang === 'en' ? "Chinese journal of Minimally Invasive Surgery" : "《中國實用婦產科雜誌》",
    date: lang === 'en' ? "Apr 20, 2018" : "2017年12月10日",
    summary: lang === 'en'
      ? "This case report describes the first use of the Luohu III procedure to preserve a unilateral functional rudimentary uterus in an MRKH patient, successfully restoring menstrual drainage and preserving potential fertility."
      : "本文綜述了羅湖二式腹腔鏡腹膜陰道成形術的適應症、關鍵手術步驟及併發症處理，證實該技術是治療先天性陰道缺如（尤其是MRKH綜合徵）的一種安全、微創且有效的技術。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/15.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/15.pdf"
  },
  {
    id: 'pub-16',
    title: lang === 'en'
      ? "First Case Report of Surgery With Reserved Unilateral Functional Rudimentary Uterus for MRKH Syndrome: Luohu III Procedure"
      : "首例針對 MRKH 症候群保留單側功能性殘餘子宮的手術病例報告：羅湖 III 術式",
    journal: lang === 'en' ? "Journal of Practical Obstetrics and Gynecology" : "《中國微創外科雜誌》",
    date: lang === 'en' ? "Jun 19, 2018" : "2018年4月20日",
    summary: lang === 'en'
      ? "This review summarizes nearly 20 years of clinical experience treating MRKH syndrome, emphasizing standardized diagnosis, psychological support, and individualized management, with laparoscopic peritoneal vaginoplasty highlighted as an effective treatment option."
      : "本病例報告描述了首例運用羅湖三式手術（Luohu III procedure）為一名MRKH患者保留單側功能性殘餘子宮的案例，成功恢復月經排出並保留了潛在生育能力。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/16.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/16.pdf"
  },
  {
    id: 'pub-17',
    title: lang === 'en'
      ? "Treatment of MRKH Syndrome and Its Outcomes"
      : "MRKH 症候群的治療及其預後",
    journal: lang === 'en' ? "Chinese Journal of Family Planning & Gynecotokology" : "《實用婦產科期刊》",
    date: lang === 'en' ? "May 10, 2019" : "2018年6月19日",
    summary: lang === 'en'
      ? "This review outlines the causes, classification, diagnosis, and management of reproductive tract malformations in adolescent females, emphasizing early recognition, individualized surgical treatment, and the importance of psychological support."
      : "本綜述彙整了近20年治療MRKH症候群的臨床經驗，著重強調標準化診斷、心理支持及個別化治療，並特別指出腹腔鏡腹膜陰道成形術為一種有效的治療選項。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/17.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/17.pdf"
  },
  {
    id: 'pub-18',
    title: lang === 'en'
      ? "Female Adolescent Reproductive Tract Malformations"
      : "女性青少年生殖道異常",
    journal: lang === 'en' ? "Chinese Journal of Family Planning & Gynecotokology" : "《中國計劃生育與婦產科學雜誌》",
    date: lang === 'en' ? "Oct 21, 2020" : "2019年5月10日",
    summary: lang === 'en'
      ? "This review discusses classification, diagnosis, and surgical strategies for congenital vaginal atresia, emphasizing accurate preoperative typing and the use of Luohu procedures to preserve uterine function and improve long-term outcomes."
      : "本綜述概述了青少年女性生殖道異常的病因、分類、診斷及處理方法，並著重強調早期識別、個性化手術治療以及心理支持的重要性。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/18.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/18.pdf"
  },
  {
    id: 'pub-19',
    title: lang === 'en'
      ? "Treatment Strategies for Congenital Vaginal Atresia"
      : "先天性陰道閉鎖的治療策略",
    journal: lang === 'en' ? "Biomedical Transformation" : "《中國計劃生育與婦產科學雜誌》",
    date: lang === 'en' ? "Jul 24, 2024" : "2019年10月21日",
    summary: lang === 'en'
      ? "This retrospective study of 221 MRKH patients shows that laparoscopic peritoneal vaginoplasty (Luohu II) is safe and effective, producing good vaginal length, fast recovery, and low complication rates."
      : "本綜述探討了先天性陰道閉鎖的分類、診斷及手術策略，特別強調術前精確的分型，以及運用羅湖手術以保留子宮功能並改善長期預後。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/19.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/19.pdf"
  },
  {
    id: 'pub-20',
    title: lang === 'en'
      ? "Clinical Efficacy of Laparoscopic Peritoneal Vaginoplasty in the Treatment of MRKH Syndrome"
      : "腹腔鏡下腹膜陰道成形術治療 MRKH 症候群之臨床療效",
    journal: lang === 'en' ? "Journal of Practical Obstetrics and Gynecology" : "生物醫學轉型",
    date: lang === 'en' ? "Oct 27, 2014" : "2024年7月24日",
    summary: lang === 'en'
      ? "This review outlines classification and laparoscopic surgical strategies for congenital cervical atresia, emphasizing individualized procedures to restore menstrual outflow and preserve fertility where possible."
      : "這項針對221名MRKH患者的回顧性研究顯示，腹腔鏡腹膜陰道成形術（Luohu II）安全且有效，能形成良好的陰道長度，恢復迅速，且併發症發生率低。",
    imageUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/20.png",
    pdfUrl: "https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/Study/20.pdf"
  }
];

const getAdvantagesData = (lang: 'en' | 'zh') => [
  {
    title: lang === 'en' ? "Clinically Proven" : "臨床驗證",
    text: lang === 'en' 
      ? "The Luohu Procedure has been performed in over 4,000 successful cases, making it one of the most widely applied vaginoplasty techniques in Asia, supported by extensive clinical documentation, published literature, and long-term follow-up demonstrating stable outcomes."
      : "羅湖手術迄今已成功實施逾4,000例，使其成為亞洲應用最廣泛的陰道整形術之一。此技術有大量臨床紀錄、已發表文獻及長期追蹤研究作為佐證，顯示其療效穩定。"
  },
  {
    title: lang === 'en' ? "Autologous Peritoneum, Natural Regeneration" : "自体腹膜，自然再生新造",
    text: lang === 'en'
      ? "The neovagina is lined with autologous peritoneum harvested from the rectovesical peritoneal recess (Douglas-pouch equivalent)—a surgically accessible peritoneal space between the bladder and rectum. This peritoneal tissue offers high biocompatibility and a low risk of rejection, while significantly reducing infection and graft-related complications. During the healing process, the peritoneum gradually undergoes epithelial transformation, forming tissue that closely resembles physiological vaginal mucosa, with good elasticity and self-lubricating properties. This reduces dryness and friction and contributes to improved long-term function and sexual life quality."
      : "陰道內襯採用自體腹膜，該腹膜取自直腸膀胱間腹膜窩（相當於道格拉斯窩）——這是位於膀胱與直腸之間、可經手術觸及的腹膜腔。此種腹膜組織具有高度生物相容性且排斥風險低，同時能顯著降低感染及移植物相關併發症的發生率。在癒合過程中，腹膜會逐漸發生上皮化，形成與生理性陰道黏膜極為相似的組織，具備良好的彈性與自潤滑特性。這有助於減輕乾燥與摩擦，並有助於改善長期功能及性生活品質。"
  },
  {
    title: lang === 'en' ? "Minimally Invasive Laparoscopic Approach, Safe and Efficient" : "微創腹腔鏡手術，安全且高效",
    text: lang === 'en'
      ? "The procedure is performed entirely laparoscopically, with an operative time of approximately 30–60 minutes and minimal blood loss (~20–30 ml). This approach reduces the risks of infection, rectal injury, and long-term complications, lowers anesthesia burden, and results in less postoperative pain and faster recovery."
      : "此手術全程採用腹腔鏡進行，手術時間約為30至60分鐘，出血量極少（約20至30毫升）。此術式可降低感染、直腸損傷及長期併發症的風險，減輕麻醉負擔，並能減輕術後疼痛、加速恢復。"
  },
  {
    title: lang === 'en' ? "Patented Device, Dual Guidance" : "專利裝置，雙重導引",
    text: lang === 'en'
      ? "The procedure combines laparoscopic and transvaginal dual guidance with a hydrodissection protection technique and a patented instrument, the Peritoneal Pusher, enabling gentle, controlled, and reproducible advancement during neovaginal formation. This approach protects surrounding structures, preserves healthy tissue, and enhances surgical safety and standardization."
      : "此術式結合腹腔鏡與經陰道雙重導引技術，輔以水解剖保護技術及專利器械「腹膜推桿」，使在重建陰道過程中能進行溫和、可控且可重複的操作。此方法可保護周邊組織、保留健康組織，並提升手術安全性與標準化程度。"
  },
  {
    title: lang === 'en' ? "Improved Postoperative Compliance" : "改善術後遵從性",
    text: lang === 'en'
      ? "Compared with some traditional techniques, the Luohu Procedure requires less reliance on prolonged, high-intensity postoperative dilation, improving patient acceptance and long-term adherence."
      : "與某些傳統技術相比，羅湖術式對術後長時間、高強度的擴張依賴較少，從而提高了患者的接受度及長期遵從性。"
  },
  {
    title: lang === 'en' ? "Lower Complication Rates" : "併發症發生率較低",
    text: lang === 'en'
      ? "The technique reduces complications commonly associated with traditional vaginoplasty, including stenosis, fistula formation, tissue necrosis, and graft failure."
      : "此技術可降低傳統陰道重建術常見的併發症，包括狹窄、瘻管形成、組織壞死及移植組織失敗。"
  },
  {
    title: lang === 'en' ? "Adaptable to Selected Complex Cases" : "適用於特定複雜病例",
    text: lang === 'en'
      ? "In selected patients, the procedure may be combined with preservation or fusion of uterine remnants, allowing a small subset of individuals to retain potential physiological and functional capacity."
      : "針對特定患者，此手術可結合子宮殘餘組織的保留或融合，使少數患者得以保留潛在的生理及功能能力。"
  }
];

export default function LuohuVaginoplasty() {
  const { lang } = useLanguage();
  const [expandedStage, setExpandedStage] = React.useState<string | null>(null);
  const [expandedTimeline, setExpandedTimeline] = React.useState<number | null>(null);

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
            {lang === 'en' ? 'Luohu Procedure' : '羅湖術式'}
          </h1>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] text-brand-green font-medium mb-8">
            {lang === 'en' ? 'A Laparoscopic Peritoneal Vaginoplasty' : '腹腔鏡腹膜陰道成形術'}
          </h2>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="space-y-6 text-brand-green/90 text-xs md:text-sm leading-relaxed">
            {lang === 'en' ? (
              <>
                <p>The <span className="font-bold">Luohu Procedure Vaginoplasty</span> was developed in the early 2000s by Dr. Luo Guangnan and his team at Luohu Hospital, Shenzhen, China. Building upon the original Davydov procedure pioneered in Russia, the Luohu Procedure represents an upgraded and clinically refined approach, evolved through thousands of surgical cases.</p>
                <p>It is a minimally invasive laparoscopic procedure that uses the patient's own peritoneum—a naturally lubricated tissue accessed via the Douglas pouch—to construct a functional neovagina within 30-60 minutes, with minimal blood loss (20-30 ml).</p>
                <p>Through extensive clinical refinement, the procedure emphasizes patient safety, anatomical integrity, and postoperative quality of life, achieving reliable functional outcomes with a low risk of complications. Following Dr. Luo's passing in 2023, the procedure continues under the leadership of his successor, Dr. Qin Chenglu, and her team.</p>
                <p>Since the first clinical case in November 2001, the Luohu team has successfully performed the procedure in over 4,000 patients with congenital vaginal agenesis, making the <span className="font-bold">Luohu Procedure</span> one of the most clinically established vaginoplasty procedure for MRKH worldwide.</p>
              </>
            ) : (
              <>
                <p>羅湖術式陰道成形術 於 2000 年代初期由 羅光楠醫師及其團隊，在中國深圳羅湖醫院研發完成。承襲源自俄羅斯的 Davydov 陰道成形術，羅湖術式在數千例臨床手術經驗的基礎上持續優化與精進，發展為一套升級且高度臨床成熟的手術方式。</p>
                <p>此術式為一項微創腹腔鏡手術，利用患者自身的腹膜——一層天然具潤滑性的組織，經由道格拉斯陷凹（Douglas pouch）進入——於 30 至 60 分鐘內建構具功能性的再造陰道，術中出血量僅約 20–30 毫升。</p>
                <p>透過長期且系統性的臨床精進，該術式著重於病人安全、解剖結構完整性與術後生活品質，在維持低併發症風險的同時，達成穩定且可靠的功能性成果。 羅醫師於 2023 年辭世後，該術式由其繼任者 秦成路醫師 及其團隊持續承接與發展。</p>
                <p>自 2001 年 11 月完成首例臨床手術以來，羅湖團隊已成功為超過 4,000 名先天性陰道缺如患者施行此術，使羅湖術式成為目前全球 MRKH 症候群 最具臨床實證基礎的陰道成形術之一。</p>
              </>
            )}
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://sheunbinds-web-1408365510.cos.ap-guangzhou.myqcloud.com/SheUnbinds-Web/4-LuohuVaginoplasty/1.png" 
                alt="Dr. Luo and Dr. Qin in surgery" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] md:text-xs text-brand-green/60 font-medium italic text-center">
              {lang === 'en' 
                ? 'During surgery: Dr. LUO Guangnan (upper center, in memoriam) and Dr. QIN Chenglu (lower center).' 
                : '手術紀實：羅光楠醫師（中上，深切緬懷）與 秦成路醫師（中下）。'}
            </p>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E4F33]">
            {lang === 'en' ? 'Development' : '發展'}
          </h2>
        </div>
        <div className="space-y-4">
          {getDevelopmentStages(lang).map((stage) => {
            const getStyles = () => {
              switch(stage.id) {
                case 'luohu-i': return { bg: 'bg-[#D8E3C3]', text: 'text-[#1E4F33]/60' };
                case 'luohu-ii': return { bg: 'bg-[#E77B43]', text: 'text-white' };
                case 'luohu-iii': return { bg: 'bg-[#E8E5B2]', text: 'text-brand-green' };
                case 'luohu-iv': return { bg: 'bg-[#E8E5B2]', text: 'text-brand-green' };
                case 'luohu-v': return { bg: 'bg-[#DAE000]/40', text: 'text-brand-green' };
                default: return { bg: 'bg-white', text: 'text-brand-green' };
              }
            };
            const styles = getStyles();
            
            return (
              <div key={stage.id} className={`${styles.bg} rounded-2xl overflow-hidden transition-all duration-300`}>
                <button 
                  onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                  className="w-full text-left p-6 group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className={`text-sm md:text-base font-bold ${styles.text}`}>
                        {stage.title}
                      </h3>
                      <p className={`text-[10px] md:text-xs italic opacity-70 ${styles.text}`}>
                        {stage.subtitle}
                      </p>
                    </div>
                    <div className={`transition-transform duration-300 ${expandedStage === stage.id ? 'rotate-180' : ''}`}>
                      <ChevronDown size={20} className={styles.text} />
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedStage === stage.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 pt-0 ${styles.text}`}>
                        {stage.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Unique Advantages Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'The Unique Advantages' : '獨特優勢'}
          </h2>
          <span className="text-[#EA5514] font-medium text-sm md:text-base">
            {lang === 'en' ? 'compared to traditional vaginoplasty methods' : '相較於傳統陰道整形術'}
          </span>
        </div>
        
        <div className="space-y-6">
          {getAdvantagesData(lang).map((adv, idx) => (
            <div key={idx}>
              <p className="text-xs md:text-sm text-brand-green leading-relaxed">
                <span className="font-bold">{adv.title}</span><br />
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'Development of Luohu Procedure' : '羅湖術式的發展'}
          </h2>
        </div>
        <div className="relative pl-8 border-l-2 border-[#9ACB5C] space-y-12">
          {getTimelineData(lang).map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#9ACB5C] border-4 border-white shadow-sm" />
              <div className="space-y-2">
                <button 
                  onClick={() => setExpandedTimeline(expandedTimeline === idx ? null : idx)}
                  className="flex items-center gap-2 group text-left"
                >
                  <span className="text-xs md:text-sm font-black text-[#EA5514] whitespace-nowrap">{item.year}</span>
                  <h3 className="text-sm md:text-base font-bold text-brand-green group-hover:text-[#EA5514] transition-colors">
                    {item.title}
                  </h3>
                  <div className={`transition-transform duration-300 ${expandedTimeline === idx ? 'rotate-90' : ''}`}>
                    <ChevronRight size={16} className="text-brand-green" />
                  </div>
                </button>
                <AnimatePresence>
                  {expandedTimeline === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="text-[10px] md:text-xs text-brand-green/80 leading-relaxed pt-2">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <div className="bg-[#DAE000]/50 rounded-full px-8 py-3 inline-flex items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EA5514]">
            {lang === 'en' ? 'The Luohu Procedure Publication' : '羅湖術式論文'}
          </h2>
        </div>
        <p className="text-xs md:text-sm text-brand-green font-bold italic">
          {lang === 'en' ? 'The Publications in English & Chinese' : '中英文發表成果'}
        </p>

        <div className="space-y-24 pt-12">
          {getPublicationsData(lang).map((pub, idx) => (
            <div 
              key={pub.id} 
              className={`grid gap-12 items-center ${idx % 2 === 0 ? 'md:grid-cols-[1fr_1.5fr]' : 'md:grid-cols-[1.5fr_1fr]'}`}
            >
              <div className={`aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img 
                  src={pub.imageUrl} 
                  alt={pub.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={`space-y-6 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-xl md:text-2xl font-bold text-[#EA5514] leading-tight">
                  {pub.title}
                </h3>
                <div className="space-y-1 text-[10px] md:text-xs text-brand-green/70 font-bold">
                  <p>{pub.journal}</p>
                  <p>{pub.date}</p>
                </div>
                <p className="text-xs md:text-sm text-brand-green leading-relaxed font-medium">
                  {pub.summary}
                </p>
                <a 
                  href={pub.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] md:text-xs text-brand-green underline underline-offset-4 hover:text-[#EA5514] transition-colors"
                >
                  {lang === 'en' ? 'Read the full study' : '閱讀完整論文'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
