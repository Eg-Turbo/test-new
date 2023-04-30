import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import CreativeMenu from "./CreativeMenu";
import { useEffect } from "react";
import { getMenuProd } from "../RTK/reducers/menuReducer";
function Menu() {
  const data = useSelector((state) => state.normalMenu);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuProd());
  }, [data]);

  return (
    <div className="menu bg-main-bg font-bold pt-32">
      <h1 className="text-main-color text-center text-5xl">Food Menu</h1>
      <p className="text-white text-3xl font-bold text-center mt-4 mb-16">
        Fresh taste and great price
      </p>
      <div className="container pb-24 p-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {data.map((ele) => (
            <MenuCard product={ele} key={ele.id} />
          ))}
        </div>
      </div>
      <CreativeMenu />
    </div>
  );
}
export default Menu;
