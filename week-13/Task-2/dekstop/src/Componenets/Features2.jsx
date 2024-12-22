import { useState } from "react";

const Features = () => {
    const[image,setimage]=useState(1)
  return (
    <div>
        <div>
            <div id="feature" className="  flex items-center flex-col text-center mt-10">
                <h1 className="font-bold text-4xl mb-8">Features</h1>
                <p className="mb-16  w-[65%] lg:w-[45%]">
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>

                <div className=" w-full md:w-[70%] md:mb-4 lg:w-[60%] md:flex md:justify-between ">
                    <div className="flex flex-col items-center " onClick={()=>{
                                setimage(1)
                    }}>
                        <h1 className="mb-4  mt-4  text-md hover:text-[#FA5757] cursor-pointer ">Simple Bookmarking</h1>
                        <hr className=""></hr>

                        { image === 1 ? (<div className="h-[4px] bg-[#fa5757] w-40"></div>):(<div></div>)}
                    </div>

                    <div  className="flex flex-col items-center cursor-pointer" onClick={()=>{setimage(2)}}>
                    <h1 className="mb-4 mt-4 hover:text-[#FA5757]  ">Simple Bookmarking</h1>
                        <hr className="border"></hr>
                        { image === 2 ? (<div className="h-[4px] bg-[#fa5757] w-40"></div>):(<div></div>)}
                    </div>

                    <div  className="flex flex-col items-center">
                    <h1 className="mb-4 mt-4 hover:text-[#FA5757] cursor-pointer " onClick={()=>{setimage(3)}}>Simple Bookmarking</h1>
                        <hr className="border"></hr>
                        { image === 3 ? (<div className="h-[4px] bg-[#fa5757] w-40"></div>):(<div></div>)}
                    </div>

                </div>

                <div className="mt-12 md:mt-0 md:flex md:items-center md:justify-center">

                   { image === 1 ?<div className=" flex items-center flex-col md:w-[90%] lg:w-[100%] md:flex md:flex-row md:w-[90%]">
                     <div className="md:w-[150%] lg:w-[40%] ">    
                        <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"/></div>
                      <div className="lg:items-start md:flex md:flex-col flex items-center lg:ml-8   flex-col  ">
                      <h1 className="mt-32 md:mt-10 mb-10 text-4xl font-bold md:text-3xl lg:text-4xl">Bookmark in one click</h1>
                        <p className="p-2  lg:p-0 lg:w-[50%] lg:text-start ">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <div className="md:self-start bg-[#5368DF] md:bg-green-500 h-[42px]  m-8 p-2 w-28 lg:ml rounded-lg text-white font-bold hover:bg-white border hover:text-[#5368DF]  ">More info</div>
                      </div>
                    </div> 
                    
                    
                    : 
                    image === 2 ?<div className=" flex items-center flex-col text-center md:flex md:flex-row">
                     <div className="md:w-[150%] ">
                        <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"/></div>
                      <div className="md:flex md:flex-col  flex items-center flex-col ">
                      <h1 className="mt-32 md:mt-10 mb-10 text-4xl font-bold md:text-3xl">Bookmark in one click</h1>
                        <p className="p-2 ">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <div className="bg-[#5368DF] md:bg-green-500 h-[42px] m-8 p-2 w-28  rounded-lg text-white font-bold hover:bg-white border hover:text-[#5368DF]  ">More info</div>
                      </div>
                    </div> 

                  :
                  image === 3 ?<div className=" flex items-center flex-col text-center md:flex md:flex-row">
                  <div className="md:w-[150%]">
                     <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"/></div>
                   <div className="md:flex md:flex-col   flex items-center flex-col ">
                   <h1 className="mt-32 md:mt-10 mb-10 text-4xl font-bold md:text-3xl">Bookmark in one click</h1>
                     <p className="p-2 ">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                     <div className="bg-[#5368DF] md:bg-green-500 h-[42px] m-8 p-2 w-28  rounded-lg text-white font-bold hover:bg-white border hover:text-[#5368DF]  ">More info</div>
                   </div>
                 </div> : <div></div>}

                   

                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;