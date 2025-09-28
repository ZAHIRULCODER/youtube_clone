import { Link } from "react-router-dom";

export function AutoSuggestionContainer({ suggestion, setSearchQuery }) {
   return (
      <Link to={`/results?search_query=${suggestion}`}>
         <div
            onClick={() => {
               setSearchQuery(suggestion);
            }}
            className="py-2 p-3 hover:bg-gray-200 rounded-2xl"
         >
            <span className="mx-1 mr-4">🔍</span>
            {suggestion}
         </div>
      </Link>
   );
}
