import clsx from "clsx";

export function Description({ children, ...props }) {
 return (
  <p {...props} className={clsx("text-gray-700 dark:text-neutral-300", props.className)}>
   {children}
  </p>
 );
}

export function Header1({ children, ...props }) {
 return (
  <h1 {...props} className={clsx("mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-3xl font-black motion-reduce:transition-none", props.className)}>
   {children}
   <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
  </h1>
 );
}

export function Header2({ children, ...props }) {
 return (
  <h2 {...props} className={clsx("mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none", props.className)}>
   {children}
   <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
  </h2>
 );
}
