import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const phone = "5511956365518";
    const text = encodeURIComponent(`Olá, meu nome é ${formState.name}. ${formState.message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Vamos conversar?</h2>
          <p className="mt-4 text-xl text-slate-500">
            Entre em contato e descubra como podemos ajudar sua empresa a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-500 rounded-full opacity-20 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-300" />
                </div>
                <div>
                  <p className="font-medium opacity-60 text-sm">WhatsApp / Telefone</p>
                  <p className="text-lg font-semibold mt-1">(11) 95636-5518</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-300" />
                </div>
                <div>
                  <p className="font-medium opacity-60 text-sm">E-mail</p>
                  <p className="text-lg font-semibold mt-1">contato@suaempresa.com.br</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-600 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Pronto para começar?</h4>
                <p className="opacity-90 mb-4 text-sm">
                  Fale diretamente com um especialista agora mesmo pelo WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5511956365518"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center px-4 py-2 bg-white text-brand-700 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50"
                  placeholder="Seu nome"
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail Corporativo</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50"
                  placeholder="seu@email.com"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Como podemos ajudar?</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 ml-2" />
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                Ao enviar, você será redirecionado para o WhatsApp para agilizar o atendimento.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};