export function LiveChatMessage({ name, chat }) {
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
      <div className="group flex items-start gap-3 rounded-xl px-3 py-2 transition hover:bg-neutral-100">
         <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-semibold text-neutral-600">
            {initials}
         </span>
         <div className="flex-1 text-sm leading-snug">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
               {name}
            </p>
            <p className="mt-1 text-neutral-700">{chat}</p>
         </div>
      </div>
   );
}
