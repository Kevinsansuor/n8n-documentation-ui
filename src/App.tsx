import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticlePage from "./pages/ArticlePage";
import HostingOptionsPage from "./pages/HostingOptionsPage";
import CoreConceptsPage from "./pages/CoreConceptsPage";
import NodesPage from "./pages/NodesPage";
import WorkflowsPage from "./pages/WorkflowsPage";
import AdvancedPage from "./pages/AdvancedPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import SearchResultsPage from "./pages/SearchResultsPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/hosting-options" element={<HostingOptionsPage />} />
            <Route path="/core-concepts" element={<CoreConceptsPage />} />
            <Route path="/nodes" element={<NodesPage />} />
            <Route path="/workflows" element={<WorkflowsPage />} />
            <Route path="/advanced" element={<AdvancedPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;