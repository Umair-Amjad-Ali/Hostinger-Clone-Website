import { StoryCard, Button, Features } from "../components";
import { profile } from "../assests";
const ClientsStories = () => {
  return (
    <>
      <div className="flex flex-col  w-full">
        <h1 className="text-center mb-14 text-4xl text-blue-950 font-medium">
          Featured Client Stories
        </h1>
        <div className="flex gap-5 justify-center items-center mx-32 max-lg:my-8 max-lg:mx-0 max-lg:flex-cols max-lg:flex-wrap max-lg:w-full max-xl:px-9">
          <StoryCard
            text="Ever since we've been with Hostinger, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible."
            profileURL={profile}
            name="Charlie Low"
            work="Co-founder of Climbingvan"
          />
          <StoryCard
            text="When I looked at Hostinger’s hPanel, I realized it was going to be the easiest to manage. Many developers may prefer other options, but for me personally, I like hPanel."
            profileURL={profile}
            name="David Shaw"
            work="Senior Web Designer"
          />
          <StoryCard
            text="With Hostinger I can manage the hosting, domain name, and SSL certificate in one place, which is really refreshing. And setting up a website was easy - I didn't need to talk to customer support once!"
            profileURL={profile}
            name="Owen Phillips"
            work="Founder of Gate Foot Forge"
          />
        </div>
        <div className=" text-center">
          <button className="w-[22rem] border-2 mt-10 border-indigo-600 py-3 text-blue-600 font-medium rounded-[0.25rem] max-lg:mt-6">
            Browse More Client Stories
          </button>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 my-20 max-lg:mt-16">
          <h1 className="text-4xl font-medium text-blue-950 mb-7 max-lg:text-2xl">
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

export default ClientsStories;
