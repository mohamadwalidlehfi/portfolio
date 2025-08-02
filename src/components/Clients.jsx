import React from 'react';
import pho from '../assets/images/log-2.svg';
import pho2 from '../assets/images/log.png';


const clientLogos = [
  { id: 1, src:pho, alt: 'Client 1 Logo' },
  { id: 2, src:pho2, alt: 'Client 2 Logo' },
  // يمكنك إضافة المزيد من العملاء هنا
];

const Clients = () => {
  return (
    <div className="w-full bg-gray-800 text-white shadow-lg rounded-2xl p-6 md:p-8 lg:p-10">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Valued Clients</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">We're proud to collaborate with these amazing companies</p>
      </div>
    
      {/* Clients Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-12">
        {clientLogos.map((client) => (
          <div 
            key={client.id} 
            className="group relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 p-2"
          >
            <div className="absolute inset-0 bg-teal-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img 
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
              src={client.src}
              alt={client.alt}
              loading="lazy"
            />
            <span className="sr-only">{client.alt}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-gray-300 mb-4">Want to join our client list?</p>
        <button className="px-6 py-2 bg-teal-500 text-gray-900 font-medium rounded-lg hover:bg-teal-400 transition-colors duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Clients;