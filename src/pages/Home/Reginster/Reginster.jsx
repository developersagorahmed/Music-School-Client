import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ani from "../../../assets/registerpage.json";
const Reginster = () => {
	const [error, setError] = useState("");
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="flex justify-evenly my-9">
			<div>
				<form onSubmit={handleSubmit(onSubmit)} className="">
					<p className="text-red-900">{error}</p>
					<div className="form-control ">
						<span className="label-text ">Email</span>

						<input
							type="email"
							className="input input-bordered rounded-md"
							placeholder="Email"
							{...register("Email", { required: true })}
						/>
					</div>
					<div className="form-control  mt-6">
						<span className="label-text">Password</span>

						<input
							className="input input-bordered rounded-md"
							type="password"
							placeholder="Password"
							{...register("Password", { required: true })}
						/>
					</div>
					<div className="form-control  mt-6">
						<span className="label-text">Conform Password</span>

						<input
							className="input input-bordered rounded-md"
							type="password"
							placeholder="Conform Password"
							{...register("Conform Password", { required: true })}
						/>
					</div>
					<div className="form-control  mt-6">
						<span className="label-text">Photo URL</span>

						<input
							className="input input-bordered rounded-md"
							type="text"
							placeholder="Photo URL"
							{...register("Photo URL", {})}
						/>
					</div>
					<input
						className="w-full btn mt-4 bg-[#023BAF] text-white hover:text-black "
						type="submit"
						value="Login"
					/>
				</form>
				<span className=" text-base label-text-alt link link-hover">
					<Link className=" text-blue" to="/login">
						<p>
							Already have an Account
							<span className="text-blue font-semibold underline"> Login</span>
						</p>
					</Link>
				</span>
				<span>________________ or __________________</span>
				<button className="mt-6 flex bg-base-200 px-4 py-2 w-full rounded-sm hover:bg-black hover:text-white transition duration-700">
					<FcGoogle className="w-9 h-9"></FcGoogle>
					<span className="font-bold text-lg ml-4 mt-[3px]">
						Login With Google
					</span>
				</button>
			</div>

			<div>
				<Lottie animationData={ani} loop={true}></Lottie>
			</div>
		</div>
	);
};

export default Reginster;
