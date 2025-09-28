import axios from "axios";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../constants";

export const useSearchVideo = (urlSearchQuery) => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      if (!urlSearchQuery?.trim()) {
         setVideos([]);
         return;
      }

      (async () => {
         try {
            const response = await axios.get(
               YOUTUBE_SEARCH_API_URL + urlSearchQuery.trim()
            );
            setVideos(response?.data?.items);
            // console.log(response.data.items);
         } catch (error) {
            console.log(`Failed to Fetch Videos: ${error}`);
         }
      })();
   }, [urlSearchQuery]);

   return { videos };
};
