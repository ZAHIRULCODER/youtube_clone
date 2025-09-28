import App from "../App";
import Body from "../components/Body";
import Error from "../components/Error";
import MainContainer from "../components/MainContainer";
import SearchResult from "../components/SearchResult";
import VideoContainer from "../components/VideoContainer";
import WatchVideoPage from "../components/WatchVideoPage";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />,
            children: [
               {
                  path: "/",
                  element: <MainContainer />,
                  children: [
                     { path: "/", element: <VideoContainer /> },
                     { path: "results", element: <SearchResult /> },
                  ],
               },
               { path: "watch", element: <WatchVideoPage /> },
            ],
         },
      ],
   },
]);

export default appRouter;
