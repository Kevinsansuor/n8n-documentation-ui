import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const WorkflowsPage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
            <h1>Workflows en n8n</h1>
            <p>
              En n8n, los workflows son la base para construir automatizaciones, actuando como la lógica que conecta diferentes aplicaciones y servicios de forma visual. Cada workflow se compone de nodos, que son los pasos individuales que ejecutan acciones específicas.
            </p>

            <h2 id="estructura">Estructura y Componentes Fundamentales</h2>
            <ul>
              <li><strong>Canvas Visual:</strong> Los workflows se diseñan en un lienzo visual donde añades y conectas los nodos.</li>
              <li><strong>Modos de Trabajo:</strong> Modo Editor para construir y Modo Ejecución para depurar.</li>
              <li><strong>Nombres y Etiquetas (Tags):</strong> Esencial para categorizar, buscar y organizar tus workflows.</li>
              <li><strong>Organización por Proyectos:</strong> Ayuda a gestionar el trabajo y a compartir credenciales de forma segura.</li>
              <li><strong>Notas Adhesivas (Sticky Notes):</strong> Cruciales para documentar el flujo, soportan Markdown y colores.</li>
              <li><strong>Entrada (Input) y Salida (Output):</strong> Cada nodo recibe y genera información, visible en formato tabla, JSON o esquema.</li>
            </ul>

            <h2 id="nodos-clave">Tipos de Nodos Clave en un Workflow</h2>
            <p>Los nodos se dividen en varias categorías principales que definen su función:</p>
            <h3 id="nodos-trigger">1. Nodos Trigger (Disparadores)</h3>
            <p>Son el punto de inicio. Ejemplos: Manual, App Event, Schedule, Webhook, Call Workflow, Form Trigger, y Error Trigger.</p>
            <h3 id="nodos-accion">2. Nodos de Acción</h3>
            <p>Ejecutan tareas en aplicaciones externas como bases de datos, plataformas de mensajería, email, etc.</p>
            <h3 id="nodos-control">3. Nodos de Control de Flujo (Helper)</h3>
            <p>Permiten lógica no lineal. Ejemplos: If, Switch, Merge, Wait, Human in the Loop, y Loop.</p>
            <h3 id="nodos-transformacion">4. Nodos de Transformación de Datos</h3>
            <p>Gestionan y adaptan datos. Ejemplos: Set (Edit Fields), Aggregate, y Sort.</p>
            <h3 id="nodos-ia">5. Nodos de Inteligencia Artificial (IA)</h3>
            <p>Integran IA en tus flujos. Incluyen AI Agent, Basic LLM Chain, Message to Model, Text Classifier, y más.</p>
            <h3 id="nodos-core">6. Nodos Core</h3>
            <p>Utilidades generales como HTTP Request (para APIs) y Code (para JavaScript/Python).</p>
            <h3 id="nodos-comunidad">7. Nodos de la Comunidad</h3>
            <p>Desarrollados por contribuidores externos, expandiendo las capacidades de n8n.</p>

            <h2 id="funcionalidades-avanzadas">Funcionalidades y Conceptos Avanzados</h2>
            <ul>
              <li><strong>Gestión de Credenciales:</strong> Centraliza API keys para reutilizarlas de forma segura.</li>
              <li><strong>Expresiones:</strong> Usa JavaScript (entre <code>{`{{...}}`}</code>) para establecer parámetros dinámicamente.</li>
              <li><strong>Prueba de Paso (Test Step):</strong> Ejecuta un solo nodo para facilitar la depuración.</li>
              <li><strong>Activación del Workflow:</strong> Un workflow debe estar "activo" para ejecutarse automáticamente en producción.</li>
              <li><strong>Manejo de Errores:</strong> Configura acciones alternativas, reintentos y notificaciones para fallos.</li>
              <li><strong>Control de Versiones:</strong> n8n guarda automáticamente el historial de cambios para que puedas revertirlos.</li>
              <li><strong>Reutilización y Modularidad (Sub-Workflows):</strong> Divide flujos complejos en otros más pequeños y reutilizables.</li>
              <li><strong>Plantillas (Templates):</strong> Usa workflows pre-construidos por la comunidad para acelerar el desarrollo.</li>
              <li><strong>RAG (Retrieval Augmented Generation):</strong> Arquitectura para expandir el conocimiento de los LLMs con fuentes de datos externas.</li>
            </ul>

            <h2 id="mejores-practicas">Mejores Prácticas en Workflows</h2>
            <ul>
              <li><strong>Claridad y Organización:</strong> Usa nombres descriptivos y notas adhesivas.</li>
              <li><strong>Modularidad:</strong> Divide lógicas complejas en sub-workflows.</li>
              <li><strong>Manejo de Errores:</strong> Implementa sistemas robustos para la fiabilidad.</li>
              <li><strong>Seguridad:</strong> Protege tus webhooks y credenciales.</li>
              <li><strong>Optimización:</strong> Usa procesamiento por lotes (batch) para grandes volúmenes de datos.</li>
              <li><strong>Testeo:</strong> Prueba siempre en entornos controlados antes de pasar a producción.</li>
            </ul>
          </article>

          <aside className="hidden lg:block lg:w-1/4">
            <OnThisPageSidebar contentRef={contentRef} />
          </aside>
        </div>
      </div>
    </DocsLayout>
  );
};

export default WorkflowsPage;