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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function SiderBar() {
   const isSideBarMenuOpen = useSelector((store) => store.menu.isMenuOpen);

   // if the menu is not open, return null (Early return)
   if (!isSideBarMenuOpen) return null;

   return (
      <div className=" min-w-fit p-6 shadow-lg">
         <ul>
            <Link to="/">
               <li className="flex items-center font-medium py-2 ">
                  <IoMdHome size={25} className="mr-1" />
                  Home
               </li>
            </Link>

            <li className="flex items-center font-medium py-2">
               <SiYoutubeshorts size={22} className="mr-1" />
               Shorts
            </li>
            <li className="flex items-center font-medium py-2">
               <MdSubscriptions size={22} className="mr-1" />
               Subscriptions
            </li>
            <li className="flex items-center font-medium py-2">
               <CgProfile size={22} className="mr-1" />
               Your channel
            </li>
            <li className="flex items-center font-medium py-2">
               <MdHistory size={25} className="mr-1" />
               History
            </li>
            <li className="flex items-center font-medium py-2">
               <BiSolidVideos size={22} className="mr-1" />
               Your videos
            </li>
            <li className="flex items-center font-medium py-2">
               <MdOutlineWatchLater size={25} className="mr-1" />
               Watch later
            </li>
            <li className="flex items-center font-medium py-2">
               <AiOutlineLike size={23} className="mr-1" />
               Liked videos
            </li>
            <li className="flex items-center font-medium py-2">
               <IoMdTrendingUp size={23} className="mr-1" />
               Trending
            </li>
            <li className="flex items-center font-medium py-2">
               <AiOutlineShopping size={25} className="mr-1" />
               Shopping
            </li>
            <li className="flex items-center font-medium py-2">
               <IoIosMusicalNote size={23} className="mr-1" />
               Music
            </li>
            <li className="flex items-center font-medium py-2">
               <MdMovieEdit size={23} className="mr-1" />
               Movies
            </li>
            <li className="flex items-center font-medium py-2">
               <SiPodcastindex size={22} className="mr-1" />
               Live
            </li>
            <li className="flex items-center font-medium py-2">
               <SiYoutubegaming size={22} className="mr-1" />
               Gaming
            </li>
            <li className="flex items-center font-medium py-2">
               <LuNewspaper size={23} className="mr-1" />
               News
            </li>
            <li className="flex items-center font-medium py-2">
               <TfiCup size={22} className="mr-1" />
               Sports
            </li>
            <li className="flex items-center font-medium py-2">
               <BsLightbulb size={22} className="mr-1" />
               Learning
            </li>
            <li className="flex  items-center font-medium py-2 ">
               <FaPersonDressBurst size={25} className="mr-1" />
               Fashion & Beauty
            </li>
            <li className="flex items-center font-medium py-2">
               <MdOutlinePodcasts size={25} className="mr-1" />
               Podcasts
            </li>
         </ul>
      </div>
   );
}
