import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onGetStartedClick, onExploreClick }: HeroProps) {
  return (
    <section className="pt-16 pb-20 px-6 relative overflow-hidden bg-[#fcf8ff]">
      {/* Background soft glowing blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e2dfff]/60 via-[#fcf8ff] to-[#fcf8ff]"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#4d44e3]/5 rounded-full filter blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="max-w-2xl order-2 lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0ecf9] rounded-full text-xs font-bold text-[#3525cd] mb-6 border border-[#c7c4d8]/20 shadow-sm animate-bounce">
              <Zap className="w-3.5 h-3.5 fill-[#3525cd]" />
              <span>
                Sistemas Digitais Rápidos para Empresas Moçambicanas
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-[#1b1b24] mb-8 leading-[1.1] tracking-tight text-left">
              Sistemas digitais integrados para organizar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3525cd] to-[#00687a]">as suas vendas e facturação</span>.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#464555] mb-10 max-w-xl leading-relaxed text-left">
              Livre-se de processos manuais lentos ou folhas manuais de Excel desorganizadas. Construímos a infraestrutura digital ideal que unifica os seus contactos de clientes, sincroniza transacções de forma segura e automatiza o trabalho diário da sua equipa em todo o país.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-6 mb-10 border-l-4 border-[#3525cd] pl-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#3525cd]">100%</p>
                <p className="text-xs font-semibold text-[#464555] uppercase tracking-wider">Rastreabilidade de Dados</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#3525cd]">-18 horas</p>
                <p className="text-xs font-semibold text-[#464555] uppercase tracking-wider">Trabalho Manual Semanal Poupado</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStartedClick}
                className="bg-[#3525cd] text-white hover:bg-[#4f46e5] cursor-pointer transition-all duration-300 px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#3525cd]/20 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <button
                onClick={onExploreClick}
                className="bg-white border-2 border-[#c7c4d8]/60 hover:border-[#3525cd] text-[#1b1b24] hover:text-[#3525cd] transition-all duration-300 px-8 py-4 rounded-xl font-bold w-full sm:w-auto text-center cursor-pointer hover:shadow-md"
              >
                Ver Módulos de Sistemas
              </button>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-xs text-[#464555]/80 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              <span>Sistemas seguros, rápidos e em conformidade com as directrizes locais.</span>
            </div>
          </div>

          {/* Hero Interactive Image Mockup */}
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px] rounded-3xl border border-[#c7c4d8]/30 shadow-2xl overflow-hidden bg-white order-1 lg:order-2 group">
            <img 
              alt="SaaS dashboard illustration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugCIrFZqOy5geISEU1Q0umaS5rxbE5MZlj4mByPOdVBpHBb2Nt-7tBrETV8OOf0-zSjjnZiMu7-LEx2ClAiwLuF871qWJjQw8P4yxNSzvB7B7xA_qT5pi7hmzw_3XYT8ay_Tc-KR9Ym-aKw96RKXQqxb1CdZbpAnRZsg0yzdBx3pIwo2qsAEh2bpr-ByoNXzSYlUOUEs-XErB4TiKwdjlM7I_5Vn9waniMKBdgWajRp6iN78SgahITuWjzQ"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark glass overlay at base */}
            <div className="absolute inset-x-4 bottom-4 p-5 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#3525cd] flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Visualização do Sistema</p>
                  <p className="text-xs text-[#dad7ff]">Painel de Controlo Ativo</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase">Activo</span>
              </div>
            </div>

            {/* Glass decoration effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3525cd]/10 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
