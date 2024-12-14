import z from "zod";

export const nameSchema = z.string({ required_error: "Please enter your name" }).nonempty({ message: "Please enter your name" }).min(2, { message: "Name is too short. Minimum 2 characters" }).max(50, { message: "Name is too long. Maximum 50 characters" });
export const emailSchema = z.string({ required_error: "Please enter a email address!" }).nonempty({ message: "Please enter a email address!" }).email({ message: "Please enter a valid email address!" }).max(100, { message: "Email is too long. Maximum 100 characters" });
export const messageSchema = z.string({ required_error: "Please enter a message" }).nonempty({ message: "Please enter a message" }).min(10, { message: "Message must be between 10 and 500 characters!" }).max(500, { message: "Message must be between 10 and 500 characters!" });
export const tokenSchema = z.string().max(2048);

export const contactFormSchema = z.object({
 name: nameSchema,
 email: emailSchema,
 message: messageSchema,
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
