import Menu from "../components/Menu";
import Layout from "../components/Layout";
import Cart from "../components/Cart";
import Custom from "../components/Custom";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import OrderCalender from "../components/OrderCalender";
import DashBoard from "../components/dashboard/Dashboard";
import OrderDetails from "../components/OrderDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/menu",
    element: (
      <Layout>
        <Menu />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/bulidyoursandwitch",
    element: (
      <Layout>
        <Custom />
      </Layout>
    ),
  },
  {
    path: "/calendar",
    element: (
      <Layout>
        <OrderCalender />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <DashBoard />
      </Layout>
    ),
  },
  {
    path: "/orderdetaiLs/:orderid",
    element: (
      <Layout>
        <OrderDetails />
      </Layout>
    ),
  },
]);
