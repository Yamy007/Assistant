import "../../layouts/style.scss";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useEffect, useState } from "react";
import { noteService } from "../../service/noteService";

export const ProgressBlock = () => {
  const [tasks, setTasks] = useState<Array<any>>([]);
  
  // Отримуємо дані про завдання та проекти
  useEffect(() => {
    const fetchDaylikData = async () => {
      try {
        const res = await noteService.listDayik();
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching daylik:", error);
      }
    };
    
    fetchDaylikData();
  }, []);

  const calculateProgress = () => {
    if (!tasks || tasks.length === 0) return 0;
    
    const completedTasks = tasks.filter(task => task.status).length;
    return (completedTasks / tasks.length) * 100;
  };

  // Отримуємо поточну дату у форматі "Nov 3"
  const getCurrentDate = () => {
    const date = new Date();
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const progress = calculateProgress();

  return (
    <div className="w-full h-fit border-0 rounded-xl shadow-md block-bg p-2 flex justify-between items-center">
      <div className="flex flex-col gap-2 pl-2">
        <div className="text-lg font-bold text-primary-100">Tasks Progress</div>
        <div className="text-xs font-bold text-primary-100">
          {tasks.filter(task => task.status).length}/{tasks.length} tasks done
        </div>
        <div className="text-xs font-bold text-primary-100 color-purple w-fit p-[6px] h-fit rounded-2xl flex justify-center items-center">
          {getCurrentDate()}
        </div>
      </div>
      <div className="box-border">
        <Gauge
          width={100}
          height={100}
          value={progress}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 18,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: 'rgba(155, 82, 119, 1)',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
          text={({ value }) => `${Math.round(value)}%`}
        />
      </div>
    </div>
  );
};
