import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, X, Copy, Check, Sparkles, User, Bot } from 'lucide-react';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

const PROCELLS_CONTEXT = `
ProCells (الخلايا الاحترافية) is a premier, multi-sector service hub based in Saudi Arabia (Jeddah and Riyadh).
Official Brand Name: PRO CELLS (Professional Business Station).
Digital Identity: ProCells24.
Motto: Professional Business Station (محطة الأعمال الاحترافية).

Core Pillars:
1. Human Resources & Specialized Staffing: Providing workforce solutions (Ajeer, Manpower Rental, Hiring Process Management).
2. Professional Cleaning & Sanitization: Residential (Homes, Villas, Apartments), Corporate (Offices), and Specialized Deep Cleaning (Carpets, Upholstery).

Competitive Advantages:
- Elite Team: Certified professionals with accredited qualifications.
- Continuous Training: Staff trained to global standards.
- Quality Materials: Premium Italian cleaning products.
- Reliability: Gold-standard delivery in Jeddah and Riyadh.

Service Details:
- Workforce: Ajeer compliance, manpower rental, talent acquisition.
- Cleaning: Homes, villas, offices, carpets, sofas, furniture, AC units, glass polishing. Hourly options available.

Market Scope: Jeddah and Riyadh.
Target Sectors: Commercial (Malls, Offices), Hospitality (Hotels, Cafes), Wellness (Gyms), Industrial (Construction), Residential.

Contact: procells.sa | +966 55 598 4276.
Social: @procells24.

AI Personality: 
- Be human-friendly, professional, and helpful.
- Use Markdown (bold, italic) for emphasis.
- MUST reply in the SAME LANGUAGE as the user (Arabic for Arabic, English for English).
- Keep responses concise but comprehensive.
- Focus on Jeddah and Riyadh market.
`;

const AIChat = ({ isOpen, onClose, lang }) => {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      id: 'init-msg',
      content: lang === 'en' 
        ? "Hello! I am **PRO CELL AI**. How can I assist you with our **Elite Workforce** or **Premium Cleaning** today?" 
        : "مرحباً! أنا **PRO CELL AI**. كيف يمكنني مساعدتك في **حلول القوى العاملة** أو **خدمات التنظيف المتميزة** اليوم؟" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isArabic = (text) => /[\u0600-\u06FF]/.test(text || "");

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    if (!GROQ_API_KEY) {
      const errorMsg = lang === 'en' 
        ? "AI key not configured. Please add VITE_GROQ_API_KEY to your Netlify settings."
        : "لم يتم تكوين مفتاح الذكاء الاصطناعي. يرجى إضافة VITE_GROQ_API_KEY في إعدادات نيتليفاي.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg, id: Date.now() }]);
      return;
    }

    const userMsg = { role: 'user', content: input, id: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(GROQ_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: PROCELLS_CONTEXT },
            ...messages.map(({ role, content }) => ({ role, content })),
            { role: "user", content: input }
          ],
          temperature: 0.6,
          max_tokens: 1024
        })
      });

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: reply, id: Date.now() }]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg = lang === 'en' 
        ? "I apologize, but I'm having trouble connecting right now."
        : "عذراً، أواجه مشكلة في الاتصال حالياً.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg, id: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-6 bg-primary/90 backdrop-blur-2xl">
      <div className="glass-card w-full h-full md:max-w-3xl md:h-[85vh] flex flex-col relative overflow-hidden border-secondary/20 shadow-2xl md:rounded-[2.5rem]">
        {/* Header */}
        <div className="p-5 md:p-8 border-b border-secondary/10 flex justify-between items-center bg-secondary/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 hexagon bg-secondary text-primary flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-black text-sm md:text-base uppercase tracking-widest text-secondary">PRO CELL AI</h3>
              <p className="text-[10px] text-secondary/40 uppercase tracking-widest">{lang === 'en' ? 'Professional Intelligence' : 'الذكاء المهني'}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-secondary/10 rounded-full transition-colors">
            <X size={24} className="text-secondary/50" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scroll-smooth">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
              <div className={`flex gap-4 max-w-[92%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center border border-secondary/20 bg-secondary/5">
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-secondary" />}
                </div>
                <div className="space-y-3">
                  <div className={`p-4 md:p-6 rounded-2xl text-[13px] md:text-base leading-relaxed relative group ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-primary font-medium rounded-tr-none shadow-lg' 
                      : 'bg-primary/60 border border-secondary/10 text-secondary/90 rounded-tl-none shadow-sm'
                  }`} dir={isArabic(msg.content) ? 'rtl' : 'ltr'}>
                    {/* Safe ReactMarkdown usage for v10 */}
                    <div className="markdown-content">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content || ""}
                      </ReactMarkdown>
                    </div>
                    
                    {/* Copy Button */}
                    <button 
                      onClick={() => handleCopy(msg.content, msg.id)}
                      className={`absolute -bottom-8 ${msg.role === 'user' ? 'left-0' : 'right-0'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] text-secondary/40 hover:text-secondary font-mono bg-primary/40 px-3 py-1 rounded-full`}
                    >
                      {copiedId === msg.id ? <><Check size={10} /> {lang === 'en' ? 'COPIED' : 'تم النسخ'}</> : <><Copy size={10} /> {lang === 'en' ? 'COPY' : 'نسخ'}</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-secondary/20 bg-secondary/5 flex items-center justify-center">
                  <Bot size={14} className="text-secondary" />
                </div>
                <div className="p-4 bg-primary/60 border border-secondary/10 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 md:p-10 border-t border-secondary/10 bg-secondary/5">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder={lang === 'en' ? "Ask PRO CELL AI..." : "اسأل PRO CELL AI..."}
              className="w-full bg-primary/60 border border-secondary/30 rounded-2xl py-4 md:py-5 px-6 md:px-8 pr-14 md:pr-20 text-sm md:text-base text-secondary placeholder:text-secondary/20 focus:border-secondary transition-all outline-none shadow-inner"
              dir={isArabic(input) ? 'rtl' : 'ltr'}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-secondary text-primary rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-lg"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-secondary/20 mt-5 md:mt-6 uppercase tracking-widest font-mono">
            {lang === 'en' ? 'PRO CELL AI // SECURE ENVIRONMENT' : 'PRO CELL AI // بيئة آمنة'}
          </p>
        </div>
        <div className="scanline pointer-events-none" />
      </div>
    </div>
  );
};

export default AIChat;
