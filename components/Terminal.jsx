import { header, meta } from "/config";
import { ConvertBytes, ConvertNumber } from "/lib/utils";
import Link from "next/link";

const TerminalLine = ({ children, blinking = false }) => (
 <div>
  <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
   →{" "}
  </span>
  <span className="font-semibold text-[#66e777]" aria-hidden="true">
   ~/{header.code.user}{" "}
  </span>
  {blinking ? (
   <span className="relative font-semibold text-gray-700 duration-200 after:absolute after:bottom-0 after:right-[-1.5em] after:top-0 after:my-auto after:animate-[cursor_750ms_infinite] after:text-[1em] after:not-italic after:content-['▌'] motion-reduce:transition-none dark:text-neutral-300" aria-hidden="true">
    ${" "}
   </span>
  ) : (
   <span className="font-semibold italic text-gray-700 duration-200 motion-reduce:transition-none dark:text-neutral-300">$</span>
  )}{" "}
  <span className="italic">{children}</span>
 </div>
);

const TerminalResponse = ({ children }) => <div className="leading-6">{children}</div>;

export function Terminal({ userData, contributions }) {
 return (
  <div className="card border-b-black/15 shadow-code block w-full rounded-md border bg-[#fffffe] font-mono text-[15px] text-sm transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-neutral-800 dark:bg-[#121412]">
   <div className="w-fill border-b-dark/5 relative flex items-center gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]" />
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]" />
    <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]" />
    <div className="absolute bottom-0 top-0 flex w-full items-center justify-center opacity-50" aria-hidden="true">
     Console
    </div>
   </div>
   <div className="min-h-[200px] overflow-x-hidden whitespace-nowrap p-4">
    {userData && contributions && (
     <>
      <TerminalLine>
       list github --user=
       <Link href={`https://github.com/${meta.accounts.github.username}`} target="_blank" aria-label={`See ${meta.accounts.github.user} github`}>
        <>"{meta.accounts.github.username}"</>
       </Link>
      </TerminalLine>
      <TerminalResponse>
       <div>
        <span aria-hidden="true"> + </span>
        <span className="font-semibold">{userData.userPublicRepositoriesCount} Open Source</span> {userData.userPublicRepositoriesCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(userData.userPublicRepositoriesDiskUsage * 1000)})
       </div>
       <div>
        <span aria-hidden="true"> + </span>
        <span className="font-semibold">{ConvertNumber(contributions.total)} Contributions</span> since {contributions.dates.since} ({ConvertNumber(contributions.results[0].totalContributions)} in last year)
       </div>
      </TerminalResponse>
     </>
    )}
    {meta.accounts.discord && (
     <>
      <TerminalLine>contact --discord</TerminalLine>
      <TerminalResponse>
       + <span className="font-semibold">User:</span>{" "}
       <Link href={`https://discord.com/users/${meta.accounts.discord.id}`} target="_blank">
        {meta.accounts.discord.username}
       </Link>
       <br />+ <span className="font-semibold">Link:</span>{" "}
       <Link href={meta.accounts.discord.invite} target="_blank">
        {meta.accounts.discord.invite}
       </Link>
      </TerminalResponse>
     </>
    )}
    <TerminalLine blinking={true} />
   </div>
  </div>
 );
}
