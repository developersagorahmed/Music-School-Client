import React, { useEffect, useState } from "react";

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
			<h1>This is selected class component</h1>
		</div>
	);
};

export default MySelectedClass;
