import React from 'react';
import { Rocket, Network, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

interface PartnerProfile {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  quote: string;
  author: string;
}

export default function WhoWeWorkWith() {
  const profiles: PartnerProfile[] = [
    {
      title: "Fundadores Inovadores",
      subtitle: "Escala Rápida e Sem Complicações",
      description: "Directores de empresas moçambicanas prontas para expandir que precisam de infra-estruturas digitais eficientes e seguras para atrair parceiros, sem precisar de gastar uma fortuna a contratar programadores juniores.",
      icon: Rocket,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      quote: "Mudámos a nossa infra-estrutura digital em 15 dias e pudemos focar-nos totalmente em fechar negócios.",
      author: "Director Geral, fintech PembaTech"
    },
    {
      title: "Directores de Operações (COOs)",
      subtitle: "Eliminação do Trabalho Manual",
      description: "Gestores que estão fartos de erros de digitação, relatórios financeiros desalinhados, controlo de stock isolado em folhas manuais do Excel e perda de tempo no WhatsApp.",
      icon: Network,
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
      quote: "Com as automações da Synaxis, poupámos 20 horas de digitação manual por funcionário mensalmente.",
      author: "Directora de Operações, Logística Zambézia"
    },
    {
      title: "Líderes de Tecnologia (CTOs)",
      subtitle: "Segurança de Código Forte",
      description: "Responsáveis técnicos que procuram soluções robustas de sincronia em nuvem seguindo rigorosamente as directrizes moçambicanas de protecção de dados privados.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      quote: "A sincronização das bases de dados de facturação funciona perfeitamente, sem falhas de rede ou dados perdidos.",
      author: "Responsável de IT, Moçambique Seguros"
    },
    {
      title: "Empresas em Crescimento",
      subtitle: "Expansão para Novas Províncias",
      description: "Empresas estabelecidas que querem expandir os seus serviços para outras regiões (Maputo, Beira, Nampula) e precisam de portais digitais profissionais para fechar grandes contratos comerciais.",
      icon: TrendingUp,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
      quote: "A nova presença online de elite aumentou a credibilidade da nossa marca junto dos parceiros de investimento.",
      author: "Director Comercial, Frutos de Manica"
    }
  ];

  return (
    <section id="clientes" className="py-20 px-6 bg-[#f5f2ff] scroll-mt-16 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 bg-[#eae6f4] text-[#3525cd] rounded-full uppercase tracking-wider mb-4 inline-block">
            Nossos Clientes e Parceiros
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1b24] mb-4 tracking-tight">
            Com Quem Trabalhamos
          </h2>
          <p className="text-base sm:text-lg text-[#464555]">
            Os nossos sistemas são desenhados especificamente para responder às exigências de equipas focadas em produtividade, automação e crescimento no mercado nacional.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-[#c7c4d8]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Profile Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${profile.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-[#1b1b24] group-hover:text-[#3525cd] transition-colors">
                        {profile.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#464555] uppercase tracking-wide">
                        {profile.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-sm sm:text-base text-[#464555] leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                {/* Subtitle testimonial / client quote block */}
                <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                  <span className="text-2xl text-[#3525cd] leading-none select-none">“</span>
                  <div>
                    <p className="text-xs italic text-[#464555] leading-relaxed font-semibold">
                      {profile.quote}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider font-mono text-indigo-800 mt-2 font-black">
                      — {profile.author}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Who We Work With */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#3525cd] to-[#4f46e5] text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">A sua empresa enquadra-se nesta visão de crescimento?</h4>
              <p className="text-sm text-indigo-100 mt-1">Converse directamente com os nossos arquitectos de sistemas.</p>
            </div>
          </div>
          <a
            href="#cta"
            className="px-6 py-3 bg-white text-[#3525cd] hover:bg-indigo-50 active:scale-95 text-sm font-bold rounded-xl transition-all shadow"
          >
            Fale Connosco
          </a>
        </div>

      </div>
    </section>
  );
}
