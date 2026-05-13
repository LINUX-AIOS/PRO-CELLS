import React, { useEffect, useRef, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Logo from './components/Logo';
import AIChat from './components/AIChat';
import { 
  Phone, MapPin, CheckCircle2, Users, Sparkles, Building2, 
  HardHat, HeartPulse, Store, Hotel, ChevronDown, 
  ArrowRight, MessageSquare, Clock, Globe, ShieldCheck, X, Languages, Search
} from 'lucide-react';
import './index.css';

// ─── TRANSLATIONS ───
const translations = {
  en: {
    nav: { services: "Services", identity: "Identity", sectors: "Sectors", connect: "Connect", aiSearch: "PRO CELL AI // ASK ANYTHING" },
    hero: {
      tag: "PRO CELLS Saudi Arabia",
      titles: [
        "Professional Business Station",
        "Elite Workforce Solutions",
        "Premium Facility Services",
        "Cleaning & HR Hub",
        "Integrated Business Support"
      ],
      desc: "Bridging the gap between market demands and elite execution. A sophisticated intersection of HR excellence and high-end facility maintenance.",
      explore: "Explore Services",
      connect: "Connect"
    },
    identity: {
      tag: "01 // Identity",
      title: "The Service Hub",
      p1: "PRO CELLS is a premier, multi-sector service hub dedicated to bridging the gap between evolving market demands and elite operational execution.",
      p2: "Our philosophy is built on the concept of 'cells'—specialized, interconnected units working together to create an efficient environment.",
      regional: { t: "Regional Presence", d: "Vital support across the key hubs of Jeddah and Riyadh." },
      technical: { t: "Technical Excellence", d: "Advanced tools and safe, high-quality products for a healthy environment." },
      expertise: { t: "Sector Expertise", d: "Experience spanning hospitality, health, wellness, and commercial sectors." },
      team: {
        tag: "Our Elite Team",
        title: "We pride in our workforce.",
        items: [
          { t: "Experience", d: "Years of expertise in HR and employment." },
          { t: "Accredited", d: "Recognized certifications ensuring excellence." },
          { t: "Investment", d: "Ongoing development through advanced training." }
        ]
      }
    },
    services: {
      tag: "02 // Solutions",
      title: "Specialized Cells",
      residential: {
        t: "Residential",
        d: "Home, Apartment, and Villa cleaning in Jeddah & Riyadh.",
        details: "Our residential cleaning deep cleans homes using non-toxic materials, ensuring every corner reflects beauty. Specialized for villas and modern apartments."
      },
      fabric: {
        t: "Fabric Care",
        d: "Deep-extraction technology for carpets and upholstery.",
        details: "Using high-end extraction tools, we remove odors, dust, and deep-seated bacteria from sofas, curtains, and carpets."
      },
      corporate: {
        t: "Corporate",
        d: "Office maintenance and Ajeer compliance services.",
        details: "Comprehensive business support including professional office maintenance and full Ajeer system compliance."
      },
      close: "Close"
    },
    sectors: {
      tag: "03 // Industries",
      title: "Sectors We Support",
      commercial: { t: "Commercial", d: "Retail, Malls", details: "Maintaining professional standards in high-traffic retail environments." },
      hospitality: { t: "Hospitality", d: "Cafes, Restaurants", details: "Deep sanitization for cafes and restaurants to meet health standards." },
      health: { t: "Health", d: "Gyms, Clinics", details: "Medical-grade cleaning for fitness centers and medical spaces." },
      construction: { t: "Construction", d: "Post-construction", details: "Heavy-duty cleaning for construction sites and completion handovers." }
    },
    connect: {
      tag: "04 // Connect",
      title: "The Gold Standard",
      desc: "Our professional team is standing by in Jeddah and Riyadh.",
      whatsapp: "WhatsApp Reservation",
      call: "Direct Call",
      web: "Official Website",
      socialTag: "Join Our Community",
      insta: "Instagram",
      tiktok: "TikTok",
      snap: "Snapchat",
      offerTitle: "Current Offer",
      offerDesc: "Up to 50% off on selected cleaning packages."
    },
    footer: {
      tag: "PRO CELLS Saudi Arabia",
      copy: "2026 Professional Business Station",
      loc: "Location",
      locVal: "Jeddah & Riyadh",
      op: "Operation",
      opVal: "Wed 8:00 AM – 5:00 PM",
      legal: "Legal",
      legalVal: "All Rights Reserved",
      credit: "MADE BY MOHAMMAD FAIZAN KHAN"
    }
  },
  ar: {
    nav: { services: "الخدمات", identity: "الهوية", sectors: "القطاعات", connect: "تواصل", aiSearch: "PRO CELL AI // اسأل عن أي شيء" },
    hero: {
      tag: "برو سيلز السعودية",
      titles: [
        "محطة الأعمال الاحترافية",
        "نخبة حلول القوى العاملة",
        "خدمات المرافق المتميزة",
        "مركز التنظيف والموارد البشرية",
        "دعم الأعمال المتكامل"
      ],
      desc: "نسد الفجوة بين متطلبات السوق والتنفيذ النخبوية. تقاطع متطور بين تميز الموارد البشرية وصيانة المرافق الراقية.",
      explore: "استكشف الخدمات",
      connect: "تواصل"
    },
    identity: {
      tag: "٠١ // الهوية",
      title: "مركز الخدمات",
      p1: "برو سيلز هي مركز خدمات رائد متعدد القطاعات مخصص لسد الفجوة بين متطلبات السوق المتطورة والتنفيذ التشغيلي النخبوي.",
      p2: "تعتمد فلسفتنا على مفهوم 'الخلايا' - وحدات متخصصة ومترابطة تعمل معاً لخلق بيئة فعالة.",
      regional: { t: "التواجد الإقليمي", d: "دعم حيوي عبر المراكز الرئيسية في جدة والرياض." },
      technical: { t: "التميز التقني", d: "أدوات متطورة ومنتجات آمنة لبيئة صحية." },
      expertise: { t: "خبرة القطاع", d: "خبرة تشمل قطاعات الضيافة والصحة والتجارة." },
      team: {
        tag: "فريقنا النخبوي",
        title: "نحن نفخر بقوانا العاملة.",
        items: [
          { t: "الخبرة", d: "سنوات من الخبرة في الموارد البشرية." },
          { t: "الاعتماد", d: "شهادات معتمدة تضمن التميز." },
          { t: "الاستثمار", d: "تطوير مستمر من خلال التدريب المتقدم." }
        ]
      }
    },
    services: {
      tag: "٠٢ // الحلول",
      title: "خلايا متخصصة",
      residential: {
        t: "السكني",
        d: "تنظيف المنازل والشقق والفلل في جدة والرياض.",
        details: "تنظيفنا السكني يتجاوز السطح. نحن نتعامل مع التنظيف العميق لجميع أنواع المنازل باستخدام مواد غير سامة."
      },
      fabric: {
        t: "العناية بالأقمشة",
        d: "تقنية الاستخراج العميق للسجاد والمفروشات.",
        details: "باستخدام أدوات استخراج راقية، نقوم بإزالة الروائح والغبار والبكتيريا العميقة من الأرائك والستائر والسجاد."
      },
      corporate: {
        t: "الشركات",
        d: "صيانة المكاتب وخدمات الالتزام بنظام أجير.",
        details: "دعم أعمال شامل يشمل صيانة المكاتب المهنية والالتزام الكامل بنظام أجير لتبسيط عمليات القوى العاملة."
      },
      close: "إغلاق"
    },
    sectors: {
      tag: "٠٣ // الصناعات",
      title: "القطاعات التي ندعمها",
      commercial: { t: "التجاري", d: "التجزئة، المولات", details: "الحفاظ على المعايير المهنية في بيئات التجزئة ذات الحركة المرورية العالية." },
      hospitality: { t: "الضيافة", d: "المقاهي، المطاعم", details: "التعقيم العميق وإدارة النظافة للمقاهي والمطاعم لتلبية المعايير الصحية." },
      health: { t: "الصحة", d: "الصالات، العيادات", details: "تنظيف وتعقيم على المستوى الطبي لمراكز اللياقة والمساحات الطبية." },
      construction: { t: "الإنشاءات", d: "ما بعد الإنشاء", details: "تنظيف شاق ودعم تشغيلي لمواقع الإنشاء وعمليات التسليم." }
    },
    connect: {
      tag: "٠٤ // التواصل",
      title: "المعيار الذهبي",
      desc: "فريقنا المهني في انتظارك في جدة والرياض.",
      whatsapp: "حجز عبر واتساب",
      call: "اتصال مباشر",
      web: "الموقع الرسمي",
      socialTag: "انضم إلى مجتمعنا",
      insta: "إنستغرام",
      tiktok: "تيك توك",
      snap: "سناب شات",
      offerTitle: "العرض الحالي",
      offerDesc: "خصم يصل إلى ٥٠٪ على باقات تنظيف مختارة."
    },
    footer: {
      tag: "برو سيلز السعودية",
      copy: "٢٠٢٦ محطة الأعمال الاحترافية",
      loc: "الموقع",
      locVal: "جدة والرياض",
      op: "التشغيل",
      opVal: "الأربعاء ٨:٠٠ صباحاً – ٥:٠٠ مساءً",
      legal: "قانوني",
      legalVal: "جميع الحقوق محفوظة",
      credit: "صنع بواسطة محمد فيزان خان"
    }
  }
};

// ─── UTILS ───
const toArNum = (str) => {
  const arNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.toString().replace(/[0-9]/g, (w) => arNums[+w]);
};

const FormattedNum = ({ children, lang, className = "" }) => {
  if (lang !== 'ar') return <span className={className}>{children}</span>;
  return (
    <span dir="ltr" className={`inline-block ${className}`} style={{ unicodeBidi: 'bidi-override' }}>
      {toArNum(children)}
    </span>
  );
};

// ─── COMPONENTS ───
const Modal = ({ isOpen, onClose, content, lang }) => {
  if (!isOpen || !content) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-primary/95 backdrop-blur-2xl transition-all duration-300">
      <div className="glass-card w-full max-w-lg p-8 md:p-12 relative overflow-hidden border-secondary/20 rounded-2xl md:rounded-3xl shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-secondary/40 hover:text-secondary transition-colors p-2">
          <X size={24} />
        </button>
        <div className="hexagon-outline w-16 h-18 md:w-20 md:h-22 mb-8 mx-auto">
          <div className="hexagon-inner">
            {content.icon && <content.icon size={28} className="text-secondary" />}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-black uppercase text-center mb-6 tracking-tight">{content.title}</h3>
        <p className="text-secondary/70 leading-relaxed font-light text-center text-sm md:text-base mb-10 max-w-sm mx-auto">
          {content.details}
        </p>
        <div className="flex justify-center">
          <button onClick={onClose} className="btn-outline py-3 px-10 text-sm md:text-base">{translations[lang].services.close}</button>
        </div>
        <div className="scanline" />
      </div>
    </div>
  );
};

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const move = (e) => {
      if (dot.current) { dot.current.style.left = `${e.clientX}px`; dot.current.style.top = `${e.clientY}px`; }
      if (ring.current) { ring.current.style.left = `${e.clientX}px`; ring.current.style.top = `${e.clientY}px`; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (<><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>);
};

const HexCard = ({ icon: Icon, title, desc, onClick, delay = 0 }) => (
  <button className="reveal flex flex-col items-center text-center p-8 md:p-10 glass-card group w-full rounded-2xl md:rounded-3xl" style={{ transitionDelay: `${delay}ms` }} onClick={onClick}>
    <div className="hexagon-outline mb-6 md:mb-8 group-hover:scale-105 transition-transform">
      <div className="hexagon-inner">
        <Icon className="text-secondary w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>
    <h3 className="text-sm md:text-base font-bold uppercase tracking-wide mb-3 md:mb-4">{title}</h3>
    <p className="text-sm md:text-base text-secondary/60 leading-relaxed font-light">{desc}</p>
    <div className="scanline" />
  </button>
);

const DynamicTitle = ({ titles, lang }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles]);
  return (
    <div className={`transition-all duration-1000 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--secondary)' }}>
        {titles[index]}
      </span>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [scrolled, setScrolled] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const t = translations[lang];
  const fmt = (str) => lang === 'ar' ? toArNum(str) : str;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, [lang]);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <div className={`site-wrapper selection:bg-secondary selection:text-primary ${lang === 'ar' ? 'rtl' : ''}`} lang={lang}>
      <ThreeBackground />
      <Cursor />
      <div className="noise" />
      
      {/* ─── NAV ─── */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-xl border-b border-secondary/10 py-3 md:py-4' : 'bg-transparent py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <div className="flex items-center gap-4 md:gap-8">
            <Logo width="50" className="md:w-[75px]" />
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-xl text-secondary leading-none tracking-tighter">PRO CELLS</span>
              <span className="font-mono text-xs md:text-sm text-secondary/40 uppercase tracking-[0.2em]">{lang === 'en' ? 'Professional Business Station' : 'محطة الأعمال الاحترافية'}</span>
            </div>
          </div>
          
          {/* AI Search Bar */}
          <div className="w-full lg:max-w-md px-2 md:px-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsAiOpen(true);
              }}
              className="w-full glass-card py-3 px-5 md:px-6 rounded-full flex items-center justify-between hover:border-secondary transition-all active:scale-95"
            >
              <span className="text-xs md:text-sm font-mono text-secondary/40 tracking-widest truncate">{t.nav.aiSearch}</span>
              <div className="flex items-center gap-3">
                <Search size={14} className="text-secondary/30" />
                <Sparkles size={14} className="text-secondary/30 animate-pulse" />
              </div>
            </button>
          </div>

          <div className="hidden lg:flex gap-10 items-center">
            {['Services', 'Identity', 'Sectors', 'Connect'].map((key) => (
              <a key={key} href={`#${key.toLowerCase()}`} className="text-[11px] font-mono uppercase tracking-[0.2em] hover:text-white transition-colors">{t.nav[key.toLowerCase()]}</a>
            ))}
            <button onClick={toggleLang} className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] border border-secondary/20 px-6 py-2 rounded-full hover:bg-secondary/10">
              <Languages size={14} /> {lang === 'en' ? 'Arabic' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 pt-40 md:pt-48 pb-20">
        <div className="molecular-grid absolute inset-0 pointer-events-none" />
        <div className="reveal max-w-5xl mx-auto w-full">
          <span className="section-tag">{t.hero.tag}</span>
          <h1 className="hero-title mb-12 md:mb-16">
            <div className="mb-4 md:mb-6">{lang === 'en' ? 'PRO CELLS' : 'برو سيلز'}</div>
            <div className="min-h-[2.5em] md:min-h-[1.2em] flex items-center justify-center">
              <DynamicTitle titles={t.hero.titles} lang={lang} />
            </div>
          </h1>
          <p className="text-base md:text-lg text-secondary/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 md:mb-16">
            {t.hero.desc}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#services" className="btn-primary w-full md:w-auto justify-center py-4 px-10">{t.hero.explore}</a>
            <a href="#connect" className="btn-outline w-full md:w-auto justify-center py-4 px-10">{t.hero.connect}</a>
          </div>
        </div>
        <div className="mt-16 animate-bounce text-secondary/20">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ─── IDENTITY ─── */}
      <section id="identity" className="py-24 md:py-32 relative border-y border-secondary/5 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="reveal">
              <span className="section-tag">{t.identity.tag}</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase mb-8 md:mb-12 tracking-tighter">{t.identity.title}</h2>
              <div className="space-y-8 text-base md:text-lg text-secondary/60 font-light max-w-lg leading-loose">
                <p>{t.identity.p1}</p>
                <div className="grid gap-6 md:gap-8 mt-12">
                  {[
                    { ...t.identity.regional, i: Globe },
                    { ...t.identity.technical, i: Sparkles },
                    { ...t.identity.expertise, i: ShieldCheck }
                  ].map((item, i) => (
                    <button key={i} className="flex gap-5 text-left group w-full p-3 hover:bg-secondary/5 rounded-2xl transition-all" onClick={() => setModalData({...item, title: item.t, details: item.d, icon: item.i})}>
                      <div className="bg-secondary/10 p-4 rounded-xl shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all"><item.i size={20} /></div>
                      <div>
                        <h4 className="font-bold text-secondary text-sm md:text-base uppercase tracking-widest mb-1.5">{item.t}</h4>
                        <p className="text-sm md:text-base opacity-60 leading-relaxed">{item.d}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="glass-card p-8 md:p-16 border-secondary/10 relative rounded-3xl md:rounded-[3rem]">
                <span className="text-[10px] font-mono text-secondary/30 uppercase mb-8 md:mb-12 block tracking-[0.4em]">{t.identity.team.tag}</span>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-10 md:mb-16 uppercase">{t.identity.team.title}</h3>
                <ul className="space-y-8 md:space-y-12">
                  {t.identity.team.items.map((item, i) => (
                    <li key={i} className="flex gap-5 md:gap-6">
                      <div className="w-1.5 h-1.5 bg-secondary mt-2 md:mt-3 shrink-0 opacity-40 rounded-full" />
                      <div>
                        <h4 className="font-bold text-secondary text-sm md:text-base uppercase tracking-wider mb-2">{item.t}</h4>
                        <p className="text-xs md:text-base text-secondary/50 font-light leading-relaxed">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="scanline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="reveal text-center mb-16 md:mb-24">
            <span className="section-tag">{t.services.tag}</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{t.services.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <HexCard icon={Building2} title={t.services.residential.t} desc={t.services.residential.d} delay={0} onClick={() => setModalData({...t.services.residential, title: t.services.residential.t, icon: Building2})} />
            <HexCard icon={Sparkles} title={t.services.fabric.t} desc={t.services.fabric.d} delay={100} onClick={() => setModalData({...t.services.fabric, title: t.services.fabric.t, icon: Sparkles})} />
            <HexCard icon={Users} title={t.services.corporate.t} desc={t.services.corporate.d} delay={200} onClick={() => setModalData({...t.services.corporate, title: t.services.corporate.t, icon: Users})} />
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─── */}
      <section id="sectors" className="py-24 md:py-32 bg-secondary/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="reveal text-center mb-16 md:mb-24">
            <span className="section-tag">{t.sectors.tag}</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{t.sectors.title}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { ...t.sectors.commercial, i: Store },
              { ...t.sectors.hospitality, i: Hotel },
              { ...t.sectors.health, i: HeartPulse },
              { ...t.sectors.construction, i: HardHat }
            ].map((sector, i) => (
              <button key={i} className="reveal glass-card p-8 md:p-12 text-center group hover:border-secondary/30 transition-all rounded-3xl" style={{ transitionDelay: `${i * 100}ms` }} onClick={() => setModalData({...sector, title: sector.t, icon: sector.i})}>
                <sector.i size={24} className="md:w-8 md:h-8 mx-auto mb-4 md:mb-6 text-secondary/30 group-hover:text-secondary transition-colors" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{sector.t}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECT ─── */}
      <section id="connect" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="reveal">
              <span className="section-tag">{t.connect.tag}</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 md:mb-12 tracking-tighter">{t.connect.title}</h2>
              <p className="text-base md:text-lg text-secondary/50 mb-10 md:mb-16 max-w-sm font-light leading-relaxed">{t.connect.desc}</p>
              <div className="space-y-6">
                <a href={`https://wa.me/966555984276`} className="btn-primary w-full justify-center flex gap-4 text-sm py-5 rounded-2xl">
                  <MessageSquare size={20} /> {t.connect.whatsapp}
                </a>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="glass-card p-6 md:p-8 text-center rounded-2xl">
                    <span className="text-xs md:text-sm font-mono text-secondary/30 uppercase mb-3 block tracking-widest">{t.connect.call}</span>
                    <FormattedNum lang={lang} className="font-bold text-sm md:text-base tracking-widest">+966 55 598 4276</FormattedNum>
                  </div>
                  <div className="glass-card p-6 md:p-8 text-center rounded-2xl">
                    <span className="text-xs md:text-sm font-mono text-secondary/30 uppercase mb-3 block tracking-widest">{t.connect.web}</span>
                    <span className="font-bold text-sm md:text-base tracking-widest">procells.sa</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal space-y-6 md:space-y-10">
              <div className="glass-card p-10 md:p-16 bg-secondary/5 rounded-[2.5rem] md:rounded-[3.5rem]">
                <span className="text-xs md:text-sm font-mono text-secondary/30 uppercase mb-8 md:mb-12 block tracking-[0.4em]">{t.connect.socialTag}</span>
                <div className="grid gap-4 md:gap-6">
                  {[
                    { n: t.connect.insta, h: "https://www.instagram.com/PROCELLS24", i: () => <div className="w-6 h-6 border border-secondary/20 rounded-lg flex items-center justify-center text-xs md:text-sm">IG</div> },
                    { n: t.connect.tiktok, h: "https://www.tiktok.com/@procells24", i: () => <div className="w-6 h-6 border border-secondary/20 rounded-lg flex items-center justify-center text-xs md:text-sm">TK</div> },
                    { n: t.connect.snap, h: "https://www.snapchat.com/@procells24", i: () => <div className="w-6 h-6 border border-secondary/20 rounded-lg flex items-center justify-center text-xs md:text-sm">SC</div> }
                  ].map((s, i) => (
                    <a key={i} href={s.h} className="flex items-center justify-between p-4 md:p-6 rounded-2xl border border-secondary/5 hover:bg-secondary/10 transition-all group">
                      <div className="flex items-center gap-6"><s.i /><span className="text-sm md:text-base font-bold uppercase tracking-widest">{s.n}</span></div>
                      <ArrowRight size={16} className="opacity-10 group-hover:opacity-40 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10 border border-dashed border-secondary/20 rounded-3xl flex items-center gap-6 md:gap-8">
                <div className="w-14 h-14 md:w-20 md:h-20 hexagon bg-secondary text-primary font-black text-sm md:text-lg shrink-0">
                  <FormattedNum lang={lang}>50%</FormattedNum>
                </div>
                <div>
                  <h5 className="font-bold text-secondary text-xs md:text-sm uppercase mb-1.5 md:mb-2 tracking-widest">{t.connect.offerTitle}</h5>
                  <p className="text-xs md:text-sm opacity-60 leading-relaxed font-light">{t.connect.offerDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 md:py-24 border-t border-secondary/5 bg-primary/40 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center gap-12 md:gap-16 font-mono text-xs md:text-sm text-secondary/30 uppercase tracking-[0.2em]">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-12 md:gap-20">
            <div className="flex items-center gap-6">
              <Logo width="45" className="opacity-90 md:w-[60px]" />
              <div className="flex flex-col">
                <span className="text-secondary/60 font-bold text-xs md:text-sm">{t.footer.tag}</span>
                <span className="mt-1">&copy; <FormattedNum lang={lang}>2026</FormattedNum> {lang === 'en' ? 'Professional Business Station' : 'محطة الأعمال الاحترافية'}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-center">
              <div><p className="opacity-40 mb-2">{t.footer.loc}</p><p className="text-secondary/50 font-bold text-xs md:text-sm">{t.footer.locVal}</p></div>
              <div><p className="opacity-40 mb-2">{t.footer.op}</p><p className="text-secondary/50 font-bold text-xs md:text-sm">{lang === 'en' ? t.footer.opVal : <FormattedNum lang={lang}>الأربعاء ٨:٠٠ صباحاً – ٥:٠٠ مساءً</FormattedNum>}</p></div>
              <div><p className="opacity-40 mb-2">{t.footer.legal}</p><p className="text-secondary/50 font-bold text-xs md:text-sm">{t.footer.legalVal}</p></div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-secondary/5 w-full flex justify-center">
            <a 
              href="https://khan.linux-aios.com" 
              className="text-xs md:text-sm text-secondary/30 hover:text-secondary/90 transition-all duration-300 tracking-[0.5em] font-medium group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover:tracking-[0.8em] transition-all duration-700">{t.footer.credit}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Moved Modals to bottom for better stacking */}
      <Modal isOpen={!!modalData} onClose={() => setModalData(null)} content={modalData} lang={lang} />
      <AIChat isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} lang={lang} />
    </div>
  );
}
