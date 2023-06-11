import React from "react";

const ManageCart = ({ item }) => {
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
					<td>
						{instructor?.name}
						<br />
						<span className="badge badge-ghost badge-sm">
							{instructor?.email}
						</span>
					</td>

					<td className=" font-semibold text-lg">{available_seats}</td>
					<td className="font-semibold text-lg">{students}</td>
					<td className="font-semibold text- text-lg">{price}</td>
					<td className="font-semibold text- text-lg">
						{approved == "app" && "Approved"}
						{approved == "rej" && "rej"}
						{approved == "pan" && "Approved"}
					</td>
					<td className="font-semibold text- text-lg">
						<div className="flex flex-col">
							<span className="btn bg-green-600 text-white hover:bg-black">
								Approved
							</span>
							<span className="btn bg-yellow-400 text-white hover:bg-black">
								pending
							</span>
							<span className="btn bg-[#EB1A1A] text-white hover:bg-black">
								Deny
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</>
	);
};

export default ManageCart;
