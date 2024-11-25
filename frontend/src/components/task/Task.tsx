import "../../layouts/style.scss"
import Plus from "../../assets/svg/bp.svg"
import Archive from "../../assets/svg/archive.svg"
import {TaskCard} from "./TaskCard"
import { noteService } from '../../service/noteService';

import {useNavigate} from "react-router-dom"
export const Task = () => {
    const navigate = useNavigate()
    const createProject = async () => {
      const res = await noteService.createProject({})
      if (res.status == 201){
        navigate(`/taskDetails/${res?.data.id}`)
      }
    }
    return (
        <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-4">
            <div className="flex justify-between items-center">
                <div className="text-primary-100 font-bold text-lg">Pinned Tasks</div>
                <img onClick={createProject} src={Plus}/>
            </div>
            <div className="pt-4 flex flex-col gap-4">
                <TaskCard />
            </div>
            <div className="flex justify-end items-center pt-2">
                <div className="text-primary-100 font-bold text-base">Done tasks</div>
                <img src={Archive}/>
            </div>
        </div>
    )
}