# Pénsum de San

Núcleo fijo (lógica, estructuras, SQL, Git y seguridad) y módulos de stack intercambiables.

## Estructura

```
index.html          Página y contenedores
css/styles.css      Estilos y tokens de color (claro/oscuro automático)
js/data.js          Contenido del pénsum  <- aquí se edita o se cambia de stack
js/fechas.js        Fechas y cálculo de racha (sin DOM)
js/progreso.js      Cálculo de porcentajes y módulos pausados (sin DOM)
js/almacenamiento.js  localStorage, exportar e importar progreso
js/dom.js           Helper para crear elementos
js/vista.js         Renderizado
js/main.js          Eventos y flujo general
tests/              Pruebas con node:test
```

## Cómo correrlo

Usa módulos ES, así que no abre bien con doble clic (file://). Sírvelo localmente:

```bash
python3 -m http.server 8000     # luego abre http://localhost:8000
npm test                        # pruebas (requiere Node 18+)
```

También funciona subiendo la carpeta tal cual a Netlify o cualquier hosting estático.

## Cambiar de stack

Edita `js/data.js`: agrega un módulo con `nucleo: false` y, si no se usará aún,
`pausadoPorDefecto: true`. En la página se activa o se pausa con un botón.

## Progreso

Se guarda en el navegador (localStorage). Usa **Exportar progreso** para respaldarlo o
pasarlo a otro equipo, e **Importar progreso** para restaurarlo.
