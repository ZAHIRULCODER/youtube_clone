export function IndividualComment({ data }) {
   const { name, comments } = data;
   const initials = name
      ? name
           .split(" ")
           .filter(Boolean)
           .slice(0, 2)
           .map((part) => part[0])
           .join("")
           .toUpperCase()
      : "U";

   return (
      <article className="panel flex gap-3 p-4 transition hover:shadow-elevated">
         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
            {initials}
         </div>
         <div className="flex-1 text-sm">
            <p className="font-semibold text-neutral-900">{name}</p>
            <p className="mt-1 leading-relaxed text-neutral-600">{comments}</p>
         </div>
      </article>
   );
}
