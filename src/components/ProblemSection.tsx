import React, { useState } from 'react';
import { Settings, TrendingDown, Hourglass, Trash2 } from 'lucide-react';

export default function ProblemSection() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const heading = "Os 4 Grandes Problemas nas Empresas";
  const subheading = "Processos desorganizados e a falta de sistemas custam caro. Identifique onde a sua empresa está a perder tempo e dinheiro todos os dias.";

  const cards = [
    {
      id: "p1",
      title: "Perda de Clientes e Propostas",
      desc: "Os contactos de potenciais clientes que entram por telefone ou WhatsApp ficam esquecidos ou demoram dias a ser atendidos por falta de um sistema integrado.",
      icon: TrendingDown,
      bgColor: "bg-red-50 text-red-600 border-red-100"
    },
    {
      id: "p2",
      title: "Trabalho Manual Repetitivo",
      desc: "A sua equipa gasta horas cruciais a preencher folhas de Excel ou a redigir documentos repetitivos que deviam ser gerados de forma automática em segundos.",
      icon: Hourglass,
      bgColor: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      id: "p3",
      title: "Facturação Desorganizada",
      desc: "Dificuldade em emitir facturas e controlar quem pagou. A falta de sincronia entre as vendas e as finanças gera furos de caixa difíceis de auditar.",
      icon: Settings,
      bgColor: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      id: "p4",
      title: "Sistemas Isolados",
      desc: "Os programas na sua empresa não comunicam entre si. A informação fica dispersa e os decisores acabam por trabalhar às cegas, sem dados consolidados.",
      icon: Trash2,
      bgColor: "bg-purple-50 text-purple-600 border-purple-100"
    }
  ];

  return (
    <section id="desafios" className="py-20 px-6 bg-[#f5f2ff] scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with badge */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold px-3 py-1 bg-[#eae6f4] rounded-full text-[#3525cd] uppercase tracking-wider mb-4 inline-block">
            Diagnóstico Inicial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1b24] mb-4 tracking-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#464555] leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="bg-white p-8 rounded-2xl border border-[#c7c4d8]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden text-left"
              >
                {/* Visual accent background blur layer */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3525cd]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div>
                   {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${card.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1b1b24] mb-3 group-hover:text-[#3525cd] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#464555] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Status Indicator Bar at card bottom */}
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Identificado</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
