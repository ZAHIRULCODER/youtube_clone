import React from "react";
import { nestedCommentData } from "../utils/nestedCommentData/nestedCommentData";
import IndividualComment from "./IndividualComment";

//Nested comments Like reddit using recursion
const CommentList = ({ nestedCommentData }) => {
	return nestedCommentData.map((nestedCommentData) => (
		<div key={nestedCommentData.id}>
			<IndividualComment data={nestedCommentData} />
			<div className="pl-10 border-l border-l-black">
				{/* recursion */}
				<CommentList nestedCommentData={nestedCommentData.replies} />
			</div>
		</div>
	));
};


const CommentContainer = () => {
	return (
		<div>
			<h1 className="pt-8 text-2xl font-bold">Comments</h1>
			<CommentList nestedCommentData={nestedCommentData} />
		</div>
	);
};

export default CommentContainer;
