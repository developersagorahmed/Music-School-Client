import React, { useContext } from "react";
import { AuthContext } from "../../../../../Components/AuthProvider";

const FullCart = ({ dat }) => {
	const { user } = useContext(AuthContext);

	console.log(dat, user);
	const {
		classname,
		available_seats,
		dur,
		image,
		instructor,
		price,
		students,
		_id,
	} = dat;

	const buybtn = () => {
        

    };

	return (
		<div className="card lg:card-side bg-base-100 my-6 lg:h-[370px] shadow-xl">
			<figure>
				<img src={image} alt="Album" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Training name : {classname}</h2>
				<h2 className="card-title">Trainer name : {instructor.name}</h2>
				<h2 className="card-title">Trainer name : {instructor.email}</h2>
				<div className="card-actions justify-start mt-4">
					<button className="btn text-base font-bold">
						Students :<div className="badge">{students}</div>
					</button>
					<button className="btn text-base font-bold">
						Total seat :<div className="badge">{available_seats}</div>
					</button>
					<button className="btn text-base font-bold">
						Duration :<div className="badge">{dur} Month</div>
					</button>
				</div>
				<div className="card-actions justify-start mt-4">
					<button className="btn text-base  font-bold">
						Price :<div className="badge">{price}$</div>
					</button>
				</div>
				<div className="card-actions justify-end  mt-4">
					<button
						onClick={buybtn}
						className="btn text-base bg-[#E7B622] font-bold"
					>
						Purchase
					</button>
				</div>
			</div>
		</div>
	);
};

export default FullCart;
