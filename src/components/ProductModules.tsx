import React, { useState } from 'react';
import { 
  Layers, 
  Workflow, 
  Share2, 
  Shield, 
  Sparkles, 
  Check, 
  Activity, 
  FileCode2,
  ArrowRight
} from 'lucide-react';

interface CaseStudy {
  company: string;
  scenario: string;
  impact: string;
}

interface ProductModule {
  id: string;
  name: string;
  useCase: string;
  businessUseCase: string;
  workflowSteps: string[];
  features: string[];
  icon: any;
  color: string;
  badge: string;
  metrics: { label: string; value: string; trend?: string }[];
  caseStudy: CaseStudy;
  estimatedImprovement: string;
}

export default function ProductModules() {
  const [activeModule, setActiveModule] = useState<string>("m1");

  const modules: ProductModule[] = [
    {
      id: "m1",
      name: "Portal do Cliente Interativo",
      useCase: "Interface do Utilizador e Captação",
      businessUseCase: "Acelerar a atração e o registo de novos clientes de alto valor, eliminando a dependência de telefonemas lentos ou troca de PDFs por e-mail.",
      workflowSteps: [
        "1. Cliente preenche dados da empresa de forma simples e intuitiva.",
        "2. Formulário inteligente exibe apenas as perguntas necessárias para o seu negócio.",
        "3. Geração automática de painel privado seguro para o envio rápido de documentos."
      ],
      features: [
        "Interface fluida optimizada para telemóveis com carregamento em menos de 1 segundo.",
        "Criação automática de links partilháveis para propostas comerciais rápidas.",
        "Submissão simples e segura de ficheiros com validações em tempo real."
      ],
      icon: Layers,
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      badge: "Interface Premium",
      metrics: [
        { label: "Tempo de Onboarding", value: "Reduzido em 75%" },
        { label: "Captação de Clientes", value: "Mais contactos recebidos", trend: "up" },
        { label: "Experiência de Uso", value: "Fácil e Intuitiva" }
      ],
      estimatedImprovement: "Processo 4x mais rápido",
      caseStudy: {
        company: "Fintech PembaTech",
        scenario: "Faziam manualmente o registo de novos parceiros através de trocas lentas de PDFs por e-mail, processo que demorava cerca de 5 dias úteis.",
        impact: "Reduziu o tempo do ciclo de onboarding para apenas 8 minutos, proporcionando uma recepção rápida e profissional."
      }
    },
    {
      id: "m2",
      name: "Automação de Fluxos de Trabalho",
      useCase: "Orquestração Operacional",
      businessUseCase: "Acabar com o atraso de aprovação de faturas ou envios de propostas comerciais, delegando responsabilidades de forma automática.",
      workflowSteps: [
        "1. Novo potencial cliente entra em contacto pelo portal digital.",
        "2. Disparo imediato de notificação para a equipa ou gestor responsável.",
        "3. Reencaminhamento automático caso não haja resposta em tempo útil."
      ],
      features: [
        "Alertas rápidos que garantem que nenhum cliente fica sem resposta na fila.",
        "Gatilhos condicionados ao valor estimado ou à província de origem do cliente.",
        "Histórico claro de todas as etapas de aprovação para acompanhamento da direcção."
      ],
      icon: Workflow,
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
      badge: "Motor de Processos",
      metrics: [
        { label: "Tempo de Resposta", value: "Menos de 2 minutos" },
        { label: "Pedidos Esquecidos", value: "Reduzidos para zero", trend: "down" },
        { label: "Atendimento Garantido", value: "Sempre na hora" }
      ],
      estimatedImprovement: "Zero perdas digitais",
      caseStudy: {
        company: "Logística Zambézia",
        scenario: "Perdia prospecções comerciais porque os gestores demoravam horas ou dias para responder a solicitações enviadas através do website.",
        impact: "Garante resposta em menos de 2 minutos, aumentando em 35% o fecho de novos contratos imediatos."
      }
    },
    {
      id: "m4",
      name: "Sincronizador Universal de Dados",
      useCase: "Sincronização Activa",
      businessUseCase: "Manter bases de facturação e dados comerciais actualizados instantaneamente, eliminando erros humanos de digitação redundante.",
      workflowSteps: [
        "1. Uma nova venda ou contacto é aprovado no portal comercial.",
        "2. O sincronizador valida e consolida a informação de forma invisível.",
        "3. Os dados são enviados e actualizados em todos os sistemas de gestão."
      ],
      features: [
        "Tentativas automáticas inteligentes caso a ligação à internet de terceiros falhe temporariamente.",
        "Evita duplicação de clientes ou faturas duplicadas por erro.",
        "Painel de controlo visual simples onde pode ver se todos os sistemas estão ligados."
      ],
      icon: Share2,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      badge: "Integrações Fortes",
      metrics: [
        { label: "Erros de Digitação", value: "Corte total de 100%", trend: "down" },
        { label: "Fluxo de Informações", value: "Directo e Instantâneo" },
        { label: "Tempo Poupado", value: "15 horas por semana" }
      ],
      estimatedImprovement: "Zero digitação dupla",
      caseStudy: {
        company: "Moçambique Seguros",
        scenario: "A equipa de contas digitava as mesmas faturas e dados de novos clientes manualmente em três sistemas separados todos os dias.",
        impact: "Corte de 100% nos erros de duplicação, poupando cerca de 15 horas semanais de digitação repetitiva de dados."
      }
    },
    {
      id: "m5",
      name: "Segurança de Dados Corporativos",
      useCase: "Resiliência e Protecção",
      businessUseCase: "Garantir segurança total de informações financeiras e dados de fornecedores sob as leis em vigor.",
      workflowSteps: [
        "1. Utilizador tenta aceder a relatórios financeiros ou dados confidenciais.",
        "2. Verificação imediata do nível de autorização dentro do sistema.",
        "3. Registo seguro de quem acedeu, garantindo protecção e conformidade."
      ],
      features: [
        "Criptografia nativa altamente segura para documentos e faturas confidenciais.",
        "Ocultação automática inteligente de dados pessoais em relatórios colectivos.",
        "Histórico completo de auditoria para prevenção de falhas de segurança internas."
      ],
      icon: Shield,
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
      badge: "Protecção Activa",
      metrics: [
        { label: "Segurança de Dados", value: "Protecção Bancária" },
        { label: "Vulnerabilidade", value: "Totalmente blindado" },
        { label: "Registo de Operações", value: "Acompanhamento instantâneo" }
      ],
      estimatedImprovement: "Segurança corporativa total",
      caseStudy: {
        company: "Frutos de Manica",
        scenario: "Necessitava de garantir que dados comerciais e de fornecedores estivessem totalmente seguros antes de auditorias externas.",
        impact: "Blindou relatórios confidenciais, com trilha de acessos à prova de fraudes ou alterações."
      }
    }
  ];

  const selectedModule = modules.find(m => m.id === activeModule) || modules[0];
  const SelectedIcon = selectedModule.icon;

  return (
    <section id="modulos" className="py-24 px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold px-3 py-1 bg-[#f0ecf9] text-[#3525cd] rounded-full uppercase tracking-wider mb-4 inline-block border border-indigo-100">
            Módulos Operacionais Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b1b24] mb-4 tracking-tight leading-[1.12]">
            Estrutura Tecnológica no seu Idioma Empresarial
          </h2>
          <p className="text-base sm:text-lg text-[#464555]">
            Não entregamos ideias técnicas incompreensíveis ou termos difíceis. Nossos módulos visam resolver perdas de tempo e erros manuais de forma prática e eficaz para a sua equipa.
          </p>
        </div>

        {/* Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* List of modules on the left */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {modules.map((m) => {
              const Icon = m.icon;
              const isSelected = m.id === activeModule;
              
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`p-6 rounded-2xl flex flex-col text-left border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-[#3525cd]/5 border-[#3525cd] shadow-lg shadow-[#3525cd]/5 scale-[1.01]' 
                      : 'bg-slate-50 border-slate-200/60 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${m.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400">
                        {m.useCase}
                      </span>
                      <h4 className="font-extrabold text-[#1b1b24] text-sm sm:text-base mt-0.5">
                        {m.name}
                      </h4>
                    </div>
                  </div>

                  {/* Operational Metrics highlight */}
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200/60 flex justify-between items-center text-xs">
                    <span className="text-slate-500 text-[11px] font-medium">Melhoria Estimada:</span>
                    <span className="text-[#3525cd] font-bold">{m.estimatedImprovement}</span>
                  </div>
                  
                </button>
              );
            })}
          </div>

          {/* Module Interactive detailed Sandbox Console Inspector */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden text-left">
            
            {/* Top status bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-sans">Vista Geral do Funcionamento</span>
              </div>
              <span className="bg-[#3525cd]/15 text-[#3525cd] text-xs font-bold px-3 py-1 rounded-full border border-[#3525cd]/20">
                {selectedModule.badge}
              </span>
            </div>

            {/* Core Description Block */}
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${selectedModule.color}`}>
                    <SelectedIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1b1b24] tracking-tight">
                      {selectedModule.name}
                    </h3>
                    <p className="text-xs font-bold text-[#3525cd] tracking-wider uppercase">{selectedModule.useCase}</p>
                  </div>
                </div>

                {/* Practical business use case badge */}
                <div className="bg-slate-100 px-4 py-2 border border-slate-200 rounded-xl max-w-sm text-xs font-medium text-slate-600">
                  <span className="font-bold text-[#3525cd] block mb-0.5">Objectivo Comercial:</span>
                  {selectedModule.businessUseCase}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedModule.metrics.map((met, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-left">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">{met.label}</span>
                    <span className="text-sm sm:text-base font-black text-[#1b1b24] mt-1 block">{met.value}</span>
                  </div>
                ))}
              </div>

              {/* Workflow Step Diagram */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#3525cd]" />
                  <span>Funcionamento das Engrenagens do Sistema:</span>
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-[#464555] font-medium leading-relaxed">
                  {selectedModule.workflowSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0"></span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet Features (Operational deliverables) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Entregáveis Práticos Com este Módulo:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedModule.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-100">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-600 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study section */}
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-indigo-900/40 space-y-4 shadow-inner text-left">
                <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Cenário de Sucesso Realizado:</span>
                </h4>
                <div className="space-y-3.5">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-indigo-400 tracking-wider block">Parceiro Implementado</span>
                    <p className="text-sm font-bold text-white mt-0.5">{selectedModule.caseStudy.company}</p>
                  </div>
                  <div className="border-t border-slate-800/80 pt-2.5">
                    <span className="text-[9px] uppercase font-bold text-indigo-400 tracking-wider block">Como Funcionava Antes</span>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-sans">{selectedModule.caseStudy.scenario}</p>
                  </div>
                  <div className="border-t border-slate-800/80 pt-2.5 bg-emerald-950/20 -mx-4 px-4 py-2.5 rounded-xl border-dashed border-emerald-900/30">
                    <span className="text-[9px] uppercase font-bold text-emerald-400 tracking-wider block">Resultado na Prática</span>
                    <p className="text-xs text-emerald-300 font-medium mt-0.5 leading-relaxed font-sans">{selectedModule.caseStudy.impact}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Informational Call to Action at base */}
            <div className="mt-8 border-t border-slate-250 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 font-medium">
                Gostaria de ver este módulo integrado e adaptado exactamente à sua empresa? Fale directamente connosco por chamada ou agende no formulário abaixo.
              </p>
              <a 
                href="#cta"
                className="inline-flex items-center gap-2 bg-[#3525cd] hover:bg-[#4f46e5] text-white px-5 py-3 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer"
              >
                <span>Saber Mais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
