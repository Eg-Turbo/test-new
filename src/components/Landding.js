import landImage from "../images/landding.png"
import MainBtn from "./buttons/MainButton"
function Landding () {
    return(
        <div className="landing bg-main-bg" id="landding">
        <div className="container p-24 flex flex-wrap md:flex-nowrap justify-center items-center md:p-4 ">
            <div className="content text-white text-center w-full mb-12 md:text-start md:w-2/5 md:mb-0">
                <h1 className="text-5xl text-main-color mb-4 font-bold sm:text-7xl">Full Website</h1>
                <p className="text-2xl font-bold mb-8">Foods the most precious things</p>
                <MainBtn title="Order Now" path="/cart"/>
            </div>
            <div className="landing-image w-full md:w-2/5">
                <img src={landImage} />
            </div>
        </div>
        </div>
    )
}

export default Landding