import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import FirstPageAdmin from "./FirstPageAdmin";
import FirstPageIns from "./FirstPageIns";
import FirstPageStudent from "./FirstPageStudent";

const MainDash = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/dashboard/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setUserData(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			{userData.role == "admin" && <FirstPageAdmin></FirstPageAdmin>}
			{userData.role == "ins" && <FirstPageIns></FirstPageIns>}
			{userData.role == "" && <FirstPageStudent></FirstPageStudent>}
		</div>
	);
};

export default MainDash;
