import "../../layouts/style.scss"
import Food from '../../assets/svg/food.svg'
import Car from '../../assets/svg/car.svg'
import Cart from '../../assets/svg/cart.svg'
import Game from '../../assets/svg/game.svg'
import Point from '../../assets/svg/point.svg'


export const Categories = () =>{
    return (
    
    <div className="w-full h-fit  border-0 rounded-xl  shadow-md block-bg p-4">
        <div className="text-base text-primary-100 font-bold">Categories</div>
        <div className="grid grid-cols-2 justify-between gap-4 pt-4">
            <div className="bg-categories p-3 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center">
                        <img  className="w-9" src={Food}/>
                        <div className="text-primary-100">Food</div>
                    </div>
                    <img src={Point}/>
                </div>

                <div className="text-primary-100 pt-6">1390₴</div>
            </div>
            <div className="bg-categories p-3 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center">
                        <img  className="w-9" src={Car}/>
                        <div className="text-primary-100">Car</div>
                    </div>
                    <img src={Point}/>
                </div>

                <div className="text-primary-100 pt-6">1390₴</div>
            </div>
            <div className="bg-categories p-3 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center">
                        <img  className="w-9" src={Cart}/>
                        <div className="text-primary-100">Shopping</div>
                    </div>
                    <img src={Point}/>
                </div>

                <div className="text-primary-100 pt-6">1390₴</div>
            </div>
            <div className="bg-categories p-3 rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center">
                        <img  className="w-9" src={Game}/>
                        <div className="text-primary-100">Game</div>
                    </div>
                    <img src={Point}/>
                </div>

                <div className="text-primary-100 pt-6">1390₴</div>
            </div>

        </div>

    </div>)
}