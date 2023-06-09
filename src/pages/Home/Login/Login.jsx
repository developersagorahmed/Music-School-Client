import React, { useContext, useState } from "react";
import Lottie from "lottie-react";

import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider";
import ani from "../../../assets/loginPage.json";
import Swal from "sweetalert2";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const [error, setError] = useState("");
	const [show, setShow] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { handleGoogleSignIn, signIn } = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		if (password.length < 6) {
			setError("please provide a valid password");
		}
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Successfully Login",
					showConfirmButton: false,
					timer: 1500,
				});
				event.target.reset();
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					position: "top-center",
					icon: "error",
					title: "failed to Login",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	const handleLoginWithGoogle = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Successfully Login",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate(from, { replace: true });
			})
			.catch((error) => {
				Swal.fire({
					position: "top-center",
					icon: "error",
					title: "failed to Login",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<>
			<h2 className="text-center text-4xl font-bold underline mt-[100px] pt-10 text-[#E7B622]">
				Log in
			</h2>
			<div className="flex justify-evenly">
				<div className="flex justify-evenly">
					<div>
						<form onSubmit={handleLogin} className="mt-16">
							<p className="text-red-900">{error}</p>
							<div className="form-control ">
								<span className="label-text ">Email</span>

								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="email"
									className="input input-bordered rounded-md"
									required
								/>
							</div>
							<div className="form-control  mt-6">
								<span className="label-text">Password</span>

								<input
									onChange={(e) => setPassword(e.target.value)}
									type={show ? "password" : "text"}
									placeholder="Password"
									className="input input-bordered rounded-md"
									required
								/>
								{show ? (
									<>
										<BiShow
											onClick={() => setShow(!show)}
											className="w-6 h-7 relative text-[#D2D4D7] left-[210px] bottom-10"
										></BiShow>
									</>
								) : (
									<>
										<BiHide
											onClick={() => setShow(!show)}
											className="w-6 h-7 relative text-[#D2D4D7] left-[210px] bottom-10"
										></BiHide>
									</>
								)}
							</div>
							<input
								className="w-full btn bg-[#023BAF] text-white hover:text-black "
								type="submit"
								value="Login"
							/>
						</form>
						<div className="mt-4">
							<span className=" text-base label-text-alt link link-hover">
								<Link className=" text-blue" to="/register">
									<p className="text-[#fff]">
										Dont't have an Account
										<span className="text-blue font-semibold underline">
											{" "}
											Register
										</span>
									</p>
								</Link>
							</span>
							<span className="text-[#fff]">
								________________ or __________________
							</span>
						</div>
						<button
							onClick={handleLoginWithGoogle}
							className="mt-6 flex bg-base-200 px-4 py-2 w-full rounded-sm hover:bg-black hover:text-white transition duration-700"
						>
							<FcGoogle className="w-9 h-9"></FcGoogle>
							<span className="font-bold text-lg ml-4 mt-[3px]">
								Login With Google
							</span>
						</button>
					</div>
				</div>

				<div className="w-[600px]">
					<Lottie animationData={ani} loop={true}></Lottie>
				</div>
			</div>
		</>
	);
};

export default Login;
