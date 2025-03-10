import React from "react";
import portfolio_image from '../assets/portfolio_image.jpeg'



function About() {
    return (

        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={portfolio_image} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0"/>

                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            I am a tech enthusiast. Passionate full-stack Blockchain Developer focus on     building Smart Contract | dApp | DeFi | DAO . with a strong foundation in   both frontend and backend technologies. I strive to create seamless and   efficient user experience. 
                        </p>
                    </div>

                        {/* <div className="space-y-4 w-1/2">
                            <div className="flex flex-wrap justify-end">
                                <img src= {html5_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {css_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {js_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {react_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {solidity_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {ethers_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {hardhat_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                            </div>
                        </div> */}

                    

                    
                </div>
            </div>
        </div>
    )
}

export default About;