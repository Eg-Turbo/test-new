import { useDispatch } from "react-redux"
import { addToCart } from "../RTK/reducers/cartReducer"

function MenuCard ({product}) {
    let dispatch = useDispatch()
    return (
    <>
    <div className="card px-4 pb-8 border-2 flex flex-col justify-between  border-transparent rounded-xl hover:border-main-color hover:border-rounded ease-in-out duration-300 lg:px-8 lg:pb-8">
    
        <div className="card-img w-64 mx-auto h-72 flex justify-center items-center">
            <img src={product.img} />
        </div>
            <h2 className="text-3xl text-main-color font-bold mb-4 text-center">{product.title}</h2>
        <div className="content text-white w-full text-start px-4">
            <p className="text-xl font-b old mb-8 text-start"> <span className="text-main-color">ingredients:</span>{product.ingredients&&`${product.ingredients.map(ele=>` ${ele}`)}`}</p>
            <p className="text-xl font-bold mb-12"><span className="text-main-color">Price:</span> ${product.price} </p>
        </div>
            <button className="bg-main-color block mx-auto px-4 py-2 rounded-md text-xl text-white hover:text-lime-800 ease-in-out duration-300" onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</button>
        
    </div>
    
    </>
    )
}
export default MenuCard