/** Crea elementos del DOM sin usar innerHTML. */
export function el(etiqueta, props = {}, ...hijos) {
  const nodo = document.createElement(etiqueta);
  for (const [nombre, valor] of Object.entries(props)) {
    if (nombre === "class") nodo.className = valor;
    else if (nombre === "dataset") Object.assign(nodo.dataset, valor);
    else if (nombre in nodo) nodo[nombre] = valor;
    else nodo.setAttribute(nombre, valor);
  }
  nodo.append(...hijos.flat().filter((h) => h !== null && h !== undefined && h !== false));
  return nodo;
}
