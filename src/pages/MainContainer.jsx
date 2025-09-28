import { Outlet } from "react-router-dom";
import { ButtonList } from "../components/ButtonList";

export default function MainContainer() {
   return (
      <section className="flex flex-col gap-6 pb-12">
         <ButtonList />
         <Outlet />
      </section>
   );
}
