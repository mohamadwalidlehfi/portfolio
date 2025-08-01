import { useState } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake,
  FaInstagram, FaFacebook, FaGithub, FaLinkedin
} from "react-icons/fa";

export default function ProfileCard() {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-lg" />,
      label: "Email",
      value: (
        <a 
          href="mailto:mohamadwalidlehfi1@gmail.com"
          className="hover:text-teal-400 transition-colors"
        >
          mohamadwalidlehfi1@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhone className="text-lg" />,
      label: "Phone",
      value: (
        <a 
          href="tel:+905316581436"
          className="hover:text-teal-400 transition-colors"
        >
          +90 531 658 1436
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      label: "Location",
      value: "Türkiye, Istanbul",
    },
    {
      icon: <FaBirthdayCake className="text-lg" />,
      label: "BirthDate",
      value: "January 7, 2002",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="text-xl" />,
      url: "https://www.instagram.com/walid.lehfi",
      color: "hover:text-pink-600"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      url: "https://www.facebook.com/walid.lehfi",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/mohamadwalidlehfi",
      color: "hover:text-white"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/mohamad-walid-lehfi-0142ba225",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div 
    className={`w-full md:w-[350px] flex-shrink-0 bg-gray-900 text-white p-6 rounded-xl 
      shadow-lg border-4 border-teal-400 transition-all 
      duration-300 ${isHovered ? 'shadow-teal-400/20' : ''} h-fit min-h-[40vh]`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      {/* Profile Header */}
      <div className="flex flex-col items-center p-4 text-center">
        <div className="relative group">
          <img
            src="../assets/images/img.jpeg"
            alt="Mohamad Walid Lehfi"
            className="w-32 h-32 rounded-full border-4 border-teal-400 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-teal-400/50 transition-all duration-300"></div>
        </div>
        <h2 className="text-2xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
          Mohamad Walid Lehfi
        </h2>
        <p className="bg-teal-400 text-black px-6 py-2 rounded-full text-base mt-3 font-bold shadow-md">
          Full Stack Developer
        </p>
      </div>

      {/* Contact Information */}
      <div className={`flex-col gap-2 mt-2 ${showMore ? "flex" : "hidden"} md:flex`}>
        {contactInfo.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-3 rounded-lg transition-all hover:bg-gray-800/50"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full border-2 border-teal-400 text-teal-400 flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <h6 className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</h6>
              <p className="text-gray-100 text-sm mt-1">
                {item.value}
              </p>
            </div>
          </div>
        ))}

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-1 mb-2">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-teal-400 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all ${social.color}`}
              aria-label={social.icon.type.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden flex items-center justify-center w-full mt-4 bg-gray-800 hover:bg-gray-700 border border-teal-400 text-teal-400 font-medium rounded-full py-2 px-4 transition-all"
        onClick={toggleShowMore}
        aria-expanded={showMore}
      >
        {showMore ? (
          <>
            <span>Show Less</span>
          </>
        ) : (
          <>
            <span>Show More</span>
          </>
        )}
      </button>
    </div>
  );
}