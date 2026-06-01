import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const useDonationForm = () => {
  const [step, setStep] = useState(1);
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("local");
  
  // Details fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const resetForm = () => {
    setStep(1);
    setSelectedImpact(null);
    setCustomAmount("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPan("");
  };

  const selectImpact = (id: string) => {
    setSelectedImpact(id);
    setCustomAmount("");
  };

  const updateCustomAmount = (amount: string) => {
    setCustomAmount(amount);
    setSelectedImpact(null);
  };

  // Convert selected impact option to numerical amount
  const getAmount = (): number => {
    if (customAmount) return parseFloat(customAmount) || 0;
    if (selectedImpact === "screening") return 1500;
    if (selectedImpact === "medicine") return 3000;
    if (selectedImpact === "camp") return 15000;
    return 0;
  };

  const submitDonation = async () => {
    const finalAmount = getAmount();
    if (finalAmount <= 0) {
      toast.error("Please select or enter a valid donation amount.");
      setStep(1);
      return;
    }
    if (!firstName || !lastName || !email) {
      toast.error("Please fill in your contact details.");
      setStep(2);
      return;
    }

    try {
      const { error } = await supabase
        .from("donations")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            pan_number: pan.toUpperCase() || null,
            amount: finalAmount,
            currency: paymentMethod === "int" ? "USD" : "INR",
            payment_gateway: paymentMethod === "int" ? "stripe" : "phonepe",
            status: "pending",
          },
        ]);

      if (error) throw error;

      toast.success("Donation initialized! Redirecting to payment gateway demo...");
      resetForm();
    } catch (err: any) {
      console.error("Donation submit error:", err);
      toast.error("Failed to initiate donation. Please try again.");
    }
  };

  return {
    step,
    selectedImpact,
    customAmount,
    paymentMethod,
    setPaymentMethod,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    pan,
    setPan,
    handleNext,
    handleBack,
    selectImpact,
    updateCustomAmount,
    submitDonation,
    amount: getAmount(),
  };
};
