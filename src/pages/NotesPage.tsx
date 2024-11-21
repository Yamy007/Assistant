import Find from "../assets/svg/find.svg"
import Plus from "../assets/svg/plus.svg"
import '../layouts/style.scss'
import {CardNotes} from '../components/notes/CardNotes'
export const NotesPage = () => {
    return (
        <div className="p-4 ">
            <div className=" flex justify-between items-center w-full">
                <div className="text-primary-100 font-bold">Recent notes</div>
                <img src = {Find}/>

            </div>
            <div className="p-4 flex flex-col gap-3">
                <CardNotes />
                <CardNotes />
            </div>
            <div>
                <div className="text-primary-100 font-bold">Last month</div>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <CardNotes />
                <CardNotes />
            </div> 
            <div className="absolute w-14 h-14 rounded-full bg-[#9B5277] border-[2px] border-[#9B5277] bottom-24 right-10 flex justify-center items-center">
            <img className="size-7" src = {Plus}/>

            </div>
        </div>
    )
}