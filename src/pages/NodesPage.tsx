import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const NodesPage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
            <h1>Tipos de Nodos en n8n</h1>
            <p>
              En n8n, los nodos son los componentes fundamentales para construir automatizaciones, conocidos como workflows. Cada nodo representa una acción o servicio específico y se conectan entre sí con líneas para establecer el flujo de datos y la lógica del proceso. La interfaz de n8n es muy visual e intuitiva, facilitando la creación de flujos de trabajo complejos.
            </p>
            
            <h2 id="nodos-trigger">Nodos Trigger (Disparadores)</h2>
            <p>Son los nodos que inician un workflow cuando ocurre un evento.</p>
            <ul>
              <li><strong>Manual Trigger:</strong> Activa el workflow al hacer clic en un botón.</li>
              <li><strong>App Event Trigger:</strong> Se dispara cuando sucede algo en una aplicación específica, como recibir un correo electrónico en Gmail. n8n cuenta con más de 400 aplicaciones integradas.</li>
              <li><strong>Schedule Trigger:</strong> Permite programar la ejecución del workflow a intervalos de tiempo específicos, como cada día, semana, mes, o utilizando expresiones Cron personalizadas.</li>
              <li><strong>Webhook Trigger:</strong> Proporciona una URL (endpoint) que permite a otras aplicaciones enviar datos a n8n para iniciar un workflow.</li>
              <li><strong>Call Workflow Trigger:</strong> Este nodo permite que un workflow inicie la ejecución de otro workflow independiente, lo cual es útil para la modularidad y la gestión de multiagentes.</li>
              <li><strong>Form Trigger:</strong> Desencadena un workflow cuando se envía un formulario, lo que es útil para recopilar información de los usuarios.</li>
            </ul>

            <h2 id="nodos-accion">Nodos de Acción</h2>
            <p>Estos nodos ejecutan acciones específicas dentro del workflow. Ejemplos incluyen la interacción con bases de datos, el envío de mensajes, la gestión de correos electrónicos, y la interacción con CRMs.</p>

            <h2 id="nodos-control-flujo">Nodos de Control de Flujo (o Helper)</h2>
            <p>Estos nodos permiten que el workflow funcione de manera no lineal, gestionando la lógica y las ramificaciones.</p>
            <ul>
              <li><strong>If Node:</strong> Permite verificar condiciones y dirigir el flujo por diferentes caminos.</li>
              <li><strong>Switch Node:</strong> Actúa como una serie de condiciones "if" encadenadas.</li>
              <li><strong>Split Out Node:</strong> Divide una entrada en múltiples partes.</li>
              <li><strong>Merge Node:</strong> Combina datos de diferentes fuentes.</li>
              <li><strong>Wait Node:</strong> Introduce una pausa en el workflow.</li>
              <li><strong>Human in the Loop Node:</strong> Pausa la automatización hasta recibir una aprobación humana.</li>
              <li><strong>Loop Node:</strong> Itera sobre una lista de elementos.</li>
            </ul>

            <h2 id="nodos-transformacion-datos">Nodos de Transformación de Datos</h2>
            <p>Gestionan y transforman las estructuras de datos dentro del workflow.</p>
            <ul>
              <li><strong>Set Node (Edit Fields):</strong> Permite modificar, añadir o eliminar variables o campos.</li>
              <li><strong>Aggregate Node:</strong> Acumula múltiples datos en una sola estructura.</li>
              <li><strong>Sort Node:</strong> Ordena los datos.</li>
            </ul>

            <h2 id="nodos-ia">Nodos de Inteligencia Artificial (IA)</h2>
            <p>n8n integra una variedad de nodos específicos para trabajar con IA.</p>
            <ul>
              <li><strong>AI Agent Node:</strong> Es el nodo principal para crear agentes conversacionales o chatbots.</li>
              <li><strong>Basic LLM Chain Node:</strong> Permite enviar mensajes a un modelo de lenguaje.</li>
              <li><strong>Message to Model Node:</strong> Específico para la API de OpenAI, con funciones de análisis y generación.</li>
              <li><strong>Text Classifier Node:</strong> Clasifica textos en categorías.</li>
              <li><strong>Sentiment Analysis Node:</strong> Identifica el sentimiento de un texto.</li>
              <li><strong>Summarization Chain Node:</strong> Genera resúmenes de textos extensos.</li>
              <li><strong>Question and Answer Chain Node:</strong> Se utiliza para implementar sistemas de RAG.</li>
              <li><strong>Think Tool Node:</strong> Un sub-nodo que actúa como un paso de razonamiento para el agente de IA.</li>
              <li><strong>Model Selector:</strong> Permite seleccionar dinámicamente el modelo de lenguaje a utilizar.</li>
              <li><strong>Fallback Model:</strong> Permite configurar un modelo de IA secundario si el principal falla.</li>
            </ul>
            <h3 id="rag">RAG (Retrieval Augmented Generation)</h3>
            <p>Es un sistema que se implementa utilizando nodos de agentes de IA junto con bases de datos vectoriales para reducir las alucinaciones y superar las limitaciones de contexto de los LLMs.</p>
            
            <h2 id="nodos-core">Nodos Core</h2>
            <p>Son nodos de utilidad general integrados directamente en n8n.</p>
            <ul>
              <li><strong>HTTP Request Node:</strong> Permite conectar con APIs externas.</li>
              <li><strong>Code Node:</strong> Ofrece la posibilidad de añadir código personalizado en JavaScript o Python.</li>
            </ul>

            <h2 id="nodos-comunidad">Nodos de la Comunidad</h2>
            <p>Son nodos desarrollados por contribuidores externos a n8n, que amplían significativamente sus capacidades.</p>

            <h2 id="funcionalidades-comunes">Funcionalidades Comunes de los Nodos</h2>
            <p>Los nodos comparten varias funcionalidades para mejorar la usabilidad y la eficiencia:</p>
            <ul>
              <li><strong>Input y Output:</strong> Todos los nodos reciben y generan información.</li>
              <li><strong>Configuración:</strong> Cada nodo tiene un panel para ajustar sus parámetros.</li>
              <li><strong>Pin Data:</strong> Fija los datos de salida de un nodo para facilitar las pruebas.</li>
              <li><strong>Desactivar Nodos:</strong> Permite deshabilitar nodos temporalmente.</li>
              <li><strong>Notas Adhesivas:</strong> Para documentar y organizar el workflow visualmente.</li>
              <li><strong>Expresiones:</strong> Permiten usar código JavaScript para establecer parámetros dinámicamente.</li>
              <li><strong>Manejo de Errores:</strong> Herramientas para gestionar fallos y configurar reintentos.</li>
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

export default NodesPage;