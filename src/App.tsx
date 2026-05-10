import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider, RootLocaleRedirect } from "@/i18n/LocaleProvider";

// Error Boundary for robust error handling
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Something went wrong.</h2>
          <p className="text-foreground/60 mb-8">The application encountered an unexpected error.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-terracotta-deep transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Stories = lazy(() => import("./pages/Stories"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Donation = lazy(() => import("./pages/Donation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-parchment flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

