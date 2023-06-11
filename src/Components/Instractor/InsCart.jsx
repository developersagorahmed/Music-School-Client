import React from "react";

const InsCart = ({ item }) => {
	console.log(item);
	return (
		<div className="card w-96 glass">
			<figure>
				<img className="object-cover" src={item?.photo} alt="car!" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-white">
					Instructor Name : {item?.name}
				</h2>
				<p className="text-white text-lg font-semibold">
					Instructor Email : {item?.email}
				</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary  text-white">Learn now!</button>
				</div>
			</div>
		</div>
	);
};

export default InsCart;
