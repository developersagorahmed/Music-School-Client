import React, { useContext, useState } from "react";
import icon from "../../../assets/login.png";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider";

const Login = () => {
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const { handleGoogleSignIn, signIn } = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		if (Password.length < 6) {
			setError("please provide a valid password");
		}
		signIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.log(error));
	};

	const handleLoginWithGoogle = () => {
		handleGoogleSignIn(email, Password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<h2 className="text-center text-3xl font-bold underline text-[#3E2B26]">
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
									placeholder="********"
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
									<p>
										Dont't have an Account
										<span className="text-blue font-semibold underline">
											{" "}
											Register
										</span>
									</p>
								</Link>
							</span>
							<span>________________ or __________________</span>
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
					<img src={icon} alt="" />
				</div>
			</div>
		</>
	);
};

export default Login;
