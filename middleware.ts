import { CsrfError, createCsrfProtect } from "@edge-csrf/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const csrfProtect = createCsrfProtect({
 cookie: {
  secure: process.env.NODE_ENV === "production",
 },
});

export const middleware = async (request: NextRequest) => {
 const response = NextResponse.next();

 try {
  await csrfProtect(request, response);
 } catch (err) {
  if (err instanceof CsrfError) return new Response("Something went wrong! You may have to refresh the page.", { status: 400 });
  throw err;
 }

 return response;
};
