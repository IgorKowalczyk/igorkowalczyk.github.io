"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button } from "@/components/Button";
import { Icons } from "@/components/Icons";
import { useDebounce } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { contactFormSchema, ContactFormSchema } from "@/lib/validator";

export function ContactForm() {
 const [formData, setFormData] = useState<ContactFormSchema>({
  email: "",
  name: "",
  message: "",
 });

 const [invalid, setInvalid] = useState({
  email: false,
  name: false,
  message: false,
 });

 const [touched, setTouched] = useState({
  email: false,
  name: false,
  message: false,
 });

 const [success, setSuccess] = useState<string>("");
 const [error, setError] = useState<string>("");
 const [loading, setLoading] = useState<boolean>(false);

 const debouncedName = useDebounce(formData.name, 500);
 const debouncedEmail = useDebounce(formData.email, 500);
 const debouncedMessage = useDebounce(formData.message, 500);

 const validateField = (field: string, value: string) => {
  const result = contactFormSchema.safeParse({ ...formData, [field]: value });

  if (!result.success) {
   const errors = result.error.flatten().fieldErrors;
   setInvalid((prev) => ({
    ...prev,
    [field]: !!errors[field] && value !== "",
   }));
  } else {
   setInvalid((prev) => ({
    ...prev,
    [field]: false,
   }));
  }
 };

 useEffect(() => {
  if (touched.name) validateField("name", debouncedName);
 }, [debouncedName, touched.name]);

 useEffect(() => {
  if (touched.email) validateField("email", debouncedEmail);
 }, [debouncedEmail, touched.email]);

 useEffect(() => {
  if (touched.message) validateField("message", debouncedMessage);
 }, [debouncedMessage, touched.message]);

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSuccess("");
  setError("");

  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
   const errors = result.error.flatten().fieldErrors;
   setInvalid({
    email: !!errors.email && formData.email !== "",
    name: !!errors.name && formData.name !== "",
    message: !!errors.message && formData.message !== "",
   });
   return setError(Object.values(errors).flat().join(" "));
  }

  const { data } = result;

  setLoading(true);

  const request = await fetch("/api/contact", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(data),
  });

  const response = await request.json();

  setLoading(false);
  if (response.error) {
   setInvalid({
    ...invalid,
    [response.error.field]: true,
   });
   setError(response.error.message);
  } else {
   setFormData({ email: "", name: "", message: "" });
   setInvalid({
    email: false,
    name: false,
    message: false,
   });
   setSuccess(response.message);
  }
 };

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setSuccess("");
  setError("");

  const { value } = e.target;

  setFormData({
   ...formData,
   [e.target.name]: value,
  });

  setTouched({
   ...touched,
   [e.target.name]: true,
  });
 };

 return (
  <form onSubmit={handleSubmit} className="relative flex w-full flex-col items-center justify-center">
   <div className="block w-full items-center justify-center gap-4 text-left md:flex">
    <label htmlFor="name" className="w-full text-left text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300">
     Name
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <input
      value={formData.name}
      name="name"
      onChange={handleChange}
      id="name"
      className={cn(
       {
        "border-red-400 text-red-400": invalid.name,
        "border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700": !invalid.name,
       },
       "my-2 w-full rounded-lg border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
      )}
      type="text"
      placeholder="John Doe"
     />
    </label>
    <label htmlFor="email" className="w-full text-left text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300">
     Email
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <input
      value={formData.email}
      name="email"
      onChange={handleChange}
      id="email"
      className={cn(
       {
        "border-red-400 text-red-400": invalid.email,
        "border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700": !invalid.email,
       },
       "my-2 w-full rounded-lg border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
      )}
      type="email"
      placeholder="john@doe.com"
     />
    </label>
   </div>
   <div className="mt-2 flex w-full flex-col items-center justify-center gap-1.5">
    <label htmlFor="message" className="w-full text-left text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300">
     Message
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <textarea
      value={formData.message}
      name="message"
      onChange={handleChange}
      id="message"
      className={cn(
       {
        "border-red-400 text-red-400": invalid.message,
        "border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700": !invalid.message,
       },
       "mt-2 max-h-40 min-h-24 w-full rounded-lg border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
      )}
      placeholder="Hello there, I would like to ask you about..."
     />
    </label>
    <span
     className={cn(
      {
       "text-red-400": invalid.message,
       "text-neutral-700 dark:text-neutral-300": !invalid.message,
      },
      "ml-auto text-xs opacity-50"
     )}
    >
     {formData.message.trim().length}/500 characters
    </span>
   </div>

   {success && (
    <p className="mt-2 flex items-center self-start text-green-500">
     <Icons.MailCheckIcon className="mr-2 size-5" />
     {success}
    </p>
   )}
   {error && (
    <p className="mt-2 flex items-center self-start text-red-400">
     <Icons.CircleAlert className="mr-2 size-5" />
     {error}
    </p>
   )}
   <Button variant="secondary" className="ml-auto mt-4" icon={false} type="submit" disabled={loading || invalid.email || invalid.name || invalid.message || !formData.email || !formData.name || !formData.message}>
    {loading ? (
     <>
      <Icons.RefreshCw className="mr-2 size-4 animate-spin duration-200 motion-reduce:transition-none" />
      Sending
     </>
    ) : (
     <>
      <Icons.Send className="mr-2 size-4" />
      Send
     </>
    )}
   </Button>
  </form>
 );
}
