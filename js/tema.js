/** Tema claro y oscuro. Oscuro por defecto. Sin dependencias del DOM en la lógica de decisión. */

const CLAVE_TEMA = "pensum-san-tema";
export const TEMA_CLARO = "light";
export const TEMA_OSCURO = "dark";

/** Lee la preferencia guardada. Si no hay ninguna o el almacenamiento falla, usa el oscuro. */
export function leerTema() {
  try {
    return localStorage.getItem(CLAVE_TEMA) === TEMA_CLARO ? TEMA_CLARO : TEMA_OSCURO;
  } catch {
    return TEMA_OSCURO;
  }
}

/** Aplica el tema al documento. El oscuro es el valor por defecto de :root, así que no necesita atributo. */
export function aplicarTema(tema) {
  if (tema === TEMA_CLARO) document.documentElement.dataset.theme = TEMA_CLARO;
  else delete document.documentElement.dataset.theme;
  try {
    localStorage.setItem(CLAVE_TEMA, tema);
  } catch {
    // Sin almacenamiento el tema solo dura la sesión actual de la página.
  }
}

/** Cambia al tema contrario y devuelve el nuevo. */
export function alternarTema() {
  const nuevo = leerTema() === TEMA_CLARO ? TEMA_OSCURO : TEMA_CLARO;
  aplicarTema(nuevo);
  return nuevo;
}
