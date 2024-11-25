import "../../layouts/style.scss";
import Check from "../../assets/svg/check.svg";
import CheckGo from "../../assets/svg/check-go.svg";
import { useState, useEffect } from "react";
import { noteService } from "../../service/noteService";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { noteActions } from "../../redux/slice/noteSlice";
import { IDaylik } from "../../interface/note/note";

export const DailyTask = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<IDaylik[]>([]); // Локальний стейт для daylik
    const dispatch = useAppDispatch();

    const { daylik } = useAppSelector((state) => state.note);

    useEffect(() => {
        setTasks(daylik);
    }, [daylik]);

    const createTask = async () => {
        if (task.trim() === "") return;
        try {
            const res = await noteService.createDayik({ text: task });
            dispatch(noteActions.getListDaylik());
            console.log("Task created:", res);
            setTask("");
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const updateTask = async (id, text) => {
        try {
            const res = await noteService.updateDayik(id, { text });
            console.log("Task updated:", res);
            dispatch(noteActions.getListDaylik());
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const toggleTaskStatus = async (id, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            const res = await noteService.updateDayik(id, { status: newStatus });
            console.log("Task status updated:", res);
            // Локально оновлюємо статус
            setTasks((prev) =>
                prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
            );
        } catch (error) {
            console.error("Error toggling task status:", error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    };

    const handleTaskChange = (id, value) => {
        // Локально оновлюємо текст
        setTasks((prev) =>
            prev.map((task) => (task.id === id ? { ...task, text: value } : task))
        );
    };

    const handleTaskBlur = (id, text) => {
        // Оновлюємо задачу після завершення редагування
        updateTask(id, text);
    };

    return (
        <div className="w-full h-fit border-0 rounded-xl shadow-md block-bg p-4">
            <div className="flex justify-between items-center">
                <div className="text-primary-100 font-bold text">Daily Tasks</div>
                <div className="text-primary-100 font-bold text">
                    {tasks.filter((t) => t.status).length}/{tasks.length} done
                </div>
            </div>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex justify-start items-center gap-1">
                    <img src={Check} alt="Check Icon" />
                    <input
                        className="w-3/5 bg-transparent text-primary-100"
                        placeholder="Add new"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex justify-start items-center gap-1"
                    >
                        <img
                            src={task.status ? CheckGo : Check}
                            alt="Task Icon"
                            onClick={() => toggleTaskStatus(task.id, task.status)}
                            className="cursor-pointer"
                        />
                        <input
                            className="w-3/5 bg-transparent text-primary-100"
                            value={task.text}
                            onChange={(e) => handleTaskChange(task.id, e.target.value)}
                            onBlur={(e) => handleTaskBlur(task.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
