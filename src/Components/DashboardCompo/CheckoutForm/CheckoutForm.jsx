import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import axiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
const CheckoutForm = (data) => {
	const { price: price } = data;
	const { user } = useContext(AuthContext);

	console.log(data.data.price);
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCartError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [processing, setProcessing] = useState(false);
	const navigate = useNavigate();
	//   1.  get clientSecret from backend
	useEffect(() => {
		if (price > 0) {
			axiosSecure
				.post("/create-payment-intent", { price: price })
				.then((res) => {
					console.log(res.data.clientSecret);
					setClientSecret(res.data.clientSecret);
				});
		}
	}, [data, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("error", error);
			setCartError(error.message);
		} else {
			setCartError("");
			// console.log('payment method', paymentMethod)
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "unknown",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
			setCartError(confirmError.message);
		}

		console.log("payment intent", paymentIntent);

		if (paymentIntent.status === "succeeded") {
			// save payment information to the server
			const paymentInfo = {
				...bookingInfo,
				transactionId: paymentIntent.id,
				date: new Date(),
			};
			axiosSecure.post("/bookings", paymentInfo).then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					updateStatus(bookingInfo.roomId, true)
						.then((data) => {
							setProcessing(false);
							console.log(data);
							const text = `Booking Successful!, TransactionId: ${paymentIntent.id}`;
							toast.success(text);
							navigate("/dashboard");
							closeModal();
						})
						.catch((err) => console.log(err));
				}
			});
		}
	};

	return (
		<>
			{cardError && <p className="text-red-600 ml-8">{cardError}</p>}
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					type="submit"
					disabled={!stripe}
					className="btn text-base bg-[#EB1A1A] text-white hover:text-black ml-[220px] font-bold"
				>
					Pay
				</button>
			</form>
		</>
	);
};

export default CheckoutForm;
