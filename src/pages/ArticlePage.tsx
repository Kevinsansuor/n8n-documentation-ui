import { DocsLayout } from '@/components/DocsLayout';
import { OnThisPageSidebar } from '@/components/OnThisPageSidebar';

const ArticlePage = () => {
  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article className="prose prose-invert prose-lg max-w-none lg:w-3/4 text-gray-300 prose-headings:text-white prose-h1:text-blue-400 prose-h2:border-b prose-h2:border-gray-800 prose-h2:pb-2 prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-strong:text-white prose-code:text-pink-400 prose-code:bg-[#1f2937] prose-code:p-1 prose-code:rounded-md prose-pre:bg-[#1f2937] prose-pre:border prose-pre:border-gray-800">
            <h1>Introduction</h1>
            <p>
              Welcome to the n8n documentation. n8n is a free and open-source workflow automation tool. It enables you to connect different applications and services to automate your tasks. This guide will walk you through the basics of n8n, from installation to creating your first workflow.
            </p>
            
            <h2 id="what-is-n8n">What is n8n?</h2>
            <p>
              n8n (pronounced "n-eight-n") is an extendable workflow automation tool. With a fair-code license, n8n will always have visible source code, be available to self-host, and allow you to add your own custom functions, logic, and apps.
            </p>
            <p>
              Think of it as a digital assembly line where you can connect various services (like email, databases, APIs) to create automated sequences of actions without writing code.
            </p>

            <h2 id="core-concepts">Core Concepts</h2>
            <p>
              Before you dive in, it's important to understand a few core concepts:
            </p>
            <ul>
              <li><strong>Nodes:</strong> These are the building blocks of your workflows. Each node represents an app or a service and performs a specific action.</li>
              <li><strong>Connections:</strong> These are the lines that connect nodes, defining the flow of data from one node to the next.</li>
              <li><strong>Workflows:</strong> A workflow is the entire canvas where you connect nodes to create an automated process.</li>
              <li><strong>Credentials:</strong> To connect to different services, you'll need to provide credentials, which n8n stores securely.</li>
            </ul>

            <h2 id="installation">Installation</h2>
            <p>
              You can run n8n in several ways. The most common methods are using Docker or npm. For detailed instructions, please refer to the official installation guide.
            </p>
            <pre>
              <code>
npx n8n
              </code>
            </pre>
            <p>
              This command will download and start n8n. You can then access it at <code>http://localhost:5678</code>.
            </p>
          </article>

          <aside className="hidden lg:block lg:w-1/4">
            <OnThisPageSidebar />
          </aside>
        </div>
      </div>
    </DocsLayout>
  );
};

export default ArticlePage;