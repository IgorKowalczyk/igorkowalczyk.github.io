export function Squares(props) {
 return (
  <svg {...props} width="404" height="404" fill="none" viewBox="0 0 404 404" role="img">
   <defs>
    <pattern id="patt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
     <rect x="0" y="0" width="4" height="4" className="text-blue-200 dark:text-slate-700" fill="currentColor"></rect>
    </pattern>
   </defs>
   <rect width="404" height="404" fill="url(#patt)"></rect>
  </svg>
 );
}
