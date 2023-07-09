import React, { useState } from "react";
import InsCart from "./InsCart";
import { Helmet } from "react-helmet";

const Instractor = () => {
	const [data, setData] = useState([]);
	fetch("https://music-book-server.vercel.app/instructors")
		.then((res) => res.json())
		.then((data) => setData(data));
	return (
		<div>
			<Helmet>
				<title>Instructors</title>
			</Helmet>
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
