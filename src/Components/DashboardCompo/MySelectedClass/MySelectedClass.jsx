import React, { useEffect, useState } from "react";
import SelectedCart from "./SelectedCart";

const MySelectedClass = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/mySelectedClass")
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, []);

	console.log(data);
	return (
		<div>
			<h2 className="text-center text-3xl font-bold underline pt-6  text-[#E7B622]">
				My Selected Classes
			</h2>
			<div className="overflow-x-auto mt-7">
				{data ? (
					<>
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th className="font-bold text-lg">Image</th>
									<th className="font-bold text-lg">Class Name</th>
									<th className="font-bold text-lg">Instructor</th>
									<th className="font-bold text-lg">Total Student</th>
									<th className="font-bold text-lg">Price</th>
									<th className="font-bold text-lg">pay</th>
									<th className="font-bold text-lg">Delete</th>
								</tr>
							</thead>
							{data?.map((item, index) => (
								<SelectedCart
									key={index}
									item={item}
									data={data}
									setData={setData}
								></SelectedCart>
							))}
						</table>
					</>
				) : (
					<>
						<button className="btn btn-primary">Go to Home </button>
					</>
				)}
			</div>
		</div>
	);
};

export default MySelectedClass;
