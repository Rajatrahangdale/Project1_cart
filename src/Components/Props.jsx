// import Button from "./Button";
// import { useState } from "react";
import { useState } from "react";
import PropsCart from "./PropsCart";

const Props = () => {
  const data = [
    {
      name: "Rajat",
      profession: "Coder",
      image:
        "https://media.istockphoto.com/id/1336832604/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=1024x1024&w=is&k=20&c=2lE7AADrvvefbsB3KmTqQ6PQ3_wgOqlM62bvy3hKOqE=",
      friend: false,
    },
    {
      name: "Rahul",
      profession: "Designer",
      image:
        "https://plus.unsplash.com/premium_photo-1664874602574-55fb92e853ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Kamlesh",
      profession: "Analysis",
      image:
        "https://images.unsplash.com/photo-1546512565-39d4dc75e556?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Mukesh",
      profession: "Tester",
      image:
        "https://images.unsplash.com/photo-1604073536770-8a33e332f830?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
  ];
  const [realData, setRealData] = useState(data);
  const handleFriendsButton = (cardIndex) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friend: !item.friend };
        }
        return item;
      });
    });
  };
  return (
    <>
      <div>
        {/* <Button name="Know more" color="bg-blue-600" />
        <Button name="Downlaod" color="bg-red-700" /> */}
        <div className="w-full h-screen bg-zinc-400 flex gap-4 items-center justify-center">
          {realData.map((item, index) => (
            <PropsCart
              key={index}
              index={index}
              handleClick={handleFriendsButton}
              value={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Props;
