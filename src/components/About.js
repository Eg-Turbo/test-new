import aboutImg from "../images/about.png"
import MainBtn from "./buttons/MainButton"
function About () {
    return (
        <div className="bg-main-bg pt-60" id="about">
        <div className="container flex flex-wrap justify-center items-center md:flex-nowrap md:gap-4">
        <div className="about-image mb-12 md:w-2/5">
            <img className="" src={aboutImg}/>
        </div>
        <div className="content text-white text-center md:w-2/5">
            <p className="text-main-color text-lg font-bold">About use</p>
            <h2 className="text-4xl font-bold mb-4">We speake the good food langauge</h2>
            <p className="text-gray-300 mb-8">There are many variations of lorem ipsum available,byt the majority have sufflored atteration in form,but injected humour randomised words which don't look even slightly believable</p>
            <MainBtn title="Learn More" path="/about"/>
        </div>
        </div>
        </div>
    )
}

export default About