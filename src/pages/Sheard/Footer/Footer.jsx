import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";

const Footer = () => {
	return (
		<div>
			<div className="w-full flex pt-10 justify-center bg-[#3E2B26]">
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
			<footer className="footer   p-10 bg-[#3E2B26] text-neutral-content">
				<footer className="footer p-10 bg-[#3E2B26]  text-neutral-content">
					<div>
						<span className="footer-title">Services</span>
						<a className="link link-hover  hover:text-[#E7B622] ">Branding</a>
						<a className="link link-hover  hover:text-[#E7B622] ">Design</a>
						<a className="link link-hover  hover:text-[#E7B622] ">Marketing</a>
						<a className="link link-hover  hover:text-[#E7B622] ">
							Advertisement
						</a>
					</div>
					<div>
						<span className="footer-title">Company</span>
						<a className="link link-hover  hover:text-[#E7B622] ">About us</a>
						<a className="link link-hover  hover:text-[#E7B622] ">Contact</a>
						<a className="link link-hover  hover:text-[#E7B622] ">Jobs</a>
						<a className="link link-hover  hover:text-[#E7B622] ">Press kit</a>
					</div>
					<div>
						<span className="footer-title">Legal</span>
						<a className="link link-hover  hover:text-[#E7B622] ">
							Terms of use
						</a>
						<a className="link link-hover  hover:text-[#E7B622] ">
							Privacy policy
						</a>
						<a className="link link-hover  hover:text-[#E7B622] ">
							Cookie policy
						</a>
					</div>
				</footer>
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
