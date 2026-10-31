import { test } from "node:test";
import assert from "node:assert/strict";
import { calcularRacha, esFechaValida, fechaLocal, haceDias } from "../js/fechas.js";

const AHORA = new Date(2026, 0, 10, 12); // 10 de enero de 2026, mediodía local

test("fechaLocal formatea AAAA-MM-DD con ceros a la izquierda", () => {
  assert.equal(fechaLocal(new Date(2026, 0, 5)), "2026-01-05");
});

test("haceDias devuelve la fecha n días atrás", () => {
  assert.equal(haceDias(3, AHORA), "2026-01-07");
});

test("esFechaValida acepta solo AAAA-MM-DD", () => {
  assert.equal(esFechaValida("2026-01-05"), true);
  assert.equal(esFechaValida("05/01/2026"), false);
  assert.equal(esFechaValida(42), false);
});

test("la racha cuenta desde ayer si hoy todavía no está marcado", () => {
  const dias = [haceDias(1, AHORA), haceDias(2, AHORA), haceDias(3, AHORA)];
  const racha = calcularRacha(dias, AHORA);
  assert.equal(racha.actual, 3);
  assert.equal(racha.total, 3);
});

test("la racha actual incluye hoy cuando ya está marcado", () => {
  const dias = [fechaLocal(AHORA), haceDias(1, AHORA)];
  assert.equal(calcularRacha(dias, AHORA).actual, 2);
});

test("un día en blanco corta la racha actual", () => {
  const dias = [fechaLocal(AHORA), haceDias(2, AHORA), haceDias(3, AHORA)];
  assert.equal(calcularRacha(dias, AHORA).actual, 1);
});

test("la racha máxima detecta la secuencia consecutiva más larga", () => {
  const dias = ["2026-01-01", "2026-01-02", "2026-01-03", "2026-01-07", "2026-01-08"];
  assert.equal(calcularRacha(dias, AHORA).maxima, 3);
});

test("sin días marcados todas las rachas son cero", () => {
  assert.deepEqual(calcularRacha([], AHORA), { actual: 0, maxima: 0, total: 0 });
});
