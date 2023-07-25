"use client";

import { AppProgressBar } from "next-nprogress-bar";

export function ProgressBar() {
 return <AppProgressBar height="2px" options={{ showSpinner: false }} shallowRouting />;
}
