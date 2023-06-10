import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ani from "../../../assets/registerpage.json";
import { AuthContext } from "../../../Components/AuthProvider";

import Swal from "sweetalert2";
const Reginster = () => {
	const {
		registerUser,
		updateUserProfile,
		loading,
		handleGoogleSignIn,
		setLoading,
	} = useContext(AuthContext);
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [password1, setPassword1] = useState("");
	const [cpassword, setCpassword1] = useState("");
	const [photo, setPhoto] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		if (password1 !== cpassword) {
			setError("Password is not match ");
			return;
		}

		setPassword(password1);
		setError("");

		registerUser(email, password)
			.then((result) => {
				updateUserProfile(name, photo)
					.then(() => {
						setError("");
						const saveUser = { name: name, email: email, role: "" };
						fetch("http://localhost:5000/users", {
							method: "POST",
							headers: {
								"content-type": "application/json",
							},
							body: JSON.stringify(saveUser),
						})
							.then((res) => res.json())
							.then((data) => {
								if (data.insertedId) {
									event.target.reset();
									Swal.fire({
										position: "top-center",
										icon: "success",
										title: "Successfully Registered",
										showConfirmButton: false,
										timer: 1500,
									});

									navigate("/");
								}
							});
					})
					.catch((error) => {
						setLoading(false);
						setError(error.message);
						Swal.fire({
							position: "top-center",
							icon: "error",
							title: "failed to Registered",
							showConfirmButton: false,
							timer: 1500,
						});
					});
			})
			.catch((err) => {
				setError(err.message);
				Swal.fire({
					position: "top-center",
					icon: "error",
					title: "failed to Registered",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	const handleGoogle = () => {
		handleGoogleSignIn()
			.then((result) => {
				const loggedInUser = result.user;
				const saveUser = {
					name: loggedInUser.displayName,
					email: loggedInUser.email,
					role:""
				};

				fetch("http://localhost:5000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(saveUser),
				})
					.then((res) => res.json())
					.then((data) => {
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Success to Registered",
							showConfirmButton: false,
							timer: 1500,
						});

						navigate("/");
						// }
					});
			})
			.catch((error) => setError(error.message));
	};

	return (
		<div>
			<h2 className="text-center text-3xl font-bold underline pt-10 mt-[100px] text-[#E7B622]">
				Register
			</h2>
			<div className="mt-16 flex justify-evenly my-4">
				<div>
					<form onSubmit={handleSubmit} className="">
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
						<div className="form-control mt-4">
							<span className="label-text ">Name</span>

							<input
								onChange={(e) => setName(e.target.value)}
								type="text"
								placeholder="Your Name"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<div className="form-control  mt-6">
							<span className="label-text">Password</span>

							<input
								onChange={(e) => setPassword1(e.target.value)}
								type="text"
								placeholder="Password"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<div className="form-control  mt-6">
							<span className="label-text">Conform Password</span>

							<input
								onChange={(e) => setCpassword1(e.target.value)}
								type="text"
								placeholder="Password"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<div className="form-control  mt-6">
							<span className="label-text">Photo URL</span>
							<input
								onChange={(e) => setPhoto(e.target.value)}
								type="text"
								placeholder="Photo URL"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<input
							className="w-full btn mt-4 bg-[#023BAF] text-white hover:text-black "
							type="submit"
							value="Register"
						/>
					</form>
					<span className=" text-base label-text-alt link link-hover">
						<Link className=" text-blue" to="/login">
							<p className="text-[#fff]">
								Already have an Account
								<span className="text-blue font-semibold underline">Login</span>
							</p>
						</Link>
					</span>
					<span className="text-[#fff]">
						________________ or __________________
					</span>
					<button
						onClick={handleGoogle}
						className="mt-6 flex bg-base-200 px-4 py-2 w-full rounded-sm hover:bg-black hover:text-white transition duration-700"
					>
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
		</div>
	);
};

export default Reginster;
