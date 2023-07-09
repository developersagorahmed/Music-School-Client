import React, { useEffect, useState } from "react";
import FullCart from "./FullCart/FullCart";

const PopolarInst = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://music-book-server.vercel.app/topInstructorClass")
			.then((res) => res.json())
			.then((allData) => setData(allData));
	}, []);

	return (
		<div>
			<h2 className="uppercase text-center text-3xl font-bold underline mb-10 text-[#E7B622]">
				Popular Classes
			</h2>
			<div className="my-10">
				{data?.slice(0, 6).map((dat) => (
					<FullCart key={dat._id} dat={dat}></FullCart>
				))}
			</div>
			
		</div>
	);
};

export default PopolarInst;
