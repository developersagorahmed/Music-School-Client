import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "../Home/Feedback.css";
import { AiFillStar } from "react-icons/ai";

const Feedback = () => {
	return (
		<div>
			<h2 className="uppercase text-center text-3xl font-bold underline  text-[#E7B622]">
				Our Client Feedback
			</h2>
			<Carousel className="py-24 ">
				<div className="w-full h-full mx-auto bg-white ">
					<div className="grid grid-cols-1 md:grid-cols-3 ">
						<div className="mx-auto">
							<div className="card w-96 bg-base-100 rounded-none shadow-xl image-full">
								<figure>
									<img
										className="rounded-none"
										src="https://i.ibb.co/34dYwQ0/675ef45fce37306f675ef45fce37306fwells-chan-H-v-Axu-Wxmi8-unsplash.jpg"
										alt="Shoes"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title mt-6">Alex Horvard</h2>
									<p className="mt-6 font-bold text-lg">
										This is an Nice Website to get Your Course . i am Learn
										Guitar From here You can trust and Join Any Course From This
										website
									</p>
									<div className="flex text-2xl">
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="card w-96 bg-base-100 rounded-none shadow-xl image-full">
								<figure>
									<img
										className="rounded-none"
										src="https://i.ibb.co/34dYwQ0/675ef45fce37306f675ef45fce37306fwells-chan-H-v-Axu-Wxmi8-unsplash.jpg"
										alt="Shoes"
									/>
								</figure>
								<div className=" card-body">
									<h2 className="card-title mt-6">Alex Horvard</h2>
									<p className="mt-6 font-bold text-lg">
										This is an Nice Website to get Your Course . i am Learn
										Guitar From here You can trust and Join Any Course From This
										website
									</p>
									<div className="flex text-2xl">
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="card w-96 bg-base-100 rounded-none shadow-xl image-full">
								<figure>
									<img
										className="rounded-none"
										src="https://i.ibb.co/34dYwQ0/675ef45fce37306f675ef45fce37306fwells-chan-H-v-Axu-Wxmi8-unsplash.jpg"
										alt="Shoes"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title mt-6">Alex Horvard</h2>
									<p className="mt-6 font-bold text-lg">
										This is an Nice Website to get Your Course . i am Learn
										Guitar From here You can trust and Join Any Course From This
										website
									</p>
									<div className="flex text-2xl">
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
										<AiFillStar></AiFillStar>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Feedback;
