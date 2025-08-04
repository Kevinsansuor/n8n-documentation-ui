import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const CoreConceptsPage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
          <h1>Conceptos Clave de n8n</h1>
          <p>
            n8n se presenta como una plataforma de automatización de código abierto que nació en 2019. Se distingue por ser una herramienta "low-code", lo que significa que, si bien no siempre necesitas programar, te permite "tunear" o tocar códigos en los nodos para una mayor personalización. Esto le otorga una flexibilidad superior a otras herramientas "no-code" como Zapier o Make.
          </p>

          <h2 id="workflows">1. Workflows (Flujos de Trabajo)</h2>
          <p>Los workflows son el núcleo de la automatización en n8n. Son la "mesa de trabajo" donde se diseñan y ejecutan las automatizaciones.</p>
          <h3 id="workflows-composicion">Composición y Representación Visual</h3>
          <p>Un workflow se compone de nodos y se conectan entre sí para establecer el flujo de datos. n8n utiliza una interfaz visual intuitiva donde puedes arrastrar y soltar nodos en un lienzo (conocido como "Canvas").</p>
          <h3 id="workflows-organizacion">Organización y Nomenclatura</h3>
          <ul>
            <li>Puedes nombrar tus workflows de forma descriptiva.</li>
            <li>Es posible añadir etiquetas (tags) para filtrarlos y buscarlos fácilmente.</li>
            <li>n8n permite organizar los workflows en proyectos y carpetas.</li>
          </ul>
          <h3 id="workflows-ejecucion">Estado y Ejecución</h3>
          <ul>
            <li>Un workflow puede estar activo o inactivo. Cuando está activo, funciona continuamente.</li>
            <li>Puedes probar y depurar tus flujos antes de activarlos.</li>
            <li>n8n guarda un historial de ejecuciones ("Executions").</li>
            <li>Existe la opción de "pinear" (fijar) datos en un nodo durante las pruebas.</li>
          </ul>
          <h3 id="workflows-importacion">Importación y Exportación</h3>
          <p>Los workflows se pueden descargar y cargar en formato JSON.</p>
          <h3 id="workflows-versiones">Control de Versiones</h3>
          <p>n8n ofrece un historial de revisiones que te permite volver a versiones anteriores.</p>
          <h3 id="workflows-modularidad">Diseño Modular y Sub-workflows</h3>
          <p>Se recomienda dividir tareas complejas en sub-workflows que pueden ser llamados por un workflow principal.</p>

          <h2 id="nodos">2. Nodos (Nodes)</h2>
          <p>Cada nodo en n8n representa una acción o servicio específico.</p>
          <h3 id="nodos-tipos">Tipos de Nodos</h3>
          <ul>
            <li><strong>Nodos Trigger (Disparadores):</strong> Son el punto de inicio. Ejemplos: Manual, On App Event, Schedule, Webhook.</li>
            <li><strong>Nodos de Acción (Action Nodes):</strong> Realizan tareas específicas. Ejemplos: Google Sheets, Telegram, MySQL, Slack.</li>
            <li><strong>Nodos de Lógica/Control de Flujo (Flow Control Nodes):</strong> Permiten ramificar o controlar la secuencia. Ejemplos: If, Switch, Merge, Loop, Wait.</li>
            <li><strong>Nodos de Transformación de Datos (Data Transformation Nodes):</strong> Manipulan datos. Ejemplos: Set / Edit Fields, Code Node.</li>
            <li><strong>Nodos de IA (AI/LLM Nodes):</strong> Para integrar inteligencia artificial. Ejemplos: AI Agent, Basic LLM Chain, Vector Store.</li>
          </ul>
          <h3 id="nodos-configuracion">Configuración y Datos de Nodos</h3>
          <p>La información de entrada (Input Data) y salida (Output Data) de cada nodo es visible, generalmente en formato JSON.</p>

          <h2 id="credenciales">3. Credenciales (Credentials)</h2>
          <p>Las credenciales son las claves o permisos que n8n utiliza para conectarse a las diferentes aplicaciones y servicios. Se gestionan en una sección específica y pueden ser API Keys o métodos OAuth/OAuth2.</p>

          <h2 id="otros-conceptos">4. Otros Conceptos Importantes</h2>
          <ul>
            <li><strong>Código Abierto (Open-source):</strong> Su código es visible, permite el autoalojamiento y la adición de funciones personalizadas.</li>
            <li><strong>Comunidad:</strong> Muy activa, ofrece plantillas y nodos de la comunidad.</li>
            <li><strong>Agentes de IA y Multi-agentes:</strong> Capacidad para crear agentes y sistemas multi-agente.</li>
            <li><strong>Manejo de Errores (Error Handling):</strong> Permite configurar cómo se comportan los workflows ante errores.</li>
            <li><strong>RAG (Retrieval Augmented Generation):</strong> Técnica para mejorar la precisión de los agentes de IA al permitirles buscar información en una base de conocimiento.</li>
          </ul>
        </article>

        <aside className="hidden lg:block lg:w-1/4">
          <OnThisPageSidebar contentRef={contentRef} />
        </aside>
      </div>
    </DocsLayout>
  );
};

export default CoreConceptsPage;