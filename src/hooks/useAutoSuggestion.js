import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../reduxtoolkit/slices/cacheSuggestionSlice";
import axios from "axios";

export const useAutoSugestion = (urlSearchQuery) => {
   const dispatch = useDispatch();
   const cache = useSelector((store) => store.cacheSuggestion.suggestions);
   const [suggestions, setSuggestions] = useState([]);

   /**
    * cache = {
    * 	"react": ["react tutorial", "react js", "react native"],
    * }
    *
    * searchQuery = "react"
    */

   useEffect(() => {
      if (!urlSearchQuery?.trim()) {
         setSuggestions([]);
         return;
      }

      //debouncing
      const timer = setTimeout(() => {
         // if the suggestions present in cache then show dont do api call
         const query = urlSearchQuery.trim();
         if (cache[query]) {
            setSuggestions(cache[query]);
         } else {
            // if the suggestions are not in cache call this
            getSearchSuggestions(query);
         }
      }, 210);

      return () => {
         clearTimeout(timer);
      };
   }, [urlSearchQuery]);

   const getSearchSuggestions = async (query) => {
      try {
         const response = await axios.get(YOUTUBE_SUGGESTION_API_URL + query);
         setSuggestions(response.data[1]);

         // update cache  with the new suggestions
         dispatch(cacheResult({ [query]: response.data[1] }));
      } catch (error) {
         console.log(`Error in fetching suggestions ${error}`);
      }
   };

   return { suggestions };
};
