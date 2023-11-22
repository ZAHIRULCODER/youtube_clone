import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice";
import cacheSuggestionSlice from "../slices/cacheSuggestionSlice";
import liveChatSlice from "../slices/liveChatSlice";

const store = configureStore({
	reducer: {
		menu: menuSlice,
		cacheSuggestion: cacheSuggestionSlice,
		livechat: liveChatSlice,
	},
});

export default store;
