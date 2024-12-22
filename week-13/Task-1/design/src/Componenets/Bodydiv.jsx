import Toggel from "./Toggel";

const Body = () => {
  return (
    <div>
        <div className=" relative bg-[#1A1A1A] h-screen w-full  2xl:flex">
        <div className=" hidden 2xl:block self-start">  <Toggel  /></div> 
            <div className=" 2xl:w-[30%] 2xl:ml-[18%] 2xl:h-[85%]  flex flex-col items-center  text-center absolute p-4 m-4 shadow-xl grids grid-cols-10 bg-[#282828] h-[45%]  w-[95%] rounded-lg ">
               
               <div className="absolute 2xl:hidden self-start">  <Toggel /></div> 
                 <div className="mt-12 items-center justify-center flex flex-col text-white text-center">
                    <img className="h-32 rounded-xl " src="https://tse2.mm.bing.net/th?id=OIP.9JO3qJnww4GUYi0AynCn_wHaHa&pid=Api&P=0&h=180"/>
                    <h1 className="text-6xl font-bold p-2">Favorite</h1>
                    <h1 className="text-xl p-4">Aman 19 questions Private</h1>
                    <div className="bg-white text-black rounded-2xl h-8   w-20 ">Practice</div>
                 </div>

            </div>

            {/* second */}
           

        <div className=" absolute flex  m-4 mt-[620px] 2xl:mt-6 2xl:ml-[60%]">
            <div className=" mr-2 items-center text-center rounded-xl bg-white h-6 w-14">Filter</div>
            <div className="text-white rounded-xl shadow-lg h-6 w-16 bg-[#282828]  text-center">Easy</div>
        </div>
      

      {/* first div */}
        <div className="2xl:mt-6 2xl:ml-[40%] ">
        <div className="text-white absolute mt-[650px] 2xl:mt-[20px] 2xl:w-[45%] w-[94%] p-2">
            <div className="flex text-center items-center bg-[#282828] p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>

        <div className="text-white absolute mt-[690px] w-[94%] 2xl:mt-[60px] 2xl:w-[45%] p-2">
            <div className="flex text-center items-center  p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>
         
        <div className="text-white absolute mt-[730px] w-[94%]  2xl:mt-[100px] 2xl:w-[45%] p-2">
            <div className="flex text-center items-center bg-[#282828] p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>

        <div className="text-white absolute mt-[770px] w-[94%]   2xl:mt-[140px] 2xl:w-[45%] p-2">
            <div className="flex text-center items-center  p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>

         
        <div className="text-white absolute mt-[810px] w-[94%]  2xl:mt-[180px] 2xl:w-[45%] p-2">
            <div className="flex text-center items-center bg-[#282828] p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>

        <div className="text-white absolute mt-[850px] w-[94%] p-2  2xl:mt-[220px] 2xl:w-[45%]">
            <div className="flex text-center items-center  p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>
         
        <div className="text-white absolute mt-[890px] w-[94%]  2xl:mt-[260px] 2xl:w-[45%] p-2">
            <div className="flex text-center items-center bg-[#282828] p-2 rounded">
                <img className="h-4 mr-4 " src="https://img.icons8.com/?size=100&id=43515&format=png&color=40C057"/>
                 <p className="mr-[50%]">14.Longest Common prefix</p>
                 <p className="text-sky-500">Easy</p>
            </div>
        </div>
        </div>

       
 

        </div>
    </div>
  );
};

export default Body;

