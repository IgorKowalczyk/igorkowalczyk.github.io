import isEmail from "validator/lib/isEmail";

export const runtime = "edge";

export async function POST(request) {
 const { email, name, message } = await request.clone().json();

 if (!email) {
  return new Response(
   JSON.stringify({
    error: true,
    type: "email",
    message: "Please enter your email address!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (typeof email !== "string" || !isEmail(email)) {
  return new Response(
   JSON.stringify({
    error: true,
    type: "email",
    message: "Please enter a valid email address!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (email.trim().length < 5 || email.trim().length > 50) {
  return new Response(
   JSON.stringify({
    error: true,
    type: "email",
    message: "Email must be between 5 and 50 characters!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (!name || typeof name !== "string" || !name.trim() || name.trim().length < 3 || name.trim().length > 20) {
  return new Response(
   JSON.stringify({
    error: true,
    type: "name",
    message: "Name must be between 3 and 20 characters!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 if (!message || typeof message !== "string" || !message.trim() || message.trim().length < 10 || message.trim().length > 500) {
  return new Response(
   JSON.stringify({
    error: true,
    type: "message",
    message: "Message must be between 10 and 500 characters!",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
    },
   }
  );
 }

 const embed = {
  title: "📩 New message from igorkowalczyk.dev",
  description: `>>> ${message.toString().trim()}`,
  color: 5759645,
  fields: [
   {
    name: "🧑‍🦱 Name",
    value: `\`\`\`${name.toString().trim()}\`\`\``,
    inline: true,
   },
   {
    name: "📨 Email",
    value: `\`\`\`${email.toString().trim()}\`\`\``,
    inline: true,
   },
  ],
 };

 try {
  const response = await fetch(`${process.env.DISCORD_WEBHOOK_URL}?wait=true`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    username: "igorkowalczykdev",
    avatar_url: "https://igorkowalczyk.dev/favicon.ico",
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
  } else {
   return new Response(JSON.stringify({ error: false, message: "Message sent successfully! Thank you for contacting me!" }), {
    status: 200,
    headers: {
     "Content-Type": "application/json",
    },
   });
  }
 } catch (error) {
  return new Response(JSON.stringify({ error: true, message: "Unable to send message" }), {
   status: 500,
   headers: {
    "Content-Type": "application/json",
   },
  });
 }
}
