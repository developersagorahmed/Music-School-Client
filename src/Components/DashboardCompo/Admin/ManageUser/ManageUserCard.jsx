import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUserCard = ({ item }) => {
	const { _id, email, name, role, photo } = item;

	const handleRole = (role, _id) => {
		fetch(`http://localhost:5000/role/update/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ role, _id }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Successfully Change Role",
						showConfirmButton: false,
						timer: 1500,
					});
				
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<tbody>
				<tr>
					<td>
						<div className="flex items-center space-x-3">
							<div className="avatar">
								<div className="mask mask-squircle w-12 h-12">
									<img src={photo} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
						</div>
					</td>
					<td className="font-semibold text-lg">{name}</td>
					<td className="font-semibold text-lg">{email}</td>
					<td className=" mt-2 font-semibold text-lg">
						{role == "" && "Student"}
						{role == "ins" && "Instructor"}
						{role == "admin" && "Admin"}
					</td>
					<td className=" font-semibold text-lg">
						<button
							onClick={() => handleRole("ins", _id)}
							className="btn  bg-green-600 text-white hover:bg-black"
						>
							Make Instructor
						</button>
					</td>

					<td className="font-semibold text- text-lg">
						<button
							onClick={() => handleRole("admin", _id)}
							className="btn bg-[#EB1A1A] text-white hover:bg-black"
						>
							Make Admin
						</button>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default ManageUserCard;
