import './Myworks.css'
const Myworks = () => {
  
  return (
    <div className="mt-20 pt-20" id="my-works">
      <h1 className="text-6xl font-bold text-center mb-5 red">My works</h1>
      <h1 className='text-center text-lg font-bold mb-5'>Check out my projects</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative over_lay_container">
          <div>
            <img className="h-[400px] block" src="Langua-learn.png" alt="" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black h-0 w-full over_lay overflow-hidden bg-opacity-70 transition-all duration-500 ease-linear rounded-md flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-white">
            LanguaLearn 
            </h1>
            <div className="text-center mt-5">
              <a
                href="https://simple-firebase-7dd6d.web.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
              >
                See Live
              </a>
              <div>
                <h2 className="my-5 font-bold text-lg text-white">Source code</h2>
                <div className="space-x-5">
                  <a
                    href="https://github.com/mustaqimbd/langua-learn-client"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Client Site
                  </a>
                  <a
                    href="https://github.com/mustaqimbd/langua-learn-server"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Server Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative over_lay_container">
          <div>
            <img className="h-[400px] block" src="Modern-Toys-Home-page.png" alt="" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black h-0 w-full over_lay overflow-hidden bg-opacity-70 transition-all duration-500 ease-linear rounded-md flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-white">
              American Cooks
            </h1>
            <div className="text-center mt-5">
              <a
                href="https://email-pass-authenticatio-15760.web.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
              >
                See Live
              </a>
              <div>
                <h2 className="my-5 font-bold text-lg text-white">Source code</h2>
                <div className="space-x-5">
                  <a
                    href="https://github.com/mustaqimbd/Modern-Toys-client"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Client Site
                  </a>
                  <a
                    href="https://github.com/mustaqimbd/Modern-Toys-server"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Server Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative over_lay_container">
          <div>
            <img className="h-[400px] block" src="Recipe-Word-Home.png" alt="" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black h-0 w-full over_lay overflow-hidden bg-opacity-70 transition-all duration-500 ease-linear rounded-md flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-white">
              American Cooks
            </h1>
            <div className="text-center mt-5">
              <a
                href="https://recipe-world-auth.web.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
              >
                See Live
              </a>
              <div>
                <h2 className="my-5 font-bold text-lg text-white">Source code</h2>
                <div className="space-x-5">
                  <a
                    href="https://github.com/mustaqimbd/American-Cooks"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Client Site
                  </a>
                  <a
                    href="https://github.com/mustaqimbd/American-Cooks-server-"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3CBC85] text-white font-bold py-2 px-4 rounded-full shadow-lg"
                  >
                    Server Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myworks;
