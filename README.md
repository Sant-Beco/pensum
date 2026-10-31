# Pénsum de San

Pénsum interactivo para formarte como desarrollador backend. Un núcleo fijo se estudia siempre;
los proyectos y el frontend se activan o pausan; el inglés corre en paralelo.

Aplicación 100% estática: HTML, CSS y JavaScript con módulos ES. No requiere dependencias para usarla.
Node solo se necesita para las pruebas.

## Estructura

```
index.html              Página y contenedores
css/styles.css          Paleta oscura por defecto y tema claro con [data-theme="light"]
js/data.js              Contenido del pénsum            <- aquí se edita el contenido
js/tema.js              Tema claro y oscuro
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

Pruebas (Node 18 o superior):

```bash
npm test
```

Para publicarlo en Netlify, GitHub Pages o cualquier hosting estático, sube la carpeta tal cual.

## Tema

Oscuro por defecto. El botón de la cabecera alterna al claro y recuerda tu elección en el navegador.

## Reglas para editar el contenido

El progreso se guarda con una clave `<id>-<prefijo><posición>`, por ejemplo `e2-p3`. Por eso:

1. **No cambies el `id`** de un módulo existente.
2. **Agrega ítems solo al final** de cada lista. Insertar en medio desplaza las marcas.
3. **Reordenar módulos sí es seguro**, porque la clave depende del id y no de la posición.
4. **Las pruebas deben pasar** antes de hacer commit (`npm test`).

Si cambias el formato del progreso guardado, sube la versión en `js/almacenamiento.js` (`CLAVE_ALMACEN`).

## Agregar un módulo

En `js/data.js` agrega un objeto al final del arreglo. Con `nucleo: false` se puede pausar;
con `pausadoPorDefecto: true` empieza apagado.

## Progreso

Se guarda en el navegador. **Exportar progreso** lo respalda o lo lleva a otro equipo;
**Importar progreso** lo restaura. Esta versión usa la clave `pensum-san-v2`, así que empieza vacía
y no se mezcla con versiones anteriores.
