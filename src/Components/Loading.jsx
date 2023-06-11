import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="flex justify-center items-center my-auto">
			<InfinitySpin width="200" color="#4fa94d" />
		</div>
	);
};

export default Loading;
