import "../layouts/style.scss";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import Check from "../assets/svg/check.svg";
import CheckGo from "../assets/svg/check-go.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Arrow from "../assets/svg/arrow_left.svg";
import { noteService } from "../service/noteService";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState({
    title: "",
    status: "",
    description: "",
    create_at: "",
  });

  const [tasks, setTasks] = useState<Array<{ id: string; text: string; status: string }>>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");

  // Форматування дати
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await noteService.getProject(id);
        setProject({
          title: res.data.title,
          status: res.data.status,
          description: res.data.description,
          create_at: res.data.created_at,
        });
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    const getProjectTasks = async () => {
      try {
        const res = await noteService.getListTask(id);
        setTasks(res.data); // Припускаємо, що API повертає масив тасків
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getData();
    getProjectTasks();
  }, [id]);

  // Обчислюємо відсоток виконаних тасків
  const getProgress = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status ).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  // Обробка зміни проекту
  const handleUpdate = async (field: string, value: string) => {
    try {
      const updatedProject = { ...project, [field]: value };
      setProject(updatedProject); // Локально оновлюємо стейт
      await noteService.updateProject(id, { [field]: value });
      await noteService.getProject(id)
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const toggleTaskStatus = async (id, status) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: !status  } : task
      );
    setTasks(updatedTasks); 
await noteService.updateProjectTask(id, { status: !status  }); 
    await noteService.getListTask(id);
  }

  // Додавання нового таска
  const handleAddTask = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTaskText.trim()) {
      try {
        const newTask = { text: newTaskText };
        const res = await noteService.createTask(id, newTask); 
        await noteService.getListTask(id);
        setTasks((prevTasks) => [...prevTasks, res.data]); 
        setNewTaskText(""); // Очищаємо поле вводу
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  // Оновлення таска
  const handleTaskUpdate = async (taskId: string, text: string) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, text } : task
      );
      setTasks(updatedTasks); // Локально оновлюємо стейт
      await noteService.updateProjectTask(taskId, { text }); 
      await noteService.getListTask(id);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex justify-start items-center gap-4">
        <Link to="/task">
          <img src={Arrow} />
        </Link>
        <div className="font-bold text-primary-100 text-base">Task details</div>
      </div>

      <div className="pt-4">
        <div className="flex flex-col">
          <div className="text-primary-600">Title</div>
          <input
            className="bg-[#FFFFFF1A] text-center rounded-lg p-2 text-primary-100 font-bold"
            placeholder="Project title"
            value={project.title}
            onChange={(e) => handleUpdate("title", e.target.value)}
          />
        </div>
        <div className="flex gap-4 pt-2">
          <div className="text-primary-600">Date</div>
          <input
            className="bg-transparent text-center text-sm text-primary-100 rounded-lg"
            placeholder="Created at"
            value={formatDate(project.create_at)}
            readOnly
          />
        </div>
        <div className="flex gap-4 pt-2">
          <div className="text-primary-600">Status</div>
          <input
            className="p-2 bg-[#45917F] text-primary-100 text-xs rounded-lg"
            value={project.status}
            onChange={(e) => handleUpdate("status", e.target.value)}
          />
        </div>

        <div className="flex flex-col pt-2">
          <div className="text-primary-600">Description</div>
          <textarea
            className="w-full box-border p-2 rounded-lg bg-[#FFFFFF1A] text-primary-100 text-sm min-h-28 shadow-xl placeholder-primary-800"
            value={project.description}
            onChange={(e) => handleUpdate("description", e.target.value)}
          />
        </div>

        {/* Прогрес-бар */}
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <div className="text-primary-600 text-sm font-bold pb-1">Progress</div>
            <div className="text-primary-600 text-sm font-bold pb-1">{Math.round(getProgress())}%</div>
          </div>
          <div className="w-full bg-primary-800 rounded-full h-[6px]">
            <div className="color-purple h-[6px] rounded-full" style={{ width: `${getProgress()}%` }}></div>
          </div>
        </div>

        <div className="text-primary-100 font-bold pt-4">Project tasks</div>
        <div className="flex flex-col gap-2 pt-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex justify-start items-center gap-1 shadow-md block-bg p-2 rounded-xl">
              <img onClick={() => toggleTaskStatus(task.id, task.status)} src={task.status ? CheckGo : Check} />
              <input
                className="bg-transparent text-primary-100 font-bold"
                value={task.text}
                onChange={(e) => handleTaskUpdate(task.id, e.target.value)} // Оновлення таска
              />
            </div>
          ))}

          <div className="w-full flex gap-1 items-center shadow-md block-bg p-2 rounded-xl ">
            <img src={Check}/>
            <input
              className="w-3/5 bg-transparent text-primary-100"
              placeholder="Add new task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)} // Зберігаємо новий текст
              onKeyDown={handleAddTask} // Додаємо новий таск при натисканні Enter
            />
          </div>
        </div>
      </div>
    </div>
  );
};
