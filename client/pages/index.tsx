import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}
    >
      <h1>Examen Full Stack</h1>
      <p> Selecciona una opción para probar la API: </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Link a la PokiAPI */}
        <Link
          href={'/pokemons'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Ver Lista de Pokemons
        </Link>

        {/* Link a la página de comentarios */}
        <Link
          href={'/comments'}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Dejar un comentario!
        </Link>
      </div>
    </div>
  );
}
