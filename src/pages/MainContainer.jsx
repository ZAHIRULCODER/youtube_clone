import { Outlet } from "react-router-dom";
import { ButtonList } from "../components/ButtonList";

export default function MainContainer() {
   return (
      <div>
         <ButtonList />
         <Outlet />
      </div>
   );
}
