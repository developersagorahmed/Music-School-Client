import React from "react";
import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";

const EnrollCard = ({ item }) => {
	console.log(item.data);
	return (
		<tbody>
			<tr>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img
									src={item?.data.image}
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
					</div>
				</td>
				<td className="font-semibold text-lg">{item.data?.classname}</td>
				<td className="font-semibold text-lg">{item.data.instructor?.name}</td>
				<td className="flex justify-center mt-2 font-semibold text-lg">
					{item?.data?.students}
				</td>
				<td className=" font-semibold text-lg">{item.data?.price}$</td>

				<td className="">
					<button className="btn font-semibold text-lg bg-[#85CE85] ">
						{" "}
						Enrolled
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default EnrollCard;
