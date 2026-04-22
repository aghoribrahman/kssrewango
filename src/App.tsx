import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider, RootLocaleRedirect } from "@/i18n/LocaleProvider";
import Index from "./pages/Index";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Volunteer from "./pages/Volunteer";
import Donation from "./pages/Donation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLocaleRedirect />} />
          <Route
            path="/:lang"
            element={
              <LocaleProvider>
                <Index />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/stories"
            element={
              <LocaleProvider>
                <Stories />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/resources"
            element={
              <LocaleProvider>
                <Resources />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/about"
            element={
              <LocaleProvider>
                <About />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/careers"
            element={
              <LocaleProvider>
                <Careers />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/volunteer"
            element={
              <LocaleProvider>
                <Volunteer />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/donate"
            element={
              <LocaleProvider>
                <Donation />
              </LocaleProvider>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
