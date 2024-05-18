import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const Cart2 = () => {
  const [val, setVal] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
        <div className=" relative w-60 h-32 bg-zinc-500 rounded-md overflow-hidden flex">
          <img
            className={`shrink-0 duration-500 ease-in-out ${
              val ? "-translate-x-[0%]" : "-translate-x-[100%]"
            }  w-full h-full object-cover`}
            src="https://images.unsplash.com/photo-1715607347255-8ab4816bf923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className={`shrink-0 duration-500 ease-in-out ${
              val ? "-translate-x-[0%]" : "-translate-x-[100%]"
            }  w-full h-full object-cover`}
            src="https://images.unsplash.com/photo-1715390321213-c8d88b3e024a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span
            onClick={() => setVal(() => !val)}
            className="absolute w-10 h-10 flex items-center justify-center rounded-full bottom-[0%] left-1/2 bg-[#dadada7b] -translate-x-[50%] -translate-y-[50%]"
          >
            {val ? <FaArrowRight /> : <FaArrowLeft />}
          </span>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart2;
