import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OrderDetails() {
  let orders = useSelector((state) => state.orders);
  let { orderid } = useParams();
  let getOrderById = (orderid) => {
    let order = orders.find((order) => {
      return order.id == orderid;
    });
    return order;
  };
  let specificOrder = getOrderById(orderid);
  return (
    <div className="bg-main-bg">
      {specificOrder.orderDetails.map((order, index) => (
        <div className="container px-12">
          <div className="bg-main-bg text-white py-12" key={index}>
            <h2 className="text-2xl">Order: {index + 1}</h2>
            <p className="text-xl ">At: {order.orderTime}</p>
            <p className="text-xl mb-4">Order Price: ${order.totalPrice}</p>
            <div className="grid grid-cols-3">
              {order.sandwitches.map((sandwitch) => (
                <div className="text-center" key={sandwitch.id}>
                  <div className="img card-img w-64 mx-auto h-72 flex justify-center items-center">
                    <img src={sandwitch.img} className="max-w-full" />
                  </div>
                  <h3 className="text-xl">
                    <span className="text-main-color"> Title: </span>{" "}
                    {sandwitch.title}
                  </h3>
                  <p>
                    <span className="text-main-color"> Amount: </span>
                    {sandwitch.amount}
                  </p>
                  <p>
                    <span className="text-main-color"> Price: </span>$
                    {sandwitch.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default OrderDetails;
