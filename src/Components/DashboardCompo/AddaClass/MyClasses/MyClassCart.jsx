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

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
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
					<td className="font-semibold text- text-lg">
						{item?.feedback && (
							<>
								<button
									onClick={openModal}
									className="btn bg-slate-200 hover:bg-red-700 hover:text-white"
								>
									{item?.feedback ? item.feedback.slice(0, 10) + "..." : ""}
								</button>
							</>
						)}
					</td>
				</tr>
			</tbody>
			{/* You can open the modal using ID.showModal() method */}

			{isModalOpen && (
				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex  items-center justify-center min-h-screen px-4">
						<div className="fixed inset-0 transition-opacity">
							<div className="absolute inset-0 bg-black opacity-50"></div>
						</div>

						<div className="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
							<div className="px-4 py-6">
								<div className="flex items-center justify-between">
									<h3 className="font-bold text-lg">Your FeedBack</h3>
									<button
										className="btn w-7 h-7 btn-sm btn-circle btn-ghost"
										onClick={closeModal}
									>
										✕
									</button>
								</div>
								<p className="py-4">{item?.feedback}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MyClassCart;
