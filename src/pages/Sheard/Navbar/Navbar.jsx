import React, { useContext } from "react";
import css from "../Navbar/navbar.css";
import icon from "../../../assets/logo.png";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BiLogIn, BiUser, BiLogOut } from "react-icons/bi";

import { AuthContext } from "../../../Components/AuthProvider";
import Swal from "sweetalert2";

const Navbar = ({ mode, setMode }) => {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const logoutBtn = () => {
		Swal.fire({
			title: "Are you sure You won't to Logout?",
			text: "You won't to Logout",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Logout",
		}).then((result) => {
			if (result.isConfirmed) {
				logOut().then();
				navigate("/");
				localStorage.removeItem("access-token");
				Swal.fire("Logout", "You has been Logout.", "success");
			}
		});
	};

	return (
		<div
			className={`navbar   fixed z-10 top-0 max-w-[2300px]  mx-auto xl:px-28 md:px-10 sm:px-2 px-4 ${
				mode ? "bg-base-100" : "bg-black"
			} `}
		>
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
								<li className="transition duration-300 cursor-pointer font-bold text-[#3E2B66]  mr-6 hover:text-[#E7B622]">
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
						<li
							className={`${
								mode ? "text-[#3E2B66]" : "text-[#fff]"
							} "transition duration-300 cursor-pointer hover:text-[#E7B622]	font-bold  text-base	 mr-6 hover:text-[#E7B622]"`}
						>
							HOME
						</li>
					</Link>
					<Link to={"/instructors"}>
						<li
							className={`${
								mode ? "text-[#3E2B66]" : "text-[#fff]"
							} "transition duration-300 hover:text-[#E7B622] cursor-pointer	font-bold text-base	  mr-6 hover:text-[#E7B622]"`}
						>
							INSTRUCTORS
						</li>
					</Link>
					<Link to={"/classes"}>
						<li
							className={`${
								mode ? "text-[#3E2B66]" : "text-[#fff]"
							} "transition duration-300 hover:text-[#E7B622] cursor-pointer text-base	font-bold  mr-6 hover:text-[#E7B622]"`}
						>
							CLASSES
						</li>
					</Link>
					{user ? (
						<>
							{" "}
							<Link to={"/dashboard"}>
								<li
									className={`${
										mode ? "text-[#3E2B66]" : "text-[#fff]"
									} "transition duration-300  text-base hover:text-[#E7B622] cursor-pointer	font-bold  mr-6 hover:text-[#E7B622]"`}
								>
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
					<>
						<div className="dropdown mt-2 dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-full  rounded-full">
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

				{user ? (
					<span
						onClick={logoutBtn}
						className="flex pl-5  transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]"
					>
						<BiLogOut
							className={
								mode
									? "w-7 text-black hover:text-[#E7B622] h-7 mt-[2px] mr-2"
									: "w-7 h-7 mt-[2px] hover:text-[#E7B622] text-white mr-2"
							}
						></BiLogOut>{" "}
						<span
							className={
								mode
									? "text-xl hover:text-[#E7B622] hover:text-[#E7B622]: text-black"
									: "text-white text-xl hover:text-[#E7B622]"
							}
						>
							Logout
						</span>
					</span>
				) : (
					<Link to={"/login"}>
						<span className="flex pl-5  transition duration-300 cursor-pointer	font-bold text-[#3E2B66] mr-6 hover:text-[#E7B622]">
							<BiLogIn
								className={`${
									mode ? "text-black" : "text-white"
								}"w-7 h-7 mt-[2px] text-white text-2xl  mr-4"`}
							></BiLogIn>{" "}
							<span
								className={
									mode
										? "text-black text-xl hover:[#E7B622]"
										: "text-white text-xl hover:[#E7B622]"
								}
							>
								Login
							</span>
						</span>
					</Link>
					// "text-[#E7B622] text-xl "
				)}
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input name="mod" type="checkbox" />
					{/* sun icon */}
					<BsSun
						onClick={() => setMode(false)}
						className=" swap-on w-9 ml-6 hover:text-[#E7B622] text-[#ffffff]  h-9 mt-2"
					></BsSun>

					{/* moon icon */}

					<BsMoonFill
						onClick={() => setMode(true)}
						className="swap-off text-black hover:text-[#E7B622] ml-6 fill-current w-9 h-9 mt-2"
					></BsMoonFill>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
