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
		//debouncing
		const timer = setTimeout(() => {
			// if the suggestions present in cache then show dont do api call
			if (cache[urlSearchQuery]) {
				setSuggestions(cache[urlSearchQuery]);
			} else {
				// if the suggestions are not in cache call this
				getSearchSuggestions();
			}
		}, 210);

		return () => {
			clearTimeout(timer);
		};
	}, [urlSearchQuery]);

	const getSearchSuggestions = async () => {
		try {
			// console.log("Api", searchQuery);
			const response = await axios.get(
				YOUTUBE_SUGGESTION_API_URL + urlSearchQuery
			);
			// console.log( response.data[1]);
			setSuggestions(response.data[1]);

			// update cache  with the new suggestions
			dispatch(cacheResult({ [urlSearchQuery]: response.data[1] }));
		} catch (error) {
			console.log(`Error in fetching suggestions ${error}`);
		}
	};

	return { suggestions };
};
