import { useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { useAutoSugestion } from "../hooks/useAutoSuggestion";
import { AutoSuggestionContainer } from "./AutoSuggestionContainer";

export function SearchBar() {
   const [searchQuery, setSearchQuery] = useState("");
   const { suggestions } = useAutoSugestion(searchQuery);
   const [showSuggestions, setShowSuggestions] = useState(false);

   const handleSearchSubmit = async (event) => {
      event.preventDefault();
      const query = searchQuery.trim();
      if (!query) return;
      try {
         await axios.get(YOUTUBE_SEARCH_API_URL + query);
         setShowSuggestions(false);
         window.location.href = `/results?search_query=${query}`;
      } catch (error) {
         console.log(`Fetching search results failed: ${error}`);
      }
   };

   return (
      <div className="relative w-full max-w-3xl">
         <form
            onSubmit={handleSearchSubmit}
            className="flex w-full items-center gap-2"
         >
            <div className="relative flex-1">
               <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  <FiSearch size={18} />
               </span>
               <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                     setTimeout(() => setShowSuggestions(false), 120)
                  }
                  className="w-full rounded-full border border-neutral-200 bg-white/95 py-2.5 pl-11 pr-16 text-sm text-neutral-800 shadow-inner shadow-black/5 transition focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                  type="text"
                  placeholder="Search"
                  autoComplete="off"
               />
               <button
                  type="submit"
                  className="absolute right-1 top-1/2 flex h-9 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-elevated transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
                  aria-label="Search"
               >
                  <FiSearch size={18} />
               </button>
            </div>
            <button
               type="button"
               className="hidden h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 sm:flex"
               aria-label="Voice search"
            >
               <HiOutlineMicrophone size={18} />
            </button>
         </form>
         {showSuggestions && suggestions?.length > 0 ? (
            <div
               className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 max-h-80 overflow-y-auto rounded-2xl border border-neutral-200 bg-white/95 shadow-2xl backdrop-blur"
               role="listbox"
            >
               {suggestions.map((suggestion) => (
                  <AutoSuggestionContainer
                     key={suggestion}
                     suggestion={suggestion}
                     setSearchQuery={setSearchQuery}
                  />
               ))}
            </div>
         ) : null}
      </div>
   );
}
