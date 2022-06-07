export function Loader(w, h) {
 return (
  <svg width={w} height={h} version="1.1" xmlns="http://www.w3.org/2000/svg">
   <defs>
    <linearGradient id="g">
     <stop stop-color="#333" offset="20%" />
     <stop stop-color="#222" offset="50%" />
     <stop stop-color="#333" offset="70%" />
    </linearGradient>
   </defs>
   <rect width={w} height={h} fill="#333" />
   <rect id="r" width={w} height={h} fill="url(#g)" />
   <animate attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>
 );
}
