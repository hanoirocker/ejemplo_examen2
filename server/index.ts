import express, { Request, Response } from 'express';
import { Feedback, saveFeedback } from './lib/db';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors()); // Permite que el puerto 3000 (cliente) acceda al puerto 4000 (servidor)
app.use(express.json()); // Permite parsear JSON en las solicitudes

// Ruta 1: Obtener lista de pokemones con detalles
app.get('/pokemons', async (req: Request, res: Response) => {
  try {
    // Pedimos los primeros 10 pokemones a la PokeAPI
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10'
    );

    // Hydration. Como necesitamos mas info de cada pokemon, hacemos peticiones adicionales
    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const details = await axios.get(pokemon.url);
        return {
          id: details.data.id,
          name: details.data.name,
          image: details.data.sprites.front_default,
          type: details.data.types[0].type.name,
        };
      })
    );

    res.json(detailedPokemons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al intentar conectar con PokeAPI' });
  }
});

// Ruta 2: Guardar comentarios de usuarios (Mock)
app.post('/comments', async (req: Request<{}, {}, Feedback>, res: Response) => {
  const { email, message } = req.body;

  // Validacion
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'El email es invalido' });
  }
  if (!message || message.trim().length < 10) {
    return res
      .status(400)
      .json({ message: 'Debe dejar un mensaje no menor a 10 caracteres' });
  }

  console.log('------- NUEVO COMENTARIO -----');
  console.log('Email: ', email);
  console.log('Comentario: ', message);
  console.log('------------------------------');

  // Guardar info (en realidad se simula esto)
  await saveFeedback({ email, message });
  return res.json();
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
