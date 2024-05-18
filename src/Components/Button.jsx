/* eslint-disable react/prop-types */
const Button = ({ name, color }) => {
  return (
    <>
      <button className={`m-2 px-3 py-1 ${color} rounded-md text-xs`}>
        {name}
      </button>
    </>
  );
};

export default Button;
