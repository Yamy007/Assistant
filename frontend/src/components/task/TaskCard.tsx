import "../../layouts/style.scss";
import Arrow from "../../assets/svg/ar-right.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { noteService } from "../../service/noteService";

export const TaskCard = () => {
  const [projects, setProjects] = useState<Array<any>>([]);
  const [tasks, setTasks] = useState<Array<any>>([]);

  // Отримуємо список проектів
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await noteService.getListProject(); 
        const resTask = await noteService.listTask(); 
        setTasks(resTask.data)
        setProjects(res.data); 
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Отримуємо список тасків для проекту
  const fetchTasks = async (id: string) => {
    try {
      const res = await noteService.getListTask(id); 
      setTasks(res.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Обчислюємо прогрес для кожного проекту
  const getProjectProgress = (taskList: Array<any>) => {
    const totalTasks = taskList.length;
    const completedTasks = taskList.filter((task) => task.status).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => {
        
        const projectTasks = tasks.filter(task => task.project_id === project.id);
        const progress = getProjectProgress(projectTasks);
        return (
          <div key={project.id} className="rounded-lg bg-white w-full p-4 shadow-md">
            <div className="flex justify-between items-center">
              <div className="text-xs">{new Date(project.created_at).toLocaleDateString()}</div>
              <Link to={`/taskDetails/${project.id}`}>
                <img src={Arrow} alt="Arrow" />
              </Link>
            </div>

            <div className="pt-6 flex gap-2 justify-start items-center">
              {project.status === "expiring" && (
                <button className="rounded-lg text-primary-100 bg-[#F6585A] p-1 pl-2 pr-2 text-[10px]">
                  EXPIRES SOON
                </button>
              )}
            </div>

            <div className="pt-2">
              <div className="font-bold text-lg">{project.title}</div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="text-xs font-light">{project.description}</div>
              <div className="text-xs">{Math.round(progress)}%</div>
            </div>
            <div className="w-full bg-primary-800 rounded-full h-[6px]">
              <div className="color-purple h-[6px] rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-start items-center pt-2">
              <div className="text-xs font-light">
                {projectTasks.filter((task) => task.status).length}/{projectTasks.length} tasks done
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
