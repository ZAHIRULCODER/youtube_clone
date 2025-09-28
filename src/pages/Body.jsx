import { Outlet } from "react-router-dom";
import { SiderBar } from "../components/SiderBar";

export default function Body() {
   return (
      <div className="flex">
         <SiderBar />
         <Outlet />
      </div>
   );
}
