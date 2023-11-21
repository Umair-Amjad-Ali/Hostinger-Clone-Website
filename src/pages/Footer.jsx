import { hostinger } from "../assests/footer Logo";
import { useState, useEffect } from "react";
import { paymentmethod } from "../constants";
import { footerLinks } from "../constants";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  const [showLinks, setShowLinks] = useState(
    Array(footerLinks.length).fill(false)
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleLinks = (index) => {
    const updatedLinks = [...showLinks];
    updatedLinks[index] = !updatedLinks[index];
    setShowLinks(updatedLinks);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <footer className="w-full bg-slate-200 py-10">
        <div className="flex justify-between gap-14 flex-wrap max-lg:flex-col px-32 max-lg:justify-start max-lg:px-10">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={hostinger} alt="hostinger" width={150} />
            </a>
            <p className="mt-2 text-base leading-7 text-white-400 sm:max-w-sm max-lg:mr-10 ">
              We are a web hosting provider on a mission to bring success to
              everyone who goes online. We do it by constantly improving server
              technology, providing professional support, and making the web
              hosting experience seamless.
            </p>

            <div className="flex items-start gap-3 mt-5 flex-wrap w-96">
              {paymentmethod.map((img) => (
                <div
                  className="flex justify-center items-center w-20 h-14 p-3 bg-white border border-blue-300"
                  key={img.alt}
                >
                  <img src={img.src} alt={img.alt} width={80} height={50} />
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex flex-1 justify-between flex-wrap ${
              windowWidth < 668 ? "max-lg:flex-col " : ""
            }`}
          >
            {footerLinks.map((section, index) => (
              <div
                key={section.title}
                // className="flex flex-col basis-1/3 py-5 max-lg:flex-wrap max-xl:justify-start"
                className="flex flex-col basis-1/3 max-lg:basis-1/2 py-5 max-lg:py-1 max-lg:flex-wrap max-xl:justify-start "
              >
                <div
                  className="flex items-center mb-3 cursor-pointer max-lg:justify-between"
                  onClick={() => toggleLinks(index)}
                >
                  {/* Add an icon or any element indicating the toggle */}
                  <h4 className="text-lg font-medium text-blue-950 uppercase ">
                    {section.title}
                  </h4>
                  {/* Add an icon to indicate the toggle state */}
                  {windowWidth < 668 && (
                    <span className="max-lg:mr-10 text-blue-950">
                      {showLinks[index] ? <AiOutlineUp /> : <AiOutlineDown />}
                    </span>
                  )}
                </div>
                {/* Render links only if showLinks state is true */}
                {(windowWidth < 668 && showLinks[index]) ||
                windowWidth >= 668 ? (
                  <ul>
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        className="my-3 text-sm leading-normal text-blue-950 hover:text-blue-800 cursor-pointer"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-end gap-1 px-32 text-xl text-blue-900 max-lg:text-3xl max-lg:gap-5 max-lg:justify-start max-lg:px-10 max-lg:mt-10">
          <FaFacebookSquare className="hover:text-blue-800 " />
          <FaLinkedin className="hover:text-blue-800 " />
          <AiFillInstagram className="hover:text-blue-800 " />
          <FaTwitterSquare className="hover:text-blue-800 " />
          <FaYoutubeSquare className="hover:text-blue-800 " />
        </div>
        <div className=" px-32 py-5 max-lg:px-10 ">
          <hr className=" border-slate-300 " />
        </div>
        <div className=" flex justify-between px-32 text-blue-950 flex-wrap max-lg:px-10">
          <p className=" max-lg:mb-5">
            © 2004-2023 hostinger.pk - Premium Web Hosting, Cloud, VPS & Domain
            Registration Services.
          </p>
          <p>Prices are listed without VAT</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
