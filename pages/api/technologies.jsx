import { NextResponse } from "next/server";
import { technologies } from "config";

export default async function handler() {
 return NextResponse.json(technologies);
}

export const config = {
 runtime: "edge",
};
