import "../../layouts/style.scss"
import Check from "../../assets/svg/check.svg"
import CheckGo from "../../assets/svg/check-go.svg"

export const DailyTask = () => {
    return (
        <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-4">
            <div className="flex justify-between items-center">
                <div className="text-primary-100 font-bold text">Daily Tasks</div>
                <div className="text-primary-100 font-bold text">2/3 done</div>
            </div>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex  justify-start items-center gap-1">
                    <img src={CheckGo}/>
                    <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                </div>
                <div className="flex  justify-start items-center gap-1">
                    <img src={CheckGo}/>
                    <div className="text-primary-100 font-bold line-through">Feed parrots</div>
                </div>
                <div className="flex  justify-start items-center gap-1">
                    <img src={Check}/>
                    <div className="text-primary-100 font-bold">Feed parrots</div>
                </div>
                <div className="flex  justify-start items-center gap-1">
                    <img src={Check}/>
                    <div className="text-primary-100 font-bold">Feed parrots</div>
                </div>
                <div className="flex  justify-start items-center gap-1">
                    <img src={Check}/>
                    <div className="text-primary-100 font-bold">Feed parrots</div>
                </div>
                <div className="flex  justify-start items-center gap-1">
                    <img src={Check}/>
                    <input className= "w-3/5 bg-transparent text-primary-100" placeholder="Add new "/>
                </div>

            </div>
        </div>
    )
}