import { solution } from "../assests";
import { Features } from "../components";
import { TrustpioltCard } from "../components";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const Websolutions = () => {
  return (
    <div className="flex my-24 justify-center items-center flex-col w-full">
      <div className=" flex max-xl:flex-col">
        <div className="w-1/2 ml-40 max-lg:w-[26rem] max-lg:ml-0">
          <h1 className="text-4xl text-blue-950 mb-5 font-medium max-lg:text-2xl max-lg:ml-4">
            All-in-one Website Solution
          </h1>
          <div className="leading-[3.5rem] max-lg:leading-10 max-lg:flex max-lg:flex-col max-lg:items-start">
            <Features
              text="Manage up to 100 websites."
              color="text-blue-900"
              iconColor="text-green-600"
            />{" "}
            <Features
              text="Register a domain name for free."
              color="text-blue-900"
              iconColor="text-green-600"
              icon={<AiOutlineQuestionCircle />}
            />{" "}
            <Features
              text="Set up a professional business email address."
              color="text-blue-900"
              iconColor="text-green-600"
              icon={<AiOutlineQuestionCircle />}
            />{" "}
            <Features
              text="Optimize your workflow with managed WordPress hosting."
              color="text-blue-900"
              iconColor="text-green-600"
            />{" "}
            <Features
              text="Launch websites quickly with our Website Builder."
              color="text-blue-900"
              iconColor="text-green-600"
            />
          </div>
        </div>
        <div className="mr-40 flex justify-center items-center max-lg:mr-0 max-xl:mt-7 max-lg:w-[22rem]">
          <img src={solution} alt="websolution" width={600} height={500} />
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center mt-20 mx-32 max-lg:flex-cols max-lg:flex-wrap max-lg:w-full max-xl:px-9">
        <TrustpioltCard content="Easy to use, intuitive and fluid interface, support always willing to assist in problems that may appear." />
        <TrustpioltCard content="Easy to use platform. Very good and fast support. Highly recommended." />
        <TrustpioltCard content="Even though I am a newbie in this world it has been very easy for me to understand and manage my site." />
      </div>
    </div>
  );
};

export default Websolutions;
