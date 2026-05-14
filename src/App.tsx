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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
                  loading="lazy"
                  decoding="async"
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
          loading="lazy"
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
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[1.1] tracking-tighter italic uppercase text-white px-2 mb-6 py-4 overflow-visible">
              Receba acesso imediato ao <span className="text-primary italic">painel</span> com <span className="premium-gradient-text">+1500 conteúdos</span> organizados
            </h1>
          </FadeUp>

          <FadeUp delay={0.15} className="max-w-4xl mx-auto px-4">
            <p className="text-gray-300 text-base md:text-3xl font-medium tracking-tight leading-relaxed mb-8">
              Tudo organizado em um único painel premium. Futebol ao vivo, UFC, NBA, filmes e séries disponíveis instantaneamente em qualquer dispositivo.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
              {[
                'Liberação automática após pagamento',
                'Sem mensalidades',
                'Compatível com qualquer dispositivo',
                'Acesso simplificado'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[8px] md:text-sm font-black uppercase tracking-widest text-white/80 italic">
                  <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-primary" /> {text}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-12 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4 px-4 w-full max-w-md md:max-w-none mx-auto">
               <Button size="xl" icon={ArrowRight} onClick={() => scrollTo('planos')} className="shadow-[0_0_60px_rgba(57,255,20,0.4)] px-12 order-1 md:order-none">LIBERAR ACESSO IMEDIATO</Button>
               <div className="flex items-center gap-4 opacity-40">
                  <div className="flex items-center gap-2 text-[8px] md:text-xs font-black uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-primary" /> PAGAMENTO SEGURO
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="flex items-center gap-2 text-[8px] md:text-xs font-black uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-primary" /> LOGIN NA HORA
                  </div>
               </div>
            </div>

            {/* Mockup Imediato no Hero */}
            <div className="relative max-w-5xl mx-auto mt-20">
               <div className="absolute -inset-1 bg-primary/20 blur-3xl opacity-30"></div>
               <div className="relative group perspective-1000">
                  <motion.div 
                    whileHover={{ rotateX: 2, rotateY: -2 }}
                    className="relative bg-[#141414] rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] aspect-[16/10] md:aspect-video flex flex-col"
                  >
                     <div className="h-10 md:h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-black/40">
                        <div className="flex items-center gap-2 font-display text-base md:text-xl font-black italic">
                          FUT<span className="text-primary"> PRÁTICO</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-24 md:w-40 h-2 bg-white/5 rounded-full" />
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary shadow-[0_0_15px_rgba(57,255,20,0.5)]" />
                        </div>
                     </div>
                     <div className="flex-1 p-6 md:p-10 space-y-8 overflow-hidden">
                        <div className="flex gap-3 md:gap-6 overflow-x-auto pb-4">
                           {['Futebol Ao Vivo', 'UFC', 'Filmes', 'Séries'].map((cat, i) => (
                             <div key={i} className={`px-4 md:px-6 py-2 rounded-full border text-[8px] md:text-xs font-black uppercase tracking-widest ${i === 0 ? 'bg-primary text-black border-primary' : 'bg-white/5 text-white/40 border-white/10'}`}>
                               {cat}
                             </div>
                           ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                           {[1, 2, 3].map(i => (
                             <div key={i} className="aspect-video rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden group/item">
                                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover/item:opacity-100 transition-opacity">
                                   <PlayCircle className="w-10 h-10 text-primary" />
                                </div>
                                <div className="absolute bottom-3 left-3 right-3">
                                   <div className="w-1/2 h-1.5 bg-primary/20 rounded-full mb-1" />
                                   <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>
               <p className="mt-8 text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs italic animate-pulse">▲ VISUALIZAÇÃO REAL DO PAINEL PREMIUM</p>
            </div>

            {/* Micro Bloco Como Funciona */}
            <div className="max-w-4xl mx-auto pt-8 border-t border-white/5">
              <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 italic flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 fill-primary" /> Como funciona:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
                {[
                  { icon: Check, text: 'Escolha o plano' },
                  { icon: Zap, text: 'Receba seu acesso imediatamente' },
                  { icon: Smartphone, text: 'Acesse pelo celular, TV ou PC' },
                  { icon: PlayCircle, text: 'Comece a assistir em minutos' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-white/[0.03] border border-white/5 group hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <step.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] md:text-xs font-black uppercase tracking-tighter text-white/60 leading-tight">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TÃO SIMPLES QUE QUALQUER PESSOA CONSEGUE USAR */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-dark-bg relative">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-24">
            <Badge className="mb-6 border-white/20">PRATICIDADE TOTAL</Badge>
            <h2 className="font-display text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-white mb-6">
              TÃO SIMPLES QUE <span className="text-primary italic">QUALQUER PESSOA</span> CONSEGUE USAR
            </h2>
            <p className="text-white/40 font-medium text-sm md:text-xl max-w-2xl mx-auto">
              Sem configurações chatas. Sem precisar instalar nada complicado. Tudo pronto para o seu entretenimento.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {[
              { step: '01', title: 'Escolha o conteúdo', desc: 'Navegue pelas categorias organizadas e encontre seu jogo ou filme em segundos.' },
              { step: '02', title: 'Clique em acessar', desc: 'Um toque no botão e o sistema carrega instantaneamente para você assistir.' },
              { step: '03', title: 'Assista imediatamente', desc: 'Pronto! Já pode curtir sua programação em 4K sem travamentos.' }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1} className="relative group">
                <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[3.5rem] md:rounded-[4rem] h-full transition-all group-hover:bg-primary/5 group-hover:border-primary/20">
                  <span className="text-9xl font-black italic text-white/[0.02] absolute -top-10 -left-4 group-hover:text-primary/5 transition-colors">{item.step}</span>
                  <div className="relative z-10 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4 leading-none">{item.title}</h3>
                    <p className="text-white/40 font-bold uppercase tracking-tighter text-xs md:text-base">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* Broadcasting Partners Carousel */}
      <div className="py-8 md:py-16 bg-black/40 border-y border-white/5 relative overflow-hidden backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 md:gap-32 px-10 will-change-transform">
          {[
            { name: 'Globo', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rede_Globo_logo.svg/300px-Rede_Globo_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'SBT', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SBT_Logo.svg/300px-SBT_Logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Globoplay', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Globoplay_logo.svg/300px-Globoplay_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Disney+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/300px-Disney%2B_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Premiere', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Premiere_logo.png/400px-Premiere_logo.png&w=300&q=70&output=webp' },
            { name: 'Cazé TV', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Caz%C3%A9TV-Horizontal-Logo.png/600px-Caz%C3%A9TV-Horizontal-Logo.png&w=500&q=70&output=webp' },
            { name: 'Band Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/Bandsports_logo.png/400px-Bandsports_logo.png&w=300&q=70&output=webp' },
            { name: 'Combate', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Combate_logo.png/400px-Combate_logo.png&w=300&q=70&output=webp' },
            { name: 'Netflix', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Paramount+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/400px-Paramount_Plus.svg.png&w=300&q=70&output=webp' },
            { name: 'Max', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/400px-Max_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'ESPN', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/400px-ESPN_wordmark.svg.png&w=300&q=70&output=webp' },
            { name: 'TNT Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/TNT_Sports_logo.png/400px-TNT_Sports_logo.png&w=300&q=70&output=webp' },
          ].map((brand, i) => (
            <BrandLogo key={`brand-1-${i}`} brand={brand} />
          ))}
          {/* Repeat for Infinite Loop */}
          {[
            { name: 'Globo', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rede_Globo_logo.svg/300px-Rede_Globo_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'SBT', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SBT_Logo.svg/300px-SBT_Logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Globoplay', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Globoplay_logo.svg/300px-Globoplay_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Disney+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/300px-Disney%2B_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Premiere', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Premiere_logo.png/400px-Premiere_logo.png&w=300&q=70&output=webp' },
            { name: 'Cazé TV', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Caz%C3%A9TV-Horizontal-Logo.png/600px-Caz%C3%A9TV-Horizontal-Logo.png&w=500&q=70&output=webp' },
            { name: 'Band Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/1/10/Bandsports_logo.png/400px-Bandsports_logo.png&w=300&q=70&output=webp' },
            { name: 'Combate', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/d/d4/Combate_logo.png/400px-Combate_logo.png&w=300&q=70&output=webp' },
            { name: 'Netflix', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'Paramount+', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paramount_Plus.svg/400px-Paramount_Plus.svg.png&w=300&q=70&output=webp' },
            { name: 'Max', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Max_logo.svg/400px-Max_logo.svg.png&w=300&q=70&output=webp' },
            { name: 'ESPN', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/400px-ESPN_wordmark.svg.png&w=300&q=70&output=webp' },
            { name: 'TNT Sports', url: 'https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/pt/3/3a/TNT_Sports_logo.png/400px-TNT_Sports_logo.png&w=300&q=70&output=webp' },
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
                <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] text-white">
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
              { label: 'Brasileirão', sub: 'Série A & B 2026', img: 'https://wsrv.nl/?url=https://i.ibb.co/XfzRGJs8/Brasileir-o.png&w=300&output=webp&q=70' },
              { label: 'Champions', sub: 'UEFA Champions League', img: 'https://wsrv.nl/?url=https://i.ibb.co/d04PMxmy/UEFA-CHAMPIONS-LEAGUE.png&w=300&output=webp&q=70' },
              { label: 'Libertadores', sub: 'Conmebol Libertadores', img: 'https://wsrv.nl/?url=https://i.ibb.co/sJkWbTJj/LIBERTADORES.png&w=300&output=webp&q=70' },
              { label: 'Premier League', sub: 'English Premier League', img: 'https://wsrv.nl/?url=https://i.ibb.co/x8Hy3SKx/PREMIER-LEAGUE.png&w=300&output=webp&q=70' },
              { label: 'La Liga', sub: 'Spanish Football', img: 'https://wsrv.nl/?url=https://i.ibb.co/ZR98YpXR/LALIGA.png&w=300&output=webp&q=70' },
              { label: 'Serie A', sub: 'Lega Serie A TIM', img: 'https://wsrv.nl/?url=https://i.ibb.co/4ZyFck90/SERIA-A-ITALIANA.png&w=300&output=webp&q=70' },
              { label: 'NBA', sub: 'Todo o Jogo Ao Vivo', img: 'https://wsrv.nl/?url=https://i.ibb.co/prNvkwKv/NBA.png&w=300&output=webp&q=70' },
              { label: 'UFC', sub: 'Todas as Lutas de Elite', img: 'https://wsrv.nl/?url=https://i.ibb.co/LHwJKJX/UFC.png&w=300&output=webp&q=70' },
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

      {/* BLOCO DE COMPATIBILIDADE */}
      <section className="py-24 md:py-32 px-5 md:px-10 bg-future-performance border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white mb-6 leading-tight">
              COMPATÍVEL COM PRATICAMENTE <br className="hidden md:block" /> <span className="text-primary italic">QUALQUER DISPOSITIVO</span>
            </h2>
            <p className="text-white/40 font-black uppercase tracking-widest text-[10px] md:text-sm">Assista onde quiser, quando quiser.</p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-8 justify-center">
            {[
              { icon: Smartphone, label: 'iPhone' },
              { icon: Smartphone, label: 'Android' },
              { icon: Tv, label: 'Smart TV' },
              { icon: Zap, label: 'Fire Stick' },
              { icon: Laptop, label: 'Notebook' },
              { icon: Monitor, label: 'TV Box' },
              { icon: Tablet, label: 'Tablet' },
            ].map((device, i) => (
              <FadeUp key={i} delay={i * 0.05} className="flex flex-col items-center gap-4 md:gap-6 group">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-[2rem] flex items-center justify-center text-white/40 border border-white/5 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
                  <device.icon className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">{device.label}</span>
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter mb-8 leading-[1] md:leading-none uppercase text-white">
              O <span className="text-primary italic">FUTURO</span> AGORA
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
              Descubra por que milhares de pessoas escolheram organizar <br /> seu entretenimento em uma plataforma única e estável.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {[
            { title: 'ESTABILIDADE', desc: 'Transmissão estável e otimizada que se adapta à sua conexão.' },
            { title: 'IMAGEM FLUIDA', desc: 'Sua programação favorita com imagem nítida e sem travamentos.' },
            { title: 'SEM ASSINATURA', desc: 'Experiência otimizada. Use quando quiser e para sempre.' },
            { title: 'CARREGAMENTO RÁPIDO', desc: 'Tecnologia de ponta para você não perder nenhum segundo.' },
            { title: 'VARIEDADE', desc: 'Experiência completa com conteúdos nacionais e internacionais.' },
            { title: 'ORGANIZAÇÃO', desc: 'Layout intuitivo. Navegue como se estivesse em um app premium.' },
            { title: 'ESTREIAS', desc: 'Acesse os últimos lançamentos de filmes e séries sem complicação.' },
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter mb-8 leading-[0.9] md:leading-none uppercase text-white px-4">
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter leading-none mb-4 md:mb-8 uppercase text-white">
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter mb-8 leading-none uppercase text-white">
              ESCOLHA O SEU <span className="text-primary italic">PLANO</span>
            </h2>
            <p className="text-white/40 font-medium tracking-tight text-sm md:text-lg italic">Selecione o acesso ideal para o seu perfil e comece a assistir agora.</p>
          </FadeUp>

          <div className="max-w-4xl mx-auto mb-12">
            <FadeUp>
              <div className="bg-primary/10 border border-primary/20 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute opacity-20" />
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative">
                      <Zap className="text-black w-6 h-6 fill-black" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-primary font-black uppercase tracking-tighter text-sm md:text-xl italic">Liberação imediata disponível</p>
                    <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none">Últimas 12 ativações nos últimos 5 minutos</p>
                  </div>
                </div>
                <div className="w-full md:w-64 space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase text-primary">Vagas Restantes</span>
                    <span className="text-xs font-black">94%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: '0%' }}
                      whileInView={{ width: '94%' }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-primary" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="max-w-4xl mx-auto mb-16 md:mb-24">
            <div className="glass-card bg-primary/5 border-primary/20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-center border-dashed">
               <h3 className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-6 italic">O QUE VOCÊ RECEBE APÓS O PAGAMENTO</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-6 text-left">
                 {[
                   'Login e Senha Imediatos',
                   'Acesso ao Painel Premium',
                   'Compatibilidade com Tudo',
                   'Tutorial Simples de Acesso',
                   'Suporte Prioritário 24h',
                   'Liberação Automática'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-white font-black uppercase tracking-tighter text-xs md:text-xl italic">
                     <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-primary shadow-primary" /> {item}
                   </div>
                 ))}
               </div>
            </div>
            <p className="mt-8 text-center text-white/60 font-black italic uppercase tracking-tighter text-sm md:text-xl border-l-4 border-primary pl-4 md:pl-0 md:border-l-0">
               “A maioria escolhe o <span className="text-primary">Plano Completo</span> para evitar limitações e desbloquear toda a experiência da plataforma.”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
            {/* PLANO BÁSICO - R$10 */}
            <FadeUp className="glass-card group p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border-white/5 flex flex-col justify-between relative overflow-hidden transition-all hover:bg-white/[0.01] opacity-70">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-white/50 leading-none">Plano <br /> Lite</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-10 px-2 opacity-50">
                   <span className="text-xl md:text-3xl font-bold">R$</span>
                   <span className="text-7xl md:text-9xl font-black leading-none tracking-tighter italic">10</span>
                </div>
                <p className="text-white/20 font-black uppercase tracking-widest text-[9px] mb-8 italic">Versão básica para acesso inicial</p>
                <div className="space-y-4">
                  {[
                    { text: 'Acesso para 1 Smartphone', ok: true },
                    { text: 'Catálogo Reduzido', ok: true },
                    { text: 'Apenas Ligas Nacionais', ok: true },
                    { text: 'Sem Smart TV', ok: false },
                    { text: 'Sem Estabilidade Premium', ok: false },
                    { text: 'Sem Canais Internacionais', ok: false },
                    { text: 'Sem Suporte Prioritário', ok: false }
                  ].map((benefit, i) => (
                    <div key={i} className={`flex items-center gap-4 text-[10px] md:text-sm font-black uppercase tracking-tighter italic ${benefit.ok ? 'text-white/30' : 'text-red-500/40'}`}>
                       {benefit.ok ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />} {benefit.text}
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="xl" className="w-full !rounded-2xl opacity-50" onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/I23HQvG5UNZdAiumbSgN'}>PEGAR BÁSICO</Button>
            </FadeUp>

            {/* PLANO COMPLETO - R$27 */}
            <FadeUp delay={0.1} className="glass-card p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] border-primary bg-primary/20 ring-8 ring-primary/10 shadow-[0_40px_150px_rgba(57,255,20,0.3)] flex flex-col justify-between relative overflow-hidden scale-105 z-20">
              <div className="absolute top-10 right-[-65px] rotate-45 bg-primary text-black font-black text-[10px] md:text-sm px-24 py-3 uppercase tracking-tighter z-10 shadow-2xl">
                O MAIS ESCOLHIDO 🔥
              </div>
              
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-white">PLANO <br /> COMPLETO</h3>
                  <Zap className="w-10 h-10 md:w-20 md:h-20 text-primary fill-primary animate-pulse" />
                </div>
                <p className="text-primary font-black uppercase tracking-widest text-xs md:text-base mb-12 italic">O acesso mais completo da plataforma.</p>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12 bg-black/40 p-10 rounded-[3rem] border border-white/5 relative">
                   <div className="flex items-center gap-2">
                      <span className="text-4xl md:text-5xl font-extrabold text-primary">R$</span>
                      <span className="text-8xl md:text-[14rem] font-black text-primary italic tracking-tighter drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]">27</span>
                   </div>
                   <div className="flex flex-col items-center lg:items-start">
                      <span className="text-primary font-black uppercase text-xs md:text-base tracking-[0.2em]">PAGAMENTO ÚNICO</span>
                      <span className="text-white/40 text-[9px] md:text-xs uppercase tracking-widest mt-1">SEM MENSALIDADES</span>
                   </div>
                </div>

                <div className="space-y-5 md:space-y-6">
                  {[
                    'Multi-Dispositivo Simultâneo',
                    'Liberação Automática',
                    'Todos os Dispositivos (TV+CEL+PC)',
                    'Catálogo Completo Premium',
                    'Melhor Estabilidade do Sistema',
                    '+1500 Transmissões Organizadas',
                    'Futebol, UFC, NBA, Filmes e Séries',
                    'Prioridade Total no Suporte 24h'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-5 text-white text-sm md:text-2xl font-black uppercase tracking-tighter italic leading-tight group-hover:translate-x-2 transition-transform">
                       <CheckCircle2 className="w-6 h-6 md:w-9 md:h-9 text-primary shadow-primary fill-primary/10" /> {benefit}
                    </div>
                  ))}
                </div>
                <p className="mt-12 text-primary/60 font-black uppercase tracking-[0.1em] text-[10px] md:text-xs text-center border border-primary/20 py-4 rounded-2xl bg-primary/5">
                   Escolha recomendada para quem quer acesso completo sem limitações.
                </p>
              </div>
              <Button size="xl" className="w-full !rounded-[2rem] shadow-[0_20px_80px_rgba(57,255,20,0.6)] !bg-primary text-black hover:scale-105 active:scale-95 transition-all text-2xl md:text-4xl py-10 md:py-12" onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/u1dc5bOd6hMB39ySfAe8'}>LIBERAR ACESSO TOTAL</Button>
              <p className="mt-8 text-center text-white/30 text-[10px] md:text-xs font-black uppercase tracking-widest italic flex items-center justify-center gap-2">
                 <ShieldCheck className="w-4 h-4" /> VOCÊ ESTÁ A POUCOS SEGUNDOS DO SEU ACESSO
              </p>
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter mb-6 md:mb-10 leading-[1] md:leading-[0.8] uppercase text-white">7 DIAS DE <br className="md:hidden" /> <span className="text-primary italic">GARANTIA</span></h2>
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
              answer="Trabalhamos com uma ampla variedade de transmissões nacionais e internacionais atualizadas constantemente."
            />
            <FAQItem 
              question="Funciona no iPhone e Android?" 
              answer="Sim. Você pode acessar normalmente pelo iPhone, Android, tablet ou computador."
            />
            <FAQItem 
              question="Posso assistir na Smart TV?" 
              answer="Sim. Compatível com Smart TVs, TV Box, Fire Stick e outros dispositivos."
            />
            <FAQItem 
              question="Como o acesso é liberado?" 
              answer="Após o pagamento, você recebe imediatamente as instruções e dados de acesso."
            />
            <FAQItem 
              question="Tem realmente filmes e séries?" 
              answer="Sim. Além dos esportes, você também terá acesso a filmes, séries e conteúdos variados."
            />
            <FAQItem 
              question="Como funciona o suporte?" 
              answer="Nossa equipe está disponível para auxiliar na configuração e utilização da plataforma."
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
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black italic tracking-tighter leading-none mb-6 uppercase">
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
              LIBERAR ACESSO COMPLETO
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
