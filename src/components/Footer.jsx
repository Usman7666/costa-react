import React from "react";
import Stacking from '../assets/images/Stacking.png'
import logo from '../assets/images/logo.png'
import logo1 from '../assets/images/footerlogo/logo1.png'
import logo2 from '../assets/images/footerlogo/logo2.png'
import logo3 from '../assets/images/footerlogo/logo3.png'
import logo4 from '../assets/images/footerlogo/logo4.png'
function Footer(){
    return(
        <footer className="w-full max-w-[1440px] bg-black1 h-96  pt-32">
          <div className="w-full max-w-[1200px] mx-auto px-5">
            <div className="h-32 w-full space-x-2 flex ">
                <div className="w-48 h-7 ">
                    <ul className="flex justify-between">
                        <img className="w-16 h-7" src={Stacking} alt="no-img" />
                        <li className="font-normal text-sm text-gray1">About Us</li>
                        <li className="font-normal text-sm text-gray1">Art</li>
                    </ul>
                </div>

                <div className=" w-full max-w-[634px] h-32 space-y-8">
                    <div className="flex justify-center">
                    <img className="h-16 w-72 " src={logo} alt="no-img" />
                    </div>

                    <p className="text-[#99A0A6] text-xs text-center ">Disclaimer: COSTACOIN is a meme coin for fun and utility purposes.  Crypto may be unregulated in your <br /> jurisdiction. Profits may be subject to taxes. 
                    Always do your own research before aping.</p>
              
                </div>

                <div className="h-16 w-48 space-y-2">
                    <h1 className="text-center text-white font-normal text-sm ">Follow us:</h1>
                    <div className="h-10 w-48 space-x-2.5 flex">
                        <img  className="h-10 w-10" src={logo1} alt="" />
                        <img  className="h-10 w-10" src={logo2} alt="" />
                        <img  className="h-10 w-10" src={logo3} alt="" />
                        <img  className="h-10 w-10" src={logo4} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] border border-[#6C757D] mt-4 mb-4"></div>

            <div className="h-6 text-center">
                <h1 className="text-sm font-normal text-[#99A0A6]">© 2025 All Rights Reserved | By: Costa Oil™- 10 Minute Oil Change</h1>
            </div>
            </div>
        </footer>
    )
}

export default Footer;