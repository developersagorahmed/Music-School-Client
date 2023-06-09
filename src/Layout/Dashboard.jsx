import { Outlet } from "react-router-dom";
import Sidebar from "../Components/DashboardCompo/Sidebar";
import Navbar from "../pages/Sheard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			{user ? (
				<>
					<Navbar></Navbar>
				</>
			) : (
				<></>
			)}
			<div className="mt-[50px]  md:flex">
				<Sidebar></Sidebar>
				<div className="flex-1  md:ml-64">
					<div className="p-5">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
