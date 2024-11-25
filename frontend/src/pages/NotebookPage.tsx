import { useState } from "react";
import { useParams } from "react-router-dom";
import {noteService} from "../service/noteService"
import {useEffect} from "react"
import Arrow from "../assets/svg/arrow_left.svg"
import {Link} from "react-router-dom"
import { useAppDispatch } from "../hooks/reduxHooks";
import {noteActions} from "../redux/slice/noteSlice"

export const NotebookPage = () => {
  const [note, setNote] = useState({ title: "", text: "" });
  const { id } = useParams<{ id: string }>();
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reques = async () => {
      try {
        const res = await noteService.getNote(id); // Викликаємо API для отримання нотатки
        setNote({
          title: res.data.title,
          text: res.data.text,
        });
      } catch (error) {
        console.error("Error fetching note:", error); // Логування помилок
      }
    };

    reques(); // Викликаємо асинхронну функцію для запиту даних
  }, [id]); // Додаємо
  const handleInputChange = (field: "title" | "text") => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setNote((prev) => {
      const updatedNote = { ...prev, [field]: value };
      console.log(updatedNote); 
      noteService.updateNote(id,updatedNote )
      return updatedNote
    });
  };

  return (
    <div className="p-4">
      <div className=" ">
      <Link to="/notes" ><img onClick={() => dispatch(noteActions.getListNote())} src={Arrow}/></Link>

      </div>
      <div className="w-full min-h-60 h-fit rounded-2xl shadow-2xl pt-4">
        {/* Заголовок */}
        <textarea
          className="w-full box-border p-2 rounded-lg bg-[rgba(255,255,255,0.4)] text-primary-100 text-sm min-h-4 shadow-xl placeholder-primary-800"
          placeholder="Title Notes"
          value={note.title}
          onChange={handleInputChange("title")}
        />

        {/* Текст нотаток */}
        <textarea
          className="w-full box-border p-2 rounded-lg bg-[rgba(255,255,255,0.4)] text-primary-100 text-sm min-h-60 shadow-xl placeholder-primary-800"
          placeholder="Text Notes"
          value={note.text}
          onChange={handleInputChange("text")}
        />
      </div>
    </div>
  );
};
