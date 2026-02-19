import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  // Direct link to the facade image
  const facadeUrl = "https://lh3.googleusercontent.com/d/1XFLXy4lLpfDHu14KuAtRCMj8TBgEjZp3";

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
               {/* Use the facade image provided */}
              <img 
                src={facadeUrl} 
                alt="Fachada da Empresa" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Nossa Sede</p>
                <p className="text-sm opacity-80">Estrutura preparada para grandes projetos.</p>
              </div>
            </div>
            {/* Decoratiive backdrop */}
            <div className="absolute -inset-4 bg-brand-600/10 rounded-2xl -z-10 transform rotate-2 scale-105"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Mais que uma agência, somos seus parceiros de crescimento.
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Fundada com o propósito de revolucionar a forma como empresas se comunicam, nossa agência combina criatividade com análise de dados precisa.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Embora nossa entrega seja primordialmente digital e ágil, mantemos uma estrutura física sólida para garantir a segurança e profissionalismo que seu negócio merece.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Equipe especializada e multidisciplinar',
                'Atendimento personalizado e humanizado',
                'Foco total em ROI (Retorno sobre Investimento)',
                'Tecnologia de ponta em automação'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5" />
                  <span className="ml-3 text-base text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
              <div className="bg-brand-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Localização</p>
                <p className="text-sm text-slate-500">Rua Exemplo de Sucesso, 123 - São Paulo, SP (Placeholder)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};