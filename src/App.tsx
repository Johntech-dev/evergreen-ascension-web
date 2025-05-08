import React from 'react';
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
import FAQPage from "./pages/FAQPage";
import FirstCTPS from './pages/FirstCTPS';
import SecondCTPS from './pages/SecondCTPS';
import ThirdCTPS from './pages/ThirdCTPS';
import FourthCTPS from './pages/FourthCTPS';
import Navbar from './components/Navbar';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cybernetics" element={<CyberneticsPage />} />
              <Route path="/intelligence-amplification" element={<IntelligenceAmplificationPage />} />
              <Route path="/ctps" element={<CTPSPage />} />
              <Route path="/ventures" element={<VenturesPage />} />
              <Route path="/university" element={<UniversityPage />} />
              <Route path="/cities" element={<CitiesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/first-ctps" element={<FirstCTPS />} />
              <Route path="/second-ctps" element={<SecondCTPS />} />
              <Route path="/third-ctps" element={<ThirdCTPS />} />
              <Route path="/fourth-ctps" element={<FourthCTPS />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
