import {ProgressBlock} from '../components/home/ProgressBlock'
import {Widgets} from '../components/home/Widgets'
import {Details} from '../components/home/Details'
import {Card} from '../components/home/Card'
export const HomePage = () => {
  return <div className=' flex flex-col '>
    <div className='p-4 pb-0'>
      <ProgressBlock />
    </div>
    <div className='p-4'>
      <Details />
    </div>
    <div className='p-2'>
      <Widgets />
    </div>
    <div className='p-4'>
      <Card />
    </div>
  </div>;
};
