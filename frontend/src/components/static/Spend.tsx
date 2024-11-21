import "../../layouts/style.scss"
import { PieChart } from '@mui/x-charts/PieChart';

export const Spend = () => {

    const pieParams = {
        height: 130,
        
        margin: { right: 10 },
        slotProps: { legend: { hidden: true } },
      };
    return (
        <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg pt-4 pb-4 pl-4">
        <div className="text-base text-primary-100 font-bold">Your Spending</div>

        <div className = "h-full flex justify-between items-center pt-3">
            <div className="w-3/5">
                <div className="text-primary-100 text-lg  font-extrabold">24.400 UAH</div>
                <div className="text-primary-100 text-sm font-light">Total spending this month</div>
                <div className="flex flex-col gap-1 pt-2">

                    <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-1">
                        <div className="bg-[#E1696B] w-5 h-5 rounded-full"></div>
                        <div className="text-primary-100">Monobank</div>
                        </div>

                        <div className="text-primary-100 font-bold">3.000 UAH</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                        <div className="bg-[#EDA85B] w-5 h-5 rounded-full"></div>
                        <div className="text-primary-100">Privat bank</div>
                        </div>

                        <div className="text-primary-100 font-bold">17.600 UAH</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                        <div className="bg-[#61A3D4] w-5 h-5 rounded-full"></div>
                        <div className="text-primary-100">Cash</div>
                        </div>

                        <div className="text-primary-100 font-bold">3.800 UAH</div>
                    </div>

                    
                </div>
       
            </div>
            <div className="flex-1 ">

                <div className="box-border  ">
                <PieChart
                    {...pieParams}
                    colors={['#E1696B', '#EDA85B', '#61A3D4']} 
                    series={[
                        {
                        data: [
                            { value: 3000, color: '#E1696B',  }, 
                            { value: 17600, color: '#EDA85B',  }, 
                            { value: 3800, color: '#61A3D4' , }, 
                        ],
                        paddingAngle: 5,
                        innerRadius: 30,
                        cornerRadius: 5,
                    },
                    ]}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}