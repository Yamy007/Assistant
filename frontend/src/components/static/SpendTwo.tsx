import {   LineChart,
  lineElementClasses,
  markElementClasses, } from '@mui/x-charts/LineChart';
  import { Link } from "react-router-dom";

import "../../layouts/style.scss"
import Arrow from '../../assets/svg/arrow_right.svg'
export const SpendTwo = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
      'Mon',
      'Tue',
      'Wed',
      'Thr',
      'Fri',
      'Sat',
      'Sun',
    ];
    return (
      <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-0">
          <div className="w-full flex justify-between items-center p-4">
          <div className="text-base text-primary-100 font-bold">My expenses</div>
          <Link to = "/chart"><img src = {Arrow}/></Link>

          </div>
      <div className='gradient-stroke'>


      <LineChart
      width={400}
      height={300}
      series={[
        { data: pData,  id: 'Income' , label: 'Income', color: "#B178D9 "},
        { data: uData,  id: 'Expense', label: 'Expense' },
 
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        

        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 2,
        },
     
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
          fill: '#f00',
        },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: '#',
        },
        
      }}


      
    >
       <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="gold" />
          <stop offset="95%" stopColor="red" />
        </linearGradient>
      </defs>

      </LineChart>
      </div>
      
        </div>
    )

}