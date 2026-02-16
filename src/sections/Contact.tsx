import React, { useState } from 'react';

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
          <h2 className="text-3xl font-semibold mb-2">Contact</h2>
          <p className="text-neutral-400 max-w-xl">
            Disponible pour missions Full Stack, collaboration technique ou échanges professionnels.
          </p>
        </div>

        {/* Infos directes */}
        <div className="mb-12 space-y-2 text-sm text-neutral-300">
          <p>
            <span className="text-neutral-500">Email :</span>{' '}
            <span className="font-mono">contact@exemple.com</span>
          </p>
          <p>
            <span className="text-neutral-500">LinkedIn :</span>{' '}
            <span className="font-mono">linkedin.com/in/nomprofil</span>
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
                className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-neutral-600"
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
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm resize-none focus:outline-none focus:border-neutral-600"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 rounded text-sm text-neutral-200 hover:border-neutral-500 transition"
          >
            Envoyer
          </button>

          <p className="text-xs text-neutral-500">
            Réponse généralement sous 24–48h. Données traitées de manière confidentielle.
          </p>

        </form>

        {/* Footer */}
        <div className="mt-24 pt-6 border-t border-neutral-900 text-xs text-neutral-500">
          © 2026 • Portfolio professionnel
        </div>

      </div>
    </section>
  );
};

export default Contact;
