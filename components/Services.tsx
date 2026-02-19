import React from 'react';
import { Search, Megaphone, Layout, PenTool, TrendingUp, Mail } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Gestão de Tráfego',
    description: 'Campanhas otimizadas no Google Ads e Facebook Ads para maximizar seu ROI e atrair clientes qualificados.',
    icon: TrendingUp,
  },
  {
    id: '2',
    title: 'Social Media',
    description: 'Gerenciamento completo de redes sociais com criação de conteúdo estratégico e engajamento da comunidade.',
    icon: Megaphone,
  },
  {
    id: '3',
    title: 'SEO e Conteúdo',
    description: 'Otimização para motores de busca para colocar seu site no topo do Google e atrair tráfego orgânico.',
    icon: Search,
  },
  {
    id: '4',
    title: 'Branding e Design',
    description: 'Criação de identidade visual marcante que transmite os valores e a essência da sua marca.',
    icon: PenTool,
  },
  {
    id: '5',
    title: 'Web Design',
    description: 'Desenvolvimento de sites modernos, responsivos e focados em conversão de leads.',
    icon: Layout,
  },
  {
    id: '6',
    title: 'E-mail Marketing',
    description: 'Automação e funis de vendas para nutrir leads e fidelizar seus clientes atuais.',
    icon: Mail,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Soluções completas para o seu negócio
          </p>
          <p className="mt-4 text-xl text-slate-500">
            Utilizamos as melhores ferramentas e estratégias do mercado para garantir que sua empresa se destaque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-brand-600 shadow-sm border border-slate-100 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};