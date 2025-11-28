Crear proyectos Node.js + Next.js y React

Usaremos axios y express.js además.

1 - Crear carpeta server. Dentro de la misma correremos los siguientes comandos:
Crear package.json
`npm init -y`
Instalar dependencias:
`npm install cors axios express`
Instalar dependencias de desarrollo:
`npm install -D typescript ts-node @types/node @types/cors @types/express nodemon`
Iniciar TypeScript (Crea tsconfig.json)
`npx tsc --init`

2 - Abrir package.json y agregar script:

```
"scripts": {
  "dev": "nodemon index.ts"
},
```

3 - Crear archivo intex.ts dentro de ./server
`touch index.ts`

4 - Trabajar en index.ts con las rutas requeridas.

5 - Cliente:
a. Instalar axios `npm install axios`
b. Borrar todo el contenido de styles/global.css (no imports)
c. Borrar todo el contenido dentro de index.tsx (dejar como está \_app.tsx y \_document.tsx)
d. Dentro de index.tsx se puede crear lo que se ve en 'localhost:3000/' (main page) entonces podemos definir:
`export default function Home(){}`

e. Crear un archivo para cada pagina dentro de client/pages/ Por ejemplo pokemons.tsx y comments.tsx
f. Crear la default function de cada una:
`export default function CommentsPage(){}`
g. Idem para la página de pokemnos `export default function PokePage(){}`

6 - Run server
`npm run dev`
7 - Run client
`npm run dev`
