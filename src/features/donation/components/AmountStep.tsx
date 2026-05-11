import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMPACT_TIERS } from "../constants";

interface AmountStepProps {
  selectedImpact: string | null;
  customAmount: string;
  onSelectImpact: (id: string) => void;
  onCustomAmountChange: (amount: string) => void;
  onNext: () => void;
}

const AmountStep = ({
  selectedImpact,
  customAmount,
  onSelectImpact,
  onCustomAmountChange,
  onNext,
}: AmountStepProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 gap-3">
        {IMPACT_TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => onSelectImpact(tier.id)}
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
          onChange={(e) => onCustomAmountChange(e.target.value)}
        />
      </div>

      <Button 
        className="w-full h-14 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-3 text-base"
        disabled={!selectedImpact && !customAmount}
        onClick={onNext}
      >
        {t("donation.form.next")}
        <ArrowRight className="w-5 h-5" />
      </Button>
    </motion.div>
  );
};

export default AmountStep;
