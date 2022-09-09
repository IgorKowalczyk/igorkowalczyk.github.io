export function TocItem({ size, content, slug }) {
 return (
  <a className={`!font-normal no-underline opacity-50 duration-200 hover:underline hover:opacity-100 motion-reduce:transition-none ${size === 2 ? "ml-2" : ""} ${size === 3 ? "ml-4" : ""}`} href={`#${slug}`}>
   {content}
  </a>
 );
}
