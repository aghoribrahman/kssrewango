import * as z from "zod";

export const volunteerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().optional(),
  interests: z.object({
    medical: z.boolean().default(false),
    educator: z.boolean().default(false),
    translator: z.boolean().default(false),
    fundraising: z.boolean().default(false),
    remote: z.boolean().default(false),
  }),
});

export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;
