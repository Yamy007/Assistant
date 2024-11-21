import Burger from '../../assets/svg/burger.svg'
import Settings from '../../assets/svg/settings.svg'
import '../../layouts/style.scss'
export const Header = () => {
  return (
    <div className=" w-full h-fit sticky top-0   rounded-b-2xl    flex justify-start items-center  gap-2">
      <img src ={Burger} className='absolute top-5 left-4'/>
      <img src ={Settings} className='absolute top-5 right-4'/>
      <div className='pl-4'>
      <div className='pt-16 text-xs text-primary-100'>Hi, Yaroslav</div>
      <div className='text-sm text-primary-100 font-bold'>Be productive today !</div>
      </div>
        
    </div>
  )
}