import { useState } from "react";

const Toggel = () => {
    const[toggle,settoggle]= useState(true)

  return (
    <div className="relative h-screen">
        <div className="absolute text-white text-2xl cursor-pointer " onClick={()=>{
                settoggle(!toggle)
        }}>
            =
        </div>

        { toggle === true ? (
            <div className=" rounded-xl h-[40%] bg-[#333333] w-96 md:w-[250px] md:h-screen "></div>
        ):(
            <div className="" ></div>
        )}
    </div>
  );
};

export default Toggel;