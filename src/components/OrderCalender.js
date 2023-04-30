import { useState } from "react"
import Calender from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
function OrderCalender () {
    let [value,setvalue] = useState("")
    let data = useSelector((state) => state.orders);
    let date = value?`${value.getFullYear()}-${value.getMonth()+1<10?`0${value.getMonth()+1}`:value.getMonth()+1}-${value.getDate()<10?`0${value.getDate()}`:value.getDate()}`:""
    console.log(data);
    return (
        <>
        <div className="bg-main-bg flex justify-center items-center text-main-color pb-24">
    <Calender onChange={setvalue} value={new Date()} />
        </div>
        <div className="orders bg-main-bg text-main-color">
        <div className="container px-8">
            <h1 className="text-xl pb-8">{value?``:"All Orders :"  }</h1>
        <div className="grid grid-cols-3 gap-12">
          {data.map((order) => {
              if (date){
                  if(order.date == date){
                    return (
                        <Link to={`/orderdetails/${order.id}`} key={order.id}>
                          <div
                            className="text-center pt-4 pb-8 border-2 border-transparent rounded-xl hover:border-main-color hover:border-rounded ease-in-out duration-300"
                          >
                            <h2 className="text-xl text-main-color font-bold mb-4 mt-2">
                              Day: {order.date}
                            </h2>
                            <p>
                              {" "}
                              <span className="text-main-color">
                                {" "}
                                Number of orders:
                              </span>{" "}
                              {order.orderDetails.length}
                            </p>
                          </div>
                        </Link>
                      );
                    }
                }else {
                  return (
                      <Link to={`/orderdetails/${order.id}`} key={order.id}>
                        <div
                          key={order.id}
                          className="text-center pt-4 pb-8 border-2 border-transparent rounded-xl hover:border-main-color hover:border-rounded ease-in-out duration-300"
                        >
                          <h2 className="text-xl text-main-color font-bold mb-4 mt-2">
                              Day: {order.date}
                            </h2>
                          <p>
                            {" "}
                            <span className="text-main-color">
                              {" "}
                              Number of orders:
                            </span>{" "}
                            {order.orderDetails.length}
                          </p>
                        </div>
                      </Link>
                    );

              }
            
          })}
        </div>
        </div>
        </div>
        </>
    )
}
export default OrderCalender