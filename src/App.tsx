import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Updated here
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Achievement from "./pages/Achievement";
import Publication from "./pages/Publication";
import Codes from "./pages/Codes";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router> {/* ✅ Updated here */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/codes" element={<Codes />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
