import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export function AutoSuggestionContainer({ suggestion, setSearchQuery }) {
   return (
      <Link
         to={`/results?search_query=${suggestion}`}
         onMouseDown={() => setSearchQuery(suggestion)}
         className="flex w-full items-center gap-3 px-4 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100"
      >
         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
            <FiSearch size={16} />
         </span>
         <span className="truncate">{suggestion}</span>
      </Link>
   );
}
