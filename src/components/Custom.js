import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../RTK/reducers/cartReducer";
import { addCreativeProduct } from "../RTK/reducers/creativeMenuReducer";
import image1 from "../images/sand1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Custom() {
  const dispatch = useDispatch();
  const creativeProducts = useSelector((state) => state.creativeMenu);
  const navigate = useNavigate();
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    let newProduct = {
      id: creativeProducts.length + 11,
      img: image1,
      title: "",
      ingredients: [],
      price: 4,
    };
    const form = e.target;
    for (let x = 0; x < form.length; x++) {
      if (form[x].type == "text") {
        newProduct.title = form[x].value;
      }
      if (
        form[x].type === "select-one" ||
        (form[x].type === "checkbox" && form[x].checked === true)
      ) {
        newProduct.ingredients.push(form[x].value);
      }
    }
    dispatch(addToCart(newProduct));
    dispatch(addCreativeProduct(newProduct));
    axios.post("http://localhost:9000/mainmenu",newProduct).then(res=>console.log("done")).catch(err=>console.log(err))
    navigate("/menu");
  }
  return (
    <div className="bg-main-bg">
      <h1 className="text-main-color text-3xl text-center mb-24">
        Build Your Custom Sandwitch
      </h1>
      <div className="container text-white px-8 sm:px-24 pt-12 pb-24">
        <form onSubmit={handleSubmit} className="mx-auto text-center">
          <label className="text-main-color text-lg mr-4">
            Sandwitch name :
            <input
              name="title"
              defaultValue="customer"
              className="ml-4 bg-main-bg mb-4 text-sm px-4 w-40 text-main-color border-2 rounded-lg border-main-color focus:outline-none"
            />
          </label>

          <br />

          <p className="text-main-color text-lg mb-4 mr-4">
            Bun :
            <select className="ml-4 bg-main-bg text-sm px-4 w-40 text-main-color border-2 rounded-lg border-main-color focus:outline-none">
              <option value="Bun">Normal Bun</option>
              <option value="Bun with sesame">Bun with sesame</option>
            </select>{" "}
          </p>

          <p className="text-main-color mb-4 text-lg mr-4">
            protein :
            <select className="ml-4 bg-main-bg text-sm px-4 w-40 text-main-color border-2 rounded-lg border-main-color focus:outline-none">
              <option value="Beef patty">Beef patty</option>
              <option value="Checkin patty">Checkin patty</option>
              <option value="Fish patty">Fish patty</option>
            </select>{" "}
          </p>
          <p className="text-main-color mb-4 text-lg mr-4">Topics :</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-y-12 mb-8">
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Beef Baccon"
                className="mr-4"
              />
              Beef Baccon
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Lettuce"
                className="mr-4"
              />
              Lettuce
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="onion"
                className="mr-4"
              />
              onion
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Tomato"
                className="mr-4"
              />
              Tomato
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="caramelized onion"
                className="mr-4"
              />
              caramelized onion
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Paprika"
                className="mr-4"
              />
              Paprika
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Cheese"
                className="mr-4"
              />
              Cheese
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Smoked turkey"
                className="mr-4"
              />
              Smoked turkey
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Cheddar Cheese"
                className="mr-4"
              />
              Cheddar Cheese
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Freid Egg"
                className="mr-4"
              />
              Freid Egg
            </label>
          </div>

          <p className="text-main-color mb-4 text-lg mr-4">Sauces :</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-y-12">
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Barbecue Sauce"
                className="mr-4"
              />
              Barbecue Sauce
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Ketshup Sauce"
                className="mr-4"
              />
              Ketshup Sauce
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Mayo Sauce"
                className="mr-4"
              />
              Mayo Sauce
            </label>
            <label className="text-main-color">
              <input
                type="checkbox"
                name="myCheckbox"
                value="Mustard Sauce"
                className="mr-4"
              />
              Mustard Sauce
            </label>
          </div>

          <button
            className="bg-main-color mt-24 inline-block mx-auto mt-24 px-4 py-2 rounded-md text-xl text-white hover:text-lime-800 ease-in-out duration-300"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            Add To Cart
          </button>
        </form>
      </div>
    </div>
  );
}
export default Custom;
