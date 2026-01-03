import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import FamilyTreePage from "./pages/FamilyTreePage";
import Documents from "./pages/Documents";
import ContactSection from './pages/ContactSection';
import NotFound from "./pages/NotFound";
import History from './components/BadadiaOrigins'
import FamilyGallery from './components/FamilyGallery'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/history" element={<History />} />
<Route path="/gallery" element={<FamilyGallery />} />
<Route path="/contact" element={<ContactSection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
