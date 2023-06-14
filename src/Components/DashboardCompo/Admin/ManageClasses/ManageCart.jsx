import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCart = ({ item }) => {
	// console.log(item);
	console.log(item);
	const {
		approved,
		available_seats,
		classname,
		dur,
		image,
		instructor,
		price,
		students,
		_id,
	} = item;
	// const [status, setStatus] = useState("");
	// console.log(status);

	const handleStatus = (para) => {
		const approved = para;
		const updateData = {
			image: image,
			classname: classname,
			students: students,
			price: price,
			approved: approved,
			available_seats: available_seats,
			dur: dur,
		};

		console.log(approved);

		fetch(
			`https://music-book-server-developersagorahmed.vercel.app/dashboard/myClasses/${_id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(updateData),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Successfully Approved",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((err) => console.log(err));

		// const stat = { option: option };
		// fetch(`https://music-book-server-developersagorahmed.vercel.app/status/${_id}`, {
		// 	method: "PUT",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify({ newData }),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	})
		// 	.catch((err) => console.log(err));
	};

	return (
		<>
			<tbody>
				<tr>
					<td>
						<div className="flex items-center space-x-3">
							<div className="avatar">
								<div className="mask mask-squircle w-12 h-12">
									<img src={image} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
						</div>
					</td>
					<td className="font-semibold text-lg">{classname}</td>
					<td className="font-semibold text-lg">
						{instructor?.name}
						<br />
						<span className="badge badge-ghost badge-md font-semibold text-lg mt-3 p-3">
							{instructor?.email}
						</span>
					</td>

					<td className=" font-semibold text-lg">{available_seats}</td>
					<td className="font-semibold text-lg">{students}</td>
					<td className="font-semibold text- text-lg">{price}$</td>
					<td className="font-semibold text- text-lg">
						{approved == "app" && "Approved"}
						{approved == "rej" && "Reject"}
						{approved == "pan" && "pening"}
					</td>
					<td className="font-semibold text- text-lg">
						<div className="flex flex-col">
							<button
								onClick={() => handleStatus("app")}
								className={
									approved !== "app"
										? "btn  bg-green-600 text-white hover:bg-black"
										: "btn btn-disabled"
								}
							>
								Approved
							</button>

							<button
								onClick={() => handleStatus("rej")}
								className={
									approved !== "app"
										? "btn bg-[#EB1A1A] text-white hover:bg-black"
										: "btn disabled"
								}
							>
								Deny
							</button>
							<Link
								to={`/dashboard/feedback/${_id}`}
								className={"btn bg-yellow-400 text-white hover:bg-black"}
							>
								FeedBack
							</Link>
						</div>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default ManageCart;
