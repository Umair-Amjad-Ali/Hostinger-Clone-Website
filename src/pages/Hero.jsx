import { ai } from "../assests/";
import { Features, LiveClock, Button } from "../components";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="p-20 flex  bg-slate-200 max-lg:flex-col w-full ">
      <div className="mt-12 w-1/2 max-lg:w-full max-lg:mb-10 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
        <h1 className="text-blue-950">
          <p className="font-semibold text-5xl max-lg:text-4xl leading-[4rem] max-lg:text-center">
            The Biggest Ever <br />
            <span className=" text-blue-700 ">Black Friday </span>
            Sale
          </p>
        </h1>
        <p className="text-xl mt-3 font-medium text-blue-950 max-lg:text-center">
          Up to 81% off Hosting + Website Builder
        </p>
        <div className="flex justify-start flex-col mt-5 gap-1">
          <Features
            text="Free Domain"
            color="text-blue-900"
            iconColor="text-green-600"
            icon={<AiFillQuestionCircle />}
          />
          <Features
            text="Free Website Migration"
            color="text-blue-900"
            iconColor="text-green-600"
            icon={<AiFillQuestionCircle />}
          />
          <Features
            text="24/7 Customer Support"
            color="text-blue-900"
            iconColor="text-green-600"
          />
        </div>
        <div className="mt-5 text-blue-950">
          <span className="text-lg">Rs.</span>
          <span className="text-5xl font-semibold">499</span>
          <span className="text-lg">/mo</span>
          <p className="text-xl font-bold">+ 2 Months Free</p>
        </div>
        <div className="flex justify-start ">
          <LiveClock />
        </div>
        <div className="mt-5 max-sm:w-[22.5rem] max-md:w-[48%] max-lg:w-[48%] w-[50%] mb-5">
          <Button text="Claim Deal" color="bg-pink-500" />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-blue-700 ">
            <BsShieldCheck />
          </p>
          <p className="text-lg">30-Day Money-Back Guarantee</p>
        </div>
      </div>

      <div className=" flex w-1/2 justify-start items-end max-h-screen max-lg:w-full">
        <img src={ai} alt="ai" height={730} width={660} />
      </div>
    </section>
  );
};

export default Hero;
