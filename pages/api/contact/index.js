/* eslint-disable camelcase */

export default async function handler(req, res) {
 if (req.method !== "POST") {
  return res.status(405).json({ error: true, message: "Method not allowed!" });
 }

 const { name, email, message } = req.body;

 if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".") || email.trim().length < 5 || email.trim().length > 50) {
  return res.status(400).json({ error: true, message: "Please enter a valid email address!" });
 }

 if (!name || typeof name !== "string" || !name.trim() || name.trim().length < 3 || name.trim().length > 20) {
  return res.status(400).json({ error: true, message: "Name must be between 3 and 20 characters!" });
 }

 if (!message || typeof message !== "string" || !message.trim() || message.trim().length < 10 || message.trim().length > 500) {
  return res.status(400).json({ error: true, message: "Message must be between 10 and 500 characters!" });
 }

 const embed = {
  title: "📩 New message from igorkowalczyk.dev",
  description: `> ${message.toString().trim()}`,
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

 const params = {
  username: "igorkowalczykdev",
  avatar_url: "https://igorkowalczyk.dev/favicon.ico",
  embeds: [embed],
 };

 try {
  const response = await fetch(`${process.env.DISCORD_WEBHOOK_URL}?wait=true`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!data.id) {
   return res.status(500).json({ error: true, message: "Unable to send message" });
  } else {
   return res.status(200).json({ error: false, message: "Message sent!" });
  }
 } catch (error) {
  console.error(error);
  return res.status(500).json({ error: true, message: "Unable to send message" });
 }
}
