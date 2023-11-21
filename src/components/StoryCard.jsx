/* eslint-disable react/prop-types */
import { ImStarFull } from "react-icons/im";
const StoryCard = ({ text, profileURL, name, work }) => {
  return (
    <>
      <div className="flex flex-col gap-4 border border-indigo-200 w-[22rem] rounded-sm max-lg:w-full">
        <div className="flex flex-col justify-between gap-7 mt-12 mb-5 px-10">
          <div className="flex gap-2 text-blue-800 text-2xl ">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </div>
          <p className="text-blue-950 w-full h-24 text-sm">{text}</p>
          <p className="text-blue-800 cursor-pointer">Read The Full Story</p>
        </div>
        <div className=" bg-slate-100">
          <div className="flex justify-start items-center px-10 py-6 border-t-[1px] border-indigo-200">
            <img
              src={profileURL}
              alt="profile"
              width={50}
              className=" rounded-full"
            />
            <div>
              <h2 className="text-base font-medium ml-4 text-blue-950">
                {name}
              </h2>
              <p className="text-base  ml-4 text-blue-900">{work}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
