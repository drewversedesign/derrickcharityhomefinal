
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
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";

// These will need to be implemented later
const FoodNutrition = () => <div>Food & Nutrition Program</div>;
const Education = () => <div>Education Program</div>;
const Healthcare = () => <div>Healthcare Program</div>;
const Community = () => <div>Community Engagement Program</div>;
const Stories = () => <div>Success Stories</div>;
const Donate = () => <div>Donate</div>;

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
            <Route path="/stories" element={<Stories />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
