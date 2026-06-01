import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { volunteerFormSchema, type VolunteerFormValues } from "../schema";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const useVolunteerForm = () => {
  const { t } = useTranslation();

  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      interests: {
        medical: false,
        educator: false,
        translator: false,
        fundraising: false,
        remote: false,
      },
    },
  });

  const onSubmit = async (values: VolunteerFormValues) => {
    try {
      const { error } = await supabase
        .from("volunteer_applications")
        .insert([
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            interests: values.interests,
            message: values.message,
          },
        ]);

      if (error) throw error;

      toast.success(t("volunteer.form.success") || "Application submitted successfully!");
      form.reset();
    } catch (err: any) {
      console.error("Volunteer form error:", err);
      toast.error("Failed to submit application. Please try again.");
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
