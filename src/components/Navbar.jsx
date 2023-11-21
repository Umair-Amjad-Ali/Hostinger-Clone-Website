import { navLinks } from "../constants";
import { AiOutlineAlignRight } from "react-icons/ai";

import { hostinger, pakistan } from "../assests/";
const Navbar = () => {
  return (
    <header className="absolute z-10">
      <nav className=" flex justify-between items-cente bg-slate-300 p-3 shadow-lg fixed w-full">
        <div className="flex">
          <a href="/" className="flex justify-start items-center ml-5">
            <img src={hostinger} alt="logo" width={150} height={60} />
            {/* <p className="text-white uppercase">Hostinger</p> */}
          </a>
          <a href="/" className="flex justify-start items-center flex-1 pl-6 ">
            <img
              src={pakistan}
              alt="flag"
              width={30}
              height={50}
              className=" rounded-sm "
            />
            <p className="text-black pl-2 text-center font-medium hover:text-gray-600">
              English
            </p>
          </a>
        </div>

        <ul className="flex items-center justify-end gap-10 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-black hover:text-gray-600">
                {link.label}
              </a>
            </li>
          ))}
          <button className="text-black border-solid border-2 border-black px-3 py-2 rounded-md mr-5">
            Log In
          </button>
        </ul>
        <div
          className="hidden text-black text-2xl mr-4 max-lg:block"
          onClick={() => {
            console.log("Hello");
          }}
        >
          <AiOutlineAlignRight />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
