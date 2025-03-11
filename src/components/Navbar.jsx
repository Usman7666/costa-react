import logo from '../assets/images/logo.png'
import Xlogo from '../assets/images/X-logo.png'
import twitterlogo from '../assets/images/twitter-logo.png'
import { Link } from 'react-router';


 function Navbar (){
    return(
        <header>
            <nav className="max-w-[1340px]  ml-12  h-[80px] pt-1.5 pb-1.5 mr-12  rounded-xl bg-gray3   flex items-center  ">
            <div>
                {/* <Link to="#"> */}
                <img className="h-[62px] w-full" src={logo} alt="" />
                {/* </Link> */}
            </div>
            <div className="w-full max-w-[577px] h-[40px]  flex items-center justify-center">
            <ul className="flex  gap-[25px]  text-white">
                <li> <a href="#">Stacking</a> </li>
                <li> <a href="#">About Us</a></li>
                <li> <a href="">Art</a></li>
            </ul>
            </div>

            <div className="h-[52px] w-full max-w-[358px] gap-[25px] flex items-center justify-end">
                <div className="flex gap-[25px]">
                <img className="h-[24px] w-[24px]" src={Xlogo} alt="" />
                <img className="h-[24px] w-[24px]" src={twitterlogo} alt="" />
                </div>
                <div className="max-w-[230px] w-full h-[52px] space-x-[10px]">
                <button className="w-[105px] h-[52px] rounded-md pt-[12px] pr-[30px] pb-[12px] pl-[30px] gap-2 text-white bg-[#DD9932]">Login</button>
                <button className="w-[115px] h-[52px] rounded-md border-[1.5px] border-[#DD9932] pt-[12px] pr-[30px] pb-[12px] pl-[30px] gap-2 text-[#DD9932]">Signup</button>
                </div>
            </div>
            </nav>
        </header>
    )
 }


 export default Navbar;