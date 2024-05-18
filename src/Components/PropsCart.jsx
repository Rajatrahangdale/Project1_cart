/* eslint-disable react/prop-types */
const PropsCart = ({ value, handleClick, index }) => {
  const { name, profession, image, friend } = value;
  console.log(value);
  return (
    <>
      <div className="w-52 bg-white rounded-md overflow-hidden">
        <div className="w-full h-44 bg-blue-300">
          <img
            className="w-full h-full object-cover object-top"
            src={image}
            alt=""
          />
        </div>
        <div className="w-full p-1">
          <h2 className="font-semibold  text-2xl">{name}</h2>
          <p className="text-sm ">{profession}</p>
          <button
            onClick={() => handleClick(index)}
            className={`px-3 py-1 mt-2 text-xs text-white ${
              friend ? "bg-green-500" : "bg-red-500"
            } font-semibold rounded-md`}
          >
            {friend ? "Frined" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PropsCart;
