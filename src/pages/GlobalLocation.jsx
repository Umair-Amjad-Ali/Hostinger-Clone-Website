import { map } from "../assests";
const GlobalLocation = () => {
  return (
    <div className=" bg-slate-100 py-20 px-24 w-full text-center flex flex-col justify-center items-center flex-wrap">
      <div className=" text-center text-blue-950">
        <h1 className="text-4xl leading-10 font-semibold mb-10 max-lg:text-2xl">
          Data Centers All Around the World
        </h1>
        <p className="mb-10 text-lg">
          Our web hosting, WordPress hosting, and cloud hosting plans offer
          server locations in: USA, United Kingdom, France, India, Singapore,
          Brazil, Lithuania, and the Netherlands.
        </p>
      </div>
      <img src={map} alt="globalmap" width={1100} height={800} />
    </div>
  );
};

export default GlobalLocation;
