import { Link, useSearchParams } from "react-router-dom";
import { SearchResultCard } from "../components/SearchResultCard";
import { ShimmerUI } from "../components/ShimmerUI";
import { useSearchVideo } from "../hooks/useSearchVideo";

export default function SearchResult() {
   const [searchParams] = useSearchParams();
   const urlSearchQuery = searchParams.get("search_query");
   const { videos } = useSearchVideo(urlSearchQuery);

   if (!urlSearchQuery) {
      return (
         <section className="panel mt-10 space-y-3 p-8 text-center">
            <h2 className="text-xl font-semibold text-neutral-900">
               Try searching for something new
            </h2>
            <p className="text-neutral-600">
               Use the search bar above to explore videos tailored to your
               interests.
            </p>
         </section>
      );
   }

   return videos?.length === 0 ? (
      <ShimmerUI variant="list" />
   ) : (
      <section className="flex flex-col gap-4 pb-16">
         {videos.map((video, index) => (
            <Link
               to={`/watch?v=${video?.id?.videoId}`}
               key={video?.id?.videoId || index}
               className="block transition hover:-translate-y-1 hover:no-underline"
            >
               <SearchResultCard {...video} />
            </Link>
         ))}
      </section>
   );
}
