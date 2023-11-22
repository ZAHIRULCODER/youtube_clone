import React from "react";
import SearchResultCard from "./SearchResultCard";
import { useSearchVideo } from "../hooks/useSearchVideo";
import { Link, useSearchParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	// console.log(searchParams.get("search_query"));
	const urlSearchQuery = searchParams.get("search_query");
	const { videos } = useSearchVideo(urlSearchQuery);

	return videos?.length === 0 ? (
		<ShimmerUI />
	) : (
		<div>
			{videos.map((video, index) => (
				<Link
					to={`/watch?v=${video?.id?.videoId}`}
					key={video?.id?.videoId || index}>
					{console.log(video)}
					<SearchResultCard {...video} />
				</Link>
			))}
		</div>
	);
};

export default SearchResult;
