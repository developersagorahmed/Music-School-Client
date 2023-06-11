import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
const img_host_token = import.meta.env.VITE_IMAGE_UPLODE_TOKEN;
const img_host_URL = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

const AddaClass = () => {
	const { user } = useContext(AuthContext);

	const [classname, setClassname] = useState("");
	const [available_seats, setAvailable_seats] = useState("");
	const [students, setStudents] = useState("");
	const [price, setPrice] = useState("");
	const [dur, setDur] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const img = event.target.imag.files;

		const formData = new FormData();
		formData.append("image", img[0]);
		fetch(img_host_URL, {
			method: "POST",
			body: formData,
		})
			.then(async (res) => await res.json())
			.then((imgRes) => {
				if (imgRes.success) {
					const imgData = imgRes.data.display_url;

					const newData = {
						image: imgData,
						classname: classname,
						email: user?.email,
						instructor: {
							email: user?.email,
							name: user?.displayName,
							image: user?.photoURL,
						},
						available_seats: parseInt(available_seats),
						students: parseInt(students),
						price: parseInt(price),
						dur: parseInt(dur),
						approved: "app",
					};
					fetch("http://localhost:5000/addAClass", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(newData),
					})
						.then((res) => res.json())
						.then((data) => console.log(data))
						.catch((err) => console.log(err));
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h2 className=" text-center  mt-10 text-3xl font-bold underline mb-10 text-[#E7B622]">
				Add a Class
			</h2>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="flex  justify-evenly ">
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">Class Name</div>

							<input
								onChange={(e) => setClassname(e.target.value)}
								type="text"
								placeholder="Class Name"
								className="input input-bordered input-primary w-full max-w-xs"
								name="classname"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Instructor Name
							</div>
							<input
								type="text"
								value={user.displayName}
								defaultValue={user.displayName}
								className="input input-bordered input-primary w-full max-w-xs"
								name="insName"
							/>
						</div>
					</div>

					<div className="flex  justify-evenly ">
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Instructor Email
							</div>

							<input
								type="email"
								defaultValue={user.email}
								value={user.email}
								className="input input-bordered input-primary w-full max-w-xs"
								name="insEmail"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Total Seats
							</div>

							<input
								onChange={(e) => setAvailable_seats(e.target.value)}
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
								onChange={(e) => setStudents(e.target.value)}
								type="number"
								placeholder="Total Enrolled Students"
								className="input input-bordered input-primary w-full max-w-xs"
								name="students"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Course Durations
							</div>
							<input
								onChange={(e) => setDur(e.target.value)}
								type="number"
								placeholder="Course Durations"
								className="input input-bordered input-primary w-full max-w-xs"
								name="dur"
							/>
						</div>
					</div>
					<div className="flex  justify-evenly ">
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Class Image
							</div>
							<input
								type="file"
								className="file-input file-input-bordered w-full max-w-xs"
								placeholder="Choose A Photo"
								name="imag"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<div className="label-text text-lg font-semibold">
								Course Price
							</div>
							<input
								onChange={(e) => setPrice(e.target.value)}
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
							value="Add Class"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddaClass;
