import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Payment = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const { user } = useContext(AuthContext);
	const {
		available_seats,
		classname,
		dur,
		image,
		price,
		students,
		instructor,
	} = data;
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://music-book-server.vercel.app/dashboard/payment/${id}`)
			.then((res) => res.json())
			.then((dat) => setData(dat.result));
	}, []);
	// const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_getway_pk}`);

	const handlePay = (payDat) => {
		const payData = { data, email: user?.email };
		fetch("https://music-book-server.vercel.app/my-pay", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(payData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged == true) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Payment SuccessFull",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/dashboard/myEnrolledClass/:email");
				}
				console.log(data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<Helmet>
				<title>Payment</title>
			</Helmet>
			<h2 className="text-center text-3xl font-bold underline pt-6  text-[#E7B622]">
				Pay Here
			</h2>
			<div className="card lg:card-side bg-base-100 my-6 lg:h-[400px] shadow-xl">
				<figure className="rounded-lg">
					<img src={image} alt="Album" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Training name : {classname}</h2>
					<h2 className="card-title">Trainer name : {instructor?.name}</h2>
					<h2 className="card-title">Trainer email : {instructor?.email}</h2>
					<h2 className="mt-8 font-bold text-black text-2xl mx-auto">
						Class Price : {price}$
					</h2>
					<div className="mt-10">
						{/* <CheckoutForm></CheckoutForm> */}
						<button
							onClick={() => handlePay(data)}
							className="btn text-base bg-[#EB1A1A] text-white hover:text-black ml-[220px] font-bold"
						>
							Pay
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
