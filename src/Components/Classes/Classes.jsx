import React, { useState } from "react";
import ClassCart from "./ClassCart";
import { Helmet } from "react-helmet";

const Classes = () => {
	const [data, setData] = useState([]);
	fetch("https://music-book-server-developersagorahmed.vercel.app/classes")
		.then((res) => res.json())
		.then((datas) => setData(datas));
	return (
		<devicePixelRatio>
			<Helmet>
				<title>Classes</title>
			</Helmet>
			<h2 className="mt-20 pt-10 text-center text-3xl font-bold underline mb-10 text-[#E7B622]">
				Our Classes
			</h2>
			<div className="grid my-10 grid-cols-1 gap-16">
				{data?.map((item) => (
					<ClassCart key={item.key} item={item}></ClassCart>
				))}
			</div>
		</devicePixelRatio>
	);
};

export default Classes;
