// import { trustpilot } from "../assests";
import { BsFillStarFill } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
const TrustPilotRviews = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center text-xl">
        <p className=" text-green-600">
          <BsFillStarFill />
        </p>
        <p className="font-medium">TrustPilot</p>
      </div>
      <div className="flex gap-2 mt-3">
        <p className="bg-green-600 text-slate-200 p-3 items-center text-xl">
          <GoStarFill />
        </p>
        <p className="bg-green-600 text-slate-200 p-3 items-center text-xl">
          <GoStarFill />
        </p>
        <p className="bg-green-600 text-slate-200 p-3 items-center text-xl">
          <GoStarFill />
        </p>
        <p className="bg-green-600 text-slate-200 p-3 items-center text-xl">
          <GoStarFill />
        </p>
        <p className="bg-green-600 text-slate-200 p-3 items-center text-xl">
          <GoStarFill />
        </p>
      </div>
      <div className="flex gap-2 leading-10 text-sm">
        <p>
          TrustScore <span className="font-medium">4.6</span>
        </p>
        <p className="font-medium"> | </p>
        <p>
          <span className="font-medium">21,014</span> Reviews
        </p>
      </div>
    </div>
  );
};

export default TrustPilotRviews;
