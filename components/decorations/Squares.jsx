export default function Squares({ h, w }) {
 return (
  <svg width={w} height={h} fill="none" viewBox={`0 0 ${w} ${h}`} role="img" className="hide">
   <defs>
    <pattern id="patt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
     <rect x="0" y="0" width="4" height="4" className="text-blue-200 dark:text-neutral-800" fill="currentColor"></rect>
    </pattern>
   </defs>
   <rect width={w} height={h} fill="url(#patt)"></rect>
  </svg>
 );
}
