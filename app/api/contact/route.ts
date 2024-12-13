import { contactFormSchema } from "@/lib/validator";
import { createHash } from "crypto";

export async function POST(request: Request) {
 const body = await request.json();
 const result = contactFormSchema.safeParse(body);

 if (!result.success) {
  const errors = result.error.flatten().fieldErrors;
  return new Response(JSON.stringify({ error: true, message: Object.values(errors).flat().join(" ") }), {
   status: 400,
   headers: {
    "Content-Type": "application/json",
   },
  });
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

 try {
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

  if (!data.id) {
   return new Response(JSON.stringify({ error: true, message: "Unable to send message" }), {
    status: 500,
    headers: {
     "Content-Type": "application/json",
    },
   });
  }

  return new Response(JSON.stringify({ error: false, message: "Message sent successfully! Thank you for contacting me!" }), {
   status: 200,
   headers: {
    "Content-Type": "application/json",
   },
  });
 } catch (error) {
  console.error(error);
  return new Response(JSON.stringify({ error: true, message: "Unable to send message" }), {
   status: 500,
   headers: {
    "Content-Type": "application/json",
   },
  });
 }
}
