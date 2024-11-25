import Find from "../assets/svg/find.svg";
import Plus from "../assets/svg/plus.svg";
import "../layouts/style.scss";
import { CardNotes } from "../components/notes/CardNotes";
import { useAppSelector } from "../hooks/reduxHooks";

import {useNavigate} from "react-router-dom"
import {noteService} from "../service/noteService"

export const NotesPage = () => {

    const navigate = useNavigate();
    const createNotebook = async () => {
        const res = await noteService.createNote({})
        if (res.status == 201){
            navigate(`/notebook/${res.data?.id}`)
        }
    }
  const { note } = useAppSelector((state) => state.note);

  const isThisMonth = (date: any) => {
    const noteDate = new Date(date);
    const currentDate = new Date();
    return (
      noteDate.getMonth() === currentDate.getMonth() &&
      noteDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const isLastMonth = (date: any) => {
    const noteDate = new Date(date);
    const currentDate = new Date();
    const lastMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
    const lastYear = lastMonth === 11 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
    return (
      noteDate.getMonth() === lastMonth &&
      noteDate.getFullYear() === lastYear
    );
  };

  const isLastYear = (date: any) => {
    const noteDate = new Date(date);
    const currentDate = new Date();
    return noteDate.getFullYear() === currentDate.getFullYear() - 1;
  };

  const recentNotes = note.filter((n) => isThisMonth(n.created_at));
  const lastMonthNotes = note.filter((n) => isLastMonth(n.created_at));
  const lastYearNotes = note.filter((n) => isLastYear(n.created_at));

  return (
    <div className="p-4">
      {recentNotes.length > 0 && (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="text-primary-100 font-bold">Recent notes</div>
            <img src={Find} alt="Search" />
          </div>
          <div className="p-4 flex flex-col gap-3">
            {recentNotes.map((note) => <CardNotes key={note.id} note={note} />)}
          </div>
        </>
      )}

      {lastMonthNotes.length > 0 && (
        <>
          <div className="text-primary-100 font-bold">Last month</div>
          <div className="p-4 flex flex-col gap-3">
            {lastMonthNotes.map((note) => <CardNotes key={note.id} note={note} />)}
          </div>
        </>
      )}

      {lastYearNotes.length > 0 && (
        <>
          <div className="text-primary-100 font-bold">Last year</div>
          <div className="p-4 flex flex-col gap-3">
            {lastYearNotes.map((note) => <CardNotes key={note.id} note={note} />)}
          </div>
        </>
      )}

      <div  onClick ={createNotebook} className="absolute w-14 h-14 rounded-full bg-[#9B5277] border-[2px] border-[#9B5277] bottom-24 right-10 flex justify-center items-center">
        <img className="size-7" src={Plus} alt="Add Note" />
      </div>
    </div>
  );
};
