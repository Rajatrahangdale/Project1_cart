const Cart = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
      name: "Amazon Besic",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1714496228779-48f5fe3fe154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D",
      name: "Second Text",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1714065199383-fe04c493184c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
      name: "Third Test",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatu",
      instock: false,
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
        {data.map((elem, index) => (
          <div
            key={index}
            className="w-52 bg-zinc-100 rounded-md overflow-hidden"
          >
            <div className="w-full h-32 bg-zinc-300">
              <img
                className="w-full h-full object-cover"
                src={elem.image}
                alt=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold text-xl">{elem.name}</h2>
              <p className="text-xs mt-5">{elem.title}</p>
              <button
                className={`px-2 py-1 mt-4 ${
                  elem.instock ? "bg-blue-400" : "bg-red-500"
                }  rounded-md text-zinc-100`}
              >
                {elem.instock ? "In Stock" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
