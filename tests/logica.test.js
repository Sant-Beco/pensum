import { test } from "node:test";
import assert from "node:assert/strict";
import { MODULOS, SECCIONES } from "../js/data.js";
import { clavesDeModulo, porcentaje } from "../js/progreso.js";

test("los ids de módulo son únicos", () => {
  const ids = MODULOS.map((m) => m.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("cada módulo tiene las tres secciones con contenido", () => {
  for (const modulo of MODULOS) {
    for (const seccion of SECCIONES) {
      assert.ok(Array.isArray(modulo[seccion.campo]), `${modulo.id}: falta ${seccion.campo}`);
      assert.ok(modulo[seccion.campo].length > 0, `${modulo.id}: ${seccion.campo} está vacía`);
    }
  }
});

test("las claves de casilla son únicas en todo el pénsum", () => {
  const claves = MODULOS.flatMap(clavesDeModulo);
  assert.equal(new Set(claves).size, claves.length);
});

test("solo los módulos de stack pueden pausarse", () => {
  for (const modulo of MODULOS) {
    if (modulo.nucleo) assert.equal(modulo.pausadoPorDefecto, undefined, modulo.id);
  }
});

test("porcentaje es 0 sin marcas y 100 con todas marcadas", () => {
  const nucleo = MODULOS.filter((m) => m.nucleo);
  assert.equal(porcentaje(nucleo, {}), 0);
  const todas = Object.fromEntries(nucleo.flatMap(clavesDeModulo).map((k) => [k, true]));
  assert.equal(porcentaje(nucleo, todas), 100);
});