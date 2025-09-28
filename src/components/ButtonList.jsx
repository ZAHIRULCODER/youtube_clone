import { useState } from "react";

function Button({ name, isActive, onClick }) {
   const base = "chip transition-all duration-200";
   const active = isActive
      ? "bg-neutral-900 text-white shadow-elevated"
      : "hover:bg-neutral-100";

   return (
      <button
         type="button"
         aria-pressed={isActive}
         onClick={onClick}
         className={`${base} ${active}`}
      >
         {name}
      </button>
   );
}

export function ButtonList() {
   const [activeFilter, setActiveFilter] = useState("All");
   const listOfButtons = [
      "All",
      "Music",
      "Mixes",
      "Gaming",
      "Podcasts",
      "News",
      "Developer Talks",
      "Live",
      "Technology",
      "Machine Learning",
      "JavaScript",
      "Python",
      "Data Visualization",
      "Tailwind CSS",
      "Next.js",
      "Productivity",
      "Inspiration",
   ];

   return (
      <div className="relative isolate overflow-hidden">
         <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent" />
         <nav className="no-scrollbar flex items-center gap-3 overflow-x-auto px-10 py-4">
            {listOfButtons.map((button) => (
               <Button
                  key={button}
                  name={button}
                  isActive={button === activeFilter}
                  onClick={() => setActiveFilter(button)}
               />
            ))}
         </nav>
         <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent" />
      </div>
   );
}
