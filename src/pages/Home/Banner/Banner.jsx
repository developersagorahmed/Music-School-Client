import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "../Banner/banner.css";
import img1 from "../../../assets/banner/img1.jpg";

import img2 from "../../../assets/banner/img2.jpg";
import img3 from "../../../assets/banner/img3.jpg";
import img4 from "../../../assets/banner/img4.jpg";
import img5 from "../../../assets/banner/img5.jpg";
import img6 from "../../../assets/banner/img6.jpg";

const Banner = () => {
	return (
		<Carousel className="my-20">
			<div className="">
				<img className="object-cover h-[80vh]" src={img1} />
			</div>
			<div>
				<img className="object-cover h-[80vh]" src={img2} />
			</div>
			<div>
				<img className="object-cover h-[80vh]" src={img3} />
			</div>
			<div>
				<img className="object-cover h-[80vh]" src={img4} />
			</div>
			<div>
				<img className="object-cover h-[80vh]" src={img5} />
			</div>
			<div>
				<img className="object-cover h-[80vh]" src={img6} />
			</div>
		</Carousel>
	);
};

export default Banner;
