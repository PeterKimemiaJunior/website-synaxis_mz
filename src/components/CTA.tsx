import React, { useState } from 'react';
import { Mail, Phone, Calendar, Sparkles, Send, ShieldAlert } from 'lucide-react';

export default function CTA() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("infraestrutura");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    // Simulate API Proxy request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 1500);
  };

  return (
    <section id="cta" className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Background visual circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3525cd]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text and contacts details */}
          <div className="text-left">
            <span className="text-xs font-bold px-3 py-1 bg-[#3525cd]/20 border border-[#3525cd]/40 text-[#bfb9ff] rounded-full uppercase tracking-wider mb-6 inline-block">
              Mapeamento de Processos e Infraestrutura de Negócios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
              Substitua o atrito operacional por <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-cyan-400">previsibilidade de escala.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Traga clareza de dados para a sua organização. Nossos arquitetos avaliam a estrutura de sistemas da sua empresa para expor gargalos ocultos, vazamento de clientes potenciais e ineficiências de processos manuais.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-[#818cf8] border border-slate-800 group-hover:bg-slate-800 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Mande um E-mail</p>
                  <p className="text-base font-bold text-white group-hover:text-[#818cf8] transition-colors">contacto@synaxis.co.mz</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-[#818cf8] border border-slate-800 group-hover:bg-slate-800 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Ligue ou envie WhatsApp</p>
                  <p className="text-base font-bold text-white group-hover:text-[#818cf8] transition-colors">+258 84 321 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-[#818cf8] border border-slate-800 group-hover:bg-slate-800 transition-all">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Resposta Ativa</p>
                  <p className="text-xs text-slate-400">Consultoria inicial agendada e respondida em até 24 horas úteis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connective Form Card */}
          <div className="bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Solicitação Enviada!</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Agradecemos o seu contacto. O nosso arquitecto de sistemas analisará as suas necessidades e responderá por e-mail em poucas horas úteis.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors text-slate-300 text-xs font-bold rounded-lg"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#818cf8]" />
                  <span>Diagnóstico Estrutural Gratuito</span>
                </h3>
                <p className="text-xs text-slate-400">Preencha os dados corporativos para solicitar um contacto profissional.</p>

                <div className="grid grid-cols-1 gap-1">
                  <label htmlFor="cta-name" className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Nome Completo</label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-[#818cf8] focus:ring-1 focus:ring-[#818cf8] outline-none text-white px-4 py-3 rounded-xl text-sm transition-all shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 gap-1">
                  <label htmlFor="cta-email" className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">E-mail Corporativo</label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="geral@empresa.co.mz"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-[#818cf8] focus:ring-1 focus:ring-[#818cf8] outline-none text-white px-4 py-3 rounded-xl text-sm transition-all shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 gap-1">
                  <label htmlFor="cta-subject" className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Interesse Principal</label>
                  <select
                    id="cta-subject"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-[#818cf8] outline-none text-white px-4 py-3 rounded-xl text-sm transition-all"
                  >
                    <option value="infraestrutura">Fundações e Implementação de Infra-estrutura</option>
                    <option value="automacao">Automação de Processos e WhatsApp</option>
                    <option value="interfaces">Criação de Portais Web e Integrações CRM</option>
                    <option value="resiliencia">Segurança e Protecção de Dados</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-1">
                  <label htmlFor="cta-message" className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Descrição Breve do Desafio</label>
                  <textarea
                    id="cta-message"
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Diga-nos brevemente qual é o maior gargalo actual da sua empresa..."
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-[#818cf8] focus:ring-1 focus:ring-[#818cf8] outline-none text-white px-4 py-3 rounded-xl text-sm transition-all resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#3525cd] hover:bg-[#4f46e5] text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#3525cd]/10 active:scale-[0.99] disabled:opacity-55 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Agendando Diagnóstico...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Agendar o Meu Diagnóstico Gratuito</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-[10px] text-slate-500 justify-center">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span>Respeitamos a sua privacidade de dados de acordo com a legislação moçambicana.</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
