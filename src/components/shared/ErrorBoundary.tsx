import React, { ErrorInfo, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  className?: string;
  variant?: "full-page" | "component";
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryInner extends React.Component<Props & { t: any }, State> {
  constructor(props: Props & { t: any }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = `/${window.location.pathname.split("/")[1] || "en"}`;
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback, t, variant = "component" } = this.props;

    if (hasError) {
      if (fallback) return fallback;

      if (variant === "full-page") {
        return (
          <div className="min-h-[80vh] flex items-center justify-center p-6 bg-parchment">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full"
            >
              <Card className="border-terracotta/20 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="h-2 bg-terracotta" />
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-terracotta" />
                  </div>
                  <CardTitle className="font-serif text-3xl text-foreground">
                    {t("errors.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-foreground/60">
                    {t("errors.description")}
                  </p>
                  {process.env.NODE_ENV === "development" && error && (
                    <div className="text-left bg-black/5 p-3 rounded-md overflow-auto max-h-32 text-xs font-mono text-terracotta-deep">
                      {error.toString()}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    onClick={this.handleReset}
                    className="w-full bg-primary hover:bg-terracotta transition-colors rounded-full"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t("errors.retry")}
                  </Button>
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      onClick={this.handleGoHome}
                      className="flex-1 rounded-full border-primary/20 hover:bg-primary/5"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      {t("errors.backToHome")}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={this.handleReload}
                      className="flex-1 rounded-full border-primary/20 hover:bg-primary/5"
                    >
                      <RefreshCcw className="w-4 h-4 mr-2" />
                      {t("errors.reload")}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        );
      }

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl border border-terracotta/20 bg-terracotta/5 backdrop-blur-sm"
        >
          <Alert variant="destructive" className="bg-transparent border-none p-0">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="font-serif text-lg">{t("errors.featureError")}</AlertTitle>
            <AlertDescription className="mt-2 flex flex-col gap-3">
              <p className="text-sm opacity-80">{t("errors.description")}</p>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={this.handleReset}
                className="w-fit rounded-full border-terracotta/30 hover:bg-terracotta/10 text-terracotta-deep"
              >
                <RotateCcw className="w-3 h-3 mr-2" />
                {t("errors.retry")}
              </Button>
            </AlertDescription>
          </Alert>
        </motion.div>
      );
    }

    return children;
  }
}

/**
 * A robust Error Boundary component that catches runtime errors and displays 
 * a localized, user-friendly fallback UI.
 */
export const ErrorBoundary = (props: Props) => {
  const { t } = useTranslation();
  return <ErrorBoundaryInner {...props} t={t} />;
};

export default ErrorBoundary;
