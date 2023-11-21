import { TiTick } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
const Features = ({ text, icon, specificmargin, color, iconColor }) => {
  return (
    <div
      className={`flex items-center gap-3 text-blue-950 max-lg:justify-center ${specificmargin}`}
    >
      <div className={`${iconColor}`}>
        <TiTick />
      </div>
      <p className={`${color}`}>{text}</p>
      <div className="text-lg">
        {/* <AiFillQuestionCircle /> */}
        {icon}
      </div>
    </div>
  );
};

export default Features;
