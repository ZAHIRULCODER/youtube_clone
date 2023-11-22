import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../constants";
import axios from "axios";

export const useMainPageVideo = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(YOUTUBE_VIDEO_API_URL);
				setVideos(response?.data?.items);
				// console.log(response?.data?.items);
			} catch (error) {
				console.log(`Error Fetching Videos: ${error}`);
			}
		})();
	}, []);

	return { videos };
};
