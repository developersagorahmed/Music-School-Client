import React from "react";
import Lottie from "lottie-react";
import animatin from "../../../../public/lotti.json";

const Error = () => {
	return (
		<div>
			<Lottie
				className="h-[100vh]"
				animationData={animatin}
				loop={true}
			></Lottie>
		</div>
	);
};

export default Error;
