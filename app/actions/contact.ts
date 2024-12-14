"use server";

import "server-only";
import { createHash } from "crypto";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validator";

/* eslint-disable-next-line typescript/no-explicit-any */
export async function submitContactForm(_prevState: any, data: FormData) {
 const formData = {
  email: data.get("email"),
  name: data.get("name"),
  message: data.get("message"),
 };

 if (formData.email === "igorkowalczyk@gmail.com") return { message: "Your message has been sent successfully!" };

 try {
  const h = await headers();
  const ip = h.get("x-forwarded-for") ?? "unknown";
  const isRateLimited = rateLimit(ip);

  if (isRateLimited) return { error: "You are sending messages too frequently!" };

  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
   const errors = result.error.flatten().fieldErrors;
   return { error: Object.values(errors).flat().join(" ") };
  }

  const { name, email, message } = result.data;
  const hash = createHash("sha256").update(email.trim()).digest("hex");

  const embed = {
   title: "📩 New message from igorkowalczyk.dev",
   url: "https://igorkowalczyk.dev",
   description: `>>> ${message.trim()}`,
   color: 5759645,
   fields: [
    {
     name: "🧑‍🦱 Name",
     value: `\`\`\`${name.trim()}\`\`\``,
     inline: true,
    },
    {
     name: "📨 Email",
     value: `\`\`\`${email.trim()}\`\`\``,
     inline: true,
    },
   ],
   footer: {
    text: "igorkowalczyk.dev",
    icon_url: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
   },
   timestamp: new Date().toISOString(),
  };

  const response = await fetch(`${process.env.DISCORD_WEBHOOK_URL}?wait=true`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    username: "igorkowalczyk.dev",
    avatar_url: "https://igorkowalczyk.dev/assets/avatar.png",
    embeds: [embed],
   }),
  });

  const data = await response.json();

  if (!data.id) return { error: "Unable to send message" };
  return { message: "Your message has been sent successfully!" };
 } catch (_error) {
  return { error: "Unable to send message" };
 }
}
