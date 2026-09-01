import {z} from "zod";

export const jobSchema = z.object({
  title: z.string().min(2, "Title should at least have 2 characters"),
  company: z.string().min(2, "Company should at least have 2 characters"),
  location: z.string().min(2, "Location should at least have 2 characters"),
  salary: z.string().min(1, "Salary is required"),
});