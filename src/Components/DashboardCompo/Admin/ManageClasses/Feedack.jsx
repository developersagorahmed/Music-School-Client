import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedack = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const {
		available_seats,
		classname,
		dur,
		email,
		image,
		instructor,
		price,
		students,
	} = data;

	useEffect(() => {
		fetch(
			`https://music-book-server-developersagorahmed.vercel.app/feedback/${id}`
		)
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, []);

	const [feedbackData, setFeedbackData] = useState("");

	const feedback = (event) => {
		event.preventDefault();
		fetch(
			`https://music-book-server-developersagorahmed.vercel.app/feedback/send/${id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ feedbackData }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Successfully Login",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/dashboard/myClasses");
				}
			})
			.catch((err) => console.log(err));

		console.log(feedbackData);
	};
	return (
		<div>
			<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
				Add a FeedBack
			</h2>

			<div className="mt-10">
				<div className="card lg:card-side bg-base-100 shadow-xl">
					<figure>
						<img src={image} alt="Album" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Class Name : {classname}</h2>
						<h2 className="card-title">Instructor Name : {instructor?.name}</h2>
						<h2 className="card-title">
							Instructor Email : {instructor?.email}
						</h2>

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
						<form onSubmit={feedback}>
							<div className="flex justify-end">
								<div className="flex justify-end ">
									<textarea
										onChange={(e) => setFeedbackData(e.target.value)}
										name="feedback"
										className="w-[300px] h-[150px] textarea textarea-primary"
										placeholder="Feedback"
									></textarea>
								</div>
							</div>
							<div className="flex justify-end mt-4 ">
								<button className="btn w-[300px] btn-primary">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedack;
