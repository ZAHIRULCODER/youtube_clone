import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useMainPageVideo } from "../hooks/useMainPageVideo";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
	const { videos } = useMainPageVideo();

	return videos.length === 0 ? (
		<ShimmerUI />
	) : (
		<div className="flex flex-wrap p-6 min-w-fit ">
			{videos.map((video) => (
				<Link key={video?.id} to={`/watch?v=${video.id}`}>
					<VideoCard {...video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
