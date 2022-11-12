import { useState } from "react";

export function Contact(props) {
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [message, setMessage] = useState("");
 const [success, setSuccess] = useState("");
 const [error, setError] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccess("");
  setError("");
  if (!email) {
   setSuccess("");
   return setError("Please enter your email address!");
  } else if (!email.includes("@") || !email.includes(".")) {
   setSuccess("");
   return setError("Please enter a valid email address!");
  } else if (email.trim().length < 5 || email.trim().length > 50) {
   setSuccess("");
   return setError("Email address must be between 5 and 50 characters!");
  } else if (!name) {
   setSuccess("");
   return setError("Please enter your name!");
  } else if (!name.trim() || name.trim().length < 3 || name.trim().length > 20) {
   setSuccess("");
   return setError("Name must be between 3 and 20 characters!");
  } else if (!message) {
   setSuccess("");
   return setError("Please enter a message!");
  } else if (!message.trim() || message.trim().length < 10 || message.trim().length > 500) {
   setSuccess("");
   return setError("Message must be between 10 and 500 characters!");
  }
  const data = {
   email,
   name,
   message,
  };
  await fetch("/api/contact", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
   },
   body: JSON.stringify(data),
  })
   .then((res) => res.json())
   .then((data) => {
    if (data.error) {
     setError(data.message);
    } else {
     setEmail("");
     setName("");
     setMessage("");
     setSuccess(data.message);
    }
   });
 };

 return (
  <form {...props} onSubmit={handleSubmit} className="relative flex w-full flex-col items-center justify-center">
   <div className="z-[2] block w-full items-center justify-center gap-1.5 text-left md:flex">
    <label htmlFor="contact_name" className="w-full text-left font-inter text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
     Name
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <input value={name} onChange={(e) => setName(e.target.value)} id="contact_name" className="my-2 w-full rounded-lg border-[1px] border-gray-300  p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="text" placeholder="John Doe" />
    </label>
    <label htmlFor="contact_email" className="w-full text-left font-inter text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
     Email
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <input value={email} onChange={(e) => setEmail(e.target.value)} id="contact_email" className="my-2 w-full rounded-lg border-[1px] border-gray-300  p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="email" placeholder="john@doe.com" />
    </label>
   </div>
   <div className="mt-2 flex w-full items-center justify-center gap-1.5">
    <label htmlFor="contact_message" className="w-full text-left font-inter text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
     Message
     <span aria-hidden={true} className="cursor-help text-red-500" title="Required">
      *
     </span>
     <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="contact_message" className="my-2 max-h-40 min-h-[80px] w-full rounded-lg border-[1px] border-gray-300 p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="email" placeholder="Hello there!" />
    </label>
   </div>
   {success ? <p className="self-start text-sm font-semibold tracking-wide text-green-500 ">{success}</p> : <></>}
   {error ? <p className="self-start text-sm font-semibold tracking-wide text-red-500 ">{error}</p> : <></>}
   <div className="w-full py-2 outline-none">
    <button type="submit" className="group mt-2 ml-auto flex rounded-md border border-transparent bg-blue-100 px-4 py-2 font-inter text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
     Send{" "}
     <svg className="mt-[2px] ml-2 h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
     </svg>
    </button>
   </div>
  </form>
 );
}
