import { test } from "node:test";
import assert from "node:assert/strict";
import { estaPausado, porcentaje } from "../js/progreso.js";

const nucleo = { id: "n", nucleo: true, practicas: ["a"], explicar: ["b"], criterios: ["c"] };
const stack = { id: "s", nucleo: false, pausadoPorDefecto: true, practicas: ["a"], explicar: [], criterios: [] };

test("un módulo núcleo nunca aparece pausado, aunque el estado diga lo contrario", () => {
  assert.equal(estaPausado(nucleo, { n: true }), false);
});

test("un stack usa su valor por defecto si el usuario no ha elegido", () => {
  assert.equal(estaPausado(stack, {}), true);
});

test("la elección del usuario prevalece sobre el valor por defecto", () => {
  assert.equal(estaPausado(stack, { s: false }), false);
});

test("porcentaje redondea la proporción de casillas marcadas", () => {
  const marcas = { "n-p0": true };
  assert.equal(porcentaje([nucleo], marcas), 33); // 1 de 3 casillas
});
