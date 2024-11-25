import Home from '../../assets/svg/home.svg'
import Stat from '../../assets/svg/stat.svg'
import Pig from '../../assets/svg/pig.svg'
import Note from '../../assets/svg/note.svg'
import '../../layouts/style.scss'
import { Link } from "react-router-dom";

export const Footer = () =>{

    return (
        <div className="fixed bottom-0 w-full  min-h-640:h-[10%] h-[12%]   border-0 p-4 rounded-t-2xl">
        <div className='flex items-center justify-evenly h-full w-full footer-bg rounded-2xl'>
                <Link to="/">
                    <img className='' src={Home} />

                </Link>
            
            
                <Link to="/static">
                    <img className='' src={Stat} />
                </Link>


                <Link to="/task">
                    <img className='' src={Pig} />
                </Link>


                <Link to ="/notes">
                    <img className='' src={Note} />
                </Link>
        </div>
    </div>
    
    
      
    )
}