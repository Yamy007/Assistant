import "../../layouts/style.scss";
import {useNavigate} from "react-router-dom"

interface CardNotesProps {
  note: {
    id:number;
    title: string;
    text: string;
    created_at: string;
  };
}

export const CardNotes = ({ note }: CardNotesProps) => {
    const navigate = useNavigate()
  const cardGo = () => {
    navigate(`/notebook/${note.id}`)
  }
  return (
    <div onClick={cardGo} className="border-[3px] border-[#9B5277] p-3 w-full h-fit bg-white rounded-2xl">
      <div className="text-secondary-900 font-bold text-lg pb-4">{note.title}</div>
      <div className="text-secondary-900 truncate-text h-fit break-words">
        {note.text}
      </div>
      <div className="w-full flex justify-end items-end text-sm pt-1 text-primary-500">
        {new Date(note.created_at).toLocaleDateString()}
      </div>
    </div>
  );
};
