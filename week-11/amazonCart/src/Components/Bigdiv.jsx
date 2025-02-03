// import Navbar from "./Navbar";
import Shoppingcart from "./ShoppingCart";
import Yourwish from "./YourWish";

const Bigdiv = () => {
  return (
    <div>

    <div className="grid grid-cols-7 h-full w-full ">
        <div className="col-span-3 md:col-span-2  p-2 h-full border-r-2">
        <Yourwish/>
        
        </div>
        <div className="col-span-4 md:col-span-5">
            <Shoppingcart/>
        </div>
    </div>
    </div>
  );
};

export default Bigdiv;