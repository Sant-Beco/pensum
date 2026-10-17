/** Punto de entrada: conecta el estado, el almacenamiento y la vista. */
import { MODULOS } from "./data.js";
import { cargar, estadoInicial, exportar, guardar, importar } from "./almacenamiento.js";
import { fechaLocal } from "./fechas.js";
import { estaPausado } from "./progreso.js";
import { renderTodo } from "./vista.js";

let estado = cargar();

/** Aplica un cambio, guarda y redibuja conservando el foco del teclado. */
function actualizar(cambio) {
  const claveEnFoco = document.activeElement?.dataset?.clave;
  const moduloEnFoco = document.activeElement?.dataset?.abrir;
  cambio(estado);
  guardar(estado);
  renderTodo(estado);
  const selector = claveEnFoco
    ? `[data-clave="${claveEnFoco}"]`
    : moduloEnFoco ? `[data-abrir="${moduloEnFoco}"]` : null;
  if (selector) document.querySelector(selector)?.focus();
}

const contenedor = document.getElementById("modulos");

contenedor.addEventListener("click", (evento) => {
  const abrir = evento.target.closest("[data-abrir]");
  const pausar = evento.target.closest("[data-pausar]");
  if (pausar) {
    const modulo = MODULOS.find((m) => m.id === pausar.dataset.pausar);
    actualizar((e) => { e.pausados[modulo.id] = !estaPausado(modulo, e.pausados); });
  } else if (abrir) {
    const id = abrir.dataset.abrir;
    actualizar((e) => { e.abiertos[id] = !e.abiertos[id]; });
  }
});

contenedor.addEventListener("change", (evento) => {
  const { clave } = evento.target.dataset;
  if (!clave) return;
  const marcado = evento.target.checked;
  actualizar((e) => {
    if (marcado) e.marcas[clave] = true;
    else delete e.marcas[clave];
  });
});

document.getElementById("boton-hoy").addEventListener("click", () => {
  const hoy = fechaLocal();
  actualizar((e) => { if (!e.dias.includes(hoy)) e.dias.push(hoy); });
});

document.getElementById("boton-exportar").addEventListener("click", () => exportar(estado));

const inputArchivo = document.getElementById("archivo-importar");
document.getElementById("boton-importar").addEventListener("click", () => inputArchivo.click());
inputArchivo.addEventListener("change", async () => {
  const archivo = inputArchivo.files[0];
  if (!archivo) return;
  try {
    estado = await importar(archivo);
    guardar(estado);
    renderTodo(estado);
  } catch (error) {
    alert(`No se pudo importar: ${error.message}`);
  } finally {
    inputArchivo.value = "";
  }
});

document.getElementById("boton-reiniciar").addEventListener("click", () => {
  if (!confirm("¿Reiniciar todo el progreso, incluida la racha? No se puede deshacer.")) return;
  estado = estadoInicial();
  guardar(estado);
  renderTodo(estado);
});

renderTodo(estado);
