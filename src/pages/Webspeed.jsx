import { maxspeed, bitcatcha, websiteplanet, wpbeginner } from "../assests";
import { Features, Cards } from "../components";

const Webspeed = () => {
  return (
    <div className="flex justify-center items-center flex-col  bg-slate-50 w-full">
      <div className="flex justify-center items-center gap-24 mx-36 mt-28 mb-14 max-xl:flex-col-reverse max-lg:mx-0">
        <div className="flex justify-center items-center">
          <img
            src={maxspeed}
            alt="maximize web speed"
            height={750}
            width={500}
          />
        </div>
        <div className="w-1/2 max-lg:w-full max-lg:pl-5">
          <h1 className="text-3xl font-medium text-blue-950 mb-7">
            Maximize Website Speed
          </h1>
          <div className=" max-lg:flex max-lg:flex-col max-lg:items-start">
            <Features
              text="Maximize performance with LiteSpeed Web Server technology."
              specificmargin="mb-7"
              color="text-blue-900"
              iconColor="text-green-600"
            />
            <Features
              text="Enjoy optimized performance with advanced cache solutions."
              specificmargin="mb-7"
              color="text-blue-900"
              iconColor="text-green-600"
            />
            <Features
              text="Host your website in any of our server locations: USA, United Kingdom, Brazil, Singapore, Lithuania, India, and the Netherlands."
              specificmargin="mb-7"
              color="text-blue-900"
              iconColor="text-green-600"
            />
          </div>
        </div>
      </div>
      <div className="mb-20 flex justify-center items-center gap-10 mx-36 max-lg:flex-wrap max-lg:w-full max-xl:px-9">
        <Cards
          imgURL={bitcatcha}
          content="Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!"
          bgcolor="bg-slate-100"
          textcolor="text-blue-950"
        />
        <Cards
          imgURL={wpbeginner}
          content="If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes."
          bgcolor="bg-slate-100"
          textcolor="text-blue-950"
        />
        <Cards
          imgURL={websiteplanet}
          content="The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised."
          bgcolor="bg-slate-100"
          textcolor="text-blue-950"
        />
      </div>
    </div>
  );
};

export default Webspeed;
