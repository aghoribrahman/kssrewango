import { useState } from "react";

export const useDonationForm = () => {
  const [step, setStep] = useState(1);
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("local");

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const resetAmount = () => {
    setSelectedImpact(null);
    setCustomAmount("");
  };

  const selectImpact = (id: string) => {
    setSelectedImpact(id);
    setCustomAmount("");
  };

  const updateCustomAmount = (amount: string) => {
    setCustomAmount(amount);
    setSelectedImpact(null);
  };

  return {
    step,
    selectedImpact,
    customAmount,
    paymentMethod,
    setPaymentMethod,
    handleNext,
    handleBack,
    selectImpact,
    updateCustomAmount,
  };
};
