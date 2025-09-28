import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import store from "../reduxtoolkit/store/store";

export default function App() {
   return (
      <Provider store={store}>
         <Header />
         <Outlet />
      </Provider>
   );
}
