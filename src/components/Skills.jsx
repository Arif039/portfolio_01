import React from "react";

import html5_image from '../assets/html5.png'
import css_image from '../assets/css.png'
import js_image from '../assets/js.png'
import react_image from '../assets/react.png'
import solidity_image from '../assets/solidity.png'
import ethers_image from '../assets/ethers.png'
import hardhat_image from '../assets/hardhat.png'

function Skills () {
    return (
        <div className="bg-black text-white py-20 flex justify-center" id="skills">
            <div>
                <h2 className="flex justify-center mb-10 text-4xl font-bold">I am Proficient With</h2>
                <div>
                <div className="space-y-4 ">
                            <div className="flex flex-wrap justify-center">
                                <img src= {html5_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {css_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {js_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {react_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {solidity_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {ethers_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                                <img src= {hardhat_image} alt="" srcset="" className="mb-8 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"/>
                            </div>
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills;