import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../reduxtoolkit/slices/menuSlice";
import { CommentContainer } from "../components/CommentContainer";
import { LiveChat } from "../components/LiveChat";

export default function WatchVideoPage() {
   const dispatch = useDispatch();
   const [searchParams] = useSearchParams();
   const videoId = searchParams.get("v");

   useEffect(() => {
      dispatch(closeMenu());
   }, [dispatch]);

   if (!videoId) {
      return (
         <section className="panel mt-10 p-10 text-center">
            <h2 className="text-xl font-semibold text-neutral-900">
               Video unavailable
            </h2>
            <p className="mt-2 text-neutral-600">
               We couldn&apos;t find the video you were looking for.
            </p>
         </section>
      );
   }

   return (
      <section className="flex w-full flex-col gap-8 lg:flex-row">
         <div className="flex-1 space-y-8">
            <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-elevated">
               <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               />
            </div>
            <CommentContainer />
         </div>
         <div className="w-full lg:w-[26rem] xl:w-[28rem]">
            <LiveChat />
         </div>
      </section>
   );
}
