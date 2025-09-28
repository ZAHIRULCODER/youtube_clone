export function ShimmerUI() {
   return (
      <div>
         <div className="flex flex-wrap gap-4 m-6 justify-center">
            {Array.from({ length: 20 }).map((_, index) => (
               <div
                  key={index}
                  className="animate-pulse w-[270px] h-[180px] m-5 bg-slate-400  p-4 rounded-lg"
               ></div>
            ))}
         </div>
      </div>
   );
}
