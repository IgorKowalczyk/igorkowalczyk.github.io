export default function Dots({ h, w }) {
 return (
  <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" role="img" className="hide">
   <defs>
    <pattern id="patt" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
     <rect rx="15" ry="15" x="0" y="0" width="4" height="4" className="text-blue-200 dark:text-neutral-700" fill="currentColor"></rect>
    </pattern>
   </defs>
   <rect width={w} height={h} fill="url(#patt)"></rect>
  </svg>
 );
}
