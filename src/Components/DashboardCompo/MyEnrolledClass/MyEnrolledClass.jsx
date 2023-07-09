import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import EnrollCard from "./EnrollCard";
import { Helmet } from "react-helmet";

const MyEnrolledClass = () => {
	const { user } = useContext(AuthContext);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`https://music-book-server.vercel.app/myEnrolledClass/${user?.email}`)
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, []);
	return (
		<div>
			<Helmet>
				<title>My Enrolled Classes</title>
			</Helmet>
			<h2 className="text-center text-3xl font-bold underline pt-6  text-[#E7B622]">
				My Selected Classes
			</h2>

			<div>
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="font-bold text-lg">Image</th>
							<th className="font-bold text-lg">Class Name</th>
							<th className="font-bold text-lg">Instructor</th>
							<th className="font-bold text-lg">Total Student</th>
							<th className="font-bold text-lg">Price</th>
							<th className="font-bold text-lg">Enrolled</th>
						</tr>
					</thead>
					{data?.map((item) => (
						<EnrollCard key={item?._id} item={item}></EnrollCard>
					))}
				</table>
			</div>
		</div>
	);
};

export default MyEnrolledClass;
