import { Link } from "react-router-dom";
import { ShimmerUI } from "../components/ShimmerUI";
import { VideoCard } from "../components/VideoCard";
import { useMainPageVideo } from "../hooks/useMainPageVideo";

export default function VideoContainer() {
   const { videos } = useMainPageVideo();

   return videos.length === 0 ? (
      <ShimmerUI />
   ) : (
      <div className="flex flex-wrap p-6 min-w-fit ">
         {videos.map((video) => (
            <Link key={video?.id} to={`/watch?v=${video.id}`}>
               <VideoCard {...video} />
            </Link>
         ))}
      </div>
   );
}
