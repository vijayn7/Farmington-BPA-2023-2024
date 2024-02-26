import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="bg-black text-white  mt-8 md:mt-0 ">
        <div className="flex flex-col md:flex-row justify-between pt-8 pb-24 px-32 ">
          <div className="grid justify-center">
            <img src="src/assets/Game Day Grill white.png" className="h-20" alt="Logo" />
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-brightColor ">Links </h1>
            <nav className=" flex flex-col gap-3 text-gray-300">
              <Link
              onClick={scrollToTop}
                to="/order" className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
              >
                <i class="fas fa-arrow-right pr-2"></i>
                Menu
              </Link>
              <Link
              onClick={scrollToTop}
              to="/catering"
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
              >
                <i class="fas fa-arrow-right pr-2"></i>
                Catering
              </Link>
              <Link
              onClick={scrollToTop}
              to="/order"
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
              >
                <i class="fas fa-arrow-right pr-2"></i>
                Order
              </Link>
              <Link
              onClick={scrollToTop}
              to="/about"
                className="hover:text-primary hover:text-md hover:text-brightColor transition-all cursor-pointer"
              >
                <i class="fas fa-arrow-right pr-2"></i>
                About
              </Link>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-brightColor">Social Media</h1>
            <nav className=" flex flex-col gap-3 text-gray-300">
              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                <i class="fab fa-facebook-f pr-2"></i>
                Facebook
              </a>
              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="https://twitter.com/MichiganBPA"
              >
                <i class="fab fa-twitter pr-2"></i>
                Twitter
              </a>
              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="https://www.instagram.com/farmington_bpa/"
              >
                <i class="fab fa-instagram pr-2"></i>
                Instagram
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-brightColor">Contact Us</h1>
            <nav className=" flex flex-col gap-3 text-gray-300">
              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="mailto:FarmingtonHSBPA@gmail.com"
              >
                <i class="fas fa-envelope pr-2"></i>
                FarmingtonHSBPA@gmail.com
              </a>

              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="/"
              >
                <i class="fas fa-phone  pr-2"></i>
                (248) 489-3455
              </a>

              <a
                className="hover:text-primary hover:text-brightColor transition-all cursor-pointer"
                href="https://maps.google.com/maps?q=farminton+high+school,Farmington"
              >
                <i
                  class="fas fa-map-marker-alt pr-2"></i>
                32000 Shiawassee St, Farmington, MI 48336
              </a>

            </nav>
          </div>
        </div>
      </div>

      <Outlet />

    </>
  );
};

export default Footer;
