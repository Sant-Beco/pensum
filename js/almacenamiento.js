/**
 * Pénsum de backend: 8 etapas, de fundamentos a proyecto integrador.
 * Para cambiar el contenido, edita los módulos aquí; no hace falta tocar la lógica ni el renderizado.
 *
 * nucleo: true            -> etapa obligatoria (no se puede pausar)
 * pausadoPorDefecto: true -> módulo de stack alterno, desactivado hasta que se active
 */
export const MODULOS = [
  // ==================== ETAPA I ====================
  {
    id: "e1", titulo: "Fundamentos de computación", semanas: "Semanas 1–10", nucleo: true,
    practicas: [
      "Explicar en papel qué ocurre en memoria y en el procesador al ejecutar x = x + 1",
      "Convertir 13, -7 y 0.1 a binario y mostrar por qué 0.1 no se representa exacto en punto flotante",
      "Configurar un servidor Ubuntu 22.04 desde cero, usando solo terminal: usuarios, permisos, procesos y variables de entorno",
      "Hacer 10 peticiones HTTP con curl y anotar método, cabeceras y código de estado de cada una",
      "Dibujar el recorrido completo de una URL: DNS, TCP, TLS y HTTP",
    ],
    explicar: [
      "Explica qué pasa en la red cuando escribes una URL en el navegador",
      "Explica la diferencia entre TCP y UDP con un ejemplo de uso para cada uno",
    ],
    criterios: [
      "Respondo sin notas qué ocurre al escribir una URL en el navegador",
      "Configuro un servidor Ubuntu limpio siguiendo solo mi documentación",
    ],
  },

  // ==================== ETAPA II ====================
  {
    id: "e2", titulo: "Programación y algoritmos", semanas: "Semanas 11–20", nucleo: true,
    practicas: [
      "Resolver 30 problemas de control de flujo (condicionales y bucles) sin tutoriales",
      "Implementar una pila y una cola con list y collections.deque, y comparar sus operaciones",
      "Justificar por escrito la estructura de datos elegida en cinco problemas distintos",
      "Clasificar cinco funciones propias según su complejidad (O(1), O(n), O(n²)) y justificar cada una",
      "Refactorizar un script de pesajes en módulos con funciones puras, separando cálculo y efectos",
    ],
    explicar: [
      "Explica por qué buscar en un diccionario es más rápido que buscar en una lista",
      "Explica la diferencia entre una función pura y una con efectos secundarios, con un ejemplo de tu script",
    ],
    criterios: [
      "Predigo la salida de código con bucles anidados y estructuras mixtas antes de ejecutarlo",
      "Mi código refactorizado se puede probar sin tocar archivos ni la red",
    ],
  },

  // ==================== ETAPA III ====================
  {
    id: "e3", titulo: "Datos y bases de datos", semanas: "Semanas 21–28", nucleo: true,
    practicas: [
      "Diseñar en papel el modelo de pesajes con cinco tablas y justificar cada una",
      "Revisar un diseño con redundancia, identificar la violación de 3FN y corregirla",
      "Crear tablas en PostgreSQL con claves primarias, foráneas y restricciones",
      "Escribir 20 consultas sobre el modelo: JOIN de tres tablas, GROUP BY, HAVING y subconsultas",
      "Leer el plan de ejecución con EXPLAIN antes y después de crear un índice",
      "Escribir un documento de decisión: qué parte del sistema iría en Redis y qué no",
    ],
    explicar: [
      "Explica por qué una transacción debe ser atómica, con un ejemplo de pesaje y lote",
      "Explica la diferencia entre WHERE y HAVING",
    ],
    criterios: [
      "Identifico si una tabla cumple la tercera forma normal y explico por qué",
      "Justifico por escrito cuándo usar Redis y cuándo no",
    ],
  },

  // ==================== ETAPA IV ====================
  {
    id: "e4", titulo: "Sistemas web y APIs", semanas: "Semanas 29–38", nucleo: true,
    practicas: [
      "Especificar la API de pesajes en OpenAPI antes de programarla",
      "Elegir el código de estado correcto para cinco casos: 201, 400, 404, 409 y 422",
      "Construir el CRUD de lotes y pesajes con FastAPI, Pydantic y SQLAlchemy 2.0",
      "Crear una migración versionada con Alembic que agregue una columna sin perder datos",
      "Refactorizar el CRUD en rutas, servicios y repositorios",
      "Mover la generación de un reporte a una tarea en segundo plano que no bloquee la respuesta",
    ],
    explicar: [
      "Explica por qué esta lógica va en el servicio y no en la ruta",
      "Explica la diferencia entre PUT y PATCH",
    ],
    criterios: [
      "Cada endpoint tiene pruebas de éxito y de error",
      "Las rutas no contienen lógica de negocio ni consultas SQL directas",
    ],
  },

  // ==================== ETAPA V ====================
  {
    id: "e5", titulo: "Seguridad y autenticación", semanas: "Semanas 39–45", nucleo: true,
    practicas: [
      "Implementar hash de contraseñas con bcrypt y comprobar que nunca se guarda texto plano",
      "Hacer login con JWT de vida corta y refresh token funcionando",
      "Guardar el token en cookie httpOnly y comprobar que JavaScript no puede leerla",
      "Proteger rutas por rol (admin, bodeguero, vendedor) y escribir pruebas de acceso denegado",
      "Activar 2FA con TOTP (RFC 6238), verificar el código y generar códigos de respaldo",
      "Auditar tu proyecto contra el OWASP Top 10 y corregir los hallazgos",
    ],
    explicar: [
      "Explica dónde guardas el token y por qué ahí",
      "Explica por qué bcrypt es más seguro que SHA-256 para contraseñas",
    ],
    criterios: [
      "Un usuario bodeguero recibe 403 al intentar una acción de admin, y una prueba lo demuestra",
      "Ningún secreto ni contraseña aparece en el repositorio ni en los logs",
    ],
  },

  // ==================== ETAPA VI ====================
  {
    id: "e6", titulo: "Ingeniería de software", semanas: "Semanas 46–53", nucleo: true,
    practicas: [
      "Crear una suite con pytest: unitarias, de integración y de endpoints, con fixtures",
      "Introducir un bug a propósito y confirmar que una prueba lo detecta",
      "Configurar un pipeline en GitHub Actions que ejecute las pruebas en cada push",
      "Abrir diez PR en tu repositorio con descripción, revisión propia y commits semánticos",
      "Configurar ruff, black y mypy, y corregir los errores de los módulos centrales",
      "Aplicar un principio SOLID a un módulo tuyo y explicar qué cambió",
    ],
    explicar: [
      "Explica qué prueba habría detectado un bug que llegó a producción",
      "Explica por qué una cobertura alta no garantiza calidad",
    ],
    criterios: [
      "La suite pasa en CI y falla cuando introduzco un error a propósito",
      "Mis PR tienen descripciones que otra persona entiende sin preguntarme",
    ],
  },

  // ==================== ETAPA VII ====================
  {
    id: "e7", titulo: "Operación y despliegue", semanas: "Semanas 54–61", nucleo: true,
    practicas: [
      "Escribir el Dockerfile de la API y un Docker Compose con API, PostgreSQL y Redis que arranque con un comando",
      "Desplegar en un VPS con Nginx como proxy inverso y HTTPS con Certbot",
      "Separar variables de entorno por ambiente, sin secretos dentro de la imagen",
      "Configurar un pipeline que despliegue automáticamente al hacer merge a main",
      "Emitir logs estructurados en JSON y capturar un error de prueba en Sentry",
      "Hacer un backup de PostgreSQL y restaurarlo en un servidor distinto",
    ],
    explicar: [
      "Explica cómo recuperarías el sistema si el servidor se cae esta noche",
      "Explica la diferencia entre una imagen y un contenedor",
    ],
    criterios: [
      "Restauro un backup en otro servidor siguiendo solo mi documentación",
      "Un despliegue fallido no reemplaza la versión que está funcionando",
    ],
  },

  // ==================== ETAPA VIII ====================
  {
    id: "e8", titulo: "Proyecto integrador", semanas: "Semanas 62–71", nucleo: true,
    practicas: [
      "Redactar requerimientos con historias de usuario y criterios de aceptación, aprobados por el cliente (o simulados por ti)",
      "Diseñar el modelo de datos y la arquitectura del sistema de pesajes y grading",
      "Construir API, autenticación, roles y gráficas de histórico semanal",
      "Desplegar la versión funcional con el pipeline automático",
      "Escribir el manual de instalación y el plan de mantenimiento",
      "Recibir una petición fuera de alcance y responderla con un cambio de alcance documentado",
    ],
    explicar: [
      "Explica tu arquitectura de memoria en diez líneas",
      "Explica qué le dirías al cliente si pide algo que no estaba en el alcance",
    ],
    criterios: [
      "Otra persona instala y opera el sistema solo con el README",
      "Puedo defender cada decisión técnica del proyecto sin notas",
    ],
  },

  // ==================== STACK ALTERNO (PAUSABLE) ====================
  {
    id: "s1", titulo: "Stack alterno: TypeScript + Node + Express", semanas: "Después de la Etapa VIII o si el trabajo lo pide",
    nucleo: false, pausadoPorDefecto: true,
    practicas: [
      "JavaScript moderno: módulos ES, async/await y promesas",
      "TypeScript: tipos, interfaces y compilación",
      "Express: rutas, middleware y manejo centralizado de errores",
      "Portar una parte del proyecto de pesajes a TypeScript y Express",
    ],
    explicar: ["Explica el event loop y por qué Node no se bloquea con operaciones de E/S"],
    criterios: ["Levanto una API tipada en TypeScript con dos rutas y errores controlados"],
  },
];

/** Prefijos usados para construir la clave de cada casilla: "<módulo>-<prefijo><posición>". */
export const SECCIONES = [
  { campo: "practicas", prefijo: "p", titulo: "Prácticas", clase: "" },
  { campo: "explicar", prefijo: "e", titulo: "Explícalo en voz alta o por escrito", clase: "explicar" },
  { campo: "criterios", prefijo: "c", titulo: "Criterios de aprobación", clase: "" },
];
