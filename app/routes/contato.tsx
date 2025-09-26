import { useState } from "react";
import Layout from "../components/Layout";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className="w-full max-w-xl">
        <section className="bg-rose-100 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-6 text-center">
            Entre em Contato
          </h2>
          
          <div className="mb-6 text-center">
            <p className="text-rose-700 mb-2">
              <strong>E-mail:</strong> rosabeatriz438@yahoo.com.br
            </p>
            <p className="text-rose-700 mb-4">
              <strong>Telefone:</strong> (71) 98898-8992
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name"
              placeholder="Seu nome" 
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-rose-200 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Seu e-mail" 
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-rose-200 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            />
            <textarea 
              name="message"
              placeholder="Sua mensagem" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-lg border border-rose-200 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button 
              type="submit" 
              className="bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}