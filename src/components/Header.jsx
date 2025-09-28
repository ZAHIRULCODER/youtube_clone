import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import YoutubeLogo from "/assets/youtubelogo.png";
import ProfileLogo from "/assets/profilelogo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../reduxtoolkit/slices/menuSlice";
import { SearchBar } from "./SearchBar";

export function Header() {
   const dispatch = useDispatch();

   return (
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
         <div className="mx-auto flex w-full items-center gap-3 px-4 py-3 md:gap-6 md:px-6">
            <button
               type="button"
               aria-label="Toggle menu"
               onClick={() => dispatch(toggleMenu())}
               className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-neutral-600 transition hover:border-neutral-200 hover:bg-neutral-100"
            >
               <RxHamburgerMenu size={22} />
            </button>

            <a href="/" className="flex items-center gap-2">
               <img
                  className="h-9 w-auto select-none"
                  src={YoutubeLogo}
                  alt="YouTube logo"
               />
               <span className="hidden text-lg font-semibold tracking-tight text-neutral-900 sm:block">
                  YouTube
               </span>
            </a>

            <div className="flex flex-1 items-center justify-center">
               <SearchBar />
            </div>

            <div className="hidden items-center gap-2 sm:flex md:gap-3">
               <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-neutral-600 transition hover:border-neutral-200 hover:bg-neutral-100"
                  aria-label="Create"
               >
                  <HiOutlineVideoCamera size={22} />
               </button>
               <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-neutral-600 transition hover:border-neutral-200 hover:bg-neutral-100"
                  aria-label="Notifications"
               >
                  <FiBell size={20} />
               </button>
               <button
                  type="button"
                  className="overflow-hidden rounded-full border border-neutral-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                  aria-label="Profile"
               >
                  <img
                     className="h-9 w-9 object-cover"
                     src={ProfileLogo}
                     alt="Profile"
                  />
               </button>
            </div>
         </div>
      </header>
   );
}
