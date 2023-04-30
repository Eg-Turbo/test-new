import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { router } from "./react-router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
