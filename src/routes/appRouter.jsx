import App from "../App";
import Body from "../pages/Body";
import Error from "../pages/Error";
import MainContainer from "../pages/MainContainer";
import SearchResult from "../pages/SearchResult";
import VideoContainer from "../pages/VideoContainer";
import WatchVideoPage from "../pages/WatchVideoPage";
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
