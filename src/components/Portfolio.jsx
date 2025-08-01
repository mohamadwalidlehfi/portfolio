import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import photo1 from '../assets/images/photo-1.png';
import pro1 from '../assets/images/PRO1.png';


const projects = [
  {
    id: 1,
    title: "E-Market",
    description: "A responsive and full-featured online store using React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    image: photo1
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio built with React.js and styled using Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://www.soonersland.com/",
    image:pro1
  },
];

export default function Portfolio() {
  return (
    <div className="w-full bg-gray-800 text-white shadow-lg rounded-2xl p-6 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold pb-3 border-b border-gray-700">
          My <span className="text-teal-400">Projects</span>
        </h1>
        <p className="text-gray-400 mt-4 leading-relaxed max-w-3xl">
          Here’s a selection of some of my recent work. Each project showcases the technologies I've used and problems I’ve solved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-600 hover:border-teal-400 transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-800 text-teal-400 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-start items-center pt-3 border-t border-gray-600">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white hover:text-teal-400 transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}