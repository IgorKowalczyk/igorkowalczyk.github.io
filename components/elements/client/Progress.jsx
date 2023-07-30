"use client";

import { AppProgressBar } from "next-nprogress-bar";

export function ProgressBar() {
 return <AppProgressBar color="#6310ff" height="2px" options={{ showSpinner: false }} shallowRouting style={"#nprogress .bar { background: linear-gradient(to right, #6310ff, #1491ff); }"} />;
}
