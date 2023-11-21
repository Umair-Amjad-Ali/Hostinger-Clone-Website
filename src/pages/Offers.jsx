import { OfferCard, MostPopular } from "../components";
const Offers = () => {
  return (
    <div>
      <h1 className="mt-6 text-center pb-20 text-3xl font-semibold text-blue-950">
        Web Hosting Plans for Every User
      </h1>
      <div className="flex gap-5 justify-center items-center mb-4 max-lg:flex-col mx-20 max-lg:gap-16">
        <OfferCard
          title="Premium"
          description="Everything you need to create your website"
          price="499"
          save="80"
          color="text-blue-600"
          bgcolor="bg-blue-200"
          butttonbg="bg-blue-600"
          renewcost="Rs.999/mo when you renew"
        />
        <OfferCard
          title="Business"
          description="Level-up with more power and enhanced features"
          price="949"
          save="68"
          color="text-red-600"
          bgcolor="bg-red-200"
          butttonbg="bg-pink-500"
          renewcost="Rs.1,799/mo when you renew"
          MostPopular={<MostPopular />}
        />
        <OfferCard
          title="Cloud Startup"
          description="Enjoy optimised performance & dedicated resources"
          price="2,499"
          save="58"
          color="text-blue-600"
          bgcolor="bg-blue-200"
          butttonbg="bg-blue-600"
          renewcost="Rs.4,499/mo when you renew"
        />
      </div>
      <p className="my-10 text-center text-blue-800 text-lg font-medium cursor-pointer hover:text-blue-600">
        Payment terms
      </p>
    </div>
  );
};

export default Offers;
