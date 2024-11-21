import "../../layouts/style.scss"
import Cubik from '../../assets/svg/cubik.svg'
import Income from '../../assets/svg/income.svg'
import Expence from '../../assets/svg/expence.svg'
export const Details = () => {
    return (
        <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-4 ">
            <div className="flex justify-between items-center">
               <img src = {Cubik}/>
               <div className="font-light text-sm border-b border-spacing-1 text-primary-100">November </div>
            </div>
            <div className="flex justify-center items-center">
                 <img className="w-20 h-20 object-cover rounded-full"  src = {"https://img.freepik.com/premium-photo/punk-woman-pink-hair-rock-concert-generate-ai_98402-13948.jpg"}/>
            </div>
            <div className="w-full max-w-md mx-auto pt-4">
            <div className="text-left pb-2 text-xs  font-[400] text-primary-100">Monthly budget</div>
            
            <div className="w-full color-ground rounded-full h-[6px]">
              <div className="color-purple h-[6px] rounded-full w-4/6" ></div> 
            </div>

            <div className="flex justify-between items-center pt-1">
              <div className="text-xs text-primary-100 font-light">24.400 UAH / 56%</div>
              <div className="text-xs text-primary-100 font-light">43.000 UAH</div>

            </div>

            <div className=" flex justify-between items-center gap-2 pt-4">
              <div className="color-white rounded-md flex flex-col items-center justify-between flex-1 p-2 ">
                <div className="pb-2 text-sm">Income</div>
                <div className ="flex justify-center items-center gap-2">
                  <img src= {Income}/>  
                  <div className="text-xs">43.000 UAH</div>
                </div>
              </div>
              <div className="color-white rounded-md flex flex-col items-center justify-between flex-1 p-2 ">
                <div className="pb-2 text-sm">Expences</div>
                <div className ="flex justify-center items-center gap-2">
                  <img src= {Expence}/>  
                  <div className="text-xs">24.400 UAH</div>
                </div>
              </div>
              
            </div>
          </div>
            </div>
    )
}