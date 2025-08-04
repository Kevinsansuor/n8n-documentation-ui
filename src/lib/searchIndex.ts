export interface SearchResult {
  path: string;
  title: string;
  content: string;
  category: string;
}

export const searchIndex: SearchResult[] = [
  {
    path: '/article',
    title: 'Guía Completa de la Documentación de n8n',
    category: 'Primeros Pasos',
    content: `
      La documentación de n8n es una herramienta integral para aprender, usar y desarrollar con esta plataforma de automatización de flujos de trabajo. Es un recurso valioso para comprender la arquitectura subyacente de n8n, lo cual es útil si necesitas incrustar n8n o personalizar sus bases de datos predeterminadas.
      Sitio Oficial de n8n Docs: Puedes acceder a la documentación principal a través del sitio web oficial de n8n. Esta cubre todo, desde la configuración inicial hasta el uso y desarrollo de n8n, y también incluye información sobre sus capacidades de IA y automatización de procesos de negocio.
      Quickstarts: Guías de inicio rápido para empezar a usar n8n de inmediato.
      Opciones de Hospedaje: Información sobre las diferentes formas de desplegar n8n (Cloud, npm, autoalojado).
      Integraciones: Un directorio para explorar las librerías de integraciones de n8n. Algunas integraciones populares incluyen Google Sheets, Telegram, MySQL, Slack, y más.
      Funcionalidad de IA: Guías para construir funcionalidades de inteligencia artificial en n8n.
      Nodos Específicos: Información detallada sobre nodos individuales, como el nodo Loop o el nodo HTTP Request.
      Ayuda Directa en la Interfaz: Dentro de la propia interfaz de n8n, muchos nodos tienen un botón de "Docs" que te permite acceder directamente a la documentación relevante.
      Repositorio GitHub de n8n: La documentación y el código fuente de n8n están disponibles en GitHub. Existen repositorios comunitarios que recopilan miles de flujos de trabajo (workflows) de diversas fuentes.
      Recursos Comunitarios y de Aprendizaje: Foro Comunitario de n8n, Cursos y Tutoriales.
      Aprovechando la documentación con IA: Puedes utilizar herramientas de IA entrenadas con la documentación de n8n para ayudarte a encontrar flujos específicos o resolver problemas.
      Consideraciones Importantes: Inspección y Pruebas, Credenciales.
    `,
  },
  {
    path: '/hosting-options',
    title: 'Opciones de Hospedaje de n8n',
    category: 'Primeros Pasos',
    content: `
      n8n ofrece diversas opciones de hospedaje que se adaptan a diferentes necesidades y niveles de conocimiento técnico.
      n8n Cloud (Nube): Esta es la versión alojada y gestionada directamente por el equipo de n8n. Es un servicio de pago. Ventajas: Facilidad y rapidez, siempre actualizado, estabilidad. Desventajas: Costo, menor control de datos, limitaciones de planes.
      Autoalojado (Self-Hosted): Esta opción implica que el usuario instala n8n en su propio servidor. Ventajas: Gratuito o bajo costo, control total de datos, personalización máxima, sin límites. Desventajas: Requiere mantenimiento, conocimientos técnicos.
      npm (Node Package Manager): Una forma específica de autoalojar n8n, generalmente en un entorno local o de desarrollo.
      Comparación General y Recomendaciones: n8n es una alternativa económica a Zapier y Make. Tiene una curva de aprendizaje un poco más avanzada pero es más flexible.
    `,
  },
  {
    path: '/core-concepts',
    title: 'Conceptos Clave de n8n',
    category: 'Conceptos Clave',
    content: `
      n8n es una plataforma de automatización de código abierto "low-code".
      Workflows (Flujos de Trabajo): El núcleo de la automatización. Se componen de nodos conectados. Se pueden organizar, nombrar, etiquetar, activar/desactivar, importar/exportar y versionar.
      Nodos (Nodes): Cada nodo representa una acción. Tipos: Trigger, Acción, Lógica/Control, Transformación de Datos, IA.
      Credenciales (Credentials): Claves o permisos para conectarse a aplicaciones.
      Otros Conceptos: Código Abierto, Comunidad, Agentes de IA, Manejo de Errores, RAG.
    `,
  },
  {
    path: '/nodes',
    title: 'Tipos de Nodos en n8n',
    category: 'Nodos',
    content: `
      Los nodos son los componentes para construir workflows.
      Nodos Trigger (Disparadores): Inician un workflow. Ejemplos: Manual, App Event, Schedule, Webhook, Call Workflow, Form Trigger.
      Nodos de Acción: Ejecutan acciones específicas.
      Nodos de Control de Flujo (Helper): Gestionan la lógica. Ejemplos: If, Switch, Merge, Wait, Loop.
      Nodos de Transformación de Datos: Manipulan datos. Ejemplos: Set, Aggregate, Sort.
      Nodos de Inteligencia Artificial (IA): Integran IA. Ejemplos: AI Agent, Basic LLM Chain, Text Classifier.
      RAG (Retrieval Augmented Generation): Sistema para mejorar la precisión de los agentes de IA.
      Nodos Core: Utilidad general. Ejemplos: HTTP Request, Code.
      Nodos de la Comunidad: Desarrollados por contribuidores externos.
      Funcionalidades Comunes: Input/Output, Configuración, Pin Data, Desactivar, Notas, Expresiones, Manejo de Errores.
    `,
  },
  {
    path: '/workflows',
    title: 'Workflows en n8n',
    category: 'Workflows',
    content: `
      Los workflows son la base para construir automatizaciones.
      Estructura y Componentes: Canvas Visual, Modos de Trabajo, Nombres y Etiquetas, Proyectos, Notas Adhesivas, Input/Output.
      Tipos de Nodos Clave: Trigger, Acción, Control de Flujo, Transformación, IA, Core, Comunidad.
      Funcionalidades Avanzadas: Gestión de Credenciales, Expresiones, Test Step, Activación, Manejo de Errores, Control de Versiones, Sub-Workflows, Plantillas, RAG.
      Mejores Prácticas: Claridad, Modularidad, Manejo de Errores, Seguridad, Optimización, Testeo.
    `,
  },
  {
    path: '/advanced',
    title: 'Conceptos Avanzados: Seguridad, APIs y Autenticación',
    category: 'Avanzado',
    content: `
      APIs en n8n: El Corazón de la Conectividad. El nodo HTTP Request es clave. Soporta métodos HTTP (GET, POST, PATCH, DELETE), configuración de URL, headers, body y autenticación. Puede importar cURL.
      Autenticación en n8n: Gestión Centralizada de Credenciales (API Key, OAuth2, Bearer Token). Seguridad de Webhooks (URLs de Prueba vs. Producción, Autenticación Básica, Header, JWT).
      Seguridad y Mejores Prácticas: Elección del Despliegue (Self-Hosted vs. Cloud). Gestión de Datos Sensibles (Sistema de Credenciales, Set Node, Batch Processing). Manejo de Errores (Control de flujo, Reintentos, Error Trigger, Fallback Model). Pruebas y Documentación (Modo Ejecución, Test Step, Mock Data, Sticky Notes, Control de Versiones). Mantenimiento y Actualizaciones. Control de Acceso (Basado en Roles, Proyectos).
    `,
  },
];