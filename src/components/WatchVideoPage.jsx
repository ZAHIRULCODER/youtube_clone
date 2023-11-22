import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../reduxtoolkit/slices/menuSlice";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchVideoPage = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	// console.log(searchParams.get("v"));
	const videoId = searchParams.get("v");

	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="flex w-full">
			{/* Left */}
			<div className="px-10 py-5">
				<iframe
					className="rounded-xl"
					width="1000"
					height="500"
					src={`https://www.youtube.com/embed/${videoId}?si=4J6vABkGDiuMVmnv?&autoplay=1&mute=2`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen></iframe>

				<div>
					<CommentContainer />
				</div>
			</div>
			{/* Right */}
			<div className="p-5 w-full">
				<LiveChat />
			</div>
		</div>
	);
};

export default WatchVideoPage;
