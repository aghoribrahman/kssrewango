import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useVolunteerForm } from "../hooks/useVolunteerForm";

const VolunteerForm = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";
  const { form, onSubmit } = useVolunteerForm();

  return (
    <SectionContainer className="bg-parchment-deep/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow={t("volunteer.form.eyebrow")}
          heading={t("volunteer.form.heading")}
          isHindi={isHindi}
          className="text-center mb-12 mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={onSubmit} className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("volunteer.form.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("volunteer.form.namePlaceholder")} {...field} className="bg-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("volunteer.form.email")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("volunteer.form.emailPlaceholder")} {...field} className="bg-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("volunteer.form.phone")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("volunteer.form.phonePlaceholder")} {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-3">
                <FormLabel>{t("volunteer.form.interests")}</FormLabel>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { key: "medical" as const, label: t("volunteer.form.medical") },
                    { key: "educator" as const, label: t("volunteer.form.educator") },
                    { key: "translator" as const, label: t("volunteer.form.translator") },
                    { key: "fundraising" as const, label: t("volunteer.form.fundraising") },
                    { key: "remote" as const, label: t("volunteer.form.remote") },
                  ].map((item) => (
                    <FormField
                      key={item.key}
                      control={form.control}
                      name={`interests.${item.key}`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("volunteer.form.message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("volunteer.form.messagePlaceholder")}
                        className="bg-white/50"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-2 text-base"
              >
                {t("volunteer.form.submit")}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default VolunteerForm;
