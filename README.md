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
