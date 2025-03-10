import React from "react";

import ERC20Token from '../assets/ERC.png';
import ToDodApp from '../assets/ToDO.png';
import SupplyChaindApp from '../assets/Supply.png';
import VotingdApp from '../assets/Voting.png';

const projects = [
    {
        id: 1,
        name: "ERC20Token",
        image:ERC20Token,
        github: "https://arif039.github.io/erc20_Token/"
    },

    {
        id: 2,
        name: "ToDodApp",
        image:ToDodApp,
        github: "https://arif039.github.io/todo-app/"
    },

    {
        id: 3,
        name: "SupplyChaindApp",
        image:SupplyChaindApp,
        github: "https://arif039.github.io/simple_supply_chain/"
    },

    {
        id: 4,
        name: "VotingdApp",
        image:VotingdApp,
        github: "https://arif039.github.io/Voting_dApp/"
    }
]

function Projects () {
    return (

        <div className="bg-black text-white py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project)=> (
                            <div key={project.id} className="bg-grey-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover"/>
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="blank">Github</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;