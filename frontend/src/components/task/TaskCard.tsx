import "../../layouts/style.scss"
import Arrow from "../../assets/svg/ar-right.svg"
import { Link } from "react-router-dom";

export const TaskCard = () => {
    return (
        <div className="rounded-lg bg-white w-full p-4">
            <div className="flex justify-between items-center">
                <div className="text-xs">December 1, 2024</div>
                <Link to="/taskDetails"> <img src={Arrow}/> </Link>
            </div>

            <div className="pt-6 flex gap-2 justify-start items-center">
                <button className="rounded-lg text-primary-100 bg-[#F6585A] p-1 pl-2 pr-2 text-[10px]">EXPIRES SOON</button>
            </div>

            <div className="pt-2">
                <div className="font-bold text-lg">Project for PRMD</div>
            </div>
            <div className="flex justify-between items-center pt-2">
                <div className="text-xs font-light">Writing code</div>
                <div className="text-xs ">90%</div>
            </div>
            <div className="w-full bg-primary-800 rounded-full h-[6px]">
              <div className="color-purple h-[6px] rounded-full w-4/6" ></div> 
            </div>
            <div className="flex justify-start items-center pt-2">
                <div className="text-xs font-light">5/6 tasks done</div>
            </div>
        </div>
    )
}