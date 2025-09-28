import { Outlet } from "react-router-dom";
import { SiderBar } from "../components/SiderBar";

export default function Body() {
   return (
      <main className="mx-auto flex w-full gap-4 px-3 py-6 sm:px-6">
         <SiderBar />
         <section className="flex-1">
            <Outlet />
         </section>
      </main>
   );
}
