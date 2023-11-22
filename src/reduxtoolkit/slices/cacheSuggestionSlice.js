import { createSlice } from "@reduxjs/toolkit";

const cacheSuggestionSlice = createSlice({
	name: "cacheSuggestion",
	initialState: {
		suggestions: {},
	},
	reducers: {
		cacheResult: (state, action) => {
			// {"rea": ["react", "react native"]}
			//  state = Object.assign(state, action.payload);
			state.suggestions = { ...state.suggestions, ...action.payload };
		},
	},
});

export const { cacheResult } = cacheSuggestionSlice.actions;

export default cacheSuggestionSlice.reducer;
