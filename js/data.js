/**
 * Pénsum de backend: de herramientas y fundamentos a proyecto integrador y práctica profesional.
 *
 * IMPORTANTE: no cambies los ids de módulos existentes ni insertes ítems en medio de una lista;
 * el progreso se guarda con clave "<id>-<prefijo><posición>". Agrega siempre al final.
 *
 * nucleo: true            -> etapa obligatoria (no se puede pausar)
 * pausadoPorDefecto: true -> módulo de stack alterno, desactivado hasta que se active
 */
export const MODULOS = [
  // ==================== PREPARACIÓN ====================
  {
    id: "e0", titulo: "Entorno de trabajo", semanas: "Semana 0 (antes de empezar)", nucleo: true,
    practicas: [
      "Instalar WSL2 con Ubuntu 22.04 en Windows 11 y verificar la versión con lsb_release -a",
      "Instalar Git, configurar nombre y correo, y crear una clave SSH para GitHub",
      "Instalar VS Code o Cursor con las extensiones de Python y de Git",
      "Instalar Docker Desktop con integración WSL2 y ejecutar hello-world",
      "Levantar PostgreSQL con Docker y conectarte con pgAdmin o DBeaver",
      "Instalar Postman o Bruno y guardar una colección de prueba con una petición GET",
    ],
    explicar: [
      "Explica qué hace WSL2 y en qué se diferencia de una máquina virtual tradicional",
    ],
    criterios: [
      "Abro un terminal Linux, creo un repositorio y hago un commit sin ayuda",
      "Corro un contenedor de PostgreSQL y me conecto a él desde un cliente gráfico",
    ],
  },

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
    id: "e3", titulo: "Datos y bases de datos relacionales", semanas: "Semanas 21–28", nucleo: true,
    practicas: [
      "Diseñar en papel el modelo de pesajes con cinco tablas y justificar cada una",
      "Revisar un diseño con redundancia, identificar la violación de 3FN y corregirla",
      "Crear tablas en PostgreSQL con claves primarias, foráneas y restricciones",
      "Escribir 20 consultas sobre el modelo: JOIN de tres tablas, GROUP BY, HAVING y subconsultas",
      "Leer el plan de ejecución con EXPLAIN antes y después de crear un índice",
    ],
    explicar: [
      "Explica por qué una transacción debe ser atómica, con un ejemplo de pesaje y lote",
      "Explica la diferencia entre WHERE y HAVING",
    ],
    criterios: [
      "Identifico si una tabla cumple la tercera forma normal y explico por qué",
      "Escribo una transacción que revierte completa cuando falla un paso intermedio",
    ],
  },

  // ==================== ETAPA III-B ====================
  {
    id: "e3b", titulo: "Bases no relacionales y caché", semanas: "Semanas 29–31", nucleo: true,
    practicas: [
      "Clasificar cinco casos (sesiones, catálogo, transacciones, logs, ranking) como relacional, documento, clave-valor o serie temporal, y justificar cada uno",
      "Levantar Redis con Docker y guardar, leer y expirar una clave con TTL desde Python",
      "Implementar caché-aside para un endpoint de consulta frecuente e invalidarla al modificar el dato",
      "Modelar un documento anidado en MongoDB y comparar cuándo conviene frente a tablas normalizadas",
      "Medir el tiempo de respuesta de un endpoint con y sin caché y registrar los resultados",
    ],
    explicar: [
      "Explica el teorema CAP y qué sacrifica una base distribuida durante una partición de red",
      "Explica por qué la caché puede devolver datos desactualizados y cómo controlas ese riesgo",
    ],
    criterios: [
      "Justifico por escrito qué datos no van en PostgreSQL y por qué",
      "Mi caché tiene una estrategia de invalidación documentada",
    ],
  },

  // ==================== ETAPA IV ====================
  {
    id: "e4", titulo: "Sistemas web y APIs", semanas: "Semanas 32–41", nucleo: true,
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
    id: "e5", titulo: "Seguridad y autenticación", semanas: "Semanas 42–48", nucleo: true,
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

  // ==================== ETAPA V-B ====================
  {
    id: "e5b", titulo: "Seguridad avanzada y auditoría", semanas: "Semanas 49–50", nucleo: true,
    practicas: [
      "Configurar CORS con orígenes explícitos y comprobar que un origen no permitido es rechazado",
      "Añadir rate limiting al login y probar que bloquea tras N intentos fallidos",
      "Añadir cabeceras de seguridad (Content-Security-Policy, X-Content-Type-Options, Strict-Transport-Security) y verificarlas con curl -I",
      "Rotar una clave secreta cambiando solo la variable de entorno, sin tocar el código",
      "Escribir un registro de auditoría para acciones sensibles: quién, qué, cuándo y desde qué IP",
      "Probar inyección SQL y XSS contra tu propia API y documentar la mitigación",
    ],
    explicar: [
      "Explica la diferencia entre autenticación y autorización con un ejemplo de tu proyecto",
      "Explica qué es un ataque CSRF y por qué SameSite en las cookies ayuda a mitigarlo",
    ],
    criterios: [
      "Un token expirado o manipulado es rechazado en todas las rutas protegidas, y una prueba lo demuestra",
      "Mi API no expone trazas de error ni datos internos al cliente",
    ],
  },

  // ==================== ETAPA VI ====================
  {
    id: "e6", titulo: "Ingeniería de software", semanas: "Semanas 51–58", nucleo: true,
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

  // ==================== ETAPA VI-B ====================
  {
    id: "e6b", titulo: "Arquitecturas, paradigmas y código modular", semanas: "Semanas 59–62", nucleo: true,
    practicas: [
      "Comparar en una tabla monolito, monolito modular, microservicios y arquitectura orientada a eventos según equipo, costo, despliegue y escalado",
      "Reorganizar tu proyecto por dominio (usuarios, inventario, pesajes) en lugar de por tipo de archivo",
      "Escribir una clase de dominio con una regla de negocio (por ejemplo, un lote no puede cerrarse con pesajes pendientes) y probarla sin base de datos",
      "Aplicar inversión de dependencias: el servicio recibe el repositorio por parámetro y se prueba con un doble en memoria",
      "Escribir un cálculo en estilo funcional y en estilo orientado a objetos, y justificar cuál usas en cada caso",
      "Identificar tres acoplamientos fuertes en tu código y proponer cómo separarlos",
    ],
    explicar: [
      "Explica por qué un monolito modular suele ser mejor punto de partida que microservicios",
      "Explica la diferencia entre cohesión y acoplamiento con un ejemplo de tu código",
    ],
    criterios: [
      "Puedo dibujar la arquitectura de mi proyecto en diez minutos, con capas y dependencias claras",
      "Las reglas de negocio se prueban sin levantar servidor ni base de datos",
    ],
  },

  // ==================== ETAPA VII ====================
  {
    id: "e7", titulo: "Operación y despliegue", semanas: "Semanas 63–70", nucleo: true,
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

  // ==================== ETAPA VII-B ====================
  {
    id: "e7b", titulo: "Rendimiento, caché y tareas asíncronas", semanas: "Semanas 71–73", nucleo: true,
    practicas: [
      "Detectar un problema N+1 en un endpoint revisando el SQL generado y corregirlo con selectinload o joinedload",
      "Paginar un listado grande por offset y luego por cursor, y comparar tiempos con miles de registros",
      "Medir un endpoint lento con timestamps o un perfilador, y documentar la mejora antes y después",
      "Mover el envío de un correo o la generación de un PDF a una cola (Celery o RQ) con reintentos",
      "Hacer idempotente un endpoint de creación de pesaje con una clave de idempotencia enviada por el cliente",
    ],
    explicar: [
      "Explica qué es la idempotencia y por qué importa cuando el cliente reintenta una petición",
      "Explica cuándo conviene una tarea asíncrona y cuándo no",
    ],
    criterios: [
      "Un reintento de la misma petición no crea registros duplicados, y una prueba lo demuestra",
      "Cada mejora de rendimiento tiene una medición antes y después",
    ],
  },

  // ==================== ETAPA VII-C ====================
  {
    id: "e7c", titulo: "Integraciones con terceros", semanas: "Semanas 74–75", nucleo: true,
    practicas: [
      "Consumir una API pública con httpx, manejando timeouts, errores de red y respuestas inesperadas",
      "Implementar reintentos con backoff exponencial y límite de intentos, sin reintentar errores 4xx",
      "Recibir un webhook y verificar su firma HMAC antes de procesar el cuerpo",
      "Versionar tu API (/v1) y escribir una nota de cambios para un cliente que depende de ella",
      "Simular la caída de un servicio externo y comprobar que tu sistema responde con un error controlado y lo registra",
    ],
    explicar: [
      "Explica por qué nunca debes asumir que una API externa responde rápido",
      "Explica la diferencia entre webhook y polling",
    ],
    criterios: [
      "Un webhook con firma inválida se rechaza y queda registrado, sin procesarse",
      "Mi integración sigue funcionando en modo degradado cuando el tercero está caído",
    ],
  },

  // ==================== ETAPA VII-D ====================
  {
    id: "e7d", titulo: "Mantenimiento y evolución del sistema", semanas: "Semanas 76–77", nucleo: true,
    practicas: [
      "Hacer un cambio de esquema sin downtime en tres pasos: expandir, migrar datos y contraer",
      "Leer un módulo ajeno de 300 líneas y escribir un mapa de qué hace cada función antes de tocarlo",
      "Cubrir con pruebas un comportamiento existente antes de refactorizarlo",
      "Registrar tres deudas técnicas de tu proyecto con impacto y esfuerzo estimado, y priorizarlas",
      "Activar y desactivar una funcionalidad con una bandera de configuración (feature flag) sin redesplegar",
      "Escribir un runbook: pasos para diagnosticar y resolver la caída de la API",
    ],
    explicar: [
      "Explica por qué borrar una columna no debe hacerse en un solo paso",
      "Explica la diferencia entre refactorizar y reescribir, y cuándo conviene cada uno",
    ],
    criterios: [
      "Puedo entrar a un proyecto que no escribí y ubicar el punto de un cambio en menos de una hora",
      "Mis runbooks permiten que alguien más resuelva un incidente sin preguntarme",
    ],
  },

  // ==================== ETAPA VIII-A ====================
  {
    id: "e8a", titulo: "Práctica profesional con clientes", semanas: "Semanas 78–79", nucleo: true,
    practicas: [
      "Entrevistar a un usuario real (o simulado) y convertir sus respuestas en tres historias de usuario con criterios de aceptación",
      "Estimar cinco tareas con rangos (optimista, probable, pesimista) y comparar con el tiempo real",
      "Escribir una propuesta de alcance con lo incluido, lo excluido y el esfuerzo estimado",
      "Redactar un postmortem de un incidente: qué pasó, impacto, causa raíz y acciones",
      "Explicar un problema técnico a alguien no técnico en un párrafo de cinco líneas",
      "Negociar un cambio de fecha con un cliente proponiendo alternativas concretas",
    ],
    explicar: [
      "Explica la diferencia entre un requerimiento y una solución",
      "Explica por qué una estimación sin supuestos explícitos no sirve",
    ],
    criterios: [
      "Comparo mis estimaciones con lo real y ajusto mi método según la diferencia",
      "Puedo presentar un avance al cliente en cinco minutos sin usar jerga",
    ],
  },

  // ==================== ETAPA VIII ====================
  {
    id: "e8", titulo: "Proyecto integrador", semanas: "Semanas 80–89", nucleo: true,
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
  {
    id: "s2", titulo: "Stack alterno: nube y servicios gestionados", semanas: "Si el trabajo lo pide",
    nucleo: false, pausadoPorDefecto: true,
    practicas: [
      "Desplegar la API en un servicio gestionado (Railway, Render o AWS App Runner) con base de datos administrada",
      "Guardar archivos en un bucket compatible con S3 y generar URLs firmadas de vida corta",
      "Escribir un Deployment y un Service de Kubernetes, y justificar por qué no los necesitas aún",
      "Calcular el costo mensual de tu despliegue y justificar la opción elegida",
    ],
    explicar: ["Explica qué ganas y qué pierdes al usar un servicio gestionado frente a un VPS propio"],
    criterios: ["Migro el despliegue de un proveedor a otro siguiendo mi documentación"],
  },
  {
    id: "s3", titulo: "Stack alterno: Java y Spring Boot", semanas: "Si el mercado local lo pide",
    nucleo: false, pausadoPorDefecto: true,
    practicas: [
      "Sintaxis básica de Java y compilación con Maven o Gradle",
      "Spring Boot: controladores, servicios y persistencia con JPA",
      "Pruebas con JUnit y Mockito",
      "Portar una ruta de tu proyecto a Spring Boot",
    ],
    explicar: ["Explica la inyección de dependencias en Spring con un ejemplo de tu proyecto"],
    criterios: ["Levanto un servicio Spring Boot con una entidad, un repositorio y una ruta protegida"],
  },
];

/** Prefijos usados para construir la clave de cada casilla: "<módulo>-<prefijo><posición>". */
export const SECCIONES = [
  { campo: "practicas", prefijo: "p", titulo: "Prácticas", clase: "" },
  { campo: "explicar", prefijo: "e", titulo: "Explícalo en voz alta o por escrito", clase: "explicar" },
  { campo: "criterios", prefijo: "c", titulo: "Criterios de aprobación", clase: "" },
];
