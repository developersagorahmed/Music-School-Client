import React, { useEffect, useState } from "react";
import ManageUserCard from "./ManageUserCard";
import { Helmet } from "react-helmet";

const ManageUser = () => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch("https://music-book-server.vercel.app/allUser")
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [user]);
	return (
		<div>
			<Helmet>
				<title>Admin || Manage user</title>
			</Helmet>
			<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
				Management User
			</h2>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="font-bold text-lg">User Image</th>
							<th className="font-bold text-lg">User Name</th>
							<th className="font-bold text-lg">User Email</th>
							<th className="font-bold text-lg">Status</th>
							<th className="font-bold text-lg">Make Admin</th>
							<th className="font-bold text-lg">Make Instructor</th>
						</tr>
					</thead>
					{user?.map((users) => (
						<ManageUserCard
							key={users?._id}
							setUser={setUser}
							item={users}
						></ManageUserCard>
					))}
				</table>
			</div>
		</div>
	);
};

export default ManageUser;
