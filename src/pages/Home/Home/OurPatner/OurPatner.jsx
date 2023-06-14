import React from "react";

import Marquee from "react-fast-marquee";

import logo1 from "../../../../assets/logo/logo1.jpg";
import logo2 from "../../../../assets/logo/logo2.jpg";
import logo3 from "../../../../assets/logo/logo3.jpg";
import logo4 from "../../../../assets/logo/logo4.png";
import logo5 from "../../../../assets/logo/logo5.png";
const OurPatner = () => {
	return (
		<div className="py-10 mb-6 bg-black">
			<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
				Our Partners
			</h2>
			<Marquee className="rounded-lg">
				<div className="flex justify-center">
					<div className="w-[300px] mr-6">
						<img src={logo1} alt="" />
					</div>
					<div className="w-[300px] mr-6">
						<img src={logo2} alt="" />
					</div>
					<div className="w-[300px] mr-6">
						<img src={logo3} alt="" />
					</div>
					<div className="w-[300px] mr-6">
						<img src={logo4} alt="" />
					</div>
					<div className="w-[300px] mr-6">
						<img src={logo5} alt="" />
					</div>
				</div>
			</Marquee>
		</div>
	);
};

export default OurPatner;
