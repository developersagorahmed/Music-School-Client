import React from "react";

import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedCart = ({ item, setData, data }) => {
	const datas = data;
	console.log(item);
	const { dat } = item;
	const deleteItem = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			console.log(result);
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/myselectedclass/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your Class has been deleted.", "success");
							const remaining = datas.filter((dat) => dat._id !== _id);
							setData(remaining);
						}
					})
					.catch((err) => console.log(err));
			}
		});
	};

	return (
		<tbody>
			<tr>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={dat?.image} alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
					</div>
				</td>
				<td className="font-semibold text-lg">{dat?.classname}</td>
				<td className="font-semibold text-lg">{dat?.instructor?.name}</td>
				<td className="flex justify-center mt-2 font-semibold text-lg">
					{dat?.students}
				</td>
				<td className=" font-semibold text-lg">{dat?.price}$</td>
				<td className="font-semibold text-lg">
					<Link to="/dashboard/payment">
						<span className="btn bg-[#EB1A1A] text-white hover:text-black">
							Pay
						</span>
					</Link>
				</td>
				<td className="font-semibold text- text-lg">
					<button onClick={() => deleteItem(item?._id)}>
						<ImBin2 className="w-10 h-10 ml-2 text-red-700 hover:text-[#E7B622] duration-300"></ImBin2>
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default SelectedCart;
