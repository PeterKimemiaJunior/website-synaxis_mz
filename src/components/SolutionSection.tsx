import React, { useState } from 'react';
import { Zap, Cpu, Award } from 'lucide-react';

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState<'aceleracao' | 'arquitetura' | 'elite'>('aceleracao');

  const tabData = {
    aceleracao: {
      title: "Automatizar e Sincronizar o Trabalho",
      badge: "Inovação Operacional",
      points: [
        "Ligue o seu WhatsApp diretamente ao registo de clientes de forma automática.",
        "Envie mensagens de boas-vindas e acompanhamento de propostas sem intervenção manual.",
        "Acabe com o preenchimento manual de folhas de Excel ao fim do dia."
      ],
      icon: Zap,
      accent: "text-[#3525cd]",
      metrics: "Poupa mais de 15 horas de trabalho por semana a cada funcionário."
    },
    arquitetura: {
      title: "Sistemas Rápidos e Sempre Seguros",
      badge: "Sistemas Robustos",
      points: [
        "Sistemas construídos com segurança de ponta e cópias de segurança (backups) automáticas.",
        "Controlo de quem pode aceder a cada informação financeira ou listas de clientes.",
        "Bancos de dados estáveis que funcionam 24 horas por dia, 7 dias por semana."
      ],
      icon: Cpu,
      accent: "text-emerald-600",
      metrics: "Garantimos segurança total e controlo sobre as suas informações financeiras."
    },
    elite: {
      title: "Plataformas Claras e Fáceis de Usar",
      badge: "Portais Modernos",
      points: [
        "Páginas web fáceis de utilizar no telemóvel e no computador.",
        "Carregamento ultra-rápido desenvolvido a pensar nas redes móveis de Moçambique.",
        "Área de cliente simples onde os seus parceiros podem ver faturas e propostas."
      ],
      icon: Award,
      accent: "text-indigo-600",
      metrics: "Plataformas que funcionam incrivelmente rápido, mesmo com ligações de internet lentas."
    }
  };

  const current = tabData[activeTab];
  const ActiveIcon = current.icon;

  return (
    <section id="solucoes" className="py-20 px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 bg-[#f0ecf9] text-[#3525cd] rounded-full uppercase tracking-wider mb-4 inline-block">
            Nossa Proposta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1b24] mb-4 tracking-tight">
            O Seu Parceiro na Modernização de Processos
          </h2>
          <p className="text-base sm:text-lg text-[#464555]">
            Ajudamos a sua empresa a crescer de forma organizada com a implementação de três pilares fundamentais.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Tabs Menu List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <button
              onClick={() => setActiveTab('aceleracao')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                activeTab === 'aceleracao'
                  ? 'bg-[#3525cd]/5 border-[#3525cd] shadow-md shadow-[#3525cd]/5'
                  : 'bg-transparent border-[#c7c4d8]/30 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'aceleracao' ? 'bg-[#3525cd] text-white' : 'bg-slate-100 text-[#464555]'}`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1b1b24]">Automação e WhatsApp</h3>
                  <p className="text-xs text-[#464555] mt-1">Ligar processos de vendas automáticos.</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('arquitetura')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                activeTab === 'arquitetura'
                  ? 'bg-emerald-50 border-emerald-500 shadow-md shadow-emerald-500/5'
                  : 'bg-transparent border-[#c7c4d8]/30 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'arquitetura' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-[#464555]'}`}>
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1b1b24]">Segurança de Sistemas</h3>
                  <p className="text-xs text-[#464555] mt-1">Servidores estáveis e protegidos.</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('elite')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                activeTab === 'elite'
                  ? 'bg-indigo-50 border-indigo-500 shadow-md shadow-indigo-500/5'
                  : 'bg-transparent border-[#c7c4d8]/30 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'elite' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-[#464555]'}`}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1b1b24]">Portais Rápidos</h3>
                  <p className="text-xs text-[#464555] mt-1">Ecrãs simples para usar no telemóvel.</p>
                </div>
              </div>
            </button>
          </div>

          {/* Tab Panel Display */}
          <div className="w-full lg:w-2/3 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-[#c7c4d8]/30 min-h-[420px] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
            
            {/* Soft decorative background logo */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none">
              <ActiveIcon className="w-96 h-96" />
            </div>

            <div>
              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider bg-[#eae6f4] px-3 py-1.5 rounded-full">
                  {current.badge}
                </span>
              </div>
              
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#1b1b24] mb-6">
                {current.title}
              </h4>

              {/* Bullet list points */}
              <ul className="space-y-4 mb-8">
                {current.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-base text-[#464555] font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom info banner */}
            <div className="p-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-100 flex items-center gap-3 mt-6 lg:mt-0 z-10">
              <span className="text-amber-500 font-bold">★</span>
              <p className="text-sm font-bold text-[#464555]">
                {current.metrics}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
