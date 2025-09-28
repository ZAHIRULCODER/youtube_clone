function Button({ name }) {
   return (
      <button
         type="button"
         className={`chip ${
            name === "All" ? "bg-neutral-900 text-white shadow-elevated" : ""
         }`}
      >
         {name}
      </button>
   );
}

export function ButtonList() {
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
      <div className="relative">
         <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#f8fafc] to-transparent" />
         <nav className="no-scrollbar flex items-center gap-3 overflow-x-auto px-3 py-4 sm:px-0">
            {listOfButtons.map((button) => (
               <Button key={button} name={button} />
            ))}
         </nav>
         <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#f8fafc] to-transparent" />
      </div>
   );
}
