import { parseVideoAge } from "../utils/parseVideoAge";

export function SearchResultCard({ snippet }) {
   const { title, publishedAt, description, channelTitle, thumbnails } =
      snippet;
   const uploadDate = parseVideoAge(publishedAt);

   return (
      <div className="flex ml-20 mt-4 items-center gap-3 p-2 w-[85%] h-[14rem] ">
         <div className=" w-[52%] h-full ">
            <img
               className="object-cover rounded-xl  h-full w-full"
               src={thumbnails?.high?.url}
               alt="thumbnails"
            />
         </div>

         <div className=" w-full h-full ">
            <ul>
               <li className="text-lg font-semibold ">{title}</li>
               <li>{uploadDate}</li>
               <li className="text-sm py-2">{channelTitle}</li>
               <li className="text-sm">{description}</li>
            </ul>
         </div>
      </div>
   );
}
