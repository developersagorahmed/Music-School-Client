import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";

const PopolarClass = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://music-book-server-developersagorahmed.vercel.app/classes")
			.then((result) => result.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div>
			<h2 className="uppercase text-center text-3xl font-bold underline mb-10 text-[#E7B622] ">
				Popular Instructors
			</h2>
			<div className="lg:ml-[30px] mx-auto my-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-14 ">
				{data?.map((dat) => (
					<Cart key={dat._id} data={dat}></Cart>
				))}
			</div>
		</div>
	);
};

export default PopolarClass;
