export default function Navbar({ setActiveSection, activeSection }) {
  const sections = [
    
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Projects" },
    { id: "clients", label: "Clients" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About" },

  ];

  return (
    <nav className="navbar mb-6 text-white overflow-x-auto py-2">
      <div className="flex space-x-2 md:space-x-3 px-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
              ${
                activeSection === section.id
                  ? "bg-teal-400 text-black font-semibold shadow-lg"
                  : "bg-gray-700 hover:bg-teal-400 hover:text-black"
              }
              focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}