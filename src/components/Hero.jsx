import React from "react";
import portfolio_image from '../assets/portfolio_image.jpeg'

function Hero () {
    return (
        <div className="bg-black text-white text-center py-16">
            <img src= {portfolio_image} alt="" className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>

            <h1 className="text-4xl font-bold">
                Hi I'm {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Arif</span>,
                Full-Stack Blockchain Developer
            </h1>

            <p className="mt-4 text-lg text-gray-300">
                I am specialize in building | Smart Contract | dApp | DAO | DeFi
            </p>

            <div className="mt-8 space-x-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">Contact With Me</button>
                <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">Resume</button>
            </div>
        </div>
    )
}

export default Hero;