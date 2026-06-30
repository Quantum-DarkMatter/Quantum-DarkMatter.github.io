const translations = {
  en: {
    // Navigation
    nav_pricing: "Pricing",
    nav_about: "About",
    nav_contact: "Contact Us",
    
    // Contact Modal
    modal_title: "GET IN TOUCH",
    modal_agent: "Contact & Support",
    modal_desc: "Reach out via Email or join our Discord community.",
    modal_discord_desc: "Join our community of IT learners.",
    modal_discord_btn: "Join Server",
    modal_email_desc: "For mentorship & business inquiries.",
    modal_email_btn: "Send Email",
    modal_paypal_desc: "Scan to pay or click the button below.",
    modal_paypal_btn: "Pay via PayPal",
    
    // Hero
    hero_label: "PREMIUM IT CERTIFICATION TUTORIALS",
    hero_title_1: "Ace Your IT Exams",
    hero_title_2: "Faster & Smarter",
    hero_desc: "Expert-crafted exam notes, deep-dive tutorials, and 1-on-1 mentorship for AWS, Cisco, CompTIA, and Microsoft certifications. Stop guessing and start passing.",
    
    // Pricing
    pricing_sec_title: "// PREMIUM ACCESS",
    pricing_1_title: "Exam Notes",
    pricing_1_desc: "/ exam",
    pricing_1_f1: "Comprehensive PDF study guides",
    pricing_1_f2: "Real exam scenarios & topologies",
    pricing_1_f3: "Lifetime updates",
    pricing_2_title: "1-on-1 Mentorship",
    pricing_2_desc: "/ month",
    pricing_2_f1: "Weekly 60-min coaching calls",
    pricing_2_f2: "Customized study plans",
    pricing_2_f3: "Priority Discord support",
    btn_paypal: "Pay with PayPal",
    paypal_redirect_note: "You'll be redirected to PayPal to complete payment securely.",
    trust_1: "🔒 Secure Payments via Stripe & PayPal",
    trust_2: "⭐ Trusted by 500+ global learners",
    
    // Posts
    sec_featured: "// FEATURED",
    sec_latest: "// LATEST POSTS",
    read_more: "READ FULL →",
    
    // About
    about_sec_title: "// OUR STORY",
    about_p1: "Welcome to CERTPATH. We are a collective of senior IT professionals, cloud architects, and network engineers dedicated to demystifying the path to premium IT certifications.",
    about_p2: "With the rapid evolution of technology and the disruption of AI, having verified, expert-level credentials is more important than ever. We focus on providing high-quality, deeply technical, and easy-to-understand study materials for AWS, Cisco, CompTIA, and Microsoft certifications.",
    about_p3: "Our mission is to help global learners stop guessing and start passing, saving both time and money on their certification journey.",
    
    // Footer
    footer_copy: "© 2026 CERTPATH · Empowering IT Professionals Globally",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_refund: "Refund Policy"
  },
  zh: {
    // Navigation
    nav_pricing: "尊享方案",
    nav_about: "關於我們",
    nav_contact: "聯絡客服",
    
    // Contact Modal
    modal_title: "GET IN TOUCH",
    modal_agent: "聯絡與支援",
    modal_desc: "透過 Email 聯絡我們，或加入 Discord 社群。",
    modal_discord_desc: "加入專屬的 IT 學習者社群。",
    modal_discord_btn: "加入伺服器",
    modal_email_desc: "商業合作與一對一指導諮詢。",
    modal_email_btn: "發送 Email",
    modal_paypal_desc: "掃描二維碼或點擊下方按鈕付款。",
    modal_paypal_btn: "透過 PayPal 付款",
    
    // Hero
    hero_label: "PREMIUM IT CERTIFICATION TUTORIALS",
    hero_title_1: "一次通過 IT 認證",
    hero_title_2: "更聰明、更高效",
    hero_desc: "由專家精心編寫的備考筆記、深度教學，以及針對 AWS、Cisco、CompTIA 與 Microsoft 認證的一對一指導。別再盲目摸索，立即展開通關之路。",
    
    // Pricing
    pricing_sec_title: "// 尊享服務",
    pricing_1_title: "備考筆記",
    pricing_1_desc: "/ 考試",
    pricing_1_f1: "全面涵蓋考點的 PDF 學習指南",
    pricing_1_f2: "真實考試情境與拓撲分析",
    pricing_1_f3: "享有終身免費更新",
    pricing_2_title: "1對1 專屬指導",
    pricing_2_desc: "/ 月",
    pricing_2_f1: "每週 60 分鐘語音指導",
    pricing_2_f2: "量身打造的專屬學習計畫",
    pricing_2_f3: "Discord 優先支援通道",
    btn_paypal: "使用 PayPal 付款",
    paypal_redirect_note: "您將跳轉至 PayPal 以安全地完成付款。",
    trust_1: "🔒 支援 PayPal 等安全付款方式",
    trust_2: "⭐ 獲得全球 500+ 學員信賴",
    
    // Posts
    sec_featured: "// 精選文章",
    sec_latest: "// 最新文章",
    read_more: "閱讀全文 →",
    
    // About
    about_sec_title: "// 品牌故事",
    about_p1: "歡迎來到 CERTPATH。我們是一群由資深 IT 專家、雲端架構師與網路工程師組成的團隊，致力於為學習者揭開頂級 IT 認證的神秘面紗。",
    about_p2: "隨著技術的快速演進與 AI 浪潮的衝擊，擁有具備公信力的專家級證照比以往任何時候都更加重要。我們專注於提供高品質、技術深度足夠且易於理解的學習資源，涵蓋 AWS、Cisco、CompTIA 與 Microsoft 等主流認證體系。",
    about_p3: "我們的使命是幫助全球學習者不再盲目摸索，一次順利通關，為您的考證之旅節省寶貴的時間與金錢。",
    
    // Footer
    footer_copy: "© 2026 CERTPATH · 賦能全球 IT 專業人士",
    footer_privacy: "隱私權政策",
    footer_terms: "服務條款",
    footer_refund: "退款政策"
  }
};

let currentLang = 'en';

function initI18n() {
  const savedLang = localStorage.getItem('certpath_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    currentLang = savedLang;
  } else {
    const browserLangs = navigator.languages || [navigator.language];
    for (let lang of browserLangs) {
      if (lang.toLowerCase().includes('zh-tw') || lang.toLowerCase().includes('zh-hk') || lang.toLowerCase().includes('zh-hant')) {
        currentLang = 'zh';
        break;
      }
    }
  }
  applyTranslations();
  updateLangButton();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('certpath_lang', currentLang);
  applyTranslations();
  updateLangButton();
}

function updateLangButton() {
  const btn = document.getElementById('langToggleBtn');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'EN / 繁中' : '繁中 / EN';
  }
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key]; // Using innerHTML to support <br> tags in hero_title
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-TW';
}

document.addEventListener('DOMContentLoaded', initI18n);
