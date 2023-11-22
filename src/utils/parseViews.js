export const parseViews = (viewCount) => {
	if (viewCount >= 1e9) {
		return (viewCount / 1e9).toFixed(1) + "B";
	} else if (viewCount >= 1e6) {
		return (viewCount / 1e6).toFixed(1) + "M";
	} else if (viewCount >= 1e3) {
		return (viewCount / 1e3).toFixed(1) + "K";
	} else {
		return viewCount.toString();
	}
};
