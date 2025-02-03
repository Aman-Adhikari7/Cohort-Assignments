import { useDispatch } from "react-redux";
import { addtocart } from "../Features/Cartslice";
import { useState } from "react";
import { data } from "../Data/data";



const Shoppingcart = () => {
  const dispatch = useDispatch();

  // Manage disabled state for each item individually
  const [disabledItems, setDisabledItems] = useState([]);

  const Addtocart = (item) => {
    dispatch(addtocart(item))
    // Pass the item to the action
  };

  const handleItemAdded = (index) => {
    setDisabledItems((prev) => [...prev, index]); // Mark the item as disabled
  };

  const handleClick = (item, index) => {
    Addtocart(item);
    handleItemAdded(index); // Disable the specific button
  };

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold">Your Wish List</h1>
          <p className="text-sm text-gray-500">Public</p>
        </div>
        <div>
          <h1 className="text-md font-bold">Send list to others</h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span>🔍</span>
          <h1>Search this list</h1>
        </div>
        <div className="flex flex-col">
          <h2 className="text-md font-bold">Filter & Sort</h2>
        </div>
      </div>

      {/* Items Section */}
      <div className="mt-10 border gap-4 grid grid-cols-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-4 border shadow flex flex-col p-4"
          >
            <img src={item.img} alt="Item" className="w-full h-auto mb-4" />
            <h1 className="font-bold text-lg">{item.title}</h1>
            <h2 className="font-bold text-md pt-2">${item.price}</h2>
            <button
              onClick={() => handleClick(item, index)}
              disabled={disabledItems.includes(index)}
              className={`p-2 border font-bold bg-[#F7BC24] rounded-md flex justify-center ${
                disabledItems.includes(index)
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              {disabledItems.includes(index)
                ? `Proceed to checkout`
                : `Add to cart`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoppingcart;

