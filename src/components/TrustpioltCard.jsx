/* eslint-disable react/prop-types */
import { trustpilot } from "../assests";
import { ImStarFull } from "react-icons/im";
import { AiOutlineRight } from "react-icons/ai";
const TrustpioltCard = ({ content }) => {
  return (
    <div className="flex flex-col justify-between gap-7 bg-slate-50 py-8 px-10 rounded-sm w-[40%] max-lg:w-full">
      <div>
        <img src={trustpilot} alt="trustpilot" width={220} />
      </div>
      <p className="text-blue-950 h-20 max-lg:h-24">{content}</p>
      <div className="flex justify-between">
        <div className="flex gap-3 text-green-600 text-xl ">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </div>
        <div className=" text-blue-950 cursor-pointer">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default TrustpioltCard;
