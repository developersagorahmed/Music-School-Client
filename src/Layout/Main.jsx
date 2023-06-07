import { Outlet } from "react-router-dom";
import Navbar from "../pages/Sheard/Navbar/Navbar";
import Container from "./Container";
import Footer from "../pages/Sheard/Footer/Footer";

const Main = () => {
	return (
		<Container>
			<div>
				<Navbar></Navbar>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		</Container>
	);
};

export default Main;
