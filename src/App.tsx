import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider, RootLocaleRedirect } from "@/i18n/LocaleProvider";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
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
                <Placeholder titleKey="nav.stories" />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/resources"
            element={
              <LocaleProvider>
                <Placeholder titleKey="nav.resources" />
              </LocaleProvider>
            }
          />
          <Route
            path="/:lang/donate"
            element={
              <LocaleProvider>
                <Placeholder titleKey="nav.donate" />
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
