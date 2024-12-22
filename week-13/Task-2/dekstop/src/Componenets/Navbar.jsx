import { useState } from "react";

const Navbar = () => {
  const [toggle,settoggle]=useState(false)
  return (
<div className=" flex justify-between items-center w-full">
<div className=" p-4 mt-6 flex justify-between items-center w-full">
        {/* firs bookmark div */}
        <div className="flex items-center  ">
            <div className="  shadow-2xl  ">
                <img className="h-6  " src="https://img.icons8.com/?size=100&id=82461&format=png&color=228BE6"/>
            </div>
            <h1 className=" ml-4 font-bold text-xl">BOOKMARK</h1>
            
        </div>

        {/* bars on right */}

        <div className=" hidden md:flex justify-between w-[70%] h-[10%] p-4 text-gray-500 text-center items-center ">
          <div className="mr-4 hover:text-red-500 ">FEATURES</div>
          <div className="mr-4 hover:text-red-500  " >DOWNLOAD</div>
          <div className="mr-4 hover:text-red-500 " >FAQ</div>
          <div className="mr-4 p-2 bg-red-500 border-2 border-red-500 hover:bg-white hover:text-red-500  text-white rounded-lg text-center w-[110px]" >LOGIN</div>
        </div>




      {  <div className="md:hidden" onClick={()=>{
          settoggle(!toggle)
          
        }}>
             <img className="h-8 " src="https://img.icons8.com/?size=100&id=VEOaxW05p6mN&format=png&color=1A1A1A"/>
        </div>
        }
        


    </div>
        {toggle === true ? 
        
        <div className="   w-full fixed top-0 left-0 w-screen h-screen bg-[#3A4058] bg-opacity-80 text-white flex flex-col items-center   ">
         <div> <h1 className=" mr-[230px] mt-10 font-bold text-xl">BOOKMARK</h1></div>
         <div className=" absolute ml-[355px] mt-10 ">

         <div onClick={()=>{
          settoggle(!toggle)
        }}>
             <img className="h-8" src="https://img.icons8.com/?size=100&id=VEOaxW05p6mN&format=png&color=1A1A1A"/>
        </div>


         </div>
        

         <div className="w-[90%] cursor-pointer mt-6  flex flex-col items-center text-center justify-center">

          <div className=" hover:text-red-500 p-4 text-lg border-b-2 border-gray-500 w-full">
           <a href="#feature">FEATURES</a> 
            </div>
          <div className=" hover:text-red-500 p-4 text-lg border-b-2 border-gray-500 w-full">
          <a href="#download">DOWNLOAD</a> 
            </div>
          <div className=" hover:text-red-500 p-4 text-lg border-b-2 border-gray-500 w-full">
          <a href="#faq">FAQ</a> 
            </div>
          <div className=" hover:text-red-500 p-4 text-lg border-b-2 border-gray-500 w-full">
          <a href="#top">LOGIN</a> 
            </div>

         </div>
        </div>


        :<div></div>}
        <div></div>
    
</div>
  );
};

export default Navbar;