export const parseVideoDuration = (duration) => {
	const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
	const hours = parseInt(match[1]) || 0;
	const minutes = parseInt(match[2]) || 0;
	const seconds = parseInt(match[3]) || 0;

	// Formatting each component to be two digits
	const formattedHours = hours < 10 ? "0" + hours : hours;
	let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

	// Constructing the output
	if (hours > 0) {
		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	} else {
		// Remove leading zero from minutes if only seconds are present For example 0.14
		if (minutes === 0 && hours === 0) {
			formattedMinutes = minutes.toString();
		}
		return `${formattedMinutes}:${formattedSeconds}`;
	}
};
