export function ShimmerUI({ variant = "grid" }) {
   if (variant === "list") {
      return (
         <section className="flex flex-col gap-4 pb-8">
            {Array.from({ length: 6 }).map((_, index) => (
               <div key={index} className="panel flex animate-pulse gap-4 p-4">
                  <div className="h-40 w-full rounded-2xl bg-neutral-200 md:w-72" />
                  <div className="flex flex-1 flex-col gap-3">
                     <div className="h-5 w-3/4 rounded-full bg-neutral-200" />
                     <div className="h-4 w-1/2 rounded-full bg-neutral-200" />
                     <div className="h-4 w-full rounded-full bg-neutral-100" />
                     <div className="h-4 w-5/6 rounded-full bg-neutral-100" />
                  </div>
               </div>
            ))}
         </section>
      );
   }

   return (
      <section className="grid gap-8 px-1 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-3">
               <div className="aspect-video w-full rounded-3xl bg-neutral-200 shadow-inner animate-pulse" />
               <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200 animate-pulse" />
                  <div className="flex-1 space-y-2">
                     <div className="h-4 w-5/6 rounded-full bg-neutral-200 animate-pulse" />
                     <div className="h-3 w-1/2 rounded-full bg-neutral-100 animate-pulse" />
                     <div className="h-3 w-2/3 rounded-full bg-neutral-100 animate-pulse" />
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
}
