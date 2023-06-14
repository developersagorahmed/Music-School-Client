import React from "react";
import "./BgImg.css";

const Showcase = () => {
	return (
		<div className="py-10">
			<div className="hero bgImg min-h-screen" style={{}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl  font-bold">
							Do You Want To Study at Rythmo?
						</h1>
						<p className="mb-5">
							At Rythmo Music School, we make music education accessible for
							students from all over the world. Our doors are open to the
							students of all ages and any levels of experience. Our mission is
							to develop individuals, inspire creative passion, and increase
							students' self-confidence.
						</p>
						<button className="btn text-base bg-[#85CE85] hover:bg-[#E7B622] font-bold">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
