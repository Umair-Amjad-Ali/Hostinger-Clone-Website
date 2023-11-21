import { security, pcmag, cnetlight, sfgate } from "../assests";
import { Features, Cards } from "../components";
const SecurityFeatures = () => {
  return (
    <>
      <div className="flex flex-col w-full py-24 bg-gradient-to-b from-violet-800 via-violet-800 to-blue-800">
        <div className="flex justify-between gap-14 max-lg:flex-col-reverse px-32 max-lg:w-[26rem] max-lg:p-7">
          <div className="w-1/2 max-lg:w-full">
            <img src={security} alt="security" width={600} />
          </div>
          <div className="w-1/2 flex flex-col justify-center max-lg:justify-start max-lg:w-full">
            <h1 className=" text-white text-4xl mb-7 ">
              Advanced Security Features
            </h1>
            <div className="leading-[3.5rem] max-lg:leading-10 max-lg:flex max-lg:flex-col max-lg:items-start">
              <Features
                text="Get unlimited SSL security certificates to encrypt your websites’ traffic."
                specificmargin="mb-4"
                color="text-white"
                iconColor="text-white"
              />
              <Features
                text="Protect your website from DDoS attacks with Cloudflare protected nameservers. "
                specificmargin="mb-4"
                color="text-white"
                iconColor="text-white"
              />
              <Features
                text="Secure your files with automatic backups."
                specificmargin="mb-4"
                color="text-white"
                iconColor="text-white"
              />
              <Features
                text="Ensure your website is online with our 99.9% uptime guarantee."
                specificmargin="mb-4"
                color="text-white"
                iconColor="text-white"
              />
            </div>
          </div>
        </div>
        <div className=" mt-20 flex justify-center items-center gap-10 mx-36 max-lg:w-full max-lg:flex-col max-lg:mx-0 max-lg:px-8">
          <Cards
            imgURL={pcmag}
            content="Hostinger proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period."
            bgcolor="bg-[#231491]"
            textcolor="text-white"
          />
          <Cards
            imgURL={cnetlight}
            content="Plans include SSL certificates and all servers have an advanced security module to protect your data."
            bgcolor="bg-[#231491]"
            textcolor="text-white"
          />
          <Cards
            imgURL={sfgate}
            content="With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured."
            bgcolor="bg-[#231491]"
            textcolor="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default SecurityFeatures;
