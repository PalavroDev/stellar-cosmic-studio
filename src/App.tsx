import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contato from "./pages/Contato";
import AutomacoesPage from "./pages/AutomacoesPage";
import NotFound from "./pages/NotFound";
import DesenvolvimentoPage from "./pages/DesenvolvimentoPage";
import InfraPage from "./pages/InfraPage";
import SuportePage from "./pages/SuportePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/automacoes" element={<AutomacoesPage />} />
          <Route path="/desenvolvimento" element={<DesenvolvimentoPage />} />
          <Route path="/infra" element={<InfraPage />} />
          <Route path="/suporte" element={<SuportePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
