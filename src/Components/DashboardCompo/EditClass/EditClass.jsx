import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditClass = () => {
	const item = useLoaderData();
	const {
		image,
		classname,
		students,
		price,
		approved,
		available_seats,
		dur,
		_id,
	} = item;
	console.log(item);
	const [upClassname2, setUpClassname] = useState("");
	const [upstudents, setUpStudents] = useState("");
	const [upPrice, setUpPrice] = useState("");
	const [upAblSet, setUpAblSet] = useState("");
	const [upDur, setUpDur] = useState("");
	const navigate = useNavigate();
	const handleUpdate = (event) => {
		event.preventDefault();
		const updateData = {
			image: image,
			classname: upClassname2,
			students: upstudents,
			price: upPrice,
			approved: approved,
			available_seats: upAblSet,
			dur: upDur,
		};
		fetch(`https://music-book-server.vercel.app/dashboard/myClasses/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Successfully Edit",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/dashboard/myClasses");
				}
			})
			.catch((err) => console.log(err));

		console.log(updateData);
	};
	return (
		<div>
			<Helmet>
				<title>Edit Classes</title>
			</Helmet>
			<form onSubmit={handleUpdate}>
				<div className="flex  justify-evenly ">
					<div className="form-control w-full max-w-xs">
						<h2 className=" text-center   text-3xl font-bold underline mb-2 text-[#E7B622]">
							Update class
						</h2>
						<div className="label-text text-lg font-semibold">Class Name</div>

						<input
							onChange={(e) => setUpClassname(e.target.value)}
							defaultValue={classname}
							type="text"
							placeholder="Class Name"
							className="input input-bordered input-primary w-full max-w-xs"
							name="classname"
						/>
					</div>
				</div>

				<div className="flex  justify-evenly ">
					<div className="form-control w-full max-w-xs">
						<div className="label-text text-lg font-semibold">Total Seats</div>

						<input
							onChange={(e) => setUpAblSet(e.target.value)}
							// defaultValue={available_seats}
							defaultValue={available_seats}
							type="number"
							placeholder="Total set"
							className="input input-bordered input-primary w-full max-w-xs"
							name="available_seats"
						/>
					</div>
				</div>
				<div className="flex  justify-evenly ">
					<div className="form-control w-full max-w-xs">
						<div className="label-text text-lg font-semibold">
							Total Student
						</div>

						<input
							onChange={(e) => setUpStudents(e.target.value)}
							defaultValue={students}
							type="number"
							placeholder="Total Enrolled Students"
							className="input input-bordered input-primary w-full max-w-xs"
							name="students"
						/>
					</div>
				</div>
				<div className="flex  justify-evenly ">
					<div className="form-control w-full max-w-xs">
						<div className="label-text text-lg font-semibold">
							Course Durations
						</div>
						<input
							onChange={(e) => setUpDur(e.target.value)}
							defaultValue={dur}
							type="number"
							placeholder="Course Durations"
							className="input input-bordered input-primary w-full max-w-xs"
							name="dur"
						/>
					</div>
				</div>
				<div className="flex  justify-evenly ">
					<div className="form-control w-full max-w-xs">
						<div className="label-text text-lg font-semibold">Course Price</div>
						<input
							onChange={(e) => setUpPrice(e.target.value)}
							defaultValue={price}
							type="number"
							placeholder="Course Price"
							className="input input-bordered input-primary w-full max-w-xs"
							name="price"
						/>
					</div>
				</div>

				<div className="flex justify-center mt-6">
					<input
						className="flex  items-center px-4 py-2 mt-5 text-white bg-[rgb(86,69,121)]  hover:bg-[#E9C044]   hover:text-black font-bold text-lg rounded-md transition-colors duration-300 transform"
						type="submit"
						value="Update Class"
					/>
				</div>
			</form>
		</div>
	);
};

export default EditClass;
