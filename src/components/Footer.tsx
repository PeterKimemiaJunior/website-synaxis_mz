import React from 'react';
import { Hexagon, Github, Linkedin, MessageSquare, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand & mission */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-2 text-white">
              <Hexagon className="text-[#818cf8] w-7 h-7 fill-[#818cf8]" />
              <span className="text-lg font-bold tracking-tight">
                Synaxis <span className="text-[#818cf8]">Moçambique</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Projectamos fundações digitais e sistemas de altíssima performance estrutural para empresas em forte escala. Inovação prática, resiliência técnica e crescimento previsível.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#818cf8] rounded-xl transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#818cf8] rounded-xl transition-all" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#818cf8] rounded-xl transition-all" aria-label="Suporte">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-2 text-left">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4 font-mono">Soluções</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Aceleração de Sistemas</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Interfaces Modernas</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Sincronizadores de Dados</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Módulos de Sistema</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-left">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4 font-mono">Módulos</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#modulos" className="hover:text-white transition-colors">Portal do Cliente</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Automação de Processos</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Sincronia de Dados</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors font-semibold text-indigo-400">Protecção Dinâmica</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-left">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4 font-mono">Empresa</h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#clientes" className="hover:text-white transition-colors">Com Quem Trabalhamos</a></li>
              <li><a href="#desafios" className="hover:text-white transition-colors">Gargalos Operacionais</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Contacto Directo</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Diagnóstico Gratuito</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 text-left">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4 font-mono">Segurança</h5>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-500 font-mono">Protecção de Dados</span></li>
              <li><span className="text-slate-500 font-mono">Conformidade Local</span></li>
              <li><span className="text-slate-500 font-mono">Directrizes INTIC</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <p>© 2026 Synaxis Moçambique. Todos os direitos reservados.</p>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-slate-300">Privacidade de Dados</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300">Termos de Serviço</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-[11px] text-slate-400 font-bold">
              <Globe className="w-3.5 h-3.5" />
              <span>Idioma: Português (MZ)</span>
            </div>

            <button
              onClick={handleScrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Voltar ao Topo"
              aria-label="Voltar para o topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
