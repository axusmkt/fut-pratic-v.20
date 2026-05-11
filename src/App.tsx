/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  Tv, 
  Smartphone, 
  Monitor, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  Zap,
  TrendingUp,
  Clock,
  Laptop,
  Tablet,
  Cast,
  ArrowRight,
  Shield,
  CreditCard,
  Check,
  MessageCircle,
  Menu,
  XCircle,
  X,
  PlayCircle,
  Calendar,
  Clapperboard,
  Gamepad2,
  Sword
} from 'lucide-react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'lg', 
  className = '',
  icon: Icon
}: any) => {
  const variants = {
    primary: 'bg-primary text-white font-extrabold hover:scale-105 active:scale-95 glow-btn shadow-[0_0_20px_rgba(57,255,20,0.3)] whitespace-nowrap',
    secondary: 'bg-white text-black font-extrabold hover:scale-105 active:scale-95 whitespace-nowrap',
    outline: 'border border-white/20 text-white font-bold bg-white/5 hover:bg-white/10 backdrop-blur-md whitespace-nowrap',
    ghost: 'text-white hover:text-primary transition-colors font-bold whitespace-nowrap'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base md:text-xl w-full md:w-auto min-h-[56px]',
    xl: 'px-10 py-5 text-lg md:text-2xl w-full md:w-auto min-h-[64px]'
  };

  return (
    <button 
      id={`btn-${children.toString().toLowerCase().replace(/\s+/g, '-')}`}
      onClick={onClick}
      className={`rounded-full flex items-center justify-center gap-2 uppercase tracking-tighter transition-all duration-300 active:scale-95 ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
    </button>
  );
};

const FadeUp = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 1.11, 0.81, 0.99] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Badge = ({ children, className = "" }: any) => (
  <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/60 ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className="font-bold text-lg md:text-xl text-white/80 group-hover:text-white transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 text-base md:text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhatsAppMessage = ({ name, time, message, alignment = 'left' }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: alignment === 'left' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col gap-1 ${alignment === 'right' ? 'items-end' : 'items-start'}`}
  >
    <div className={`p-4 rounded-2xl shadow-xl border border-white/5 max-w-[90%] md:max-w-md ${alignment === 'left' ? 'bg-[#1f2c33] rounded-tl-none' : 'bg-[#005c4b] rounded-tr-none'}`}>
      <div className="flex justify-between items-center gap-4 mb-1">
        <span className="text-primary text-[10px] font-black uppercase tracking-widest">{name}</span>
        <span className="text-[10px] text-white/30">{time}</span>
      </div>
      <p className="text-white text-sm md:text-base font-medium leading-tight">{message}</p>
      <div className="flex justify-end mt-1">
        <div className="flex -space-x-1">
          <Check className="w-3 h-3 text-[#53bdeb]" />
          <Check className="w-3 h-3 text-[#53bdeb]" />
        </div>
      </div>
    </div>
  </motion.div>
);

const StadiumBG = () => null;

const CategoryCard = ({ label, sub, img, icon: Icon, delay }: any) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <FadeUp delay={delay}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer w-full"
      >
        {/* Dynamic Glow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex items-center gap-4 md:gap-6 transition-all duration-500 shadow-2xl border border-transparent hover:border-primary/40 h-20 md:h-28 overflow-hidden">
          {/* Left: Brand Logo */}
          <div className="w-14 md:w-20 h-full flex items-center justify-center flex-shrink-0 relative">
            {img && !imageError ? (
              <>
                {imageLoading && <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse" />}
                <img 
                  src={img} 
                  alt={label} 
                  className={`max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                />
              </>
            ) : Icon ? (
               <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
            ) : (
              <div className="font-black text-black/20 text-xs text-center leading-none uppercase tracking-tighter">
                {label}
              </div>
            )}
          </div>
          
          {/* Center: Content Info */}
          <div className="flex-1 text-left min-w-0 pr-2">
            <h3 className="font-black text-base md:text-3xl uppercase tracking-tighter italic text-black leading-none truncate mb-1">
              {label}
            </h3>
            <p className="text-[7px] md:text-sm font-bold uppercase tracking-[0.05em] text-black/40 truncate">
              {sub}
            </p>
          </div>

          {/* Right: Navigation Indicator */}
          <div className="flex-shrink-0 pr-2 md:pr-4">
              <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-black/10 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
};

const BrandLogo = ({ brand }: { brand: { name: string, url: string }, key?: string }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex items-center min-w-[120px] md:min-w-0 justify-center h-12 relative px-4">
      {!error && (
        <img 
          src={brand.url} 
          alt={brand.name} 
          className={`h-6 md:h-10 lg:h-12 w-auto object-contain transition-all duration-500 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer ${loading ? 'opacity-0 w-0' : 'opacity-50'}`}
          referrerPolicy="no-referrer"
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
        />
      )}
      {(error || loading) && (
        <span className={`text-white font-black text-sm md:text-xl italic uppercase tracking-tighter whitespace-nowrap px-4 py-2 bg-white/5 rounded-full border border-white/5 ${loading ? 'absolute opacity-0 pointer-events-none' : 'relative opacity-100'}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-dark-bg min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-black font-sans">
      {/* Header */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 w-full z-[100] bg-dark-bg/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 transition-all"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-display text-2xl font-black italic cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            FUT<span className="text-primary"> PRÁTICO</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            {['Início', 'Benefícios', 'Planos', 'Dúvidas'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item === 'Dúvidas' ? 'faq' : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-white/60 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
              >
                {item}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollTo('planos')}>LIBERAR ACESSO</Button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-dark-bg flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-black italic">FUT<span className="text-primary"> PRÁTICO</span></div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {['Início', 'Benefícios', 'Planos', 'Depoimentos', 'FAQ'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-3xl font-black italic uppercase tracking-tighter py-4 border-b border-white/5"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="mt-auto">
              <Button size="xl" className="w-full" onClick={() => scrollTo('planos')}>ASSINAR AGORA</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 pt-32 pb-20 overflow-hidden bg-hero-stadium">
        <div className="max-w-5xl w-full text-center space-y-12 z-10 px-4">
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center mb-6">
              <Badge className="bg-red-500/10 border-red-500/30 text-red-500 !opacity-100 flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                AO VIVO AGORA
              </Badge>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display text-[11vw] md:text-8xl font-black leading-[0.9] tracking-tighter italic uppercase text-white px-2 mb-2">
              <span className="text-primary italic">+1500 Acessos</span> <br />
              <span className="premium-gradient-text">liberados agora</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15} className="max-w-4xl mx-auto w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative vsl-container rounded-[2.5rem] overflow-hidden bg-black/60 backdrop-blur-md border border-white/10 p-2 md:p-3 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
                 <div className="w-full h-full bg-neutral-900 rounded-[2rem] overflow-hidden relative group cursor-pointer aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1518091044124-0101b02e54f7?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors">
                       <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 md:w-28 md:h-28 bg-primary flex items-center justify-center rounded-full shadow-[0_10px_50px_rgba(57,255,20,0.5)] border-4 border-white/20"
                       >
                          <Play className="w-10 h-10 md:w-14 md:h-14 text-white fill-white ml-2" />
                       </motion.div>
                    </div>
                 </div>
              </div>
              <p className="mt-8 text-white/40 font-black uppercase tracking-[0.4em] text-[10px] md:text-sm italic">ASSISTA AO VÍDEO E VEJA COMO FUNCIONA O ACESSO</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-10 w-full">
            <p className="text-gray-300 text-sm md:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto px-6">
              Assista Futebol, UFC, Basquete, F1 e muito mais de forma organizada. <br className="hidden md:block" /> Disponível quando você quiser, em qualquer dispositivo.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4 px-4 w-full max-w-md md:max-w-none mx-auto">
               <Button size="xl" icon={ArrowRight} onClick={() => scrollTo('planos')} className="shadow-[0_0_60px_rgba(57,255,20,0.4)] px-12 order-1 md:order-none">LIBERAR ACESSO AGORA</Button>
               <div className="flex flex-row md:flex-col items-center md:items-start justify-center gap-4 md:gap-2 text-left w-full md:w-auto order-2 md:order-none opacity-60">
                 <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/80 italic">
                   <ShieldCheck className="w-3 h-3 md:w-5 md:h-5 text-primary" /> ACESSO IMEDIATO
                 </div>
                 <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/80 italic">
                   <Zap className="w-3 h-3 md:w-5 md:h-5 text-primary" /> SEM MENSALIDADES
                 </div>
               </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Broadcasting Partners Carousel */}
      <div className="py-8 md:py-16 bg-black/40 border-y border-white/5 relative overflow-hidden backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 md:gap-32 px-10">
          {[
            { name: 'Globo', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rede_Globo_logo.svg/300px-Rede_Globo_logo.svg.png&w=400&output=png' },
            { name: 'SBT', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SBT_Logo.svg/300px-SBT_Logo.svg.png&w=400&output=png' },
            { name: 'Globoplay', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Globoplay_logo.svg/300px-Globoplay_logo.svg.png&w=400&output=png' },
            { name: 'Disney+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/300px-Disney%2B_logo.svg.png&w=400&output=png' },
            { name: 'Premiere', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Premiere_logo.png/400px-Premiere_logo.png&w=400' },
            { name: 'Cazé TV', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Caz%C3%A9TV-Horizontal-Logo.png/600px-Caz%C3%A9TV-Horizontal-Logo.png&w=600' },
            { name: 'Band Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/Bandsports_logo.png/400px-Bandsports_logo.png&w=400' },
            { name: 'Combate', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Combate_logo.png/400px-Combate_logo.png&w=400' },
            { name: 'Netflix', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png&w=400&output=png' },
            { name: 'Paramount+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/400px-Paramount_Plus.svg.png&w=400&output=png' },
            { name: 'Max', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/400px-Max_logo.svg.png&w=400&output=png' },
            { name: 'ESPN', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/400px-ESPN_wordmark.svg.png&w=400&output=png' },
            { name: 'TNT Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/TNT_Sports_logo.png/400px-TNT_Sports_logo.png&w=400' },
          ].map((brand, i) => (
            <BrandLogo key={`brand-1-${i}`} brand={brand} />
          ))}
          {/* Repeat for Infinite Loop */}
          {[
            { name: 'Globo', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rede_Globo_logo.svg/300px-Rede_Globo_logo.svg.png&w=400&output=png' },
            { name: 'SBT', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SBT_Logo.svg/300px-SBT_Logo.svg.png&w=400&output=png' },
            { name: 'Globoplay', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Globoplay_logo.svg/300px-Globoplay_logo.svg.png&w=400&output=png' },
            { name: 'Disney+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/300px-Disney%2B_logo.svg.png&w=400&output=png' },
            { name: 'Premiere', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Premiere_logo.png/400px-Premiere_logo.png&w=400' },
            { name: 'Cazé TV', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Caz%C3%A9TV-Horizontal-Logo.png/600px-Caz%C3%A9TV-Horizontal-Logo.png&w=600' },
            { name: 'Band Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/1/10/Bandsports_logo.png/400px-Bandsports_logo.png&w=400' },
            { name: 'Combate', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/d/d4/Combate_logo.png/400px-Combate_logo.png&w=400' },
            { name: 'Netflix', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png&w=400&output=png' },
            { name: 'Paramount+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/400px-Paramount_Plus.svg.png&w=400&output=png' },
            { name: 'Max', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/400px-Max_logo.svg.png&w=400&output=png' },
            { name: 'ESPN', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/400px-ESPN_wordmark.svg.png&w=400&output=png' },
            { name: 'TNT Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/3/3a/TNT_Sports_logo.png/400px-TNT_Sports_logo.png&w=400' },
          ].map((brand, i) => (
            <BrandLogo key={`brand-2-${i}`} brand={brand} />
          ))}
        </div>
      </div>
      <section className="py-32 px-5 md:px-10 overflow-hidden relative bg-streaming-stadium">
        <div className="max-w-6xl mx-auto space-y-20">
          <FadeUp className="text-center relative">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <Badge className="bg-primary/10 border-primary/40 text-primary shadow-[0_0_20px_rgba(57,255,20,0.2)] font-black">
                👑 CONTEÚDO PREMIUM EXCLUSIVO
              </Badge>
              <div className="flex flex-col items-center justify-center w-full px-4">
                <h2 className="font-display text-[12vw] md:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] text-white">
                  <span className="text-primary italic">ASSISTA</span> O QUE QUISER
                </h2>
              </div>
            <p className="text-white/60 font-medium tracking-tight text-sm md:text-lg">
              Tudo o que você gosta em um só lugar. <span className="text-primary italic underline underline-offset-4">Acesso simplificado.</span>
            </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            {[
              { label: 'Brasileirão', sub: 'Série A & B 2026', img: 'https://i.ibb.co/XfzRGJs8/Brasileir-o.png' },
              { label: 'Champions', sub: 'UEFA Champions League', img: 'https://i.ibb.co/d04PMxmy/UEFA-CHAMPIONS-LEAGUE.png' },
              { label: 'Libertadores', sub: 'Conmebol Libertadores', img: 'https://i.ibb.co/sJkWbTJj/LIBERTADORES.png' },
              { label: 'Premier League', sub: 'English Premier League', img: 'https://i.ibb.co/x8Hy3SKx/PREMIER-LEAGUE.png' },
              { label: 'La Liga', sub: 'Spanish Football', img: 'https://i.ibb.co/ZR98YpXR/LALIGA.png' },
              { label: 'Serie A', sub: 'Lega Serie A TIM', img: 'https://i.ibb.co/4ZyFck90/SERIA-A-ITALIANA.png' },
              { label: 'NBA', sub: 'Todo o Jogo Ao Vivo', img: 'https://i.ibb.co/prNvkwKv/NBA.png' },
              { label: 'UFC', sub: 'Todas as Lutas de Elite', img: 'https://i.ibb.co/LHwJKJX/UFC.png' },
              { label: 'Lançamentos', sub: 'Filmes 4K Recentes', icon: Clapperboard },
              { label: 'Temporadas', sub: 'Séries Completas HD', icon: Calendar },
            ].map((item, i) => (
              <CategoryCard key={i} {...item} delay={i * 0.05} />
            ))}
          </div>

          {/* Novos Conteúdos Banner */}
          <FadeUp delay={0.2} className="max-w-5xl mx-auto pt-10">
             <div className="glass-card border-primary/20 bg-primary/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-3xl flex items-center justify-center flex-shrink-0 border-4 border-white/10 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_40px_rgba(57,255,20,0.4)]">
                  <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                   <h4 className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">Atualização em Tempo Real</h4>
                   <p className="font-black text-2xl md:text-4xl italic uppercase tracking-tighter leading-none text-white">Novos jogos, filmes e séries todos os dias.</p>
                   <p className="text-white/50 text-sm md:text-lg font-bold">Conteúdo 100% organizado e disponível 24h.</p>
                </div>
                <Button size="lg" className="md:w-auto w-full" onClick={() => scrollTo('planos')}>LIBERAR TUDO</Button>
             </div>
          </FadeUp>
        </div>
      </section>

      {/* TUDO ORGANIZADO */}
      <section className="py-32 px-5 md:px-10 relative bg-tech-arena">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeUp>
              <Badge className="mb-6 border-white/20">PRATICIDADE TOTAL</Badge>
              <h2 className="font-display text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-white mb-6">
                TUDO ORGANIZADO EM <span className="text-primary italic">UM SÓ LUGAR</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-xl font-medium tracking-tight max-w-2xl mx-auto">
                Sem grupos bagunçados. Sem listas confusas. Sem perder tempo procurando links.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Escolha o conteúdo', desc: 'Navegue por uma biblioteca organizada e intuitiva.', step: '01' },
              { title: 'Clique para acessar', desc: 'Um clique e você já está assistindo o que escolheu.', step: '02' },
              { title: 'Assista quando quiser', desc: 'Estabilidade garantida em qualquer plataforma.', step: '03' }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/30 transition-all">
                  <span className="absolute -right-4 -top-4 text-9xl font-black italic text-white/[0.03] group-hover:text-primary/5 transition-colors">{item.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-black uppercase italic text-white mb-4 tracking-tighter">{item.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE TODO MUNDO ESTÁ MIGRANDO */}
      <section id="beneficios" className="py-32 px-5 md:px-10 relative bg-future-performance">
        <div className="max-w-7xl mx-auto text-center mb-24 px-4 text-center">
          <FadeUp>
            <Badge className="mb-6 border-white/20">POR QUE NOS ESCOLHER</Badge>
            <h2 className="font-display text-4xl md:text-[10rem] font-black italic tracking-tighter mb-8 leading-[1] md:leading-none uppercase text-white">
              O <span className="text-primary italic">FUTURO</span> AGORA
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
              Descubra por que milhares de pessoas escolheram organizar <br /> seu entretenimento em uma plataforma única e estável.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {[
            { title: 'ESTABILIDADE', desc: 'Transmissão otimizada que se adapta à sua conexão.' },
            { title: 'QUALIDADE HD', desc: 'Sua programação favorita com imagem nítida e fluida.' },
            { title: 'SEM ASSINATURA', desc: 'Liberdade absoluta. Use quando quiser e para sempre.' },
            { title: 'SUPORTE VIP', desc: 'Equipe especializada disponível para auxiliar sua configuração.' },
            { title: 'VARIEDADE', desc: 'Experiência completa com conteúdos nacionais e internacionais.' },
            { title: 'PAINEL PRÓPRIO', desc: 'Layout intuitivo. Navegue como se estivesse na Netflix.' },
            { title: 'GLOBAL', desc: 'Acesse conteúdos internacionais sem qualquer complicação.' },
            { title: 'ACESSO IMEDIATO', desc: 'Login simplificado. Configure e assista em poucos segundos.' },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.05} className="bg-white/5 p-12 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all group h-full hover:bg-primary/5">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-6 leading-none text-white">{item.title}</h3>
              <p className="text-white/40 text-sm md:text-base font-bold leading-tight uppercase tracking-tighter">{item.desc}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PRINTS REAIS */}
      <section id="depoimentos" className="py-32 px-5 md:px-10 relative overflow-hidden bg-streaming-stadium">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-24 px-4">
             <Badge className="mb-6 text-primary border-primary/20">O QUE NOSSOS USUÁRIOS DIZEM</Badge>
            <h2 className="font-display text-5xl md:text-[10rem] font-black italic tracking-tighter mb-8 leading-[0.9] md:leading-none uppercase text-white px-4">
              EXPERIÊNCIA <br className="md:hidden" /> <span className="text-primary italic">REAL</span>
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-lg italic">Resultados de quem já utiliza a plataforma no dia a dia.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="space-y-6 md:space-y-10">
              <WhatsAppMessage name="Ricardo Silva" time="15:42" message="Gente, liberei o acesso agora e já to assistindo o jogo do Mengão! Qualidade surreal." />
              <WhatsAppMessage name="Suporte Fut Prático" time="15:45" message="Boa Ricardo! Divirta-se com seu acesso exclusivo ⚽🚀" alignment="right" />
              <WhatsAppMessage name="Felipe G." time="20:11" message="Peguei o plano Premium pra tv box aqui de casa, meus filhos tão amando a biblioteca de desenhos." />
            </div>
            <div className="space-y-6 md:space-y-10 md:pt-20">
              <WhatsAppMessage name="Juliana Costa" time="19:05" message="Melhor que assinar 3 streaming diferente. Agora tenho tudo num lugar só e paguei baratinho." />
              <WhatsAppMessage name="Marcos Oliveira" time="22:30" message="Champions League rodando liso aqui no Fire Stick. Zero delay!" />
            </div>
            <div className="space-y-6 md:space-y-10 lg:pt-40">
              <WhatsAppMessage name="Gustavo P." time="14:50" message="Impressionado com o suporte de vcs. Responderam rápido e configurou minha smart tv num minuto." />
              <WhatsAppMessage name="Suporte Fut Prático" time="14:52" message="Sempre à disposição, Gustavo! Precisando é só chamar." alignment="right" />
              <WhatsAppMessage name="Amanda S." time="18:15" message="Nunca mais pago operadora de tv kkkk esse aqui é 10x melhor." />
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section className="py-32 px-5 md:px-10 bg-future-performance relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] rounded-full -z-10 opacity-30" />
        <div className="max-w-7xl mx-auto text-center mb-24 px-4">
          <FadeUp>
            <Badge className="mb-6">CUSTO VS BENEFÍCIO</Badge>
            <h2 className="font-display text-4xl md:text-[10rem] font-black italic tracking-tighter leading-none mb-4 md:mb-8 uppercase text-white">
              VALOR <span className="text-primary italic">JUSTO</span>
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-lg italic">Compare a praticidade e veja a diferença no final do mês.</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {[
            { 
              title: 'TV a Cabo Tradicional', 
              price: '250', 
              period: 'MENSAL', 
              icon: XCircle, 
              desc: 'Taxas, multas e conteúdos limitados que você paga caro todo mês.',
              color: 'border-white/5 bg-white/[0.02]'
            },
            { 
              title: 'Streaming Fracionado', 
              price: '130', 
              period: 'MENSAL', 
              icon: XCircle, 
              desc: 'Necessidade de múltiplas assinaturas para ter o conteúdo completo.',
              color: 'border-white/5 bg-white/[0.02]'
            },
            { 
              title: 'FUT PRÁTICO ELITE', 
              price: '27', 
              period: 'TAXA ÚNICA', 
              icon: CheckCircle2, 
              desc: 'Acesso vitalício, tudo o que você gosta em um só lugar. Zero mensalidade.',
              color: 'border-primary/40 bg-primary/10 ring-4 ring-primary shadow-2xl scale-105 z-10'
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1} className={`p-12 md:p-16 rounded-[4rem] border flex flex-col justify-between transition-all duration-500 group ${item.color}`}>
              <div className="space-y-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white leading-none">{item.title}</h3>
                  {item.title.includes('FUT PRÁTICO') && <Badge className="!bg-primary !text-black !opacity-100 !border-none !text-[9px]">SOLUÇÃO DEFINITIVA</Badge>}
                </div>
                <div className="space-y-1">
                  <div className={`text-[12vw] md:text-9xl font-black italic flex items-baseline gap-1 md:gap-2 ${item.period === 'MENSAL' ? 'opacity-20 line-through' : 'text-primary'}`}>
                    <span className="text-xl md:text-4xl font-bold italic">R$</span>{item.price}
                  </div>
                  <p className="text-[8px] md:text-[11px] font-black uppercase tracking-widest opacity-40 italic">{item.period === 'MENSAL' ? 'RECORRENTE' : 'PAGUE UMA VEZ'}</p>
                </div>
                <p className="text-xs md:text-sm font-black italic tracking-tight leading-tight text-white/40 uppercase group-hover:text-white/60 transition-colors">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-32 px-5 md:px-10 relative bg-pricing-cinematic">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-24 px-4">
            <Badge className="mb-6 text-primary border-primary/20 font-black">ACESSO IMEDIATO</Badge>
            <h2 className="font-display text-5xl md:text-[10rem] font-black italic tracking-tighter mb-8 leading-none uppercase text-white">
              ESCOLHA O SEU <span className="text-primary italic">PLANO</span>
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-lg italic">Selecione o acesso ideal para o seu perfil e comece a assistir agora.</p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
            {/* ACESSO ESSENCIAL */}
            <FadeUp className="glass-card group p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] border-white/5 flex flex-col justify-between relative overflow-hidden transition-all hover:bg-white/[0.03]">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-12">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-white/80 group-hover:text-white transition-colors leading-none">Acesso <br /> Essencial</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-10 md:mb-16 px-2">
                   <span className="text-2xl md:text-4xl font-bold opacity-30">R$</span>
                   <span className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter italic text-white/20">10</span>
                   <span className="text-white/10 font-bold uppercase text-[8px] md:text-xs tracking-widest leading-none">/único</span>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {[
                    'Acesso para 1 Smartphone',
                    'Principais Ligas Nacionais',
                    'Programação Variada',
                    'Suporte via Telegram',
                    'Liberação em 15-20min',
                    'Sem cobranças mensais'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-5 text-white/30 text-xs md:text-sm font-black uppercase tracking-tighter group-hover:text-white/60 transition-colors italic">
                       <Check className="w-5 h-5 text-white/10 group-hover:text-white/30" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="xl" className="w-full !rounded-3xl" onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/I23HQvG5UNZdAiumbSgN'}>COMEÇAR AGORA</Button>
            </FadeUp>

            {/* ACESSO TOTAL */}
            <FadeUp delay={0.1} className="glass-card p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] border-primary/40 bg-primary/10 ring-8 ring-primary/5 shadow-[0_0_120px_rgba(57,255,20,0.2)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-10 right-[-65px] rotate-45 bg-primary text-black font-black text-[10px] md:text-xs px-24 py-3 uppercase tracking-tighter z-10 shadow-2xl">
                O MAIS VENDIDO 🔥
              </div>
              
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Acesso <br /> Total</h3>
                  <Zap className="w-10 h-10 md:w-16 md:h-16 text-primary fill-primary animate-pulse" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-8 md:mb-16">
                   <div className="flex items-center gap-2">
                      <span className="text-3xl md:text-5xl font-extrabold text-primary leading-none">R$</span>
                      <span className="text-8xl md:text-[13rem] lg:text-[15rem] font-black leading-none text-primary italic tracking-tighter drop-shadow-2xl">27</span>
                   </div>
                   <div className="flex flex-col items-center lg:items-start gap-2 h-auto text-center lg:text-left">
                      <div className="flex flex-col items-center lg:items-start">
                        <span className="text-primary font-black uppercase text-xs md:text-base tracking-[0.2em] leading-none whitespace-nowrap">ACESSO VITALÍCIO</span>
                        <span className="text-white/40 text-[8px] md:text-xs uppercase tracking-widest mt-1">SEM MENSALIDADES</span>
                      </div>
                      <div className="bg-primary px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.4)] border border-white/20">
                        <span className="text-black font-black uppercase text-[8px] md:text-sm tracking-widest leading-none block whitespace-nowrap">PAGAMENTO ÚNICO</span>
                      </div>
                   </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {[
                    'Multi-Dispositivo (TV + Celular)',
                    '+1500 Transmissões e Acessos',
                    'Lutas, Basquete e Ligas Mundiais',
                    'Biblioteca de Filmes e Séries',
                    'Delay Mínimo (Otimizado)',
                    'Suporte Prioritário WhatsApp',
                    'Acesso Imediato!'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 text-white text-sm md:text-xl font-black uppercase tracking-tighter italic leading-tight">
                       <Check className="w-7 h-7 text-primary stroke-[3]" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <Button size="xl" className="w-full !rounded-3xl shadow-[0_20px_60px_rgba(57,255,20,0.5)] !bg-primary text-black hover:scale-105 active:scale-95 transition-all text-2xl md:text-3xl py-8" onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/u1dc5bOd6hMB39ySfAe8'}>LIBERAR AGORA</Button>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
             <div className="text-4xl font-black italic">PIX</div>
             <CreditCard className="w-12 h-12" />
             <div className="font-black border-4 border-white px-4 py-1 rounded text-3xl tracking-tighter italic">MASTER</div>
             <div className="font-black border-4 border-white px-4 py-1 rounded text-3xl tracking-tighter italic">VISA</div>
             <ShieldCheck className="w-12 h-12" />
          </FadeUp>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-dark-bg relative">
        <div className="max-w-6xl mx-auto glass-card rounded-[2.5rem] md:rounded-[6rem] p-8 md:p-32 text-center space-y-10 md:space-y-16 relative overflow-hidden flex flex-col items-center group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-primary/5 blur-[150px] -z-10 rounded-full group-hover:bg-primary/10 transition-colors" />
          <FadeUp>
            <div className="w-20 h-20 md:w-48 md:h-48 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12 border-[6px] md:border-[8px] border-white/5 shadow-[0_0_40px_rgba(57,255,20,0.3)]">
               <ShieldCheck className="w-10 h-10 md:w-24 md:h-24 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-[10rem] font-black italic tracking-tighter mb-6 md:mb-10 leading-[1] md:leading-[0.8] uppercase text-white">7 DIAS DE <br className="md:hidden" /> <span className="text-primary italic">GARANTIA</span></h2>
            <p className="text-gray-400 text-xs md:text-3xl font-black italic uppercase tracking-tighter max-w-3xl mx-auto leading-tight md:px-0">
              TESTE SEM RISCO. SE NÃO GOSTAR DA PLATAFORMA, DEVOLVEMOS SEU DINHEIRO NA HORA. <br className="hidden md:block" /> <span className="text-white">SEM BUROCRACIA. SEM PERGUNTAS.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32 px-6 bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-24 px-4">
            <h2 className="font-display text-4xl md:text-7xl font-black italic tracking-tighter mb-4">
              DÚVIDAS <span className="text-primary italic">FREQUENTES</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[8px] md:text-sm">Respostas para as perguntas mais comuns.</p>
          </FadeUp>

          <FadeUp className="bg-white/[0.02] border border-white/5 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem]">
            <FAQItem 
              question="Tem jogo do meu time?" 
              answer="Sim. A Fut Prático disponibiliza as transmissões de todos os clubes brasileiros das séries A, B e C. Se houver transmissão oficial, você terá acesso imediato."
            />
            <FAQItem 
              question="Funciona no iPhone e Android?" 
              answer="Sim! Nossa plataforma é totalmente responsiva e possui aplicativos dedicados e leves para ambos os sistemas operacionais."
            />
            <FAQItem 
              question="Posso assistir na Smart TV?" 
              answer="O acesso premium funciona perfeitamente em qualquer Smart TV (Samsung, LG, Sony, etc), seja pelo aplicativo nativo ou por Android TV, Fire Stick e TV Box."
            />
            <FAQItem 
              question="Como o acesso é liberado?" 
              answer="No momento em que seu pagamento é confirmado (PIX é instantâneo), nossa central envia seus dados de acesso automaticamente para o seu WhatsApp e para o seu E-mail."
            />
            <FAQItem 
              question="Tem realmente filmes e séries?" 
              answer="Sim! Além de todo o conteúdo de esportes ao vivo, você ganha acesso a uma biblioteca gigantesca com os últimos lançamentos do cinema e as séries mais famosas de todos os streamings."
            />
            <FAQItem 
              question="O pagamento é parcelado?" 
              answer="O valor é uma taxa única de ativação vitalícia. Você paga uma única vez e garante seu acesso para sempre, sem cobranças mensais ou surpresas no cartão."
            />
            <FAQItem 
              question="Como funciona o suporte?" 
              answer="Temos uma equipe de suporte real no WhatsApp, disponível em todos os horários de jogos importantes para garantir que sua experiência seja perfeita."
            />
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-primary text-black relative overflow-hidden">
        <motion.div 
          animate={{ x: ['-20%', '20%'] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0.3,_transparent_1)] opacity-40 -z-0"
        />
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 z-10 relative">
          <FadeUp>
            <h2 className="font-display text-5xl md:text-[10rem] font-black italic tracking-tighter leading-none mb-6 uppercase">
              COMECE <span className="text-black/30">AGORA</span>
            </h2>
            <p className="text-black/80 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-sm md:text-3xl drop-shadow-sm">Acesso enviado em segundos.</p>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <Button 
              size="xl" 
              className="!bg-black !text-primary !border-none px-12 md:px-24 py-8 md:py-12 text-lg md:text-5xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] !rounded-[2rem] md:rounded-[3rem] hover:scale-110 active:scale-95"
              onClick={() => scrollTo('planos')}
            >
              LIBERAR MEU ACESSO
            </Button>
            <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[8px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/50">
               <div className="flex items-center gap-2">🟢 Pessoas acessando agora</div>
               <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block" />
               <div className="flex items-center gap-2">🔥 OFERTA POR TEMPO LIMITADO</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-32 px-6 md:px-10 bg-dark-bg border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          <div className="space-y-6 md:space-y-10 max-w-sm text-center md:text-left mx-auto md:mx-0">
            <div className="text-3xl md:text-5xl font-black italic tracking-tighter">FUT<span className="text-primary italic"> PRÁTICO</span></div>
            <p className="text-white/30 font-medium text-[10px] md:text-sm tracking-tight leading-relaxed">
              Entretenimento digital organizado para quem busca praticidade e qualidade absoluta.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16 md:gap-32 mx-auto md:mx-0">
            <div className="space-y-10">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary italic">Navegação</h4>
              <nav className="flex flex-col gap-6 text-[10px] md:text-sm font-black uppercase tracking-widest text-white/30 italic">
                 {['Início', 'Benefícios', 'Planos', 'FAQ'].map(item => (
                   <button key={item} onClick={() => scrollTo(item === 'FAQ' ? 'faq' : item.toLowerCase())} className="text-left hover:text-white transition-colors">{item}</button>
                 ))}
              </nav>
            </div>

            <div className="space-y-10">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/20 italic">Legal</h4>
              <nav className="flex flex-col gap-6 text-[10px] md:text-sm font-black uppercase tracking-widest text-white/20 italic">
                 <a href="#" className="hover:text-white transition-colors">POLÍTICA</a>
                 <a href="#" className="hover:text-white transition-colors">TERMOS</a>
                 <a href="#" className="hover:text-white transition-colors">LIMITES</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] md:text-xs font-medium text-center">
           <p>© 2026 Fut Prático. Todos os direitos reservados.</p>
           <div className="flex flex-wrap items-center justify-center gap-8">
              <span className="flex items-center gap-2">🛡️ SSL Seguro</span>
              <span className="flex items-center gap-2">💳 Compra Protegida</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
