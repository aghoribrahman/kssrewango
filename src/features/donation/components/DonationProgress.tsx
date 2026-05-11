import { useTranslation } from "react-i18next";
import { Check, ShieldCheck } from "lucide-react";

interface DonationProgressProps {
  step: number;
}

const DonationProgress = ({ step }: DonationProgressProps) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default DonationProgress;
