import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, ShieldCheck, ArrowRight, ArrowLeft, CreditCard, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BurgundyRibbon from "@/components/BurgundyRibbon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Donation = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("local");

  const impactTiers = [
    { id: "t1", key: "donation.impact.t1" },
    { id: "t2", key: "donation.impact.t2" },
    { id: "t3", key: "donation.impact.t3" },
  ];

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

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
            {/* Sidebar / Progress */}
            <div className="md:w-1/4 bg-forest text-parchment p-6 flex flex-col justify-between border-r border-forest-deep/20">
              <div className="space-y-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex items-center gap-3 transition-opacity ${step === s ? "opacity-100" : "opacity-40"}`}>
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${step >= s ? "bg-amber-warm border-amber-warm text-amber-950" : "border-parchment/30 text-parchment/30"}`}>
                      {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-medium">
                      {s === 1 ? "Amount" : s === 2 ? "Details" : "Payment"}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-6 border-t border-parchment/10">
                <div className="flex items-center gap-2 text-amber-warm/80 mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">100% Secure</span>
                </div>
                <p className="text-[10px] text-parchment/50 leading-relaxed">
                  {t("donation.form.secureNote")}
                </p>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-grow p-6 md:p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {impactTiers.map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => {
                            setSelectedImpact(tier.id);
                            setCustomAmount("");
                          }}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${selectedImpact === tier.id ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border/40 hover:border-primary/20 bg-white/50"}`}
                        >
                          <div className="flex-grow pr-4">
                            <span className="text-xs uppercase tracking-widest text-terracotta font-bold mb-0.5 block">
                              {t(`${tier.key}.label`)}
                            </span>
                            <p className="text-[11px] text-foreground/60 leading-snug">
                              {t(`${tier.key}.description`)}
                            </p>
                          </div>
                          <span className="text-xl font-serif text-earth-ink font-bold">
                            {t(`${tier.key}.amount`)}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-border/40"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-parchment px-4 text-foreground/40 tracking-widest">{t("donation.impact.custom")}</span>
                      </div>
                    </div>

                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-serif font-bold text-foreground/40 group-focus-within:text-primary transition-colors">₹</span>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="pl-10 h-14 text-xl font-serif border-border/40 focus:ring-primary/20 bg-white/50"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedImpact(null);
                        }}
                      />
                    </div>

                    <Button 
                      className="w-full h-14 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-3 text-base"
                      disabled={!selectedImpact && !customAmount}
                      onClick={handleNext}
                    >
                      {t("donation.form.next")}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first">{t("donation.form.firstName")}</Label>
                        <Input id="first" placeholder="Ramesh" className="bg-white/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last">{t("donation.form.lastName")}</Label>
                        <Input id="last" placeholder="Gond" className="bg-white/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("donation.form.email")}</Label>
                      <Input id="email" type="email" placeholder="ramesh@example.com" className="bg-white/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">{t("donation.form.pan")}</Label>
                      <Input id="pan" placeholder="ABCDE1234F" className="bg-white/50 uppercase" />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="ghost" className="flex-1 h-12 rounded-full gap-2 border border-border/20" onClick={handleBack}>
                        <ArrowLeft className="w-4 h-4" />
                        {t("donation.form.back")}
                      </Button>
                      <Button className="flex-[2] h-12 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-2" onClick={handleNext}>
                        {t("donation.form.next")}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <RadioGroup defaultValue="local" onValueChange={setPaymentMethod}>
                      <div className="grid grid-cols-1 gap-4">
                        <Label
                          htmlFor="local"
                          className={`flex items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === "local" ? "border-primary bg-primary/5" : "border-border/40 bg-white/50 hover:border-primary/20"}`}
                        >
                          <RadioGroupItem value="local" id="local" className="sr-only" />
                          <Smartphone className={`w-6 h-6 ${paymentMethod === "local" ? "text-primary" : "text-foreground/40"}`} />
                          <div className="flex-grow">
                            <span className="font-bold text-earth-ink block">{t("donation.form.local")}</span>
                            <span className="text-[10px] text-foreground/40 uppercase tracking-widest">PhonePe, GPay, Paytm, Cards</span>
                          </div>
                          {paymentMethod === "local" && <Check className="w-5 h-5 text-primary" />}
                        </Label>

                        <Label
                          htmlFor="int"
                          className={`flex items-center gap-4 p-6 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === "int" ? "border-primary bg-primary/5" : "border-border/40 bg-white/50 hover:border-primary/20"}`}
                        >
                          <RadioGroupItem value="int" id="int" className="sr-only" />
                          <CreditCard className={`w-6 h-6 ${paymentMethod === "int" ? "text-primary" : "text-foreground/40"}`} />
                          <div className="flex-grow">
                            <span className="font-bold text-earth-ink block">{t("donation.form.international")}</span>
                            <span className="text-[10px] text-foreground/40 uppercase tracking-widest">Stripe, PayPal, Global Cards</span>
                          </div>
                          {paymentMethod === "int" && <Check className="w-5 h-5 text-primary" />}
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="flex gap-4 pt-4">
                      <Button variant="ghost" className="flex-1 h-12 rounded-full gap-2 border border-border/20" onClick={handleBack}>
                        <ArrowLeft className="w-4 h-4" />
                        {t("donation.form.back")}
                      </Button>
                      <Button className="flex-[2] h-12 bg-forest hover:bg-forest-deep text-parchment rounded-full gap-2 font-bold tracking-wide">
                        <Heart className="w-4 h-4 fill-current" />
                        {t("donation.form.submit")}
                      </Button>
                    </div>
                  </motion.div>
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
