import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-neutral-950 text-neutral-200 py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Travaillons <span className="text-[#4CC9F0]">Ensemble</span></h2>
          <p className="text-neutral-400 max-w-xl">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter. Je suis généralement réactif sous 24h.
          </p>
        </div>

        {/* Infos directes */}
        <div className="mb-12 space-y-2 text-sm text-neutral-300">
          <p>
            <span className="text-neutral-500">Email :</span>{' '}
            <span className="font-mono">ndabubahajanvier@gmail.com</span>
          </p>
          <p>
            <span className="text-neutral-500">LinkedIn :</span>{' '}
            <span className="font-mono">https://www.linkedin.com/in/janeirohurley</span>
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Nom</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-neutral-400">Message</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-neutral-600"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4CC9F0] text-[#051923] font-bold rounded-xl hover:bg-white transition shadow-lg shadow-cyan-500/10"
          >
            <Send size={18} />
            Envoyer le Message
          </button>

          <p className="text-xs text-neutral-500">
            Réponse généralement sous 24–48h. Données traitées de manière confidentielle.
          </p>

        </form>

      </div>
    </section>
  );
};

export default Contact;
