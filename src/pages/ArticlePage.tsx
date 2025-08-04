import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const ArticlePage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
          <h1>Guía Completa de la Documentación de n8n</h1>
          <p>
            La documentación de n8n es una herramienta integral para aprender, usar y desarrollar con esta plataforma de automatización de flujos de trabajo. Es un recurso valioso para comprender la arquitectura subyacente de n8n, lo cual es útil si necesitas incrustar n8n o personalizar sus bases de datos predeterminadas.
          </p>
          
          <h2 id="sitio-oficial">Sitio Oficial de n8n Docs</h2>
          <p>
            Puedes acceder a la documentación principal a través del <strong>sitio web oficial de n8n</strong>. Esta cubre todo, desde la configuración inicial hasta el uso y desarrollo de n8n, y también incluye información sobre sus capacidades de IA y automatización de procesos de negocio.
          </p>
          <ul>
            <li><strong>Quickstarts:</strong> Guías de inicio rápido para empezar a usar n8n de inmediato.</li>
            <li><strong>Opciones de Hospedaje:</strong> Información sobre las diferentes formas de desplegar n8n (Cloud, npm, autoalojado).</li>
            <li><strong>Integraciones:</strong> Un directorio para explorar las librerías de integraciones de n8n. Algunas integraciones populares incluyen Google Sheets, Telegram, MySQL, Slack, y más.</li>
            <li><strong>Funcionalidad de IA:</strong> Guías para construir funcionalidades de inteligencia artificial en n8n.</li>
            <li><strong>Nodos Específicos:</strong> Información detallada sobre nodos individuales, como el nodo Loop o el nodo HTTP Request.</li>
            <li><strong>Ayuda Directa en la Interfaz:</strong> Dentro de la propia interfaz de n8n, muchos nodos tienen un botón de "Docs" que te permite acceder directamente a la documentación relevante.</li>
          </ul>

          <h2 id="repositorio-github">Repositorio GitHub de n8n</h2>
          <p>
            La documentación y el código fuente de n8n están disponibles en <strong>GitHub</strong>. Existen repositorios comunitarios que recopilan miles de flujos de trabajo (workflows) de diversas fuentes.
          </p>
          <ul>
              <li><strong>Flujos de Trabajo Documentados:</strong> Ofrecen flujos de trabajo con descripciones claras, eliminación de duplicados y nombres de archivo actualizados para una mejor búsqueda.</li>
              <li><strong>Servidor MCP (Model Context Protocol):</strong> Algunos repositorios ofrecen un servidor MCP que te permite interactuar con esta gran base de datos de conocimiento de flujos de n8n documentados.</li>
              <li><strong>Casos de Uso Reales:</strong> La documentación de GitHub también puede contener ejemplos de flujos de trabajo para tareas específicas.</li>
          </ul>

          <h2 id="recursos-comunitarios">Recursos Comunitarios y de Aprendizaje</h2>
          <ul>
              <li><strong>Foro Comunitario de n8n:</strong> Un lugar donde puedes conectar con otros usuarios de n8n y obtener soporte de la comunidad.</li>
              <li><strong>Cursos y Tutoriales:</strong> n8n ofrece academias oficiales y otros recursos para un aprendizaje estructurado.</li>
          </ul>

          <h2 id="ia-docs">Aprovechando la documentación con IA</h2>
          <p>
            Puedes utilizar herramientas de IA entrenadas con la documentación de n8n para ayudarte a encontrar flujos específicos o resolver problemas.
          </p>
          <ul>
              <li><strong>GPT Personalizados (Custom GPTs):</strong> Pueden generar JSONs de workflows listos para copiar y pegar en n8n.</li>
              <li><strong>Claude/Cursor:</strong> Pueden ser alimentadas con archivos de la documentación para generar workflows, depurar código y ofrecer soluciones complejas.</li>
          </ul>

          <h2 id="consideraciones">Consideraciones Importantes</h2>
          <p>
            Al usar los flujos de trabajo de la documentación, recuerda:
          </p>
          <ul>
              <li><strong>Inspección y Pruebas:</strong> Todos los flujos de trabajo compartidos se proporcionan tal cual. Es fundamental inspeccionarlos y probarlos en un entorno controlado.</li>
              <li><strong>Credenciales:</strong> Necesitarás configurar tus propias credenciales para cada nodo en los flujos de trabajo que descargues o importes.</li>
          </ul>
        </article>

        <aside className="hidden lg:block lg:w-1/4">
          <OnThisPageSidebar contentRef={contentRef} />
        </aside>
      </div>
    </DocsLayout>
  );
};

export default ArticlePage;