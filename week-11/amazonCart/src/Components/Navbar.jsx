import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.items)
     const cartCount= cartItems.reduce((total)=>total+1,0)

     function handelclick(){
      alert("add some items first")
     }
   
    
  return (
    <div>
         <div className="bg-[#131921] h-16 w-full flex text-white justify-between items-center">
          <Link to="/"> <div className="pl-20 md:pl-40 xl:pl-60  font-bold text-4xl">amazon.in</div></Link> 
            <div className="pr-20 md:pr-40 xl:pr-60 flex items-center" >Hello, User 
                  <div className="flex items-center  relative ">
                   
                    
                   
                    { cartCount >0 ?  <Link to="/checkout"> <IoCartOutline className="text-4xl"  /></Link> :<IoCartOutline onClick={handelclick} className="text-4xl"   />}
                    { cartCount > 0 && (
                <p className="bg-red-700 rounded-full text-white text-sm w-6 h-6 absolute top-0 right-0 flex justify-center items-center">
                  {cartCount}
                  
                </p>
              )}

                   
                  </div>

            </div>

         </div>
        
     
    </div>
  );
};

export default Navbar;