import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { AuthContext } from "../AuthProvider";
const Sidebar = () => {
	const [userData, setUserData] = useState([]);
	const navigate = useNavigate();
	const { user, logOut } = useContext(AuthContext);
	const [isActive, setActive] = useState("true");

	useEffect(() => {
		fetch(
			`https://music-book-server-developersagorahmed.vercel.app/dashboard/${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				setUserData(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleLogOut = () => {
		logOut().then().then();
		navigate("/");
	};
	return (
		<>
			{/* Small Screen Navbar */}
			<div className="bg-gray-100  text-gray-800 flex justify-between md:hidden">
				<div>
					<div className="block cursor-pointer p-4 font-bold">
						<img src={Logo} alt="" />
					</div>
				</div>
			</div>
			{/* Sidebar */}
			<div
				className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-black w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
					isActive && "-translate-x-full"
				}  md:translate-x-0  transition duration-200 ease-in-out`}
			>
				<div>
					{/* Branding & Profile Info */}
					<div>
						<Link to="/dashboard">
							<div className="w-full hidden md:flex py-2 justify-center items-center bg- mx-auto">
								<img src={Logo} alt="" />
							</div>
						</Link>
						<div className="flex flex-col items-center mt-6 -mx-2">
							<Link to="/dashboard">
								<img
									className="object-cover w-24 h-24 mx-2 rounded-full"
									src={user?.photoURL}
									alt="avatar"
									referrerPolicy="no-referrer"
								/>
							</Link>
							<Link to="/dashboard">
								<h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
									{user?.displayName}
								</h4>
							</Link>
							<Link to="/dashboard">
								<p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
									{user?.email}
								</p>
							</Link>
						</div>
					</div>

					{/* Nav Items */}
					<div className="flex flex-col justify-between flex-1 mt-6">
						{userData.role == "" && (
							<>
								<Link to="/dashboard/mySelectedClass">
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										My Selected Classes
									</button>
								</Link>
								<Link to={`/dashboard/myEnrolledClass/:${user?.email}`}>
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										My Enrolled Classes
									</button>
								</Link>
							</>
						)}
						{userData.role == "ins" && (
							<>
								<Link to="/dashboard/addaclass">
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										Add a Class
									</button>
								</Link>
								<Link to="/dashboard/myClasses">
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										My Classes
									</button>
								</Link>
							</>
						)}
						{userData.role == "admin" && (
							<>
								<Link to="/dashboard/manageClasses">
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										Manage Classes
									</button>
								</Link>
								<Link to="/dashboard/manageUser">
									<button className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform">
										Manage Users
									</button>
								</Link>
							</>
						)}
					</div>
				</div>

				<div>
					<button
						onClick={handleLogOut}
						className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black transition-colors duration-300 transform"
					>
						<BiLogOut className="text-white w-6 mt-1   h-6" />
						<span className="mx-4 font-medium">Logout</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
