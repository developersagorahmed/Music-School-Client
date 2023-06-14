import React, { useContext } from "react";
import { AuthContext } from "../../../../../Components/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FullCart = ({ dat }) => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

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

	const buyData = {
		name: classname,
		userEmail: user?.email,
		dat,
		user: {
			userName: user?.displayName,
			userImg: user?.photoURL,
		},
	};

	const buyBtn = () => {
		// post selectClass data to server
		if (!user) {
			navigate("/login");
			return;
		}
		fetch(
			"https://music-book-server-developersagorahmed.vercel.app/selectclass",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(buyData),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					Swal.fire({
						position: "top-center",
						icon: "error",
						title: "You Already Selected This Class",
						showConfirmButton: false,
						timer: 1500,
					});
				}
				console.log(data);
				if (data.acknowledged == true) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Class added Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div className="card lg:card-side bg-base-100 my-6 lg:h-[400px] shadow-xl">
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
				<div className="card-actions justify-end">
					<button
						onClick={buyBtn}
						className="btn text-base bg-[#85CE85] font-bold"
					>
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

export default FullCart;
