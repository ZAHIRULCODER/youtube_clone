import { Link } from "react-router-dom";
import { ShimmerUI } from "../components/ShimmerUI";
import { VideoCard } from "../components/VideoCard";
import { useMainPageVideo } from "../hooks/useMainPageVideo";

export default function VideoContainer() {
   const { videos } = useMainPageVideo();

   return videos.length === 0 ? (
      <ShimmerUI variant="grid" />
   ) : (
      <section className="grid gap-8 px-1 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {videos.map((video) => (
            <Link
               key={video?.id}
               to={`/watch?v=${video.id}`}
               className="block justify-self-center transition hover:-translate-y-1 hover:no-underline"
            >
               <VideoCard {...video} />
            </Link>
         ))}
      </section>
   );
}
