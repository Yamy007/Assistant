import "../layouts/style.scss"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Check from "../assets/svg/check.svg"
import CheckGo from "../assets/svg/check-go.svg"
import { Link } from "react-router-dom";

import Arrow from "../assets/svg/arrow_left.svg"
export const TaskDetails = () => {

    const Textarea =  styled(BaseTextareaAutosize)(
        () => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: #FFF;
        background: #FFFFFF1A;
    
    
        &:hover {
          border-color: #9B5277;
        }
    
        &:focus {
          border-color: #9B5277;
          box-shadow: 0 0 0 2px #9B5277;
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    


    return (
        <div className="flex flex-col w-full p-4">
            <div className="flex justify-start items-center gap-4">
                <Link to="/task"><img src={Arrow}/></Link>
                <div className="font-bold text-primary-100 text-base">Task details</div>
            </div>
            

            <div className="pt-4">


                <div className="flex flex-col">
                    <div className="text-primary-600">Title</div>
                    <input className="bg-[#FFFFFF1A] text-center rounded-lg p-2 text-primary-100 font-bold " placeholder="Project for PRMD" value={"Project for PRMD"}/>
                </div>
                <div className="flex gap-4 pt-2">
                    <div className="text-primary-600">Date</div>
                    <input className="bg-transparent text-center text-sm text-primary-100 rounded-lg " placeholder="Wednesday, 27 November 2024" value={"Wednesday, 27 November 2024"}/>
                </div>
                <div className="flex gap-4 pt-2">
                    <div className="text-primary-600">Status</div>
                    <button className="p-1 bg-[#45917F] text-primary-100 text-xs rounded-lg">HIGH PRIORITY</button>
                </div>

                <div className="flex flex-col pt-2">
                    <div className="text-primary-600">Description</div>
                    <Textarea aria-label="minimum height" minRows={3} value="Lorem ipsum dolor sit amet consectetur. Enim justo quis tristique et morbi amet leo id vestibulum. Ipsum dui sapien blandit egestas vitae urna at." />
                </div>

            <div className="pt-4">

            <div className="flex justify-between items-center">
                <div className="text-primary-600 text-sm font-bold pb-1">Progress</div>
                <div className="text-primary-600 text-sm font-bold pb-1">90%</div>
            </div>
            <div className="w-full bg-primary-800 rounded-full h-[6px]">
                <div className="color-purple h-[6px] rounded-full w-4/6" ></div> 
                </div>
            </div>
              

                <div className="text-primary-100 font-bold pt-4">Project tasks</div>
                <div className="flex flex-col gap-2 pt-2">


                    <div className="flex  justify-start items-center gap-1 shadow-md block-bg p-2 rounded-xl">
                        <img src={CheckGo}/>
                        <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                    </div>
                    <div className="flex  justify-start items-center gap-1 shadow-md block-bg p-2 rounded-xl">
                        <img src={CheckGo}/>
                        <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                    </div>
                    <div className="flex  justify-start items-center gap-1 shadow-md block-bg p-2 rounded-xl">
                        <img src={CheckGo}/>
                        <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                    </div>
                    <div className="flex  justify-start items-center gap-1 shadow-md block-bg p-2 rounded-xl">
                        <img src={CheckGo}/>
                        <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                    </div>
                    
                    <div className="w-full flex gap-1 items-center shadow-md block-bg p-2 rounded-xl ">
                        <img src={Check}/>
                        <input className= "w-3/5 bg-transparent text-primary-100" placeholder="Add new "/>
                    </div>
                </div>
            </div>
        </div>
    )
}