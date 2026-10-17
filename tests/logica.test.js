import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularRacha, fechaLocal, haceDias } from "../js/fechas.js";
import { clavesDeModulo, estaPausado, porcentaje } from "../js/progreso.js";
import { normalizar } from "../js/almacenamiento.js";
import { MODULOS } from "../js/data.js";

const AHORA = new Date(2026, 9, 16, 12, 0, 0); // 16-oct-2026, hora local

test("racha: cuenta desde ayer si hoy no está marcado", () => {
  const dias = [haceDias(1, AHORA), haceDias(2, AHORA), haceDias(3, AHORA)];
  assert.equal(calcularRacha(dias, AHORA).actual, 3);
});

test("racha: incluye hoy cuando está marcado", () => {
  const dias = [fechaLocal(AHORA), haceDias(1, AHORA)];
  assert.equal(calcularRacha(dias, AHORA).actual, 2);
});

test("racha: un hueco de dos días la rompe, y la máxima se conserva", () => {
  const dias = [haceDias(10, AHORA), haceDias(9, AHORA), haceDias(8, AHORA), haceDias(1, AHORA)];
  const r = calcularRacha(dias, AHORA);
  assert.equal(r.actual, 1);
  assert.equal(r.maxima, 3);
  assert.equal(r.total, 4);
});

test("progreso: 0% sin marcas y 100% con todo marcado", () => {
  const modulo = MODULOS[0];
  assert.equal(porcentaje([modulo], {}), 0);
  const todas = Object.fromEntries(clavesDeModulo(modulo).map((k) => [k, true]));
  assert.equal(porcentaje([modulo], todas), 100);
});

test("stacks alternos arrancan pausados y el núcleo nunca se pausa", () => {
  const nucleo = MODULOS.find((m) => m.nucleo);
  const alterno = MODULOS.find((m) => m.pausadoPorDefecto);
  assert.equal(estaPausado(nucleo, { [nucleo.id]: true }), false);
  assert.equal(estaPausado(alterno, {}), true);
  assert.equal(estaPausado(alterno, { [alterno.id]: false }), false);
});

test("importar: descarta datos inválidos y rechaza formatos incorrectos", () => {
  const limpio = normalizar({ marcas: { "n1-p0": true, "x": "si" }, dias: ["2026-10-01", "hola", 5], pausados: {}, abiertos: {} });
  assert.deepEqual(limpio.marcas, { "n1-p0": true });
  assert.deepEqual(limpio.dias, ["2026-10-01"]);
  assert.throws(() => normalizar([1, 2, 3]));
});
