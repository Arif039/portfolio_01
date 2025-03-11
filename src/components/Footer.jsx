import React from "react";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function Footer () {

    return(

        <footer className="bg-gray-900 text-white p-2 text-center">

            <div>

            <div className="md:w-1/2 mx-auto">
                <p className="text-sm">
                Blockchain technology ensures security, transparency, and decentralization.
                It is revolutionizing industries like finance, healthcare, and supply chains,
                enabling trustless transactions and reducing fraud.
                </p>
            </div>

            <div className="flex justify-center gap-3 mt-5">
                <a href="#" className="space-x-2 text-blue-600 hover:text-blue-800 text-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">< IoLogoLinkedin /></a>
                <a href="#" className="space-x-2 text-blue-600 hover:text-blue-800 text-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"><FaSquareFacebook /></a>
                <a href="#" className="space-x-2 text-blue-600 hover:text-blue-800 text-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"><FaTwitter /></a>
            </div>

            </div>
            
        </footer>
    )
}

export default Footer;