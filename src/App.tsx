
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CyberneticsPage from "./pages/CyberneticsPage";
import IntelligenceAmplificationPage from "./pages/IntelligenceAmplificationPage";
import CTPSPage from "./pages/CTPSPage";
import VenturesPage from "./pages/VenturesPage";
import UniversityPage from "./pages/UniversityPage";
import CitiesPage from "./pages/CitiesPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cybernetics" element={<CyberneticsPage />} />
          <Route path="/intelligence-amplification" element={<IntelligenceAmplificationPage />} />
          <Route path="/ctps" element={<CTPSPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
