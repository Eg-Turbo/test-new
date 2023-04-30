import MainBtn from "./buttons/MainButton"

function Adver () {
    return (
        <div className="adver bg-main-bg">
        <div className="container p-24 pt-0 text-center">
            <div className="content bg-special-color p-24 rounded-xl flex justify-center items-center flex-col">
            <p className="text-3xl font-bold mb-12">We Make Quality Food Everyday</p>
            <MainBtn title="Order Now" path="/menu" />
            </div>
        </div>
        </div>
    )
}
export default Adver