import Footer from "../../Sheard/Footer/Footer";
import Banner from "../Banner/Banner";
import PopolarClass from "../PopolarClass/PopolarClass";
import OurPatner from "./OurPatner/OurPatner";
import PopolarInst from "./PopolarInst/PopolarInst";
import Showcase from "./Showcase";
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>HOME</title>
			</Helmet>
			<Banner></Banner>
			<PopolarClass></PopolarClass>
			<PopolarInst></PopolarInst>
			<Showcase></Showcase>
			<OurPatner></OurPatner>
		</div>
	);
};

export default Home;
