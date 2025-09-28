import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import store from "./reduxtoolkit/store/store";

export default function App() {
   return (
      <Provider store={store}>
         <div className="flex min-h-screen flex-col bg-[#f8fafc]">
            <Header />
            <div className="flex-1 pb-12">
               <Outlet />
            </div>
         </div>
      </Provider>
   );
}
