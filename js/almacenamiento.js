/** Persistencia en localStorage, exportación e importación del progreso. */
import { esFechaValida } from "./fechas.js";

const CLAVE_ALMACEN = "pensum-san-v1";

export const estadoInicial = () => ({ marcas: {}, dias: [], pausados: {}, abiertos: {} });

const esObjeto = (valor) => valor !== null && typeof valor === "object" && !Array.isArray(valor);

/** Acepta solo lo que reconoce: un archivo importado nunca puede romper la app. */
export function normalizar(crudo) {
  if (!esObjeto(crudo)) throw new Error("El archivo no tiene el formato esperado.");
  const estado = estadoInicial();
  if (esObjeto(crudo.marcas)) {
    for (const [k, v] of Object.entries(crudo.marcas)) if (v === true) estado.marcas[k] = true;
  }
  if (Array.isArray(crudo.dias)) estado.dias = [...new Set(crudo.dias.filter(esFechaValida))].sort();
  if (esObjeto(crudo.pausados)) {
    for (const [k, v] of Object.entries(crudo.pausados)) estado.pausados[k] = Boolean(v);
  }
  if (esObjeto(crudo.abiertos)) {
    for (const [k, v] of Object.entries(crudo.abiertos)) estado.abiertos[k] = Boolean(v);
  }
  return estado;
}

export function cargar() {
  try {
    const texto = localStorage.getItem(CLAVE_ALMACEN);
    return texto ? normalizar(JSON.parse(texto)) : estadoInicial();
  } catch {
    return estadoInicial(); // almacenamiento bloqueado o datos dañados: se empieza de cero
  }
}

export function guardar(estado) {
  try {
    localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado));
  } catch (error) {
    console.warn("No se pudo guardar el progreso:", error);
  }
}

export function exportar(estado) {
  const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `pensum-progreso-${new Date().toISOString().slice(0, 10)}.json`;
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}

export async function importar(archivo) {
  return normalizar(JSON.parse(await archivo.text()));
}
