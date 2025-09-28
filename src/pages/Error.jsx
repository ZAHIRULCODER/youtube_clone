import { Link, useRouteError } from "react-router-dom";

export default function Error() {
   const error = useRouteError();
   const { status, statusText } = error;

   return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-6">
         <div className="panel max-w-lg space-y-6 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
               Error {status}
            </p>
            <h1 className="text-3xl font-bold text-neutral-900">
               {statusText || "Something went wrong"}
            </h1>
            <p className="text-neutral-600">
               We&apos;re sorry, but the page you were looking for couldn&apos;t
               be loaded. Please head back and try again.
            </p>
            <div className="flex justify-center">
               <Link
                  to="/"
                  className="rounded-full bg-neutral-900 px-6 py-2 text-sm font-semibold text-white shadow-elevated transition hover:bg-neutral-800"
               >
                  Back to home
               </Link>
            </div>
         </div>
      </section>
   );
}
