import React from "react";
import backimage from './assets/images/background-image.png'
import thirdbackground from './assets/images/3rdbackgroundimg.png'
import drop from './assets/images/drop.png'
import tickmark from './assets/images/tickmark.png'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Groupbackground from './assets/images/Group-background.png'
function App() {
  return (
    
    <main className="mx-auto w-full max-w-[1440px]">
    
       <div
          className=" bg-cover bg-center h-[636px]"
          style={{ backgroundImage: `url(${backimage})` }}
        >
          <Navbar/>
          <div className="w-full max-w-[1194px] h-[120px] mt-56 items-center  flex justify-center">
            <div className="max-w-[790px] w-full h-[120px] font-medium text-white   leading-loose  text-center ">
              <p className="">COSTACOIN is the people's cryptocurrency and the utility token of the Costa Oils <br /> Ecosystem. COSTACOIN is designed to combine the viral appeal of meme coins with a <br /> meaningful real-world purpose.</p>
            </div>
          </div>

          <div className="absolute top-[472px] lg:ml-[1200px] md:ml-[600px]">
            <img className="h-[144px] w-[93px] " src={drop} alt="" />
          </div>
        </div>

        <div className="h-full max-h-[516px] w-full max-w-[1440px]  pt-[48px]   bg-black1 overflow-hidden "> 
  
           
          <div className="bg-cover  bg-center h-full  w-full " 
          style={{backgroundImage:`url(${Groupbackground})`}}>
          
            <div className="w-full  h-full  lg:ml-[750px] relative bottom-7">
              <h1 className="font-semibold text-4xl text-white mb-10">How to Use</h1>
              <div className="h-[390px] w-[550px] space-y-8">
              <div className="flex space-x-5  ">
                <img className="h-[56px] w-[56px] mt-2" src={tickmark} alt="" />
                <div>
                <h1 className="font-bold text-white text-lg">Sign up</h1>
                <p className="font-[400px] text-[16px] text-white">To get $Costacoin token you need tosign up. Be a member of costacoin community!</p>
                </div>
              </div>

              <div className="flex space-x-5">
                <img className="h-[56px] w-[56px] mt-2" src={tickmark} alt="" />
                <div>
                <h1 className="font-bold text-white text-lg">Claim reward</h1>
                <p className="font-[400px] text-[16px] text-white">Click Oil Icon and connect your wallet to claim a reward</p>
                </div>
              </div>

              <div className="flex space-x-5">
                <img className="h-[56px] w-[56px] mt-2" src={tickmark} alt="" />
                <div>
                <h1 className="font-bold text-white text-lg">Community Activity</h1>
                <p className="font-[400px] text-[16px] text-white">Sell/Buy $costacoin tokens and use for oil change at Costa Oil change</p>
                </div>
              </div>
              </div>
             
               
            </div>
          </div>
        

        {/* <div className="w-full">
        <img className="w-full h-[70px] "  src={road} alt="" />
        </div> */}
         </div>
        <div>
          <img className="w-full max-w-[1440px]" src={thirdbackground} alt="" />
        </div>

        <Footer/>
        
    </main>
  );
}

export default App;
