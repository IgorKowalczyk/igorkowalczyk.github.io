export function SkeletonCard() {
 return (
  <div className={"relative w-full overflow-hidden rounded-2xl bg-gray-900/80 p-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"}>
   <div className="space-y-3">
    <div className="h-9 rounded-lg bg-gray-700" />
    <div className="h-3 w-11/12 rounded-lg bg-gray-700" />
    <div className="h-3 w-6/12 rounded-lg bg-gray-700" />
    <div className="mr-1 inline-block h-6 w-2/6 rounded-lg bg-gray-700" />
    <div className="ml-1 inline-block h-6 w-2/6 rounded-lg bg-gray-700" />
   </div>
  </div>
 );
}

export function ImageLoader() {
 return <div className="relative mb-5 h-36 w-full overflow-hidden rounded-2xl bg-gray-900/80 p-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"></div>;
}
