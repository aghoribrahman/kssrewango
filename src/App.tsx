import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider, RootLocaleRedirect } from "@/i18n/LocaleProvider";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Stories = lazy(() => import("./pages/Stories"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Donation = lazy(() => import("./pages/Donation"));
const SickleCell = lazy(() => import("./pages/SickleCell"));
const TBManagement = lazy(() => import("./pages/TBManagement"));
const NutritionGrowth = lazy(() => import("./pages/NutritionGrowth"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-parchment flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary variant="full-page">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<RootLocaleRedirect />} />
              <Route
                path="/:lang"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Index />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/stories"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Stories />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/resources"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Resources />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/about"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <About />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/careers"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Careers />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/volunteer"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Volunteer />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/donate"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Donation />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/sickle-cell"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <SickleCell />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/tb-management"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <TBManagement />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/nutrition-growth"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <NutritionGrowth />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route
                path="/:lang/gallery"
                element={
                  <LocaleProvider>
                    <ErrorBoundary variant="full-page">
                      <Gallery />
                    </ErrorBoundary>
                  </LocaleProvider>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

