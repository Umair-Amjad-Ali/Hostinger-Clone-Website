import { Features, TrustpioltCard } from "../components";

import { migration } from "../assests";

const TeamsHelp = () => {
  return (
    <>
      <div className="flex flex-col w-full py-24">
        <div className="flex justify-between gap-14 max-lg:flex-col px-36 max-lg:px-7">
          <div className="w-1/2 flex flex-col justify-center max-lg:justify-start max-lg:w-full">
            <h1 className="text-blue-950 text-4xl mb-7 ">Free Migration</h1>
            <div className="leading-[3.5rem] max-lg:leading-10 max-lg:flex max-lg:flex-col max-lg:items-start">
              <Features
                text="Transfer your website using our free automatic website migration tool."
                specificmargin="mb-5"
                color="text-blue-900"
                iconColor="text-green-600"
              />
              <Features
                text="Our agents will guide you in every step of the way."
                specificmargin="mb-5"
                color="text-blue-900"
                iconColor="text-green-600"
              />
              <Features
                text="Your website will be transferred within 24 hours."
                specificmargin="mb-5"
                color="text-blue-900"
                iconColor="text-green-600"
              />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <img src={migration} alt="customersupport" width={580} />
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center mt-20 mx-32 max-lg:ml-0 max-lg:flex-wrap max-lg:w-full max-lg:px-10">
          <TrustpioltCard content="I have migrated to Hostinger few months ago. I am extremely satisfied with the hostinga and support" />
          <TrustpioltCard content="Migrated over a website and email from another provider. Hostinger's UI is easy to use and the support was quick, friendly, and very helpful." />
          <TrustpioltCard content="Very positive experience as a new customer. I migrated my website hosting and the support was amazing and very responsive." />
        </div>
      </div>
    </>
  );
};

export default TeamsHelp;
