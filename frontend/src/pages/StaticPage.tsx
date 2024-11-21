import {Spend} from "../components/static/Spend"
import {SpendTwo} from "../components/static/SpendTwo"
import {Categories} from "../components/static/Categories"
export const  StaticPage = ()=> {
  return (
<div >
    <div className="p-4">
        <Spend />
    </div>
    <div className="p-4">
        <SpendTwo />
    </div>
    <div className="p-4">
        <Categories />
    </div>
</div>
  )
}
