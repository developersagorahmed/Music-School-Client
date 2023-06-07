import React from "react";
import icon from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
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
						<li>HOME</li>
						<li>PROGRAM</li>
						<li>ABOUT SCHOOL</li>
						<li>CONTACTS</li>
					</ul>
				</div>

				<Link to={"/"}>
					<img src={icon} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
						HOME
					</li>
					<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
						PROGRAM
					</li>
					<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
						ABOUT SCHOOL
					</li>
					<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
						CONTACTS
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<Link to={"/login"}>
					<span className="flex  transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
						<BiLogIn className="w-5 h-5 mt-[2px] mr-2"></BiLogIn> Login
					</span>
				</Link>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mb-4 mr-6 hover:text-[#E7B622] ml-5">
							Dashboard
						</li>

						<li className="transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622] ml-5">
							Logout
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
