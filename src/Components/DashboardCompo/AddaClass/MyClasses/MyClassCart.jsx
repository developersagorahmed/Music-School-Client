import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";
import Swal from "sweetalert2";

const MyClassCart = ({ item }) => {
	const { user } = useContext(AuthContext);

	const {
		image,
		classname,
		students,
		price,
		approved,
		available_seats,

		_id,
	} = item;

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
					<td className="font-semibold text-lg">{available_seats}</td>
					<td className="flex justify-center mt-2 font-semibold text-lg">
						{available_seats - students}
					</td>
					<td className=" font-semibold text-lg">{price}$</td>
					<td className="font-semibold text-lg">
						<span className="btn bg-[#EB1A1A] text-white hover:bg-[#EB1A1A]">
							{approved == "app" && <>Approved</>}
							{approved == "rej" && <>Deny</>}
							{approved == "pan" && <>pending</>}
						</span>
					</td>
					<td className="font-semibold text- text-lg">
						<Link to={`editClass/${_id}`}>
							<button className="btn bg-[#EB1A1A] text-white hover:text-black">
								Edit
							</button>
						</Link>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default MyClassCart;
