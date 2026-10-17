/**
 * Contenido del pénsum. Para cambiar de stack, edita o agrega módulos aquí:
 * no hace falta tocar la lógica ni el renderizado.
 *
 * nucleo: true            -> módulo que siempre se estudia (no se puede pausar)
 * pausadoPorDefecto: true -> módulo de stack alterno, desactivado hasta que se active
 */
export const MODULOS = [
  {
    id: "n1", titulo: "Traza y lógica", semanas: "Semanas 1–2", nucleo: true,
    practicas: [
      "FizzBuzz escrito y ejecutado, sin copiar",
      "Invertir una cadena con for y con slicing",
      "Contar frecuencias con un dict y mostrar el top",
      "Diez trazas en papel: predigo la salida y luego ejecuto",
      "Cinco ejercicios de if/elif/else donde importa el orden de las condiciones",
    ],
    explicar: [
      "Explica en voz alta cómo funciona un if/elif con un ejemplo tuyo",
      "Explica línea por línea el contador de frecuencias",
    ],
    criterios: [
      "Predigo la salida de un ciclo con dict antes de ejecutarlo",
      "Hice un test nuevo, con preguntas distintas a las anteriores, y saqué 9/10 o más",
    ],
  },
  {
    id: "n2", titulo: "Estructuras, funciones y errores", semanas: "Semanas 3–4", nucleo: true,
    practicas: [
      "Lista, dict, set y tupla: cuándo usar cada una",
      "Agrupar pesajes por lote con un dict de listas",
      "Función que lee un CSV, salta filas vacías y reporta cuántas falló",
      "try/except por fila con logging",
      "Funciones con parámetros y retorno, sin variables globales",
    ],
    explicar: [
      "Explica la diferencia entre set y dict con un ejemplo de lotes",
      "Explica por qué un except vacío es mala idea",
    ],
    criterios: [
      "Escribo la función del CSV sin ver ejemplos",
      "Mi script no se cae ante datos faltantes o formato raro",
    ],
  },
  {
    id: "n3", titulo: "SQL", semanas: "Semanas 3–8 (junto a CS50 SQL)", nucleo: true,
    practicas: [
      "Crear tablas con claves primarias y foráneas",
      "JOIN de tres tablas con ON",
      "GROUP BY con COUNT y SUM",
      "WHERE vs HAVING: cinco consultas de cada uno",
      "Subconsultas e índices básicos",
      "Normalización: modelo de Procesos, Auditorías y Hallazgos",
    ],
    explicar: [
      "Explica WHERE vs HAVING a alguien sin conocimientos",
      "Dibuja de memoria el modelo relacional de tu proyecto",
    ],
    criterios: [
      "Resuelvo un JOIN con GROUP BY y HAVING sin ayuda",
      "Explico por qué una consulta parametrizada previene la inyección SQL",
    ],
  },
  {
    id: "n4", titulo: "Git, pruebas y seguridad", semanas: "Hábito semanal", nucleo: true,
    practicas: [
      "Provocar y resolver un conflicto de merge",
      "Commits pequeños con mensajes claros, en una rama propia",
      "Primeras pruebas automáticas (3 funciones)",
      "Secretos en .env fuera de git y auditoría de dependencias",
      "Checklist OWASP Top 10 aplicado a un proyecto tuyo",
    ],
    explicar: ["Explica qué pasa si se filtra una contraseña en un commit"],
    criterios: [
      "Resuelvo un conflicto sin buscar los pasos",
      "Ningún secreto está en mis repositorios",
    ],
  },
  {
    id: "s1", titulo: "Stack actual: Python + FastAPI", semanas: "Semanas 5–12", nucleo: false,
    practicas: [
      "Script de pesajes: detecta valores fuera de rango y genera un reporte",
      "API con FastAPI, SQLAlchemy y validación con Pydantic",
      "Roles y autenticación (JWT, contraseñas con hash)",
      "Pruebas, README y diagrama de arquitectura",
      "Despliegue con variables de entorno y HTTPS",
    ],
    explicar: ["Explica de memoria la arquitectura completa de tu proyecto en diez líneas"],
    criterios: [
      "Puedo defender cada decisión técnica sin notas",
      "Mi README permite que otra persona lo corra sola",
    ],
  },
  {
    id: "s2", titulo: "Stack alterno: Node + Express", semanas: "Si el trabajo lo pide",
    nucleo: false, pausadoPorDefecto: true,
    practicas: [
      "JavaScript moderno y async/await",
      "Express: rutas, middleware y manejo de errores",
      "Prisma y validación con Zod",
      "Portar tu proyecto de pesajes a Node",
    ],
    explicar: ["Explica el event loop y por qué Node no se bloquea"],
    criterios: ["Levanto una API Express con dos rutas y errores controlados"],
  },
  {
    id: "s3", titulo: "Stack alterno: datos y automatización", semanas: "Si el trabajo lo pide",
    nucleo: false, pausadoPorDefecto: true,
    practicas: [
      "Limpieza de datos con pandas",
      "Scripts programados con logging",
      "Reportes automáticos en Excel o PDF",
      "Un panel simple con los indicadores clave",
    ],
    explicar: ["Explica cómo detectas y tratas datos atípicos"],
    criterios: ["Mi script corre solo y avisa cuando algo falla"],
  },
];

/** Prefijos usados para construir la clave de cada casilla: "<módulo>-<prefijo><posición>". */
export const SECCIONES = [
  { campo: "practicas", prefijo: "p", titulo: "Prácticas", clase: "" },
  { campo: "explicar", prefijo: "e", titulo: "Explícalo en voz alta o por escrito", clase: "explicar" },
  { campo: "criterios", prefijo: "c", titulo: "Criterios de aprobación", clase: "" },
];
