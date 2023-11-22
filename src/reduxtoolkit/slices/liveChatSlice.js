import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../../constants";

const liveChatSlice = createSlice({
	name: "livechat",
	initialState: {
		chats: [],
	},
	reducers: {
		addChat: (state, action) => {
			state.chats.unshift(action.payload); // unshift push from front of array
			state.chats.splice(OFFSET_LIVE_CHAT, 1); // splice will remove 1 message from top of array
		},
	},
});

export const { addChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
