import icon from "../../assets/icon.png";
import fb from "../../assets/footer/facebook-02.png";
import ins from "../../assets/footer/instagram.png";
import twt from "../../assets/footer/new-twitter.png";
import ln from "../../assets/footer/linkedin-02.png";
import flag from "../../assets/footer/🇺🇸.png";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between w-full py-16">
          <div className="w-1/3">
            <Link to={"/"} className="flex items-center gap-2">
              <img src={icon} alt="" height={40} width={40} />
              <h1 className="text-2xl font-bold text-white">
                Furni<span className="text-sky-400">Flex</span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-8 lg:gap-60">
            <div>
              <h1>About Us</h1>
              <div className="text-gray-400 pt-4 space-y-2">
                <p>Master Plan</p>
                <p>Jobs</p>
                <p>Invest</p>
                <p>Pressroom</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <h1>Explore EEVE</h1>
              <div className="text-gray-400 pt-4 space-y-2">
                <p>Unlock my Robot Power</p>
                <p>Starlight</p>
                <p>RObot Platform</p>
                <p>EEVE Roadmap</p>
              </div>
            </div>
            <div>
              <h1>Community & Support</h1>
              <div className=" text-gray-400 pt-4 space-y-2">
                <p>Willow X Community</p>
                <p>Developer & Maker Access</p>
                <p>Special Cases</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-800 mt-10" />
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-9 text-gray-400 gap-8 md:gap-0">
          <div className="flex items-center gap-3">
            <img src={fb} alt="" />
            <img src={ins} alt="" />
            <img src={twt} alt="" />
            <img src={ln} alt="" />
          </div>
          <div className="flex gap-3">
            <p>March22 Recap</p>
            <p>Privacy Policy</p>
            <p>General Terms</p>
            <p>Contact</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={flag} alt="" />
            <p>United States (English)</p>
          </div>
        </div>
        <p className="text-gray-400 text-center pb-9">
          EEVE © 2024. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
