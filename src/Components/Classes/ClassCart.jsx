import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const ClassCart = ({ item }) => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const {
		classname,
		available_seats,
		dur,
		image,
		instructor,
		price,
		students,
		_id,
	} = item;
	const buyData = {
		name: classname,
		userEmail: user?.email,
		dat: item,
		user: {
			userName: user?.displayName,
			userImg: user?.photoURL,
		},
	};
	const handleData = () => {
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
		<div className="card card-side bg-base-100 shadow-xl">
			<figure>
				<img className="object-cover" src={image} alt="Movie" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Class Name : {classname}</h2>
				<h2 className="card-title">Instructor Name : {instructor?.name}</h2>
				<h2 className="card-title">Total Sets : {available_seats}</h2>
				<h2 className="card-title">
					Available Sets : {available_seats - students}
				</h2>
				<h2 className="card-title">Price : {price}$</h2>
				<h2 className="card-title">Class Duration : {dur}$</h2>
				<h2 className="card-title">Instructor Email : {instructor.email}$</h2>

				<div className="card-actions flex mt-32 justify-end">
					<button onClick={handleData} className="btn btn-primary">
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClassCart;
