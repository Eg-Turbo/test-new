import {useState} from "react"
import {Link} from "react-router-dom"
function CollapseMenu({numberOfSales,orders}) {
  let [hiddenState,setHiddenState]=useState("hidden")

  return (
    <>
    <button className="mb-8 text-center mx-auto" onClick={()=>{
      hiddenState=="hidden"?setHiddenState(""):setHiddenState("hidden")
    }}>
    <h2 >Number of sales : {numberOfSales} {hiddenState?<i className="fa-sharp fa-solid fa-angle-up"></i>:<i className="fa-sharp fa-solid fa-angle-down"></i>}</h2>
    </button>

    <div className={`${hiddenState} grid grid-cols-3 gap-4`}>
    {
      orders&& orders.map(order=> {
    
        return (
        <Link to={`/orderdetails/${order.orderid}`} className="py-4 border-2 border-transparent rounded-xl hover:border-main-color hover:border-rounded ease-in-out duration-300">
        <p>Date: {order.date}</p>
        <p>Time: {order.time}</p>
        <p>Amount: {order.amount}</p>
        </Link>)
        }
        )
    }
        </div>
    </>
  );
}

export default CollapseMenu