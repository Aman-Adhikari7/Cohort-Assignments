const Hero1 = () => {
  return (
    <div>
        <div id="top" className="flex items-center flex-col lg:flex-row-reverse text-center lg:text-start mt-10 ">

            <div className="lg:w-[100%]">
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"/>
            </div>
            <div className="flex flex-col items-center lg:items-start ">


            <h1 className="font-bold  text-3xl mb-14 lg:text-6xl">A Simple Bookmark Manager</h1>
            <p className="font-middle md:w-[50%]  ">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>

            <div className="flex p-4 mt-4 lg:p-0">
                <div className=" border text-white font-bold bg-[#5368DF] rounded p-4 mr-4  hover:bg-[white] hover:text-[#5368DF] ">Get It On Chrome</div>
                <div className="border font-bold bg-[#dddddd] rounded p-4 hover:bg-[white] ">Get It On Firefox</div>

            </div>

            </div>
        </div>
    </div>
  );
};

export default Hero1;