/* eslint-disable react/prop-types */
const Cards = ({ imgURL, content, bgcolor, textcolor }) => {
  return (
    <div
      className={`flex flex-col  gap-5 ${bgcolor} pt-8 px-8 rounded-sm w-[40%] h-56 max-lg:w-full max-lg:h-64`}
    >
      <div>
        <img src={imgURL} alt="trustpilot" width={200} height={80} />
      </div>
      <p className={`${textcolor} h-20`}>{content}</p>
    </div>
  );
};

export default Cards;
