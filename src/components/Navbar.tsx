import React, { useState } from 'react';
import { Hexagon, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#fcf8ff]/80 backdrop-blur-xl border-b border-[#c7c4d8]/30 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative flex items-center justify-center">
            <Hexagon 
              weight="fill" 
              className="text-[#3525cd] w-9 h-9 fill-[#3525cd] transition-transform duration-500 group-hover:rotate-180" 
            />
            <Sparkles className="absolute w-4 h-4 text-white animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1b1b24]">
            Synaxis <span className="text-[#3525cd]">Moçambique</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <button 
            onClick={() => scrollToSection('desafios')}
            className="text-[#464555] hover:text-[#3525cd] transition-colors text-sm font-semibold cursor-pointer"
          >
            Nossos Desafios
          </button>
          
          <button 
            onClick={() => scrollToSection('solucoes')}
            className="text-[#464555] hover:text-[#3525cd] transition-colors text-sm font-semibold cursor-pointer"
          >
            Diferenciais
          </button>

          <button 
            onClick={() => scrollToSection('modulos')}
            className="text-[#464555] hover:text-[#3525cd] transition-colors text-sm font-semibold cursor-pointer"
          >
            Módulos
          </button>

          <button 
            onClick={() => scrollToSection('clientes')}
            className="text-[#464555] hover:text-[#3525cd] transition-colors text-sm font-semibold cursor-pointer"
          >
            Quem Apoiamos
          </button>
        </div>

        {/* Call to action & Language */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ecf9] rounded-full text-xs font-semibold text-[#3525cd]">
            <Globe className="w-3.5 h-3.5" />
            <span>MOÇAMBIQUE (PT)</span>
          </div>
          <button 
            onClick={onContactClick}
            className="bg-[#3525cd] hover:bg-[#4f46e5] text-white active:scale-95 transition-all duration-200 px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm cursor-pointer"
          >
            Agendar Diagnóstico
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-[#f0ecf9] rounded-full text-xs font-semibold text-[#3525cd]">
            <Globe className="w-3.5 h-3.5" />
            <span>MZ</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b1b24] hover:bg-[#eae6f4] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#c7c4d8]/30 bg-[#fcf8ff] px-6 py-6 transition-all duration-300 shadow-inner">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('desafios')}
              className="text-left font-bold text-base py-2 pl-3 hover:text-[#3525cd]"
            >
              Nossos Desafios
            </button>
            <button
              onClick={() => scrollToSection('solucoes')}
              className="text-left font-bold text-base py-2 pl-3 hover:text-[#3525cd]"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('modulos')}
              className="text-left font-bold text-base py-2 pl-3 hover:text-[#3525cd]"
            >
              Módulos Operacionais
            </button>
            <button
              onClick={() => scrollToSection('clientes')}
              className="text-left font-bold text-base py-2 pl-3 hover:text-[#3525cd]"
            >
              Quem Apoiamos
            </button>

            <div className="h-px bg-[#c7c4d8]/20 my-2"></div>

            <div className="mt-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full bg-[#3525cd] text-white text-center py-3 rounded-lg font-bold shadow cursor-pointer"
              >
                Agendar Diagnóstico Gratuito
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
