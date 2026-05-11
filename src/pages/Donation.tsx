import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BurgundyRibbon from "@/components/shared/BurgundyRibbon";
import { Card, CardContent } from "@/components/ui/card";
import { useDonationForm } from "@/features/donation/hooks/useDonationForm";
import DonationProgress from "@/features/donation/components/DonationProgress";
import AmountStep from "@/features/donation/components/AmountStep";
import DetailsStep from "@/features/donation/components/DetailsStep";
import PaymentStep from "@/features/donation/components/PaymentStep";

const Donation = () => {
  const { t } = useTranslation();
  const {
    step,
    selectedImpact,
    customAmount,
    paymentMethod,
    setPaymentMethod,
    handleNext,
    handleBack,
    selectImpact,
    updateCustomAmount,
  } = useDonationForm();

  return (
    <div className="min-h-screen flex flex-col bg-forest-deep">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-10 max-w-4xl mx-auto w-full relative">
        {/* Background elements */}
        <div className="absolute top-40 right-[-10%] w-[30rem] h-[30rem] rounded-full blur-[100px] bg-terracotta/10 pointer-events-none" />
        <div className="absolute bottom-20 left-[-10%] w-[30rem] h-[30rem] rounded-full blur-[100px] bg-amber-warm/10 pointer-events-none" />

        <div className="relative z-10 text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <BurgundyRibbon className="w-4 h-5" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-amber-warm">
              {t("donation.eyebrow")}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-parchment mb-4"
          >
            {t("donation.heading")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-parchment/60 max-w-2xl mx-auto text-base leading-relaxed"
          >
            {t("donation.subtitle")}
          </motion.p>
        </div>

        {/* Multi-step Form Container */}
        <Card className="bg-parchment border-none shadow-2xl overflow-hidden min-h-[420px]">
          <CardContent className="p-0 flex flex-col md:flex-row h-full">
            <DonationProgress step={step} />

            {/* Form Content */}
            <div className="flex-grow p-6 md:p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <AmountStep
                    selectedImpact={selectedImpact}
                    customAmount={customAmount}
                    onSelectImpact={selectImpact}
                    onCustomAmountChange={updateCustomAmount}
                    onNext={handleNext}
                  />
                )}

                {step === 2 && (
                  <DetailsStep
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {step === 3 && (
                  <PaymentStep
                    paymentMethod={paymentMethod}
                    onPaymentMethodChange={setPaymentMethod}
                    onBack={handleBack}
                  />
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>

        {/* Footer info */}
        <div className="mt-12 text-center text-parchment/40 text-xs">
          <p>Kiran Seva Sansthan is a registered Section 8 non-profit organization.</p>
          <p>Donations are tax-exempt under Section 80G of the Income Tax Act.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donation;
