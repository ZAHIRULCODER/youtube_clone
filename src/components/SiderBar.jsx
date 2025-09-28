import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosMusicalNote } from "react-icons/io";
import { MdMovieEdit } from "react-icons/md";
import { SiPodcastindex } from "react-icons/si";
import { SiYoutubegaming } from "react-icons/si";
import { LuNewspaper } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { BsLightbulb } from "react-icons/bs";
import { FaPersonDressBurst } from "react-icons/fa6";
import { MdOutlinePodcasts } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleMenu } from "../reduxtoolkit/slices/menuSlice";

export function SiderBar() {
   const isSideBarMenuOpen = useSelector((store) => store.menu.isMenuOpen);
   const location = useLocation();
   const dispatch = useDispatch();

   // if the menu is not open, return null (Early return)
   if (!isSideBarMenuOpen) return null;

   const sections = [
      {
         title: "Main",
         items: [
            { icon: IoMdHome, label: "Home", to: "/" },
            { icon: SiYoutubeshorts, label: "Shorts" },
            { icon: MdSubscriptions, label: "Subscriptions" },
         ],
      },
      {
         title: "You",
         items: [
            { icon: CgProfile, label: "Your channel" },
            { icon: MdHistory, label: "History" },
            { icon: BiSolidVideos, label: "Your videos" },
            { icon: MdOutlineWatchLater, label: "Watch later" },
            { icon: AiOutlineLike, label: "Liked videos" },
         ],
      },
      {
         title: "Explore",
         items: [
            { icon: IoMdTrendingUp, label: "Trending" },
            { icon: AiOutlineShopping, label: "Shopping" },
            { icon: IoIosMusicalNote, label: "Music" },
            { icon: MdMovieEdit, label: "Movies" },
            { icon: SiPodcastindex, label: "Live" },
            { icon: SiYoutubegaming, label: "Gaming" },
            { icon: LuNewspaper, label: "News" },
            { icon: TfiCup, label: "Sports" },
            { icon: BsLightbulb, label: "Learning" },
            { icon: FaPersonDressBurst, label: "Fashion & Beauty" },
            { icon: MdOutlinePodcasts, label: "Podcasts" },
         ],
      },
   ];

   return (
      <>
         <button
            type="button"
            aria-label="Close menu"
            onClick={() => dispatch(toggleMenu())}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
         />
         <aside className="fixed inset-y-0 left-0 z-50 w-72 shrink-0 overflow-y-auto bg-white/95 pb-10 pt-24 shadow-xl md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:bg-transparent md:pb-6 md:pr-4 md:pt-4 md:shadow-none">
            <nav className="panel space-y-8 p-4">
               {sections.map((section) => (
                  <div key={section.title}>
                     <p className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                        {section.title}
                     </p>
                     <ul className="mt-3 space-y-1">
                        {section.items.map((item) => (
                           <li key={item.label}>
                              <SidebarEntry
                                 {...item}
                                 active={item.to === location.pathname}
                              />
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </nav>
         </aside>
      </>
   );
}

function SidebarEntry({ icon: Icon, label, to, active }) {
   const baseClasses =
      "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition";
   const stateClasses = active
      ? "bg-neutral-900 text-white shadow-elevated"
      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900";

   if (to) {
      return (
         <Link to={to} className={`${baseClasses} ${stateClasses}`}>
            <Icon size={20} />
            <span>{label}</span>
         </Link>
      );
   }

   return (
      <button
         type="button"
         className={`${baseClasses} ${stateClasses} w-full text-left`}
      >
         <Icon size={20} />
         <span>{label}</span>
      </button>
   );
}
