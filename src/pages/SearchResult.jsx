import { Link, useSearchParams } from "react-router-dom";
import { SearchResultCard } from "../components/SearchResultCard";
import { ShimmerUI } from "../components/ShimmerUI";
import { useSearchVideo } from "../hooks/useSearchVideo";

export default function SearchResult() {
   const [searchParams] = useSearchParams();
   const urlSearchQuery = searchParams.get("search_query");
   const { videos } = useSearchVideo(urlSearchQuery);

   return videos?.length === 0 ? (
      <ShimmerUI />
   ) : (
      <div>
         {videos.map((video, index) => (
            <Link
               to={`/watch?v=${video?.id?.videoId}`}
               key={video?.id?.videoId || index}
            >
               <SearchResultCard {...video} />
            </Link>
         ))}
      </div>
   );
}
