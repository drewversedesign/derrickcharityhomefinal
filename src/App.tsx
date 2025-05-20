
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// Blog and BlogPostDetail imports removed
import FoodNutrition from "./pages/FoodNutrition";
import Education from "./pages/Education";
import Healthcare from "./pages/Healthcare";
import Community from "./pages/Community";
import SuccessStories from "./pages/SuccessStories";
import Donate from "./pages/Donate";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs/food-nutrition" element={<FoodNutrition />} />
            <Route path="/programs/education" element={<Education />} />
            <Route path="/programs/healthcare" element={<Healthcare />} />
            <Route path="/programs/community" element={<Community />} />
            <Route path="/stories" element={<SuccessStories />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Blog routes removed */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogPostDetail />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
