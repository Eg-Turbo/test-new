import serImg1 from "../images/ser1.png"
import serImg2 from "../images/ser2.png"
import serImg3 from "../images/ser3.png"
function Services () {
    return(
        <div className="services bg-main-bg py-60" id="services">
        <div className="container">
            <p className="text-main-color text-center text-lg font-bold">services</p>
            <h2 className="text-center text-white text-4xl mb-36 mt-2 ">We Provide Best Quality Food</h2>
            <div className="cards flex flex-wrap text-white justify-center items-center gap-x-4 md:gap-8">
                <SerCard img={serImg1} title="Order"/>
                <SerCard img={serImg2} title="Shopping"/>
                <SerCard img={serImg3} title="Delivered"/>
            </div>
        </div>
        </div>
    )
}
function SerCard (props){
    return (
        <>
        <div className="card text-center w-3/4 mb-8 sm:w-5/12 md:w-3/12">
            <div className="img-icon w-1/6 mx-auto">
                <img src={props.img}/>
            </div>
            <div className="content">
            <h3 className="text-main-color mt-4 mb-2">{props.title}</h3>
                <p className="text-gray-200">There are many variations of lorem ipsum available,byt the majority have sufflored atteration in form,but injected humour</p>
            </div>
        </div>
        </>
    )
}
export default Services