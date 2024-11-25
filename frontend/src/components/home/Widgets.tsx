import Masonry from '@mui/lab/Masonry';
import Plus from '../../assets/svg/plus.svg'
import "../../layouts/style.scss"
import {useNavigate} from "react-router-dom"
import {noteService} from "../../service/noteService"
export const Widgets = () =>{
    
    const navigate = useNavigate();
    const createNotebook = async () => {
        const res = await noteService.createNote({})
        if (res.status == 201){
            navigate(`/notebook/${res.data?.id}`)
        }
    }
    return (
        <div className='w-full  flex justify-center '>
         <Masonry columns={2} spacing={2}  >
          
            <div className='w-full block-bg  h-fit min-h-28 p-2 rounded-xl border-0  shadow-lg'>
                
                <div  onClick = {createNotebook} className='flex flex-col justify-center items-center h-full'>
                   <div className='text-primary-100 font-bold pb-1'>Add Note</div>
                   <img className='w-8' src={Plus}/>
                </div>
            </div>
            <div className='h-fit  min-h-40 rounded-xl border-0 border-secondary-300 shadow-lg relative'>
                <img className='w-full h-full rounded-xl  object-cover' src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-800x525.jpg"/>
                <button className='absolute bottom-2 right-2  border-2 border-primary-200  rounded-full'><img src={Plus}/></button>
            </div>
            <div className='h-fit p-2 min-h-32  color-purple relative rounded-lg shadow-lg'>
            <div className='pl-3 pt-4'>
                <div className=' text-left text-sm font-light text-primary-100'>Sat 9, Nov</div>
                <div className='font-extrabold text-primary-100'>Today</div>
                <div className='pt-4 text-sm  font-medium text-primary-100'>Meeting as 20:00</div>
            </div>
          
            </div>
        </Masonry>
        </div>
    )
}