import { Features, TrustpioltCard, Button } from "../components";

import { customersupport } from "../assests";

const TeamsHelp = () => {
  return (
    <>
      <div className="flex flex-col w-full pt-36">
        <div className="flex max-xl:flex-col px-36 justify-center items-center">
          <div className="w-1/2 max-lg:w-[26rem] max-lg:ml-0">
            <h1 className="text-4xl text-blue-950 mb-5 font-medium max-lg:text-2xl max-lg:ml-4">
              All-in-one Website Solution
            </h1>
            <div className="leading-[2.5rem] max-lg:leading-10 max-lg:flex max-lg:flex-col max-lg:items-start">
              <Features
                text="Receive help from our agents anytime via live chat support."
                specificmargin="mb-1"
                color="text-blue-900"
                iconColor="text-green-600"
              />
              <Features
                text="Follow step-by-step video walkthroughs and guides."
                specificmargin="mb-1"
                color="text-blue-900"
                iconColor="text-green-600"
              />
              <Features
                text="Access a vast knowledgebase of in-depth tutorials."
                specificmargin="mb-1"
                color="text-blue-900"
                iconColor="text-green-600"
              />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full max-lg:mt-10">
            <img src={customersupport} alt="customersupport" width={580} />
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center mt-20 mx-32 max-lg:ml-0 max-lg:flex-wrap max-lg:w-full max-xl:px-9">
          <TrustpioltCard content="One of the best customer service you can find. Instant support. Patient, detailed " />
          <TrustpioltCard content="The best support in the industry. Amazing. Never fails to impress. Keep it up." />
          <TrustpioltCard content="Support is fast and good. A company that still puts the customer first!" />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 my-20 max-lg:mt-16">
          <h1 className="text-4xl text-blue-950 mb-7 max-lg:text-2xl">
            Join 2,002,312 Website Owners
          </h1>
          <div className="mt-5 w-64 mb-5">
            <Button text="Add to Cart" color=" bg-blue-800" />
          </div>
          <Features
            text="30-Day Money-Back Guarantee"
            iconColor="text-green-600"
          />
        </div>
      </div>
    </>
  );
};

export default TeamsHelp;
