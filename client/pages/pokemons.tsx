import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/pokemons');
        setPokemons(data);
        setLoading(false);
      } catch (error) {
        console.log(`Error al intentar recibir Pokemons! ${error}`);
        setLoading(false);
      }
    };

    // Ejecutamos la función que llama al backend y al endpoint de la PokeAPI
    fetchPokemons();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
        Lista de Pokemonos (Express)
      </h1>
      <hr style={{ margin: '20px 0' }} />
      {loading ? (
        <p>Cargando Pokemonos ...</p>
      ) : (
        <table
          border={1}
          cellPadding={10}
          style={{ width: '100%', borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ background: '#a7e26fff' }}>
              <th>ID</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody style={{ background: '#eceed8ff' }}>
            {pokemons.map((poke) => (
              <tr key={poke.id} style={{ textAlign: 'center' }}>
                <td>{poke.id}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <img src={poke.image} alt={poke.name} width={50} />
                </td>
                <td
                  style={{ textTransform: 'capitalize', textAlign: 'center' }}
                >
                  {poke.name}
                </td>
                <td style={{ textAlign: 'center' }}>{poke.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr style={{ margin: '20px 0' }}></hr>
      <Link
        href={'/'}
        style={{
          borderRadius: '5px',
          backgroundColor: '#1fbdd1ff',
          padding: '10px',
          color: 'white',
        }}
      >
        Volver a página principal
      </Link>
    </div>
  );
}
