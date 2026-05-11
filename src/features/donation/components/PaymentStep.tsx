import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Heart, ArrowLeft, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentStepProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
  onBack: () => void;
}

const PaymentStep = ({
  paymentMethod,
  onPaymentMethodChange,
  onBack,
}: PaymentStepProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <RadioGroup defaultValue="local" value={paymentMethod} onValueChange={onPaymentMethodChange}>
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
        <Button variant="ghost" className="flex-1 h-12 rounded-full gap-2 border border-border/20" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          {t("donation.form.back")}
        </Button>
        <Button className="flex-[2] h-12 bg-forest hover:bg-forest-deep text-parchment rounded-full gap-2 font-bold tracking-wide">
          <Heart className="w-4 h-4 fill-current" />
          {t("donation.form.submit")}
        </Button>
      </div>
    </motion.div>
  );
};

export default PaymentStep;
