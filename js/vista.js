/** Renderizado: recibe el estado y dibuja. No modifica el estado. */
import { MODULOS, SECCIONES } from "./data.js";
import { el } from "./dom.js";
import { calcularRacha, fechaLocal, haceDias } from "./fechas.js";
import { clave, estaPausado, porcentaje } from "./progreso.js";

const $ = (id) => document.getElementById(id);
const DIAS_VISIBLES = 28;

export function renderAvance(estado) {
  const activos = MODULOS.filter((m) => !estaPausado(m, estado.pausados));
  const total = porcentaje(activos, estado.marcas);
  $("avance-texto").textContent = `${total}%`;
  $("avance-barra").style.width = `${total}%`;
}

export function renderRacha(estado) {
  const { actual, maxima, total } = calcularRacha(estado.dias);
  $("racha-actual").textContent = actual;
  $("racha-maxima").textContent = maxima;
  $("racha-total").textContent = total;

  const marcados = new Set(estado.dias);
  const hoy = fechaLocal();
  const celdas = [];
  for (let i = DIAS_VISIBLES - 1; i >= 0; i--) {
    const dia = haceDias(i);
    const clases = [marcados.has(dia) ? "hecho" : "", dia === hoy ? "hoy" : ""].join(" ").trim();
    celdas.push(el("div", { class: clases, title: dia }));
  }
  $("cuadricula-dias").replaceChildren(...celdas);

  const boton = $("boton-hoy");
  const yaMarcado = marcados.has(hoy);
  boton.disabled = yaMarcado;
  boton.textContent = yaMarcado ? "Hoy ya cuenta ✓" : "Marcar hoy como día de estudio";
}

function renderSeccion(modulo, seccion, estado) {
  const items = modulo[seccion.campo].map((texto, posicion) => {
    const k = clave(modulo, seccion, posicion);
    const hecho = Boolean(estado.marcas[k]);
    return el(
      "label",
      { class: ["item", hecho ? "hecho" : "", seccion.clase].join(" ").trim() },
      el("input", { type: "checkbox", checked: hecho, dataset: { clave: k } }),
      el("span", {}, texto),
    );
  });
  return el("div", {}, el("div", { class: "seccion" }, seccion.titulo), ...items);
}

function renderModulo(modulo, estado) {
  const pausado = estaPausado(modulo, estado.pausados);
  const abierto = Boolean(estado.abiertos[modulo.id]);
  const etiqueta = modulo.nucleo ? "Núcleo" : pausado ? "Pausado" : "Stack activo";

  const cabecera = el(
    "button",
    { class: "modulo-cab", type: "button", dataset: { abrir: modulo.id }, "aria-expanded": String(abierto) },
    el("span", { class: "modulo-titulo" }, el("strong", {}, modulo.titulo), el("small", {}, modulo.semanas)),
    el("span", { class: "etiqueta" }, etiqueta),
    el("span", { class: "porcentaje" }, pausado ? "—" : `${porcentaje([modulo], estado.marcas)}%`),
  );

  const botonPausa = modulo.nucleo
    ? null
    : el("button", { class: "boton-pausa", type: "button", dataset: { pausar: modulo.id } },
        pausado ? "Activar este stack" : "Pausar este stack");

  const cuerpo = el("div", { class: "modulo-cuerpo" },
    ...SECCIONES.map((s) => renderSeccion(modulo, s, estado)),
    botonPausa,
  );

  const clases = ["modulo", pausado ? "pausado" : "", abierto ? "abierto" : ""].join(" ").trim();
  return el("section", { class: clases }, cabecera, cuerpo);
}

export function renderModulos(estado) {
  $("modulos").replaceChildren(...MODULOS.map((m) => renderModulo(m, estado)));
}

export function renderTodo(estado) {
  renderAvance(estado);
  renderRacha(estado);
  renderModulos(estado);
}
