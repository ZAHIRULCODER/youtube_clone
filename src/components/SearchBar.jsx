import { useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { useAutoSugestion } from "../hooks/useAutoSuggestion";
import { AutoSuggestionContainer } from "./AutoSuggestionContainer";

export function SearchBar() {
   const [searchQuery, setSearchQuery] = useState("");
   const { suggestions } = useAutoSugestion(searchQuery);
   const [showSuggestions, setShowSuggestions] = useState(false);

   const handleSearchSubmit = async (event) => {
      event.preventDefault();
      try {
         await axios.get(YOUTUBE_SEARCH_API_URL + searchQuery);
         window.location.href = `/results?search_query=${searchQuery}`;
      } catch (error) {
         console.log(`Fetching search results failed: ${error}`);
      }
   };

   return (
      <div className="relative">
         <form onSubmit={handleSearchSubmit} className="flex justify-center">
            <input
               value={searchQuery}
               onChange={(event) => setSearchQuery(event.target.value)}
               onFocus={() => setShowSuggestions(true)}
               onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
               className="border border-black rounded-l-full w-1/2 p-2 pl-14"
               type="text"
               placeholder="Search"
            />

            <button
               type="submit"
               className="border border-black rounded-r-full p-2 "
            >
               Search
            </button>
         </form>
         {showSuggestions ? (
            <div className="flex flex-col h-max ml-[267px] rounded-2xl w-1/2 absolute border shadow-2xl  bg-white z-50 cursor-default">
               {suggestions?.length > 0
                  ? suggestions.map((suggestion, index) => (
                       <AutoSuggestionContainer
                          key={index + 99 * 8.895}
                          suggestion={suggestion}
                          setSearchQuery={setSearchQuery}
                       />
                    ))
                  : null}
            </div>
         ) : null}
      </div>
   );
}
