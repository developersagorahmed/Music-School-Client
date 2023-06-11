import React, { useState } from "react";
import InsCart from "./InsCart";

const Instractor = () => {
	const [data, setData] = useState([]);
	fetch("http://localhost:5000/instructors")
		.then((res) => res.json())
		.then((data) => setData(data));
	return (
		<div>
			<h2 className="mt-20 pt-10 text-center text-3xl font-bold underline mb-10 text-[#E7B622]">
				Our Instructors
			</h2>

			<div className="grid grid-cols-3 gap-7 my-10 mx-auto">
				{data?.map((item) => (
					<InsCart key={item?._id} item={item}></InsCart>
				))}
			</div>
		</div>
	);
};

export default Instractor;
