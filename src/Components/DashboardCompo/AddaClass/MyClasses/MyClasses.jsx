import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import MyClassCart from "./MyClassCart";

const MyClasses = () => {
	const [data, setData] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		fetch(`http://localhost:5000/dashboard/myClasses/${user?.email}`)
			.then((res) => res.json())
			.then((datas) => setData(datas));
	}, []);
	console.log(data);

	return (
		<>
			<div>
				<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
					My classes
				</h2>
				{/* added table here  */}

				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th className="font-bold text-lg">Image</th>
								<th className="font-bold text-lg">Class Name</th>
								<th className="font-bold text-lg">Total Student</th>
								<th className="font-bold text-lg">Available Sets</th>
								<th className="font-bold text-lg">Price</th>
								<th className="font-bold text-lg">Status</th>
								<th className="font-bold text-lg">Update</th>
								<th className="font-bold text-lg">DeedBack</th>
							</tr>
						</thead>
						{data?.map((item) => (
							<MyClassCart key={item?._id} item={item}></MyClassCart>
						))}
					</table>
				</div>
			</div>
		</>
	);
};

export default MyClasses;
