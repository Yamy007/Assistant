import "../../layouts/style.scss"
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export const ProgressBlock = () => {

    return (
        <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-2 flex justify-between items-center">

    <div className=" flex flex-col  gap-2 pl-2">

    <div className="text-lg font-bold  text-primary-100">Tasks Progress</div>
    <div className="text-xs font-bold  text-primary-100 ">4/11 task done</div>
    <div className="text-xs font-bold  text-primary-100 color-purple w-fit p-[6px] h-fit rounded-2xl flex justify-center items-center">Nov 3</div>
    
    </div>
    <div className="box-border ">

    <Gauge width={100} height={100} value={36}   sx={(theme) => ({
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
  text={
    ({ value}) => `${value}%`
 }
 />
    </div>



    </div>
  

    )
}