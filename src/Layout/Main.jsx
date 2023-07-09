import { Outlet } from "react-router-dom";
import Navbar from "../pages/Sheard/Navbar/Navbar";
import Container from "./Container";
import Footer from "../pages/Sheard/Footer/Footer";
import { useState } from "react";

const Main = () => {
	const [mode, setMode] = useState(false);

	return (
		<>
			<Navbar mode={mode} setMode={setMode}></Navbar>
			<Container mode={mode} setMode={setMode}>
				<div className={mode ? "bg-white" : "bg-black"}>
					<Outlet></Outlet>
				</div>
			</Container>
			<Footer mode={mode}></Footer>
		</>
	);
};

export default Main;
