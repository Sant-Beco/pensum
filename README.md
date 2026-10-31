# Pénsum de San

Pénsum interactivo para aprender a ser desarrollador backend: un núcleo fijo que se estudia siempre
y módulos de stack que se activan o pausan según lo que pida tu trabajo.

Aplicación 100% estática: HTML, CSS y JavaScript con módulos ES. No requiere instalar dependencias
para usarla; Node solo se necesita para correr las pruebas.

## Estructura

```
index.html              Página y contenedores
css/styles.css          Estilos y tokens de color (claro/oscuro automático)
js/data.js              Contenido del pénsum            <- aquí se edita el contenido
js/fechas.js            Fechas y cálculo de racha (sin DOM)
js/progreso.js          Porcentajes y módulos pausados (sin DOM)
js/almacenamiento.js    localStorage, exportar e importar
js/dom.js               Helper para crear elementos sin innerHTML
js/vista.js             Renderizado (no modifica el estado)
js/main.js              Eventos y flujo general
tests/                  Pruebas con node:test
```

## Cómo correrlo

Los módulos ES no funcionan con doble clic (`file://`). Sírvelo localmente:

```bash
npm start            # equivale a python3 -m http.server 8000
# abre http://localhost:8000
```

Para pruebas (requiere Node 18 o superior):

```bash
npm test
```

También funciona subiendo la carpeta tal cual a Netlify, GitHub Pages o cualquier hosting estático.

## Reglas para editar el contenido

El progreso se guarda con una clave `<id>-<prefijo><posición>`, por ejemplo `e2-p3`. Por eso:

1. **No cambies el `id`** de un módulo existente.
2. **Agrega ítems solo al final** de cada lista. Insertar en medio desplaza las marcas.
3. **Reordenar módulos sí es seguro**, porque la clave depende del id y no de la posición.
4. **Las pruebas deben pasar** antes de hacer commit (`npm test`).

Si cambias el formato del progreso, sube la versión en `js/almacenamiento.js` (`CLAVE_ALMACEN`).

## Agregar un módulo de stack

En `js/data.js` agrega un objeto con `nucleo: false`. Si no se usará todavía, añade
`pausadoPorDefecto: true`. En la página aparece un botón para activarlo o pausarlo.

## Progreso

Se guarda en el navegador (localStorage). Usa **Exportar progreso** para respaldarlo o llevarlo
a otro equipo, e **Importar progreso** para restaurarlo. El progreso de una versión anterior
del proyecto está guardado con otra clave y no se mezcla con este.
