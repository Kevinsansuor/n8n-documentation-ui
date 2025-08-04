import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const AdvancedPage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
          <h1>Conceptos Avanzados: Seguridad, APIs y Autenticación</h1>
          
          <h2 id="apis">1. APIs en n8n: El Corazón de la Conectividad</h2>
          <p>Una API (Interfaz de Programación de Aplicaciones) es el mecanismo que permite a las aplicaciones comunicarse entre sí. n8n, siendo una plataforma de automatización low-code de código abierto, se distingue por su flexibilidad para conectar e interactuar con prácticamente cualquier servicio o aplicación, incluso si no tienen una integración nativa predefinida.</p>
          <p>El nodo clave para interactuar con APIs externas en n8n es el <strong>HTTP Request Node</strong>. Este nodo es extremadamente versátil y permite realizar diversas acciones:</p>
          <ul>
            <li><strong>Métodos HTTP:</strong> Soporta métodos como GET (para obtener datos), POST (para crear nuevos datos), PATCH (para modificar parcialmente datos) y DELETE (para eliminar datos).</li>
            <li><strong>Configuración:</strong> Permite configurar la URL (endpoint), los headers (cabeceras), el cuerpo (body) de la solicitud en formatos como JSON, y distintos tipos de autenticación.</li>
            <li><strong>Reemplazo de Nodos Nativos:</strong> El nodo HTTP Request permite replicar la funcionalidad de casi cualquier nodo si conoces la API del servicio.</li>
            <li><strong>Importar cURL:</strong> n8n puede importar comandos cURL, lo que simplifica la configuración de las solicitudes HTTP.</li>
          </ul>

          <h2 id="autenticacion">2. Autenticación en n8n</h2>
          <p>La autenticación es crucial para asegurar que solo usuarios o sistemas autorizados puedan acceder a tus workflows. n8n ofrece varias formas de gestionar esto:</p>
          
          <h3 id="gestion-credenciales">2.1. Gestión Centralizada de Credenciales</h3>
          <p>Es una práctica recomendada centralizar las API keys, tokens y contraseñas sensibles en n8n.</p>
          <ul>
            <li><strong>Beneficios:</strong> Facilita la reutilización, mejora la seguridad y simplifica la actualización.</li>
            <li><strong>Tipos de Credenciales:</strong> API Key, OAuth2, Bearer Token, y credenciales genéricas o personalizables.</li>
            <li><strong>Creación y Acceso:</strong> Se pueden crear desde el panel principal o directamente desde un nodo.</li>
          </ul>

          <h3 id="seguridad-webhooks">2.2. Seguridad de Webhooks</h3>
          <p>Los Webhooks son un punto de entrada crucial y deben ser protegidos:</p>
          <ul>
            <li><strong>URLs de Prueba vs. Producción:</strong> n8n genera URLs distintas para entornos de prueba y producción.</li>
            <li><strong>Autenticación del Webhook:</strong> Se puede configurar autenticación Básica, por Cabecera (Header) o con JWT (JSON Web Token).</li>
            <li><strong>Control de Acceso por Datos:</strong> Usar nodos como If para verificar al remitente y detener la ejecución si no está autorizado.</li>
          </ul>

          <h2 id="seguridad-general">3. Seguridad y Mejores Prácticas Generales</h2>
          <p>Para asegurar la fiabilidad, eficiencia y seguridad de tus automatizaciones, considera:</p>
          
          <h3 id="despliegue">3.1. Elección del Despliegue (Self-Hosted vs. Cloud)</h3>
          <ul>
            <li><strong>Self-Hosted:</strong> Control total sobre datos e infraestructura. Ideal para información sensible.</li>
            <li><strong>Cloud:</strong> Más fácil y rápido, con mantenimiento gestionado por n8n.</li>
          </ul>

          <h3 id="datos-sensibles">3.2. Gestión de Datos Sensibles</h3>
          <ul>
            <li><strong>Sistema de Credenciales:</strong> Usar siempre el sistema de credenciales de n8n para información sensible.</li>
            <li><strong>Variables y Expresiones:</strong> Usar el nodo Set y expresiones (<code>{`{{...}}`}</code>) para manejar datos dinámicamente.</li>
            <li><strong>Batch Processing:</strong> Para manejar grandes volúmenes de datos de forma eficiente.</li>
          </ul>

          <h3 id="manejo-errores">3.3. Manejo de Errores y Robustez</h3>
          <ul>
            <li><strong>Planificación de Fallos:</strong> Usar control de flujo condicional, reintentos, notificaciones y el Error Trigger.</li>
            <li><strong>Fallback Model (IA):</strong> Configurar un modelo de IA secundario si el principal falla.</li>
          </ul>

          <h3 id="pruebas-documentacion">3.4. Pruebas y Documentación</h3>
          <ul>
            <li><strong>Pruebas Exhaustivas:</strong> Probar en entornos controlados antes de la producción.</li>
            <li><strong>Herramientas de Depuración:</strong> Usar el Modo Ejecución, Test Step y Mock Data.</li>
            <li><strong>Documentación:</strong> Usar Sticky Notes y aprovechar el control de versiones.</li>
          </ul>

          <h3 id="mantenimiento-actualizaciones">3.5. Mantenimiento y Actualizaciones</h3>
          <ul>
            <li><strong>Actualizaciones:</strong> En versiones autoalojadas, el usuario debe actualizar manualmente.</li>
            <li><strong>Optimización:</strong> Configurar correctamente la zona horaria.</li>
          </ul>

          <h3 id="control-acceso">3.6. Control de Acceso</h3>
          <ul>
            <li><strong>Basado en Roles:</strong> Asignar los permisos mínimos necesarios.</li>
            <li><strong>Proyectos/Carpetas:</strong> Organizar workflows para gestionar el acceso a credenciales.</li>
          </ul>
          <p>Dominar estos aspectos avanzados es crucial para llevar tus automatizaciones en n8n a un nivel profesional.</p>
        </article>

        <aside className="hidden lg:block lg:w-1/4">
          <OnThisPageSidebar contentRef={contentRef} />
        </aside>
      </div>
    </DocsLayout>
  );
};

export default AdvancedPage;