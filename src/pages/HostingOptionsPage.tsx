import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';
import { useRef } from 'react';

const HostingOptionsPage = () => {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article ref={contentRef} className="prose dark:prose-invert prose-lg max-w-none lg:w-3/4 prose-headings:font-semibold prose-h1:text-blue-500 prose-h2:border-b prose-h2:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-strong:text-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded-md">
            <h1>Opciones de Hospedaje de n8n</h1>
            <p>
              n8n ofrece diversas opciones de hospedaje que se adaptan a diferentes necesidades y niveles de conocimiento técnico. Originalmente, n8n nació como una herramienta de código abierto, permitiendo a los usuarios realizar sus propias instalaciones. Con el tiempo, se dieron cuenta de que los usuarios solicitaban una forma más sencilla de trabajar, lo que llevó a la creación de la opción en la nube (Cloud).
            </p>
            
            <h2 id="n8n-cloud">1. n8n Cloud (Nube)</h2>
            <p>
              Esta es la versión alojada y gestionada directamente por el equipo de n8n. Es un servicio de pago en el que n8n se encarga de todo el mantenimiento, actualizaciones y seguridad. Todos los datos quedan guardados en sus servidores. Es una solución fácil y rápida de usar, ya que no tienes que instalar nada, simplemente te registras y empiezas a automatizar.
            </p>
            <h3 id="cloud-ventajas">Ventajas:</h3>
            <ul>
              <li><strong>Facilidad y rapidez de uso:</strong> No requiere conocimientos técnicos para la instalación o el mantenimiento. Es buena para principiantes o para quienes no quieren preocuparse por servidores.</li>
              <li><strong>Siempre actualizado:</strong> El equipo de n8n gestiona las actualizaciones y la seguridad.</li>
              <li><strong>Estabilidad y escalabilidad:</strong> Ideal si tu proyecto necesita crecer sin complicaciones de infraestructura.</li>
              <li><strong>Periodo de prueba:</strong> Ofrecen una semana de prueba gratuita o 14 días con hasta 1000 ejecuciones.</li>
            </ul>
            <h3 id="cloud-desventajas">Desventajas:</h3>
            <ul>
                <li><strong>Costo:</strong> Implica una suscripción mensual, que puede ser más cara que otras alternativas. Por ejemplo, el plan Starter cuesta aproximadamente 24 € al mes (casi 30 € con impuestos), con limitaciones de 2500 ejecuciones de flujo y cinco flujos activos.</li>
                <li><strong>Menor control de datos:</strong> Toda la información se almacena en los servidores de n8n, lo que podría no ser ideal si manejas información sensible o necesitas cumplir con normativas de privacidad estrictas.</li>
                <li><strong>Limitaciones de planes:</strong> Dependiendo del plan, puedes tener limitaciones en el número de ejecuciones, flujos activos o proyectos.</li>
                <li><strong>Nodos de la comunidad:</strong> Históricamente, algunos nodos de la comunidad no eran accesibles en la versión Cloud, aunque recientemente se han integrado algunos (los 25 más utilizados).</li>
            </ul>

            <h2 id="autoalojado">2. Autoalojado (Self-Hosted)</h2>
            <p>
              Esta opción implica que el usuario instala n8n en su propio servidor. n8n es de código abierto, lo que permite que sea instalado en un servidor local (en tu computadora) o en un servidor virtual privado (VPS) en la nube que tú contrates.
            </p>
            <h3 id="autoalojado-ventajas">Ventajas:</h3>
            <ul>
                <li><strong>Gratuito o muy bajo costo:</strong> La versión en sí es gratuita. Solo pagarías por el costo del servidor si lo alojas en un VPS.</li>
                <li><strong>Control total de datos:</strong> Tienes control absoluto sobre tus datos y configuraciones.</li>
                <li><strong>Personalización máxima:</strong> Puedes modificar el código, añadir funciones y adaptar n8n a tus necesidades.</li>
                <li><strong>Modelos de lenguaje en local:</strong> Puedes ejecutar modelos de lenguaje (LLMs) en tu servidor local.</li>
                <li><strong>Sin límites de operaciones:</strong> No hay límites en las ejecuciones de flujo o escenarios activos.</li>
                <li><strong>Nodos de la comunidad:</strong> Permite la instalación de nodos creados por la comunidad.</li>
            </ul>
            <h3 id="autoalojado-desventajas">Desventajas:</h3>
            <ul>
                <li><strong>Requiere mantenimiento:</strong> Eres responsable de actualizarlo, hacer copias de seguridad y resolver problemas.</li>
                <li><strong>Conocimientos técnicos:</strong> Necesitas saber gestionar servidores.</li>
                <li><strong>Configuración de red:</strong> Si lo ejecutas localmente, necesitarás configurar tu red para recibir tráfico entrante.</li>
            </ul>

            <h2 id="npm">3. npm (Node Package Manager)</h2>
            <p>
              Esta es una forma específica de autoalojar n8n, generalmente en un entorno local o de desarrollo. Dado que n8n está construido sobre Node.js, puedes instalarlo y ejecutarlo directamente a través de npm. Se recomienda para pruebas, fases de aprendizaje o para desarrollar plugins internamente.
            </p>

            <h2 id="comparacion">Comparación General y Recomendaciones</h2>
            <p>
              <strong>Costo:</strong> n8n es una alternativa económica a Zapier y Make, especialmente en su versión autoalojada.
            </p>
            <p>
              <strong>Flexibilidad y Potencia:</strong> n8n es una herramienta "low-code", lo que significa que ofrece la posibilidad de tocar código en los nodos, dándole una flexibilidad superior a Make o Zapier.
            </p>
            <p>
              <strong>Curva de Aprendizaje:</strong> n8n tiene una curva de aprendizaje "un poco más avanzada", pero la comunidad y la documentación facilitan el proceso.
            </p>
            <h3 id="cual-elegir">¿Cuál elegir?</h3>
            <ul>
                <li>Si buscas <strong>facilidad y rapidez</strong>, la versión en la <strong>nube</strong> es una buena opción.</li>
                <li>Si necesitas <strong>control total, personalización o reducir costos</strong>, el <strong>autoalojamiento</strong> en un VPS es la opción recomendada.</li>
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

export default HostingOptionsPage;