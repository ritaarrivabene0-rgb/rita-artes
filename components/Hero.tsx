import React from 'react';
import { ArrowRight, BarChart2, Zap, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-brand-100/40 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-accent-400/20 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Agência de Performance
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Transforme sua presença <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Digital</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Estratégias de marketing personalizadas para alavancar seu negócio. 
              Da gestão de redes sociais à performance de vendas online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-brand-500/30 w-full sm:w-auto"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 hover:-translate-y-1 transition-all duration-200 shadow-sm w-full sm:w-auto"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
                  <BarChart2 className="w-5 h-5 text-brand-600" />
                  <span className="font-bold text-2xl text-slate-900">+150%</span>
                </div>
                <p className="text-sm text-slate-500">Crescimento Médio</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
                  <Zap className="w-5 h-5 text-brand-600" />
                  <span className="font-bold text-2xl text-slate-900">24/7</span>
                </div>
                <p className="text-sm text-slate-500">Suporte Ativo</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
                  <Globe className="w-5 h-5 text-brand-600" />
                  <span className="font-bold text-2xl text-slate-900">Online</span>
                </div>
                <p className="text-sm text-slate-500">Entrega Remota</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Visuals */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent z-10"></div>
              {/* Using a placeholder that looks like data/marketing if needed, or just a cool abstract image. 
                  However, the user provided a facade image. Let's use it in About, and use a high-quality stock here for 'Modern Marketing'. 
              */}
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Marketing Team Strategy" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl z-20 border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Resultados Recentes</p>
                    <h3 className="text-lg font-bold text-slate-900">Campanha de Vendas</h3>
                  </div>
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-green-600 -rotate-45" />
                  </div>
                </div>
                <div className="mt-4 w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-brand-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};