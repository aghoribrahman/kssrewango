import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";

/**
 * A test component that intentionally throws an error when a button is clicked
 * or when a specific state is reached. Used to verify ErrorBoundary functionality.
 */
export const ChaosComponent = () => {
  const [shouldExplode, setShouldExplode] = useState(false);

  if (shouldExplode) {
    throw new Error("BOOM! The ChaosComponent has exploded as requested.");
  }

  return (
    <div className="p-8 border-2 border-dashed border-terracotta/30 rounded-2xl bg-terracotta/5 text-center">
      <div className="mx-auto w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mb-4">
        <Bug className="w-6 h-6 text-terracotta" />
      </div>
      <h3 className="font-serif text-xl text-foreground mb-2">Chaos Laboratory</h3>
      <p className="text-sm text-foreground/60 mb-6">
        Click the button below to simulate a component-level runtime crash.
      </p>
      <Button 
        variant="destructive" 
        onClick={() => setShouldExplode(true)}
        className="rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Trigger Component Error
      </Button>
    </div>
  );
};

export default ChaosComponent;
