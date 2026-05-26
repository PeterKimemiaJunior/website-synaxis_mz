import React from 'react';

export default function TrustBar() {
  const items = [
    "Facturação Electrónica",
    "Gestão de Clientes (CRM)",
    "Sincronização de Dados",
    "Processos Logísticos e Vendas"
  ];

  const heading = "ÁREAS DE ENGENHARIA E INTEGRAÇÃO DE SISTEMAS DA SYNAXIS";

  return (
    <div className="py-12 border-t border-[#c7c4d8]/30 bg-[#fcf8ff] relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs text-[#464555] text-center mb-8 uppercase tracking-[0.2em] font-bold">
          {heading}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75 lg:opacity-65 hover:opacity-100 transition-all duration-500">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="px-6 py-3 rounded-xl hover:bg-[#eae6f4]/35 border border-transparent hover:border-[#c7c4d8]/20 transition-all duration-300"
            >
              <span className="text-base md:text-lg font-extrabold tracking-tight text-[#464555] hover:text-[#3525cd] transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
