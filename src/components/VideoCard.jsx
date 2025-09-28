import { parseViews } from "../utils/parseViews";
import { parseVideoAge } from "../utils/parseVideoAge";
import { parseVideoDuration } from "../utils/parseVideoDuration";

export function VideoCard({ contentDetails, snippet, statistics }) {
   const viewCount = statistics?.viewCount;
   const uploadDate = snippet?.publishedAt;
   const videoDuration = contentDetails?.duration;
   const channelInitial = snippet?.channelTitle?.[0]?.toUpperCase() ?? "Y";
   const formattedDuration = videoDuration
      ? parseVideoDuration(videoDuration)
      : "0:00";

   return (
      <article className="group flex w-full max-w-[23rem] flex-col gap-3">
         <div className="relative aspect-video overflow-hidden rounded-3xl bg-neutral-200 shadow-lg shadow-black/10 transition group-hover:shadow-elevated">
            <img
               className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
               src={
                  snippet?.thumbnails?.high?.url ||
                  snippet?.thumbnails?.medium?.url
               }
               alt={snippet?.title || "Video thumbnail"}
               loading="lazy"
            />
            <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-white">
               {formattedDuration}
            </span>
         </div>
         <div className="flex gap-3 px-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-500">
               {channelInitial}
            </div>
            <div className="flex-1">
               <h3
                  className="text-sm font-semibold leading-snug text-neutral-900"
                  style={{
                     display: "-webkit-box",
                     WebkitLineClamp: 2,
                     WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                  }}
               >
                  {snippet?.title}
               </h3>
               <p className="mt-1 text-xs font-medium text-neutral-500">
                  {snippet?.channelTitle}
               </p>
               <p className="mt-1 text-xs text-neutral-500">
                  {viewCount != null ? parseViews(viewCount) : 0} views
                  <span className="mx-1 text-neutral-400">•</span>
                  {uploadDate != null ? parseVideoAge(uploadDate) : ""}
               </p>
            </div>
         </div>
      </article>
   );
}
