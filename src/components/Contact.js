import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contact () {
    return (
        <div className="contact bg-main-bg py-24">
        <div className="container px-24">
            <div className="content flex flex-wrap justify-center gap-x-16 gap-y-8 md:justify-between">
            <Form title="Menu Links">
                <ul className="text-white text-center sm:text-start">
                <li className="mb-2"><a href="/#landding"  className="text-slate-400 hover:text-white text-xl">Home</a></li>
                <li className="mb-2"><a href="/#about" className="text-slate-400 hover:text-white text-xl">About</a></li>
                <li className="mb-2"><Link to="/menu"  className="text-slate-400 hover:text-white text-xl">Menu</Link></li>
                <li className="mb-2"><Link to="/cart" className="text-slate-400 hover:text-white text-xl">Cart</Link></li>
                </ul>
            </Form>
            <Form title="Our Services">
                <ul className="text-white text-center sm:text-start">
                <li className="mb-2"><a href="/#about" className="text-slate-400 hover:text-white text-xl">About Us</a></li>
                <li className="mb-2"><a href="/#landding" className="text-slate-400 hover:text-white text-xl">Delivery Information</a></li>
                <li className="mb-2"><a href="/#landding" className="text-slate-400 hover:text-white text-xl">Privacy Policy</a></li>
                <li className="mb-2"><a href="/#landding" className="text-slate-400 hover:text-white text-xl">Terms & Conditions</a></li>
                </ul>
            </Form>
            <Form title="Contact Us">
                <div className="icons text-white">
                <i className="fa-brands fa-2xl mr-3 fa-facebook"></i>
                <i className="fa-brands fa-2xl mx-3 fa-instagram"></i>
                <i className="fa-brands fa-2xl mx-3 fa-twitter"></i>
                <i className="fa-brands fa-2xl mx-3 fa-youtube"></i>
                </div>
            </Form>
            </div>
        </div>
        </div>
    )
}
function Form (props) {

    return (
        <div className="card">
            <h4 className="relative after:content-[''] after:top-12 after:left-0 after:absolute after:w-12 after:h-1 after:bg-main-color text-white mb-12 text-3xl">{props.title}</h4>
            {
                props.children
            }
            
        </div>
    )
}
export default Contact