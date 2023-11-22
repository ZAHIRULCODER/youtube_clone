import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import YoutubeLogo from "/assets/youtubelogo.png";
import ProfileLogo from "/assets/profilelogo.png";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../reduxtoolkit/slices/menuSlice";

const Header = () => {
	const dispatch = useDispatch();

	const handleSideBarToggle = () => {
		dispatch(toggleMenu());
	};

	return (
		<header className="grid grid-flow-col items-center shadow-lg">
			<section className="flex col-span-1 items-center">
				<RxHamburgerMenu
					onClick={() => handleSideBarToggle()}
					className="mx-5 cursor-pointer"
					size={25}
				/>
				<a href="/">
					<img
						className="h-16 select-none"
						src={YoutubeLogo}
						alt="youtube logo"
					/>
				</a>
			</section>

			<section className="col-span-10 ">
				<SearchBar />
			</section>

			<section className="col-span-1 ">
				<img className="h-8" src={ProfileLogo} alt="profile pic" />
			</section>
		</header>
	);
};

export default Header;
