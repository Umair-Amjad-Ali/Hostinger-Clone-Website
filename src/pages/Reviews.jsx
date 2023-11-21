import { TrustPilotRviews, RemaningReviews } from "../components";
import { wpbeginner, hostadvice } from "../assests";
const Reviews = () => {
  return (
    <div className="flex gap-24 p-20 justify-center items-center flex-wrap ">
      <TrustPilotRviews />
      <RemaningReviews
        heading="Google"
        rating="Rating:"
        value="4.8/5 | 1,237"
        reviews="Reviews"
      />
      <RemaningReviews
        imgUrl={hostadvice}
        rating="Rating:"
        value="4.5/5 | 2,416"
        reviews="Reviews"
      />
      <RemaningReviews
        imgUrl={wpbeginner}
        rating="Rating:"
        value="4.7 | 874"
        reviews="Reviews"
      />
    </div>
  );
};

export default Reviews;
