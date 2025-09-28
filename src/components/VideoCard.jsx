import { parseViews } from "../utils/parseViews";
import { parseVideoAge } from "../utils/parseVideoAge";
import { parseVideoDuration } from "../utils/parseVideoDuration";

export function VideoCard({ contentDetails, snippet, statistics }) {
   const viewCount = statistics?.viewCount;
   const uploadDate = snippet?.publishedAt;
   const videoDuration = contentDetails?.duration;

   return (
      <div className=" w-[19rem] p-2">
         <div className="relative">
            <img
               className="object-cover rounded-2xl"
               src={snippet?.thumbnails?.medium?.url}
               alt="thumbnail"
            />
            <div className="absolute bottom-0 right-0 p-2 ">
               <span className="p-1 m-2 text-xs text-white bg-black bg-opacity-50">
                  {parseVideoDuration(videoDuration)}
               </span>
            </div>
         </div>
         <ul className="px-4 mt-2">
            <li className="text-md font-semibold">{snippet?.title}</li>
            <li className="text-gray-700">{snippet?.channelTitle}</li>
            <li className="text-gray-700">
               {viewCount != null ? parseViews(viewCount) : 0} views
               <span className="mx-1 font-bold text-gray-700">•</span>
               {uploadDate != null ? parseVideoAge(uploadDate) : ""}
            </li>
         </ul>
      </div>
   );
}
