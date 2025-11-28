import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function CommentsPage() {
  const [form, setForm] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('');

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando ...');

    // Post request to 4000
    try {
      await axios.post('http://localhost:4000/comments', form);
      setStatus('Enviado correctamente!');
      setForm({ email: '', message: '' }); // Reset form
    } catch (error) {
      console.log(error);
      setStatus('Error al enviar formulario!');
    }
  };

  return (
    <div
      style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '500px' }}
    >
      <h1>Deja tu comentario aquí</h1>
      <hr style={{ margin: '20px 0' }}></hr>

      <form
        onSubmit={HandleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <input
          type="email"
          placeholder="Tu email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{ padding: '10 px' }}
        />
        <textarea
          placeholder="Tu mensaje"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          style={{ padding: '10px', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Enviar comentario
        </button>
      </form>

      {status && (
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{status}</p>
      )}

      <hr style={{ margin: '20px 0' }} />
      <Link href={'/'}>Volver a la página principal </Link>
    </div>
  );
}
