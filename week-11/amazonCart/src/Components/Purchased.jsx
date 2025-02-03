import { useDispatch } from "react-redux";
import { clearCart } from "../Features/Cartslice";

const Purchased = ({isOpen,onClose,Price}) => {
    const dispatch = useDispatch()
    if(!isOpen) return null;

    function handelclose(){
           dispatch(clearCart())
           onClose()
    }
  return (
    <div className=" flex fixed inset-0 items-center bg-black bg-opacity-50 justify-center  ">
        <div className="shadow-2xl rounded-md bg-white py-4 px-6" >
          <h1 className="font-bold text-xl">Purchase Sucessful</h1>
          <div className="flex items-center text-center flex-col py-2">
             <img className="w-10" src="https://png.pngtree.com/png-vector/20230525/ourlarge/pngtree-d-rendering-of-a-green-right-mark-isolated-on-transparent-background-vector-png-image_7108738.png"/>
              <h3 className="">Thank you for your purchase.<br/> Your order has been sucessfully processed </h3>
          </div>
          <h2 className="font-bold pb-2">Total Amount : ${Price}</h2>
          <div  onClick={handelclose} className=" cursor-pointer text-center border rounded-md py-2 bg-blue-700 text-white">

          <button >Close</button>
          </div>
        </div>
    </div>
  );
};

export default Purchased;