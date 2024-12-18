import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Chapter1 from "./pages/chapters/Chapter1";
import Chapter2 from "./pages/chapters/Chapter2";
import Chapter3 from "./pages/chapters/Chapter3";
import Chapter4 from "./pages/chapters/Chapter4";
import Chapter5 from "./pages/chapters/Chapter5";
import Chapter6 from "./pages/chapters/Chapter6";
import Chapter7 from "./pages/chapters/Chapter7";
import Chapter8 from "./pages/chapters/Chapter8";
import Chapter9 from "./pages/chapters/Chapter9";
import Chapter10 from "./pages/chapters/Chapter10";
import Chapter11 from "./pages/chapters/Chapter11";
import Chapter12 from "./pages/chapters/Chapter12";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-black-800">
            <AppSidebar />
            <Routes>
              <Route path="/" element={<Navigate to="/chapter/1" replace />} />
              <Route path="/chapter/1" element={<Chapter1 />} />
              <Route path="/chapter/2" element={<Chapter2 />} />
              <Route path="/chapter/3" element={<Chapter3 />} />
              <Route path="/chapter/4" element={<Chapter4 />} />
              <Route path="/chapter/5" element={<Chapter5 />} />
              <Route path="/chapter/6" element={<Chapter6 />} />
              <Route path="/chapter/7" element={<Chapter7 />} />
              <Route path="/chapter/8" element={<Chapter8 />} />
              <Route path="/chapter/9" element={<Chapter9 />} />
              <Route path="/chapter/10" element={<Chapter10 />} />
              <Route path="/chapter/11" element={<Chapter11 />} />
              <Route path="/chapter/12" element={<Chapter12 />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;