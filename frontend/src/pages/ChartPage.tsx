import Arrow from '../assets/svg/arrow_left.svg'
import '../layouts/style.scss'
import { Link } from "react-router-dom";

import {   LineChart,
    lineElementClasses,
    markElementClasses, } from '@mui/x-charts/LineChart';
export const ChartPage = () => {

    // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
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
        <div className="p-4">
            <div>
               <Link to="/static"><img src={Arrow} /></Link> 
            </div>
            <div className='w-full rounded-lg flex items-center bg-sec-color justify-center mt-4'>
                <button className='p-2 rounded-lg text-primary-100 flex-1 active'>Daily</button>
                <button className='p-2 rounded-lg text-primary-100 flex-1'>Monthly</button>
                <button className='p-2 rounded-lg text-primary-100 flex-1 '>Yearly</button>
            </div>

            <div className='w-full h-36 flex flex-col justify-center items-center'>
                <div className='font-light text-primary-100'>Total Expense</div>
                <div className='font-bold text-primary-100'>₴ 18 687</div>
            </div>

            <div className='w-full flex justify-center h-14'>
                <button className='font-bold text-primary-100  border-b-[6px] border-spacing-y-[4px]  border-[#FFFFFF4D] flex-1 text-base'>Income</button>
                <button className='font-bold text-primary-100  border-b-[6px] border-spacing-y-[4px] border-[#9B5277] flex-1 text-base'>Expense</button>
            </div>
            <div className='pt-3'>

            <LineChart
                width={400}
                height={400}
                series={[
                    { data: pData,  id: 'Income' , label: 'Income', color: "#B178D9 "},
                    // { data: uData,  id: 'Expense', label: 'Expense' },
            
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


                
                />
            </div>
        </div>
    )
}