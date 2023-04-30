import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  cleareCart,
  deletefromCart,
} from "../RTK/reducers/cartReducer";
import { addOrder } from "../RTK/reducers/orderReducer";
function Cart() {
  let data = useSelector((state) => state.cart);
  let orders = useSelector((state) => state.orders);
  let [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const dispatch = useDispatch();
  let totalPrice = 0;
  let orderpattern = {
    id: 0,
    date: "",
    orderDetails: [
      {
        orderTime: "",
        sandwitches: [],
        totalPrice: 0,
      },
    ],
  };

  data.forEach((element) => {
    totalPrice += element.price * element.amount;
  });

  function pushOrder() {
    orderpattern.id = orders.length;
    orderpattern.date = date;
    orderpattern.orderDetails = [
      {
        orderTime: `${
          new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()
        }:${new Date().getMinutes()} ${
          new Date().getHours() > 12 ? "pm" : "am"
        }`,
        sandwitches: data,
        totalPrice: totalPrice,
      },
    ];
    dispatch(addOrder(orderpattern));
    dispatch(cleareCart());
  }
  return (
    <div className="cart bg-main-bg h-screen">
      <div className="container md:px-28">
        <div className="p-8 border-2 border-main-color">
          <table className="table-auto text-white rounded-lg w-full">
            <thead>
              <tr>
                <th>product</th>
                <th>Name</th>
                <th>price</th>
                <th>amount</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td className="w-16">
                      <img src={ele.img} />
                    </td>
                    <td className="">{ele.title}</td>
                    <td className="">${ele.price}</td>
                    <td className="text-lg">
                      <button
                        className="mr-4 text-3xl text-main-color"
                        onClick={() => {
                          dispatch(decreaseAmount(ele));
                        }}
                      >
                        -
                      </button>
                      {ele.amount}
                      <button
                        className="ml-4 text-2xl text-main-color"
                        onClick={() => {
                          dispatch(increaseAmount(ele));
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td className="">
                      <button
                        onClick={() => {
                          dispatch(deletefromCart(ele));
                        }}
                      >
                        <i className="fa-solid fa-trash text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 className="text-xl text-white my-16">
            The Total Price is
            <span className="text-main-color"> ${totalPrice}</span>
          </h2>
          <input className="block mb-8 px-2 rounded"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button
            className="bg-main-color inline-block mx-auto px-4 py-2 rounded-md text-xl mr-8 text-white "
            onClick={() => {
              pushOrder();
            }}
          >
            Pay Now
          </button>
          <button
            className="bg-red-700 inline-block mx-auto px-4 py-2 rounded-md text-xl text-white "
            onClick={() => {
              dispatch(cleareCart());
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
