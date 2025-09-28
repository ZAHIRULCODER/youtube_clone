import { nestedCommentData } from "../utils/nestedCommentData/nestedCommentData";
import { IndividualComment } from "./IndividualComment";

function CommentList({ nestedCommentData: comments }) {
   if (!comments || comments.length === 0) {
      return null;
   }

   return comments.map((comment) => (
      <div key={comment.id}>
         <IndividualComment data={comment} />
         <div className="pl-10 border-l border-l-black">
            <CommentList nestedCommentData={comment.replies} />
         </div>
      </div>
   ));
}

export function CommentContainer() {
   return (
      <div>
         <h1 className="pt-8 text-2xl font-bold">Comments</h1>
         <CommentList nestedCommentData={nestedCommentData} />
      </div>
   );
}
