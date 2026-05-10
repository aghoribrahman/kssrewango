import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { volunteerFormSchema, type VolunteerFormValues } from "../schema";

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

  const onSubmit = (values: VolunteerFormValues) => {
    console.log("Form values:", values);
    // In a real app, this would be an API call
    alert(t("volunteer.form.success"));
    form.reset();
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
