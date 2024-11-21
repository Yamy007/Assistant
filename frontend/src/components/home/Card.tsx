
import '../../layouts/style.scss'
import Master from '../../assets/svg/master.svg'
import Arrow from '../../assets/svg/arrow_right.svg'
export const Card = () => {
    return (
        <div className="w-full h-fit border-0 rounded-xl shadow-2xl block-bg p-4">
        <div className="flex justify-between items-center pb-4">
            <div className="text text-primary-100 font-bold">Bank Card</div>
            <div className="flex gap-1 items-center justify-center">
                <div className="text text-primary-100 font-bold">See All</div>
                <img src={Arrow} alt="Arrow" />
            </div>
        </div>
        {/* Горизонтальний скрол */}
        <div className="w-full h-fit overflow-x-scroll flex gap-4">
            {/* Карточки */}
            <div className="w-64 min-w-[16rem] h-fit bank_card rounded-lg p-4 border-e-2 border-[#9E749A] shadow-2xl">
                <div className="flex justify-start items-center pb-8">
                    <div className="flex gap-1">
                        <div className="text-primary-100 font-bold text-[10px]">monobank</div>
                        <div className="text-primary-800 text-[10px] font-bold"> | Universal bank</div>
                    </div>
                </div>
                <div className="text-primary-100 font-bold font-num text-xs">5375 4141 3567 9842</div>
                <div className="flex justify-between items-center">
                    <div className="text-primary-100 text-[11px] font-num">Yaroslav Sadovskyi</div>
                    <img className="w-9 h-9" src={Master} alt="Mastercard" />
                </div>
            </div>
            {/* Додайте більше карточок */}
            <div className="w-64 min-w-[16rem] h-fit bank_card rounded-lg p-4 border-e-2 border-[#9E749A] shadow-2xl">
                <div className="flex justify-start items-center pb-8">
                    <div className="flex gap-1">
                        <div className="text-primary-100 font-bold text-[10px]">privatbank</div>
                        <div className="text-primary-800 text-[10px] font-bold"> | Debit card</div>
                    </div>
                </div>
                <div className="text-primary-100 font-bold font-num text-xs">1234 5678 9012 3456</div>
                <div className="flex justify-between items-center">
                    <div className="text-primary-100 text-[11px] font-num">Ivan Petrov</div>
                    <img className="w-9 h-9" src={Master} alt="Mastercard" />
                </div>
            </div>
            {/* Місце для додавання нових карточок */}
        </div>
    </div>
    
    )
}