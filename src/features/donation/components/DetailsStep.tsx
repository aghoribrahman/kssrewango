import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DetailsStepProps {
  firstName: string;
  onFirstNameChange: (v: string) => void;
  lastName: string;
  onLastNameChange: (v: string) => void;
  email: string;
  onEmailChange: (v: string) => void;
  pan: string;
  onPanChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DetailsStep = ({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  email,
  onEmailChange,
  pan,
  onPanChange,
  onNext,
  onBack,
}: DetailsStepProps) => {
  const { t } = useTranslation();

  return (
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
          <Input
            id="first"
            placeholder="Ramesh"
            className="bg-white/50"
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last">{t("donation.form.lastName")}</Label>
          <Input
            id="last"
            placeholder="Gond"
            className="bg-white/50"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("donation.form.email")}</Label>
        <Input
          id="email"
          type="email"
          placeholder="ramesh@example.com"
          className="bg-white/50"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="pan">{t("donation.form.pan")}</Label>
        <Input
          id="pan"
          placeholder="ABCDE1234F"
          className="bg-white/50 uppercase"
          value={pan}
          onChange={(e) => onPanChange(e.target.value)}
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="ghost" className="flex-1 h-12 rounded-full gap-2 border border-border/20" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          {t("donation.form.back")}
        </Button>
        <Button className="flex-[2] h-12 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-2" onClick={onNext}>
          {t("donation.form.next")}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default DetailsStep;
