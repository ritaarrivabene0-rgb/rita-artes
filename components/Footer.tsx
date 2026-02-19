import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 bg-white w-fit p-2 rounded-lg">
                <Logo className="h-8" variant="dark" />
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Transformando negócios através de estratégias digitais inteligentes. 
              Sua agência de performance e crescimento.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Sobre</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Marketing Agency. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};