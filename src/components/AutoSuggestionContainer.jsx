import React from "react";
import { Link } from "react-router-dom";

const AutoSuggestionContainer = ({
	suggestion,
	setSearchQuery,
	setShowSuggestions,
}) => {
	// console.log(suggestion);

	return (
		<>
			<Link to={`/results?search_query=${suggestion}`}>
				<div
					onClick={() => {
						setSearchQuery(suggestion);
						setShowSuggestions(false);
					}}
					className="py-2 hover:bg-gray-200 rounded-2xl">
					<span className="mx-1 mr-4">🔍</span>
					{suggestion}
				</div>
			</Link>
		</>
	);
};

export default AutoSuggestionContainer;
