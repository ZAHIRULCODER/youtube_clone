import React from "react";

const LiveChatMessage = ({ name, chat }) => {
	return (
		<div className="my-2 flex items-center hover:bg-gray-300 cursor-pointer  ">
			<img className="h-7" src="/assets/profilelogo.png" alt="profilepics" />
			<div className="text-sm mx-2 ">
				<span className="text-gray-600 mr-2">{name}</span>
				<span className="font-medium">{chat}</span>
			</div>
		</div>
	);
};

export default LiveChatMessage;
