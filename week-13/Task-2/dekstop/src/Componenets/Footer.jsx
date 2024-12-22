const Footer = () => {
  return (
    <div className="h-[800px] md:h-[500px]  ">

    <div className="mt-10 bg-[#5368DF] h-[50%] md:h-[70%] w-screen flex flex-col items-center text-center justify-center p-2">
          <h1 className="text-2xl text-white ">35,000+ Already Joined</h1>
          <h1 className="pb-8 text-4xl text-white font-bold p-4">Stay up-to-date with what we're doing</h1>
          <div className="flex flex-col items-center md:flex-row">

          <input className="h-10 w-56 rounded-lg text-center " type="text " placeholder="Enter your email address" />
          <div className=" font-bold text-white bg-[#EA5964] h-12 w-32 rounded-lg p-2 m-4">Contact Us</div>
          </div>
    </div>

    <div className="md:flex md:flex-row cursor-pointer  h-[50%] md:h-[30%] bg-[#252B46] flex flex-col text-center items-center justify-center">
        <div className="md:flex md:flex-row md:items-center md:w-[80%]">

        <h1 className="text-white text-xl m-6">BOOKMARK</h1>
      <div  className="p-2">
      <a href="#feature" className="text-gray-500 text-xl hover:text-red-500 ">FEATURES</a>
        </div>  
        <div  className="p-2">
        <a href="#download" className="text-gray-500 text-xl hover:text-red-500 ">DOWNLOAD</a>
        </div>

        <div  className="p-2">
        <a href="#faq" className="text-gray-500 text-xl hover:text-red-500 ">FAQ</a>
        </div>
      
        

        </div>

        <div className="flex p-4  ">
            <div >
                <img className="h-10 mr-8 hover:bg-red-500" src="https://img.icons8.com/?size=100&id=8818&format=png&color=000000"/>
            </div>
            <div>
                <img className="h-10  hover:bg-red-500" src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"/>
            </div>
            
            
        </div>


    </div>

    </div>
  );
};

export default Footer;