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
              src="data:image/png;base64,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"
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
