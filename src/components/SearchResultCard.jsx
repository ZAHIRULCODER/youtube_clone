import React from "react";
import { parseVideoAge } from "../utils/parseVideoAge";

const SearchResultCard = ({ snippet }) => {
	const {
		title,
		publishedAt,
		description,
		channelTitle,
		thumbnails,
		channelId, // will use this later to fetch 
	} = snippet;

	const uploadDate = parseVideoAge(publishedAt);

	return (
		<div className="flex ml-20 mt-4 items-center gap-3 p-2 w-[85%] h-[14rem] ">
			{/* left */}
			<div className=" w-[52%] h-full ">
				<img
					className="object-cover rounded-xl  h-full w-full"
					src={thumbnails?.high?.url}
					alt="thumbnails"
				/>
			</div>

			{/* right */}
			<div className=" w-full h-full ">
				<ul>
					<li className="text-lg font-semibold ">{title}</li>

					<li>{uploadDate}</li>
					<li className="text-sm py-2">{channelTitle}</li>
					<li className="text-sm">{description}</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchResultCard;
