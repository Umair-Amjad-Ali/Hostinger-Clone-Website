/* eslint-disable react/prop-types */
import { cardlinks } from "../constants";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import Button from "./Button";
import { AiOutlineUp } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
const OfferCard = ({
  title,
  description,
  price,
  save,
  color,
  bgcolor,
  butttonbg,
  renewcost,
  MostPopular,
}) => {
  return (
    <div className="flex flex-col border-solid border-2 border-blue-500 px-8 py-10 w-[21rem] rounded-sm transition duration-700 transform hover:-translate-y-8 hover:scale-70 hover:shadow-2xl ">
      <div className=" relative"> {MostPopular}</div>
      <div className=" flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl text-blue-950 font-semibold mb-3">{title}</h1>
        <p className="text-blue-950 text-center mb-10">{description}</p>
        <div className=" flex justify-center gap-4 items-center">
          <del className=" text-slate-600">Rs. 2,999</del>
          <span className={`${color} ${bgcolor} py-1 px-2 rounded-full`}>
            SAVE {save}%
          </span>
        </div>
        <div className="mt-5 text-blue-950">
          <span className="text-lg">Rs.</span>
          <span className="text-5xl font-semibold">{price}</span>
          <span className="text-lg">/mo</span>
          <p className={`text-xl font-bold mt-4 ${color}`}>+ 2 Months Free</p>
        </div>
        <div className="mt-5 w-64 mb-5">
          <Button text="Add to Cart" color={butttonbg} />
        </div>
        <p className=" text-slate-500 mb-6">{renewcost}</p>
      </div>
      <div className="py-5">
        {" "}
        <hr className="border-solid border-spacing-1 border-slate-500 w-80" />
      </div>
      <div>
        {cardlinks.map((item) => (
          <div key={item.title}>
            <p className="text-blue-950 text-xl font-semibold py-4">
              {item.title}
            </p>
            {item.links.map((link) => (
              <>
                <div className="flex justify-between items-center">
                  <div
                    key={link.name}
                    className="flex gap-1 items-center leading-10"
                  >
                    <span className={`${link.color} text-lg`}>
                      {link.tickicon === "TiTick" ? <TiTick /> : null}
                      {link.tickicon === "RxCross2" ? <RxCross2 /> : null}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <span className="text-xl text-blue-950">
                    {link.abouticon === "AiOutlineQuestionCircle" ? (
                      <AiOutlineQuestionCircle />
                    ) : null}
                  </span>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      <div
        onClick={() => {}}
        className={`flex justify-center items-center gap-4 mt-7 ${color} font-medium`}
      >
        <p>See Less Features</p>
        <span>
          <AiOutlineUp />
        </span>
      </div>
    </div>
  );
};
export default OfferCard;
