import { parseVideoAge } from "../utils/parseVideoAge";

export function SearchResultCard({ snippet }) {
   const { title, publishedAt, description, channelTitle, thumbnails } =
      snippet;
   const uploadDate = parseVideoAge(publishedAt);

   return (
      <article className="panel flex flex-col gap-4 p-4 transition hover:shadow-elevated md:flex-row">
         <div className="relative aspect-video overflow-hidden rounded-3xl bg-neutral-200 md:w-72 lg:w-80">
            <img
               className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
               src={thumbnails?.high?.url || thumbnails?.medium?.url}
               alt={title}
               loading="lazy"
            />
         </div>

         <div className="flex flex-1 flex-col gap-3">
            <div>
               <h3
                  className="text-lg font-semibold text-neutral-900"
                  style={{
                     display: "-webkit-box",
                     WebkitLineClamp: 2,
                     WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                  }}
               >
                  {title}
               </h3>
               <p className="mt-1 text-sm font-medium text-neutral-500">
                  {channelTitle}
                  <span className="mx-1 text-neutral-400">•</span>
                  {uploadDate}
               </p>
            </div>
            <p
               className="text-sm leading-relaxed text-neutral-600"
               style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
               }}
            >
               {description}
            </p>
         </div>
      </article>
   );
}
