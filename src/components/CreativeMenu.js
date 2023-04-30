import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CreativeMenu() {
  const data = useSelector((state) => state.creativeMenu);
  return (
    <>
      <div className="container pb-48 p-20">
        <h1 className="text-5xl text-main-color text-center font-bold mb-4">
          Creative Menu
        </h1>
        <p className="text-3xl text-white text-center font-bold mb-16">
          Try Our Customer Creative Sandwitches
        </p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {data.map((ele) => (
            <MenuCard product={ele} key={ele.id} />
          ))}
        </div>
        <h4 className="text-5xl text-main-color lg:text-center mb-8 mt-24 ">
          You Want To Build Your Own Sandwitch?
        </h4>
        <h4 className="text-5xl text-main-color lg:text-center mb-8 ">
          Build It Now From
        </h4>
        <div className="lg:text-center">
          <Link
            to="/bulidyoursandwitch"
            className="bg-main-color inline-block mx-auto px-4 py-2 rounded-md text-xl text-white hover:text-lime-800 ease-in-out duration-300"
          >
            Here
          </Link>
        </div>
      </div>
    </>
  );
}

export default CreativeMenu;
