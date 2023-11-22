import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../reduxtoolkit/slices/liveChatSlice";
import { randomNameGenerator } from "../utils/randomNameGenerator/randomNameGenerator";
import { randomChatGenerator } from "../utils/randomChatGenerator/randomChatGenerator";

const LiveChat = () => {
	const [typeLiveMessage, setTypeLiveMessage] = useState("");
	const dispatch = useDispatch();

	const liveChats = useSelector((store) => store.livechat.chats);

	useEffect(() => {
		const interval = setInterval(() => {
			//Api Polling --> replace with axios
			// console.log("Live Chat");
			dispatch(
				addChat({
					name: randomNameGenerator(),
					chat: randomChatGenerator(),
				})
			);
		}, 1500);

		return () => clearInterval(interval);
	}, []);

	const handleSubmitLiveMessage = (e) => {
		e.preventDefault();
		dispatch(
			addChat({
				name: "Sk Zahirul Islam",
				chat: typeLiveMessage,
			})
		);
		setTypeLiveMessage("");
	};

	return (
		<>
			<div className="w-full h-[500px] p-3 border border-black rounded-t-xl bg-slate-100 flex flex-col">
				<p className="border-b border-b-black">Live Chat</p>
				<div className="flex-grow flex flex-col-reverse overflow-y-scroll">
					{liveChats.map((c, index) => (
						<LiveChatMessage key={index} name={c.name} chat={c.chat} />
					))}
				</div>
			</div>
			<form
				onSubmit={handleSubmitLiveMessage}
				className="p-3 border border-black rounded-b-xl">
				<input
					value={typeLiveMessage}
					onChange={(e) => setTypeLiveMessage(e.target.value)}
					className="border border-black w-[80%] rounded-md mr-2 p-2"
					type="text"
					placeholder="Type your message here"
					required
				/>
				<button className="border w-[17%] p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
					send
				</button>
			</form>
		</>
	);
};

export default LiveChat;
