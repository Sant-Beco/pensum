/** Cálculo de avance. Sin dependencias del DOM. */
import { SECCIONES } from "./data.js";

export const clave = (modulo, seccion, posicion) => `${modulo.id}-${seccion.prefijo}${posicion}`;

export function clavesDeModulo(modulo) {
  return SECCIONES.flatMap((seccion) =>
    modulo[seccion.campo].map((_, posicion) => clave(modulo, seccion, posicion)),
  );
}

export function estaPausado(modulo, pausados) {
  if (modulo.nucleo) return false;
  return modulo.id in pausados ? Boolean(pausados[modulo.id]) : Boolean(modulo.pausadoPorDefecto);
}

/** Porcentaje (0–100) de casillas marcadas entre todos los módulos recibidos. */
export function porcentaje(modulos, marcas) {
  const claves = modulos.flatMap(clavesDeModulo);
  if (claves.length === 0) return 0;
  const hechas = claves.filter((k) => marcas[k]).length;
  return Math.round((hechas / claves.length) * 100);
}
