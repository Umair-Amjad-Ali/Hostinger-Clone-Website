import { GoStarFill } from "react-icons/go";
// eslint-disable-next-line react/prop-types
const RemaningReviews = ({ imgUrl, heading, rating, value, reviews }) => {
  return (
    <div>
      {heading && <p className="text-2xl font-medium leading-10">{heading}</p>}
      {imgUrl && <img src={imgUrl} alt="img" height={70} width={150} />}
      <p className="flex gap-2  text-2xl text-green-600 mt-3">
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
      </p>
      <div className="flex gap-2  text-sm leading-10">
        <p>{rating}</p>
        <p className=" font-medium">{value}</p>
        <p>{reviews}</p>
      </div>
    </div>
  );
};

export default RemaningReviews;
