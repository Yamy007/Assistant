import "../layouts/style.scss"
import {Task} from "../components/task/Task"
import {DailyTask} from "../components/task/DailyTask"

    
export const TaskPage = () => {
    return (
        <div>

        <div className="p-4">
                    <Task />
                </div>
        <div className="p-4">
                    <DailyTask />
                </div>
        </div>
       
    )
}