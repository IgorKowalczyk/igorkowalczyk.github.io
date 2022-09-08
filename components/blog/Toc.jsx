export function TocItem({ size, content, slug }) {
 return (
  <a className={`text-gray-11 hover:text-gray-12 transition-colors ${size === 2 ? "ml-2" : ""} ${size === 3 ? "ml-4" : ""}`} href={`#${slug}`}>
   {content}
  </a>
 );
}
