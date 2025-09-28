import { nestedCommentData } from "../utils/nestedCommentData/nestedCommentData";
import { IndividualComment } from "./IndividualComment";

function CommentList({ nestedCommentData: comments }) {
   if (!comments || comments.length === 0) {
      return null;
   }

   return comments.map((comment) => (
      <div key={comment.id} className="space-y-3">
         <IndividualComment data={comment} />
         <div className="ml-5 border-l border-neutral-200 pl-5">
            <CommentList nestedCommentData={comment.replies} />
         </div>
      </div>
   ));
}

export function CommentContainer() {
   return (
      <section className="mt-10 space-y-6">
         <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-neutral-900">
               Comments
            </h2>
            <p className="text-sm text-neutral-500">
               Join the conversation and share your thoughts with the community.
            </p>
         </div>
         <div className="space-y-4">
            <CommentList nestedCommentData={nestedCommentData} />
         </div>
      </section>
   );
}
