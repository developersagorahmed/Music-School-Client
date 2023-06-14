import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import FirstPageAdmin from "./FirstPageAdmin";
import FirstPageIns from "./FirstPageIns";
import FirstPageStudent from "./FirstPageStudent";
import MySelectedClass from "../Components/DashboardCompo/MySelectedClass/MySelectedClass";
import MyClassCart from "../Components/DashboardCompo/AddaClass/MyClasses/MyClassCart";
import MyClasses from "../Components/DashboardCompo/AddaClass/MyClasses/MyClasses";
import ManageCart from "../Components/DashboardCompo/Admin/ManageClasses/ManageCart";
import ManageClasses from "../Components/DashboardCompo/Admin/ManageClasses/ManageClasses";

const MainDash = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState([]);
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
	return (
		<div>
			{userData.role == "admin" && <ManageClasses></ManageClasses>}
			{userData.role == "ins" && <MyClasses></MyClasses>}
			{userData.role == "" && <MySelectedClass></MySelectedClass>}
		</div>
	);
};

export default MainDash;
