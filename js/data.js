/**
 * Pénsum de backend, versión enfocada: núcleo fijo, proyectos y frontend pausables, inglés en paralelo.
 *
 * IMPORTANTE: no cambies los ids de módulos existentes ni insertes ítems en medio de una lista;
 * el progreso se guarda con clave "<id>-<prefijo><posición>". Agrega siempre al final.
 *
 * nucleo: true            -> se estudia siempre (no se puede pausar)
 * nucleo: false           -> módulo pausable; activo por defecto salvo que tenga pausadoPorDefecto: true
 */
export const MODULOS = [
  // ==================== NÚCLEO FIJO ====================
  {
    id: "e0", titulo: "Entorno: WSL2, Git, SSH, editor, Docker, PostgreSQL", semanas: "1 semana", nucleo: true,
    practicas: [
      "Instalar WSL2 con Ubuntu 22.04 y verificar la versión con lsb_release -a",
      "Instalar Git, configurar nombre y correo, y crear una clave SSH para GitHub",
      "Instalar VS Code o Cursor con las extensiones de Python y de Git",
      "Instalar Docker Desktop con integración WSL2 y ejecutar hello-world",
      "Levantar PostgreSQL con Docker y conectarte con pgAdmin o DBeaver",
      "Leer la guía 'Get started' de Git en inglés y anotar tres términos nuevos",
    ],
    explicar: [
      "Explica qué hace WSL2 y en qué se diferencia de una máquina virtual tradicional",
    ],
    criterios: [
      "Creo un repositorio, hago el primer commit y lo subo a GitHub sin ayuda",
      "Me conecto a PostgreSQL corriendo en Docker desde un cliente gráfico",
    ],
  },
  {
    id: "e2", titulo: "Programación básica: condicionales, ciclos, diccionarios, funciones y CSV",
    semanas: "8 semanas", nucleo: true,
    practicas: [
      "Resolver 20 problemas de condicionales y ciclos sin tutoriales",
      "Contar frecuencias con un diccionario y ordenar el resultado",
      "Escribir funciones con parámetros y retorno, sin variables globales",
      "Leer un CSV con csv.DictReader, saltar filas vacías y usar try/except por fila",
      "Leer la documentación del módulo csv en inglés y explicar en español un ejemplo",
    ],
    explicar: [
      "Explica por qué un except vacío oculta errores, con un ejemplo de tu propio CSV",
    ],
    criterios: [
      "Mi script lee un CSV, limpia filas malas y muestra un resumen: cuántas leyó, cuántas descartó y por qué",
      "Escribo la función de lectura de CSV sin mirar ejemplos",
    ],
  },
  {
    id: "e3", titulo: "SQL y modelo relacional", semanas: "6 semanas", nucleo: true,
    practicas: [
      "Diseñar en papel un modelo de cinco tablas y justificar cada clave",
      "Crear tablas en PostgreSQL con claves primarias y foráneas",
      "Escribir consultas con JOIN de tres tablas, GROUP BY y HAVING",
      "Distinguir WHERE de HAVING con cinco ejemplos de cada uno",
      "Escribir una transacción que se revierte completa si falla un paso intermedio",
      "Leer en inglés la documentación oficial de PostgreSQL sobre transacciones y resumirla en español",
    ],
    explicar: [
      "Explica por qué una transacción debe ser atómica, con un ejemplo de pesaje y lote",
      "Explica la diferencia entre WHERE y HAVING",
    ],
    criterios: [
      "Escribo consultas de reporte con JOIN, GROUP BY y HAVING sin ayuda",
      "Identifico si una tabla está en tercera forma normal y explico por qué",
    ],
  },
  {
    id: "e4", titulo: "FastAPI, Pydantic, SQLAlchemy 2.0 y Alembic básico", semanas: "6 semanas", nucleo: true,
    practicas: [
      "Especificar la API de lotes y pesajes en OpenAPI antes de programarla",
      "Elegir el código de estado correcto para los casos 201, 400, 404, 409 y 422",
      "Construir un CRUD con FastAPI, Pydantic y SQLAlchemy 2.0",
      "Crear una migración con Alembic que agregue una columna sin perder datos",
      "Leer en inglés el tutorial de FastAPI sobre request body y reproducir un ejemplo",
    ],
    explicar: [
      "Explica por qué esta lógica va en el servicio y no en la ruta",
    ],
    criterios: [
      "La API tiene un CRUD completo con migraciones versionadas",
      "Cada endpoint tiene al menos una prueba de éxito y una de error",
    ],
  },
  {
    id: "e5", titulo: "Autenticación: hash, JWT y roles simples", semanas: "4 semanas", nucleo: true,
    practicas: [
      "Hashear contraseñas con bcrypt y comprobar que nunca se guarda texto plano",
      "Implementar un login que devuelve un JWT de vida corta",
      "Proteger endpoints con roles simples (admin y usuario) y probar el acceso denegado",
      "Leer en inglés la documentación de FastAPI sobre OAuth2 con JWT y anotar los pasos",
    ],
    explicar: [
      "Explica dónde guardas el token y por qué ahí",
    ],
    criterios: [
      "Un usuario sin rol de admin recibe 403 en un endpoint protegido, y una prueba lo demuestra",
      "Ninguna contraseña aparece en la base de datos ni en los logs",
    ],
  },
  {
    id: "e7", titulo: "Despliegue: Docker Compose, VPS con Nginx, HTTPS con Certbot", semanas: "3 semanas", nucleo: true,
    practicas: [
      "Escribir un Dockerfile para la API y un docker-compose.yml con API y PostgreSQL",
      "Desplegar en un VPS con Nginx como proxy inverso",
      "Obtener HTTPS con Certbot y verificar que la renovación automática está activa",
      "Separar variables de entorno por ambiente, sin secretos dentro de la imagen",
      "Leer en inglés la documentación de Certbot o Nginx y anotar los comandos que usas",
    ],
    explicar: [
      "Explica cómo recuperarías la API si el servidor se cae esta noche",
    ],
    criterios: [
      "La API responde por HTTPS desde mi dominio",
      "Restauro la aplicación en otro servidor siguiendo solo mi documentación",
    ],
  },
  {
    id: "e8a", titulo: "Práctica con clientes: historias de usuario, alcance y estimación",
    semanas: "Paralelo (durante todo el pénsum)", nucleo: true,
    practicas: [
      "Entrevistar a un usuario real o simulado y escribir tres historias de usuario con criterios de aceptación",
      "Estimar cinco tareas con rangos optimista, probable y pesimista, y comparar con el tiempo real",
      "Escribir una propuesta de alcance con lo incluido, lo excluido y el esfuerzo estimado",
      "Leer en inglés un artículo sobre historias de usuario o estimación y resumirlo en español",
    ],
    explicar: [
      "Explica la diferencia entre un requerimiento y una solución",
    ],
    criterios: [
      "Tengo una propuesta de alcance para un cliente real",
      "Comparo mis estimaciones con lo real y ajusto mi método según la diferencia",
    ],
  },

  // ==================== PROYECTOS (PAUSABLE) ====================
  {
    id: "pr1", titulo: "Sistema de pesajes (proyecto integrador)", semanas: "8 semanas", nucleo: false,
    practicas: [
      "Definir el alcance del MVP: quién registra pesajes, qué decisión toma el cliente y qué queda fuera",
      "Construir la API de lotes y pesajes con validación y migraciones",
      "Importar un CSV de pesajes validando fila por fila y reportando las filas rechazadas con su motivo",
      "Generar un reporte de pesos fuera de rango por lote",
      "Desplegar el MVP en el VPS con HTTPS",
      "Leer en inglés la documentación de una herramienta del stack y documentar una decisión técnica tomada con ella",
    ],
    explicar: [
      "Explica en cinco líneas qué problema del cliente resuelve el MVP y qué dejaste fuera a propósito",
    ],
    criterios: [
      "Importar un archivo con filas inválidas no detiene la carga y muestra cuántas fallaron y por qué",
      "Un usuario registra un pesaje y lo ve en el reporte sin tocar la base de datos a mano",
    ],
  },
  {
    id: "pr7", titulo: "Mejorar Misionales (convenciones y migraciones)", semanas: "3 semanas", nucleo: false,
    practicas: [
      "Documentar el modelo actual con las convenciones: prefijo tbl_, claves BIGINT y campos de auditoría",
      "Pasar todos los cambios de esquema a migraciones versionadas",
      "Ajustar las respuestas de la API al formato status, body, error y message",
      "Revisar que las contraseñas usan bcrypt y que no se registran en logs",
      "Leer en inglés la documentación de Alembic sobre autogenerate y revisar la migración antes de aplicarla",
    ],
    explicar: [
      "Explica qué cambio de esquema hiciste primero en Misionales y por qué no lo hiciste en un solo paso",
    ],
    criterios: [
      "Todos los endpoints responden con el formato estándar, y una prueba lo verifica",
      "Ningún secreto aparece en el historial de git",
    ],
  },

  // ==================== FRONTEND (PAUSABLE) ====================
  {
    id: "f1", titulo: "React: componentes, props, estado y formularios", semanas: "4 semanas", nucleo: false,
    practicas: [
      "Crear componentes reutilizables con props y estado local",
      "Construir un formulario controlado con validación básica",
      "Consumir una API de prueba con fetch y mostrar estados de carga y de error",
      "Leer en inglés la documentación oficial de React sobre estado y aplicar uno de sus ejemplos",
    ],
    explicar: [
      "Explica cuándo un dato debe vivir en el estado y cuándo en props",
    ],
    criterios: [
      "Una pantalla consume una API de prueba y muestra carga, datos y error",
      "Las llamadas HTTP están en un módulo aparte, no dentro de los componentes visuales",
    ],
  },
  {
    id: "f2", titulo: "Next.js, Tailwind y shadcn/ui consumiendo tu API de pesajes", semanas: "5 semanas", nucleo: false,
    practicas: [
      "Crear un proyecto Next.js con App Router y Tailwind",
      "Instalar componentes de shadcn/ui para tabla y formulario",
      "Consumir la API de pesajes desde el frontend con manejo de errores",
      "Mostrar una gráfica de pesos por semana con Recharts",
      "Leer en inglés la documentación de Next.js sobre App Router y distinguir componentes de servidor y de cliente",
    ],
    explicar: [
      "Explica qué código corre en el servidor y cuál en el navegador dentro de tu panel",
    ],
    criterios: [
      "El panel muestra una tabla y una gráfica con datos reales de mi API",
      "El navegador no recibe secretos del servidor",
    ],
  },
  {
    id: "f3", titulo: "Autenticación en frontend y despliegue en Vercel", semanas: "2 semanas", nucleo: false,
    practicas: [
      "Implementar un login que consume el endpoint de autenticación de pr1",
      "Proteger las rutas del panel y redirigir al login cuando no hay sesión",
      "Desplegar el frontend en Vercel con variables de entorno",
      "Configurar CORS para el dominio de Vercel y probar desde el navegador",
      "Leer en inglés la guía de Vercel sobre variables de entorno y anotar las diferencias entre ambientes",
    ],
    explicar: [
      "Explica dónde guardas el token en el frontend y qué riesgo tiene esa decisión",
    ],
    criterios: [
      "El panel está publicado con login real",
      "Una ruta protegida sin sesión redirige al login, y lo verifiqué en una ventana privada",
    ],
  },

  // ==================== INGLÉS (NÚCLEO, EN PARALELO) ====================
  {
    id: "i1", titulo: "Inglés · Hito 1: B1 sólido", semanas: "Mes 3", nucleo: true,
    practicas: [
      "Escuchar un episodio técnico corto dos veces por semana y anotar la idea principal",
      "Ver un video técnico con subtítulos en inglés y resumirlo en español",
      "Hacer un vocabulario de 50 términos de programación, cada uno con un ejemplo",
    ],
    explicar: [
      "Explica en español la idea principal de un episodio técnico que escuchaste esta semana",
    ],
    criterios: [
      "Entiendo la idea principal de un episodio técnico sin subtítulos",
      "Mi resumen en español coincide con lo que dice el episodio",
    ],
  },
  {
    id: "i2", titulo: "Inglés · Hito 2: B2 lectura técnica", semanas: "Mes 8", nucleo: true,
    practicas: [
      "Leer documentación oficial completa de una herramienta del stack sin traducir cada línea",
      "Subrayar términos desconocidos y explicarlos con tus palabras",
      "Escribir un resumen de cinco líneas de un artículo técnico",
    ],
    explicar: [
      "Explica en inglés, en tres frases, cómo funciona una herramienta que usas",
    ],
    criterios: [
      "Leo documentación oficial y reconstruyo la idea sin traducir frase por frase",
      "Encuentro y aplico una solución leyendo el manual en inglés",
    ],
  },
  {
    id: "i3", titulo: "Inglés · Hito 3: B2+ escritura", semanas: "Mes 12", nucleo: true,
    practicas: [
      "Escribir un README en inglés de un proyecto propio",
      "Escribir un correo de propuesta a un cliente en inglés",
      "Revisar tus textos con una herramienta de corrección y anotar los errores que repites",
    ],
    explicar: [
      "Explica tu proyecto en inglés en un párrafo de cinco frases",
    ],
    criterios: [
      "El README en inglés lo entiende otra persona sin preguntarme nada",
      "El correo de propuesta fue revisado por alguien con nivel C1 o por un profesor",
    ],
  },
  {
    id: "i4", titulo: "Inglés · Hito 4: C1 técnico", semanas: "Meses 15–18", nucleo: true,
    practicas: [
      "Escuchar audio técnico a velocidad natural sin pausar y tomar notas",
      "Escribir un artículo o post técnico con terminología precisa",
      "Participar en una conversación técnica en inglés de 15 minutos",
    ],
    explicar: [
      "Explica un concepto técnico complejo en inglés a alguien sin conocimientos de programación",
    ],
    criterios: [
      "Entiendo audio técnico a velocidad natural",
      "Escribo un texto técnico que un revisor aprueba sin cambios de fondo",
    ],
  },
];

/** Prefijos usados para construir la clave de cada casilla: "<módulo>-<prefijo><posición>". */
export const SECCIONES = [
  { campo: "practicas", prefijo: "p", titulo: "Prácticas", clase: "" },
  { campo: "explicar", prefijo: "e", titulo: "Explícalo en voz alta o por escrito", clase: "explicar" },
  { campo: "criterios", prefijo: "c", titulo: "Criterios de aprobación", clase: "" },
];
