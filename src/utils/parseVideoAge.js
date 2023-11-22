export const parseVideoAge = (publishedAt) => {
	// Parse the ISO timestamp
	const pastDate = new Date(publishedAt);
	const currentDate = new Date();

	// Calculate the difference in milliseconds
	const diff = currentDate - pastDate;

	// Convert difference to minutes, hours, etc.
	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30); // Approximation
	const years = Math.floor(days / 365); // Approximation

	// Format the difference as a relative time string
	if (seconds < 60) {
		return "just now";
	} else if (minutes < 60) {
		return minutes + " min ago";
	} else if (hours < 24) {
		return hours + " hours ago";
	} else if (days < 30) {
		return days + " days ago";
	} else if (months < 12) {
		return months + " months ago";
	} else {
		return years + " years ago";
	}
};
