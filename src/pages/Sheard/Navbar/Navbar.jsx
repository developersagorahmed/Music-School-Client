import React, { useContext } from "react";
import css from "../Navbar/navbar.css";
import icon from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiLogIn, BiUser, BiLogOut } from "react-icons/bi";

import { AuthContext } from "../../../Components/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const logoutBtn = () => {
		logOut().then();
	};

	return (
		<div className="navbar   fixed z-10 top-0 max-w-[2300px]  bg-opacity-30 mx-auto xl:px-28 md:px-10 sm:px-2 px-4 bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							HOME
						</li>
						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							INSTRUCTORS
						</li>
						<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							CLASSES
						</li>
						{user?.email ? (
							<>
								<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
									DASHBOARD
								</li>
							</>
						) : (
							<></>
						)}
					</ul>
				</div>

				<Link to={"/"}>
					<img src={icon} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<Link to={"/"}>
						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							HOME
						</li>
					</Link>
					<Link to={"/instructors"}>
						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							INSTRUCTORS
						</li>
					</Link>
					<Link to={"/classes"}>
						<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							CLASSES
						</li>
					</Link>
					{user ? (
						<>
							{" "}
							<Link to={"/dashboard"}>
								<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
									DASHBOARD
								</li>
							</Link>
						</>
					) : (
						<></>
					)}
				</ul>
			</div>
			<div className="navbar-end md:pr-12">
				{user ? (
					<span
						onClick={logoutBtn}
						className="flex  transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]"
					>
						<BiLogOut className="w-7 h-7 mt-[2px] mr-2"></BiLogOut>{" "}
						<span className="text-xl">Logout</span>
					</span>
				) : (
					<Link to={"/login"}>
						<span className="flex  transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							<BiLogIn className="w-7 h-7 mt-[2px] mr-2"></BiLogIn>{" "}
							<span className="text-xl">Login</span>
						</span>
					</Link>
				)}
				{user ? (
					<>
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									{user?.photoURL ? (
										<>
											<img src={user?.photoURL} alt="" />
										</>
									) : (
										<>
											<BiUser></BiUser>
										</>
									)}
								</div>
							</label>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Navbar;
