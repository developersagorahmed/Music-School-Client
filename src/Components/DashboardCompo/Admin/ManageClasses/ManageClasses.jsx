import React, { useEffect, useState } from "react";
import ManageCart from "./ManageCart";

const ManageClasses = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://music-book-server.vercel.app/manageClasses")
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, [data]);

	return (
		<div>
			<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
				Manage Classes
			</h2>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th className="font-bold text-lg">Image</th>
							<th className="font-bold text-lg">Class Name</th>
							<th className="font-bold text-lg">Instructor</th>

							<th className="font-bold text-lg">Available Sets</th>
							<th className="font-bold text-lg">Total Student</th>
							<th className="font-bold text-lg">Price</th>
							<th className="font-bold text-lg">Status</th>
							<th className="font-bold text-lg">Action</th>
						</tr>
					</thead>
					{data?.map((item, index) => (
						<ManageCart key={item?._id} item={item}></ManageCart>
					))}
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
