export const YOUTUBE_VIDEO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
	import.meta.env.VITE_YOUTUBE_API_KEY
}`;

export const YOUTUBE_SUGGESTION_API_URL =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API_URL = `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&maxResults=50&key=${
	import.meta.env.VITE_YOUTUBE_API_KEY
}&q=`;


export const OFFSET_LIVE_CHAT = 50;


