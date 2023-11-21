// eslint-disable-next-line react/prop-types
const Button = ({ text, color }) => {
  return (
    <div>
      <button
        className={`${color} w-full py-3 text-white font-medium rounded-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
