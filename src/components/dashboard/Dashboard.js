import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useEffect,useState} from "react"
import {mainMenuSands} from "../../RTK/reducers/databaseSlice"
import CollapseMenu from "../CollapseMenu";

function DashBoard() {
  let sandwitches = useSelector(state=>state.database)
  let orders = useSelector(state=>state.orders)
  let [orderdata,setorderdata] = useState([])
  let dispatch = useDispatch()
  
  function sandwitchFilter () {
    let data = []
    if(sandwitches.length){
      sandwitches.forEach(sandwitch => {
        let sand = {...sandwitch,selamount:0,orders:[]}
        orders.forEach(dayorder=>{
          dayorder.orderDetails.forEach(order=>{
            order.sandwitches.forEach((ordersandwitch)=>{
              if(sandwitch.id===ordersandwitch.id){
                  sand.selamount+=ordersandwitch.amount
                  sand.orders.push({date:dayorder.date,orderid:dayorder.id,time:order.orderTime,amount:ordersandwitch.amount})
              }
              
            })

          })
          
        })
        data.push(sand)
      });
    setorderdata(data)
    }
  }

  useEffect(() => {
    if(!sandwitches.length){
    dispatch(mainMenuSands())
    }
    sandwitchFilter()
  }, [sandwitches])
  console.log(orderdata);
      return ( <div className="bg-main-bg">
  <div className="container bg-main-bg text-white px-8">
      <div className="grid grid-cols-1 gap-12">
        {
          orderdata.map(sandwitch=>{ 
            return <div className="text-center">
            <h2 className="text-center text-2xl mb-2"> <span className="font-bold text-main-color"> Title: </span>{sandwitch.title}</h2>
            <CollapseMenu numberOfSales={sandwitch.selamount} orders={sandwitch.orders} />
            </div>
          })
        }
      </div>
    </div>
        </div>
  );
}

export default DashBoard;
