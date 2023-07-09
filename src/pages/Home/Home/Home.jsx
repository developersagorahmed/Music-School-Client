import Footer from "../../Sheard/Footer/Footer";
import Banner from "../Banner/Banner";
import PopolarClass from "../PopolarClass/PopolarClass";
import Feedback from "./Feedback";
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
			<Feedback></Feedback>
			<Showcase></Showcase>
			<OurPatner></OurPatner>
		</div>
	);
};

export default Home;
