/** Utilidades de fechas y racha. Sin dependencias del DOM, para poder probarlas con Node. */

const PATRON_FECHA = /^\d{4}-\d{2}-\d{2}$/;
const MS_POR_DIA = 86_400_000;

const dosDigitos = (n) => String(n).padStart(2, "0");

/** Fecha local en formato AAAA-MM-DD (no UTC, para que "hoy" sea el día real del usuario). */
export function fechaLocal(fecha = new Date()) {
  return `${fecha.getFullYear()}-${dosDigitos(fecha.getMonth() + 1)}-${dosDigitos(fecha.getDate())}`;
}

export function haceDias(n, desde = new Date()) {
  const fecha = new Date(desde);
  fecha.setDate(fecha.getDate() - n);
  return fechaLocal(fecha);
}

export const esFechaValida = (texto) => typeof texto === "string" && PATRON_FECHA.test(texto);

function diferenciaEnDias(a, b) {
  return Math.round((new Date(`${b}T00:00:00`) - new Date(`${a}T00:00:00`)) / MS_POR_DIA);
}

/**
 * @param {string[]} dias  fechas marcadas (AAAA-MM-DD)
 * @param {Date} ahora     inyectable para pruebas
 * @returns {{actual:number, maxima:number, total:number}}
 */
export function calcularRacha(dias, ahora = new Date()) {
  const conjunto = new Set(dias);

  // Racha actual: si hoy aún no se marca, se cuenta desde ayer.
  let actual = 0;
  let cursor = conjunto.has(fechaLocal(ahora)) ? 0 : 1;
  while (conjunto.has(haceDias(cursor, ahora))) {
    actual++;
    cursor++;
  }

  // Racha máxima: la secuencia consecutiva más larga del historial.
  let maxima = 0;
  let corrida = 0;
  let anterior = null;
  for (const dia of [...conjunto].sort()) {
    corrida = anterior && diferenciaEnDias(anterior, dia) === 1 ? corrida + 1 : 1;
    maxima = Math.max(maxima, corrida);
    anterior = dia;
  }

  return { actual, maxima, total: conjunto.size };
}
