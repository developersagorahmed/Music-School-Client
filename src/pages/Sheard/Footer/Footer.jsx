import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import logo from "../../../assets/logo.png";

const Footer = () => {
	return (
		<div>
			<footer className="footer p-10 bg-[#3E2B26] text-neutral-content">
				<div>
					<img src={logo} alt="" />
					<p>
						Programming Hero
						<br />
						Providing reliable tech since 1992
					</p>
				</div>
				<div>
					<span className="footer-title">Social</span>
					<div className="grid grid-flow-col gap-4">
						<a>
							<CiFacebook className="w-12 h-12 mr-6 text-white hover:text-[#E7B622]"></CiFacebook>
						</a>
						<a>
							<CiYoutube className="w-12 h-12 mr-6 text-white hover:text-[#E7B622]"></CiYoutube>
						</a>
						<a>
							<CiTwitter className="w-12 h-12 mr-6 text-white hover:text-[#E7B622] "></CiTwitter>
						</a>
					</div>
				</div>
			</footer>

			<div>
				<footer className="footer footer-center p-4 bg-[#3E2B26] text-white ">
					<div>
						<p>Copyright © 2023 - All right reserved by Programming Hero Ltd</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
